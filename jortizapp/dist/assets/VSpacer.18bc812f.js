import{aa as x,R as y,M as S,Y as h,O as f,K as E,a as m,a0 as p,Z as P}from"./index.fb0eb9d8.js";import{b as w,c as D,u as O,d as R,e as A}from"./VCol.7fa3660d.js";import{o as B}from"./VTextField.a268fa98.js";import{w as F,r as I}from"./VAvatar.54e91e63.js";const N=x()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...w({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,g){let{slots:i}=g;const n=y(r,"modelValue"),{scopeId:V}=O(),a=S();function c(t){var e,o;const s=t.relatedTarget,l=t.target;if(s!==l&&(e=a.value)!=null&&e.contentEl&&(o=a.value)!=null&&o.globalTop&&![document,a.value.contentEl].includes(l)&&!a.value.contentEl.contains(l)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],b=u[u.length-1];s===d?b.focus():d.focus()}}return h&&f(()=>n.value&&r.retainFocus,t=>{t?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),f(n,async t=>{if(await P(),t){var e;(e=a.value.contentEl)==null||e.focus({preventScroll:!0})}else{var o;(o=a.value.activatorEl)==null||o.focus({preventScroll:!0})}}),E(()=>{const[t]=R(r);return m(A,p({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},t,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:p({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps)},V),{activator:i.activator,default:function(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return m(F,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),B({},a)}}),q=I("flex-grow-1","div","VSpacer");export{q as V,N as a};
