import{s as b,r as i,o as c,c as g,w as s,a as o,e as m,b as d,t as C}from"./index.fb0eb9d8.js";import{V as f,a as y,b as V,c as U}from"./VCard.9c67fd25.js";import{V as q}from"./VToolbar.aa37bc45.js";import{a as n,V as x}from"./VTextField.a268fa98.js";import{V as u}from"./VCol.7fa3660d.js";import{V as T}from"./VTextarea.01a6f380.js";import{V as $}from"./VCheckbox.107b6880.js";import{V as k,a as w}from"./VSpacer.18bc812f.js";import"./VAvatar.54e91e63.js";import"./color.df92452d.js";import"./index.4246e81a.js";const E={class:"row"},_={class:"row"},A={class:"row"},N=["loading"],P={class:"text-center"},J={__name:"ClientCreate",setup(S){const p=b.clientStore(),l=i({strings:r=>!!(r||"").match("^[a-z A-Z s]+$")||"Por favor, informe apenas letras.",addresses:r=>!!(r||"").match("^[a-z A-Z 0-9 s ,]+$")||"Voc\xEA pode inserir letras, n\xFAmeros, virgulas e espa\xE7os em branco.",numbers:r=>!!(r||"").match("^[0-9 s]+$")||"Por favor, informe apenas n\xFAmeros.",currencies:r=>!!(r||"").match("^[0-9 , .]+$")||"Por favor, informe valores monet\xE1rios v\xE1lidos.",email:r=>!!(r||"").match(/@/)||"Por favor, informe um email valido.",required:r=>!!r||"Este campo \xE9 mandat\xF3rio.",form:!1,isLoading:!1,dialog:!1}),t=i({name:void 0,phone:void 0,email:void 0,address:void 0,city:void 0,state:void 0,cost:void 0,total_revenue:void 0,details:void 0,status:!0});function v(r){p.saveClients(this.input).then(e=>{l.output="Cliente salvo com sucesso!",l.dialog=!0}).catch(e=>{l.output="Cliente n\xE3o pode ser salvo! Tente novamente mais tarde.",l.dialog=!0}).finally(()=>{r.reset()})}return(r,e)=>(c(),g(f,{class:"mx-auto"},{default:s(()=>[o(q,{color:"",cards:"",dark:"",flat:""},{default:s(()=>[o(y,{class:"text-h6 font-weight-regular"},{default:s(()=>[m(" Cadastro de Clientes ")]),_:1})]),_:1}),o(x,{ref:"form",modelValue:l.form,"onUpdate:modelValue":e[10]||(e[10]=a=>l.form=a),class:"pa-4 pt-6"},{default:s(()=>[o(n,{modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=a=>t.name=a),rules:[l.strings,l.required],variant:"filled",color:"",label:"Nome"},null,8,["modelValue","rules"]),d("div",E,[o(u,{cols:"4"},{default:s(()=>[o(n,{modelValue:t.phone,"onUpdate:modelValue":e[1]||(e[1]=a=>t.phone=a),rules:[l.numbers,l.required],variant:"filled",color:"",label:"Telefone"},null,8,["modelValue","rules"])]),_:1}),o(u,{cols:"8"},{default:s(()=>[o(n,{modelValue:t.email,"onUpdate:modelValue":e[2]||(e[2]=a=>t.email=a),rules:[l.email,l.required],variant:"filled",color:"",label:"Email",type:"email"},null,8,["modelValue","rules"])]),_:1})]),o(n,{modelValue:t.address,"onUpdate:modelValue":e[3]||(e[3]=a=>t.address=a),variant:"filled",rules:[l.addresses,l.required],color:"",label:"Endere\xE7o"},null,8,["modelValue","rules"]),d("div",_,[o(u,{cols:"6"},{default:s(()=>[o(n,{modelValue:t.city,"onUpdate:modelValue":e[4]||(e[4]=a=>t.city=a),variant:"filled",rules:[l.strings,l.required],color:"",label:"Cidade"},null,8,["modelValue","rules"])]),_:1}),o(u,{cols:"6"},{default:s(()=>[o(n,{modelValue:t.state,"onUpdate:modelValue":e[5]||(e[5]=a=>t.state=a),variant:"filled",rules:[l.strings,l.required],color:"",label:"Estado"},null,8,["modelValue","rules"])]),_:1})]),d("div",A,[o(u,{cols:"6"},{default:s(()=>[o(n,{modelValue:t.cost,"onUpdate:modelValue":e[6]||(e[6]=a=>t.cost=a),variant:"filled",rules:[l.currencies,l.required],color:"",label:"Custo"},null,8,["modelValue","rules"])]),_:1}),o(u,{cols:"6"},{default:s(()=>[o(n,{modelValue:t.total_revenue,"onUpdate:modelValue":e[7]||(e[7]=a=>t.total_revenue=a),variant:"filled",rules:[l.currencies,l.required],color:"",label:"Total Revenue"},null,8,["modelValue","rules"])]),_:1})]),o(T,{modelValue:t.details,"onUpdate:modelValue":e[8]||(e[8]=a=>t.details=a),"auto-grow":"",variant:"filled",color:"",label:"Detalhes",rules:[l.required],rows:"1"},null,8,["modelValue","rules"]),o($,{modelValue:t.status,"onUpdate:modelValue":e[9]||(e[9]=a=>t.status=a),color:""},{label:s(()=>[m(" Cliente ativo? ")]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),o(V,null,{default:s(()=>[d("button",{type:"button",class:"btn btn-light",onClick:e[11]||(e[11]=a=>r.$refs.form.reset())}," Limpar "),o(k),d("button",{type:"button",loading:l.isLoading,class:"btn btn-primary",onClick:e[12]||(e[12]=a=>v(r.$refs.form))}," Salvar ",8,N)]),_:1}),d("div",P,[o(w,{modelValue:l.dialog,"onUpdate:modelValue":e[14]||(e[14]=a=>l.dialog=a),activator:"parent",type:"error"},{default:s(()=>[o(f,null,{default:s(()=>[o(U,null,{default:s(()=>[d("span",null,C(l.output),1)]),_:1}),o(V,{class:"d-grid"},{default:s(()=>[d("button",{type:"button",class:"btn btn-primary block",onClick:e[13]||(e[13]=a=>l.dialog=!1)},"FECHAR")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{J as default};
