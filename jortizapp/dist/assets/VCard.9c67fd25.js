import{i as _,E as H,K as C,a as n,C as K,I as m,j as N,m as O,k as G,z as A,a2 as J,a3 as M}from"./index.fb0eb9d8.js";import{r as I,p as P,w as y,x as S,R as Q,m as U,a as W,b as X,l as Y,c as Z,d as ee,e as ae,y as te,s as ne,u as le,t as se,q as ie,f as de,g as ce,n as oe,h as ue,i as re,j as ve,z as me,V as fe,L as ge,v as ke}from"./VAvatar.54e91e63.js";const be=_({name:"VCardActions",setup(e,s){let{slots:t}=s;return H({VBtn:{variant:"text"}}),C(()=>{var a;return n("div",{class:"v-card-actions"},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ye=I("v-card-subtitle"),Ce=I("v-card-title"),Ie=K({name:"VCardItem",props:{appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:String,title:String,...P()},setup(e,s){let{slots:t}=s;return C(()=>{var a,d,c,o,u;const f=!!(e.prependAvatar||e.prependIcon||t.prepend),g=!!(e.appendAvatar||e.appendIcon||t.append),k=!!(e.title||t.title),b=!!(e.subtitle||t.subtitle);return n("div",{class:"v-card-item"},[f&&n(y,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__prepend"},[(l=(a=t.prepend)==null?void 0:a.call(t))!=null?l:n(S,null,null)])]}}),n("div",{class:"v-card-item__content"},[k&&n(Ce,{key:"title"},{default:()=>{var l;return[(l=(d=t.title)==null?void 0:d.call(t))!=null?l:e.title]}}),b&&n(ye,{key:"subtitle"},{default:()=>{var l;return[(l=(c=t.subtitle)==null?void 0:c.call(t))!=null?l:e.subtitle]}}),(o=t.default)==null?void 0:o.call(t)]),g&&n(y,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>{var l;return[n("div",{class:"v-card-item__append"},[(l=(u=t.append)==null?void 0:u.call(t))!=null?l:n(S,null,null)])]}})])}),{}}}),Ve=I("v-card-text"),Ae=_({name:"VCard",directives:{Ripple:Q},props:{appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:Boolean,subtitle:String,text:String,title:String,...N(),...U(),...P(),...W(),...X(),...Y(),...Z(),...ee(),...ae(),...te(),...O(),...ne({variant:"elevated"})},setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:d}=G(e),{borderClasses:c}=le(e),{colorClasses:o,colorStyles:u,variantClasses:f}=se(e),{densityClasses:g}=ie(e),{dimensionStyles:k}=de(e),{elevationClasses:b}=ce(e),{loaderClasses:l}=oe(e),{locationStyles:x}=ue(e),{positionClasses:$}=re(e),{roundedClasses:L}=ve(e),r=me(e,t),T=A(()=>e.link!==!1&&r.isLink.value),v=A(()=>!e.disabled&&e.link!==!1&&(e.link||r.isClickable.value));return C(()=>{var V,p,h;const B=T.value?"a":e.tag,D=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=D||R,j=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),z=!!(a.image||e.image),q=E||w||j,F=!!(a.text||e.text);return J(n(B,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},d.value,c.value,o.value,g.value,b.value,l.value,$.value,L.value,f.value],style:[u.value,k.value,x.value],href:r.href.value,onClick:v.value&&r.navigate},{default:()=>[z&&n(y,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var i;return[n("div",{class:"v-card__image"},[(i=(V=a.image)==null?void 0:V.call(a))!=null?i:n(fe,null,null)])]}}),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ie,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),F&&n(Ve,{key:"text"},{default:()=>{var i;return[(i=(p=a.text)==null?void 0:p.call(a))!=null?i:e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(be,null,{default:a.actions}),ke(v.value,"v-card")]}),[[M("ripple"),v.value]])}),{}}});export{Ae as V,Ce as a,be as b,Ve as c,Ie as d};
