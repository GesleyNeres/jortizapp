import{s as n,af as h,o as a,ar as o,B as d,a as r,w as s,f as u,c as p,F as f,e as c,b as t,aA as m,t as l}from"./index.90cc7b58.js";import{V as _}from"./VAlert.5923209d.js";import{V as x,a as V}from"./VCard.ccd30377.js";import{V as C}from"./VToolbar.1c8767cd.js";import{V as g}from"./VTable.ef262335.js";import"./VAvatar.f9750998.js";import"./color.3ddd8e79.js";import"./VBtn.aeddbde0.js";import"./group.b2b5eca7.js";import"./index.6208fdbb.js";const k={key:0},y=t("strong",null,"clientes",-1),N=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Nome"),t("th",{class:"text-left"},"Telefone"),t("th",{class:"text-left"},"Email"),t("th",{class:"text-left"},"Endere\xE7o"),t("th",{class:"text-left"},"Cidade"),t("th",{class:"text-left"},"Estado"),t("th",{class:"text-left"},"Total Revenue"),t("th",{class:"text-left"},"Detalhes"),t("th",{class:"text-left"},"Custo")])],-1),R={__name:"ClientList",setup(T){const i=n.clientStore();return h(()=>{i.loadClients().catch()}),(b,B)=>(a(),o(f,null,[d(n).clientStore().countClients?u("",!0):(a(),o("div",k,[r(_,{variant:"outlined",type:"warning",prominent:"",border:"top"},{default:s(()=>[c(" Ops. N\xE3o existem dados de "),y,c(" a serem listados. ")]),_:1})])),d(n).clientStore().countClients?(a(),p(x,{key:1,class:"mx-auto"},{default:s(()=>[r(C,{color:"",cards:"",dark:"",flat:""},{default:s(()=>[r(V,{class:"text-h6 font-weight-regular"},{default:s(()=>[c(" Lista de Clientes ")]),_:1})]),_:1}),r(g,{"fixed-header":"",height:"700px"},{default:s(()=>[N,t("tbody",null,[(a(!0),o(f,null,m(d(i).clients,e=>(a(),o("tr",{key:e.name},[t("td",null,l(e.name),1),t("td",null,l(e.phone),1),t("td",null,l(e.email),1),t("td",null,l(e.address),1),t("td",null,l(e.city),1),t("td",null,l(e.state),1),t("td",null,l(e.total_revenue),1),t("td",null,l(e.details),1),t("td",null,l(e.cost),1)]))),128))])]),_:1})]),_:1})):u("",!0)],64))}};export{R as default};