import{s as n,af as p,o as a,ar as o,B as d,a as r,w as s,f as u,c as m,F as f,e as c,b as t,aA as _,t as l}from"./index.fb0eb9d8.js";import{V as x}from"./VAlert.92bcea26.js";import{V,a as C}from"./VCard.9c67fd25.js";import{V as g}from"./VToolbar.aa37bc45.js";import{V as k}from"./VTable.edf3d029.js";import"./VAvatar.54e91e63.js";import"./color.df92452d.js";import"./VBtn.77c39c0c.js";import"./group.c2677aa6.js";import"./index.4246e81a.js";const y={key:0},N=t("strong",null,"clientes",-1),T=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Nome"),t("th",{class:"text-left"},"Telefone"),t("th",{class:"text-left"},"Email"),t("th",{class:"text-left"},"Endere\xE7o"),t("th",{class:"text-left"},"Cidade"),t("th",{class:"text-left"},"Estado"),t("th",{class:"text-left"},"Total Revenue"),t("th",{class:"text-left"},"Detalhes"),t("th",{class:"text-left"},"Custo")])],-1),R={__name:"ClientList",setup(b){const i=n.clientStore();return p(()=>{i.loadClients().catch(h=>{console.log("Erro para carregar clientes.")})}),(h,B)=>(a(),o(f,null,[d(n).clientStore().countClients?u("",!0):(a(),o("div",y,[r(x,{variant:"outlined",type:"warning",prominent:"",border:"top"},{default:s(()=>[c(" Ops. N\xE3o existem dados de "),N,c(" a serem listados. ")]),_:1})])),d(n).clientStore().countClients?(a(),m(V,{key:1,class:"mx-auto"},{default:s(()=>[r(g,{color:"",cards:"",dark:"",flat:""},{default:s(()=>[r(C,{class:"text-h6 font-weight-regular"},{default:s(()=>[c(" Lista de Clientes ")]),_:1})]),_:1}),r(k,{"fixed-header":"",height:"700px"},{default:s(()=>[T,t("tbody",null,[(a(!0),o(f,null,_(d(i).clients,e=>(a(),o("tr",{key:e.name},[t("td",null,l(e.name),1),t("td",null,l(e.phone),1),t("td",null,l(e.email),1),t("td",null,l(e.address),1),t("td",null,l(e.city),1),t("td",null,l(e.state),1),t("td",null,l(e.total_revenue),1),t("td",null,l(e.details),1),t("td",null,l(e.cost),1)]))),128))])]),_:1})]),_:1})):u("",!0)],64))}};export{R as default};