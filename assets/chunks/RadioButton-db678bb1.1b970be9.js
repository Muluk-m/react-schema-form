import{f as m,u as f,g as d,d as n,B as v,m as g,k as y,i as B}from"../app.028d6331.js";import{g as V}from"./widget-8eb6b43c.b301beeb.js";function b(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!y(o)}const N={modelValue:{type:[String,Number],default:""}},[r]=B("widget-radioButton");var j=m({name:r,props:N,emits:["update:modelValue"],setup:(o,{emit:i})=>{const a=f(),u=e=>{i("update:modelValue",e)},p=d({get:()=>o.modelValue,set:u}),s=d(()=>({...a.value.props})),l=d(()=>{var t;var e;return V(a.value.schema,(t=(e=a.value.props)==null?void 0:e.options)!=null?t:[])});return()=>n("div",{class:r},[l.value.map(({label:e,value:t,props:c})=>n(v,g({key:t,size:"small",disabled:s.value.disabled,type:t===p.value?"primary":"default",onClick:()=>{!s.value.readonly&&!s.value.disabled&&u(t)}},c),b(e)?e:{default:()=>[e]}))])}});export{j as default};
