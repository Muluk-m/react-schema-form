import{e as c,h as d,f as s,B as m,m as f,l as y,j as g}from"../app.0f50ae6d.js";import{g as B}from"./widget-8eb6b43c.b301beeb.js";function V(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!y(e)}const v={modelValue:{type:[String,Number],default:""},addon:{type:Object,default:()=>({})}},[u]=g("widget-radioButton");var O=c({name:u,props:v,emits:["update:modelValue"],setup:(e,{emit:r})=>{const n=t=>{r("update:modelValue",t)},i=d({get:()=>e.modelValue,set:n}),a=d(()=>({...e.addon.props})),l=d(()=>{var o;var t;return B(e.addon.schema,(o=(t=e.addon.props)==null?void 0:t.options)!=null?o:[])});return()=>s("div",{class:u},[l.value.map(({label:t,value:o,props:p})=>s(m,f({key:o,size:"small",disabled:a.value.disabled,type:o===i.value?"primary":"default",onClick:()=>{!a.value.readonly&&!a.value.disabled&&n(o)}},p),V(t)?t:{default:()=>[t]}))])}});export{O as default};
