import{f as v,s as f,g as r,d as s,F as g,P as k,u as P,m as V,i as b}from"../app.10acef41.js";import{g as h}from"./widget-8eb6b43c.b301beeb.js";const y={modelValue:[Number,String],addon:{type:Object,default:()=>({})}},[d]=b("widget-picker");var x=v({name:d,props:y,emits:["update:modelValue"],setup:(t,{emit:i})=>{const l=f(!1),u=r({get:()=>t.modelValue,set:a=>{i("update:modelValue",a)}}),n=r(()=>{var e;var a;return h(t.addon.schema,(e=(a=t.addon.props)==null?void 0:a.options)!=null?e:[]).map(({label:p,value:c,props:m})=>({text:p,value:c,...m}))}),o=r(()=>({...t.addon.props}));return()=>{var a;return s("div",{class:d},[s(g,{border:!1,modelValue:(a=n.value.find(({value:e})=>e===u.value))==null?void 0:a.text,"is-link":!o.value.readonly&&!o.value.disabled,center:!0,readonly:!0,inputAlign:"right",onClick:()=>{o.value.readonly||o.value.disabled||(l.value=!0)}},null),s(k,{show:l.value,"onUpdate:show":e=>l.value=e,position:"bottom"},{default:()=>[s(P,V({columns:n.value,onCancel:()=>{l.value=!1},onConfirm:({value:e})=>{u.value=e,l.value=!1}},o.value),null)]})])}}});export{x as default};