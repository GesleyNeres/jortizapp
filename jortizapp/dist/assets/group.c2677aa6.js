import{x as I,W as v,ab as V,a5 as w,a7 as B,l as y,z as g,N as C,O as P,r as k,R as E,af as M,ao as U,ae as W,ap as $,a6 as q}from"./index.fb0eb9d8.js";const z=I({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),A=I({value:null,disabled:Boolean,selectedClass:String},"group-item");function F(t,o){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const e=v("useGroupItem");if(!e)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const n=V();w(Symbol.for(`${o.description}:id`),n);const u=B(o,null);if(!u){if(!d)return u;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${o.description}`)}const h=y(t,"value"),p=g(()=>u.disabled.value||t.disabled);u.register({id:n,value:h,disabled:p},e),C(()=>{u.unregister(n)});const f=g(()=>u.isSelected(n)),b=g(()=>f.value&&[u.selectedClass.value,t.selectedClass]);return P(f,m=>{e.emit("group:selected",{value:m})}),{id:n,isSelected:f,toggle:()=>u.select(n,!f.value),select:m=>u.select(n,m),selectedClass:b,value:h,disabled:p,group:u}}function T(t,o){let d=!1;const e=k([]),n=E(t,"modelValue",[],s=>s==null?[]:S(e,W(s)),s=>{const i=O(e,s);return t.multiple?i:i[0]}),u=v("useGroup");function h(s,i){const r=s,l=Symbol.for(`${o.description}:id`),c=$(l,u==null?void 0:u.vnode).indexOf(i);c>-1?e.splice(c,0,r):e.push(r)}function p(s){if(d)return;f();const i=e.findIndex(r=>r.id===s);e.splice(i,1)}function f(){const s=e.find(i=>!i.disabled);s&&t.mandatory==="force"&&!n.value.length&&(n.value=[s.id])}M(()=>{f()}),C(()=>{d=!0});function b(s,i){const r=e.find(l=>l.id===s);if(!(i&&r!=null&&r.disabled))if(t.multiple){const l=n.value.slice(),a=l.findIndex(G=>G===s),c=~a;if(i=i!=null?i:!c,c&&t.mandatory&&l.length<=1||!c&&t.max!=null&&l.length+1>t.max)return;a<0&&i?l.push(s):a>=0&&!i&&l.splice(a,1),n.value=l}else{const l=n.value.includes(s);if(t.mandatory&&l)return;n.value=(i!=null?i:!l)?[s]:[]}}function m(s){if(t.multiple&&q('This method is not supported when using "multiple" prop'),n.value.length){const i=n.value[0],r=e.findIndex(c=>c.id===i);let l=(r+s)%e.length,a=e[l];for(;a.disabled&&l!==r;)l=(l+s)%e.length,a=e[l];if(a.disabled)return;n.value=[e[l].id]}else{const i=e.find(r=>!r.disabled);i&&(n.value=[i.id])}}const x={register:h,unregister:p,selected:n,select:b,disabled:y(t,"disabled"),prev:()=>m(e.length-1),next:()=>m(1),isSelected:s=>n.value.includes(s),selectedClass:g(()=>t.selectedClass),items:g(()=>e),getItemIndex:s=>N(e,s)};return w(o,x),x}function N(t,o){const d=S(t,[o]);return d.length?t.findIndex(e=>e.id===d[0]):-1}function S(t,o){const d=[];for(let e=0;e<t.length;e++){const n=t[e];n.value!=null?o.find(u=>U(u,n.value))!=null&&d.push(n.id):o.includes(e)&&d.push(n.id)}return d}function O(t,o){const d=[];for(let e=0;e<t.length;e++){const n=t[e];o.includes(n.id)&&d.push(n.value!=null?n.value:e)}return d}export{A as a,F as b,z as m,T as u};
