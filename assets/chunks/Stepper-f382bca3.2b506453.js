import{e as r,h as p,f as o,p as u,m,q as n,j as c}from"../app.0f50ae6d.js";const V={modelValue:n(0),addon:{type:Object,default:()=>({})}},[s]=c("widget-stepper");var f=r({name:s,props:V,emits:["update:modelValue"],setup:(a,{emit:l})=>{const t=p({get:()=>a.modelValue,set:e=>{l("update:modelValue",e)}}),d=p(()=>({...a.addon.props}));return()=>o("div",{class:s},[o(u,m({modelValue:t.value,"onUpdate:modelValue":e=>t.value=e},d.value),null)])}});export{f as default};
