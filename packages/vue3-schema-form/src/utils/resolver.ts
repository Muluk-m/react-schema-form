import { FormData, Deps, Schema } from '../types';
import { isJsonSchema, isSegment, isObject } from './validate';

export const ExpRE = /^\s*{{([\s\S]*)}}\s*$/;

/* eslint-disable no-new-func */
export const safeEval = (code: string) => {
  return Function(`"use strict"; ${code}`)();
};

/**
 * 解析表达式计算结果
 */
export const evaluateSegment = (
  segment: string,
  selfValue: unknown,
  formData: FormData,
  deps: Deps
) => {
  try {
    return safeEval(`
      const $selfValue =${JSON.stringify(selfValue)};
      const $values = ${JSON.stringify(formData)};
      const $deps = ${JSON.stringify(deps)};
      return (${segment})
    `);
  } catch (error) {
    console.error(error, 'expression:', segment, 'formData:', formData);
    return null;
  }
};

export const resolvePropertiesSegment = (
  properties: Record<string, any>,
  formData: FormData,
  deps: Deps
) => {
  const resolvedProperties: Schema = {};

  Object.keys(properties).forEach((key) => {
    const val = properties[key];
    if (Array.isArray(val)) {
      resolvedProperties[key] = val;
    } else if (isObject(val)) {
      resolvedProperties[key] = resolvePropertiesSegment(val, formData, deps);
    } else if (isSegment(val)) {
      const matched = val.match(ExpRE)!;
      resolvedProperties[key] = evaluateSegment(matched[1], formData[key], formData, deps);
    } else {
      resolvedProperties[key] = val;
    }
  });

  return resolvedProperties;
};

export const resolveSchemaWithSegments = (
  schema: Schema,
  formData: FormData,
  deps: Deps
): Schema => {
  if (!isJsonSchema(schema)) {
    return schema;
  }

  const { properties = {}, ...rest } = schema;

  const resolvedProperties = Object.fromEntries(
    Object.entries(properties).map(([field, property]) => [
      field,
      resolvePropertiesSegment(property, formData, deps),
    ])
  );

  return {
    ...rest,
    properties: resolvedProperties,
  };
};
