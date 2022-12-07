import{r as A,p as D,a as L,b as R,c as j,d as w,e as z,s as E,t as F,q as O,f as q,g as M,h as N,i as p,j as G,v as H,w as u,k as J}from"./VAvatar.54e91e63.js";import{i as K,I as Q,m as U,j as W,R as X,z as o,k as Y,l as Z,a8 as ee,a}from"./index.fb0eb9d8.js";import{b as te}from"./color.df92452d.js";import{V as ae}from"./VBtn.77c39c0c.js";const le=A("v-alert-title"),se=["success","info","warning","error"],ce=K({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Q,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>se.includes(e)},...D(),...L(),...R(),...j(),...w(),...z(),...U(),...W(),...E({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=X(e,"modelValue"),s=o(()=>{var l;if(e.icon!==!1)return e.type?(l=e.icon)!=null?l:`$${e.type}`:e.icon}),v=o(()=>{var l;return{color:(l=e.color)!=null?l:e.type,variant:e.variant}}),{themeClasses:m}=Y(e),{colorClasses:f,colorStyles:y,variantClasses:b}=F(v),{densityClasses:V}=O(e),{dimensionStyles:k}=q(e),{elevationClasses:C}=M(e),{locationStyles:P}=N(e),{positionClasses:x}=p(e),{roundedClasses:g}=G(e),{textColorClasses:S,textColorStyles:_}=te(Z(e,"borderColor")),{t:h}=ee(),r=o(()=>({"aria-label":h(e.closeLabel),onClick(l){n.value=!1}}));return()=>{var l,i;const T=!!(t.prepend||s.value),$=!!(t.title||e.title),B=!!(e.text||t.text),I=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,f.value,V.value,C.value,x.value,g.value,b.value],style:[y.value,k.value,P.value],role:"alert"},{default:()=>[H(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",S.value],style:_.value},null),T&&a(u,{key:"prepend",defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},{default:()=>[a("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():s.value&&a(J,null,null)])]}),a("div",{class:"v-alert__content"},[$&&a(le,{key:"title"},{default:()=>[t.title?t.title():e.title]}),B&&(t.text?t.text():e.text),(l=t.default)==null?void 0:l.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),I&&a(u,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[a("div",{class:"v-alert__close"},[(c=(i=t.close)==null?void 0:i.call(t,{props:r.value}))!=null?c:a(ae,r.value,null)])]}})]})}}});export{ce as V};
