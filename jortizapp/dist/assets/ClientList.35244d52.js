import{s as n,af as p,o as a,ar as o,B as c,a as r,w as s,f as u,c as m,F as f,e as d,b as t,aA as _,t as l}from"./index.32ef12a5.js";import{V as x}from"./VAlert.146070ec.js";import{V,a as C}from"./VCard.603b1983.js";import{V as g}from"./VToolbar.204612f3.js";import{V as k}from"./VTable.81c24870.js";import"./VAvatar.b65279bf.js";import"./color.74c4fdba.js";import"./VBtn.e639edbd.js";import"./group.3010d305.js";import"./index.cabf6140.js";const y={key:0},N=t("strong",null,"clientes",-1),T=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Nome"),t("th",{class:"text-left"},"Telefone"),t("th",{class:"text-left"},"Email"),t("th",{class:"text-left"},"Endere\xE7o"),t("th",{class:"text-left"},"Cidade"),t("th",{class:"text-left"},"Estado"),t("th",{class:"text-left"},"Total Revenue"),t("th",{class:"text-left"},"Detalhes"),t("th",{class:"text-left"},"Custo")])],-1),R={__name:"ClientList",setup(b){const i=n.clientStore();return p(()=>{i.loadClients().catch(function(h){console.log("Erro para carregar clientes.")})}),(h,B)=>(a(),o(f,null,[c(n).clientStore().countClients?u("",!0):(a(),o("div",y,[r(x,{variant:"outlined",type:"warning",prominent:"",border:"top"},{default:s(()=>[d(" Ops. N\xE3o existem dados de "),N,d(" a serem listados. ")]),_:1})])),c(n).clientStore().countClients?(a(),m(V,{key:1,class:"mx-auto"},{default:s(()=>[r(g,{color:"",cards:"",dark:"",flat:""},{default:s(()=>[r(C,{class:"text-h6 font-weight-regular"},{default:s(()=>[d(" Lista de Clientes ")]),_:1})]),_:1}),r(k,{"fixed-header":"",height:"700px"},{default:s(()=>[T,t("tbody",null,[(a(!0),o(f,null,_(c(i).clients,e=>(a(),o("tr",{key:e.name},[t("td",null,l(e.name),1),t("td",null,l(e.phone),1),t("td",null,l(e.email),1),t("td",null,l(e.address),1),t("td",null,l(e.city),1),t("td",null,l(e.state),1),t("td",null,l(e.total_revenue),1),t("td",null,l(e.details),1),t("td",null,l(e.cost),1)]))),128))])]),_:1})]),_:1})):u("",!0)],64))}};export{R as default};
