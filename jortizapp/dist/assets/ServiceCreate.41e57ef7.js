import{s as c,r as n,o as v,c as b,w as l,a as t,e as d,b as i,t as g}from"./index.fb0eb9d8.js";import{V as u,a as C,b as m,c as S}from"./VCard.9c67fd25.js";import{V as x}from"./VToolbar.aa37bc45.js";import{a as f,V as $}from"./VTextField.a268fa98.js";import{V as k}from"./VTextarea.01a6f380.js";import{V as y}from"./VCol.7fa3660d.js";import{V as T}from"./VCheckbox.107b6880.js";import{V as w,a as U}from"./VSpacer.18bc812f.js";import"./VAvatar.54e91e63.js";import"./color.df92452d.js";import"./index.4246e81a.js";const P={class:"row"},_=["disabled","loading"],q={class:"text-center"},G={__name:"ServiceCreate",setup(A){const p=c.serviceStore(),o=n({strings:a=>!!(a||"").match("^[a-z A-Z s]+$")||"Por favor, informe apenas letras.",addresses:a=>!!(a||"").match("^[a-z A-Z 0-9 s ,]+$")||"Voc\xEA pode inserir letras, n\xFAmeros, virgulas e espa\xE7os em branco.",numbers:a=>!!(a||"").match("^[0-9 s]+$")||"Por favor, informe apenas n\xFAmeros.",currencies:a=>!!(a||"").match("^[0-9 , .]+$")||"Por favor, informe valores monet\xE1rios v\xE1lidos.",email:a=>!!(a||"").match(/@/)||"Por favor, informe um email valido.",required:a=>!!a||"Este campo \xE9 mandat\xF3rio.",form:!1,isLoading:!1,dialog:!1}),s=n({name:void 0,description:void 0,price:void 0,status:!0});function V(a){p.saveServices(this.input).then(e=>{o.output="Servi\xE7o salvo com sucesso!",o.dialog=!0}).catch(e=>{o.output="Servi\xE7o n\xE3o pode ser salvo! Tente novamente mais tarde.",o.dialog=!0}).finally(()=>{a.reset()})}return(a,e)=>(v(),b(u,{class:"mx-auto"},{default:l(()=>[t(x,{color:"",cards:"",dark:"",flat:""},{default:l(()=>[t(C,{class:"text-h6 font-weight-regular"},{default:l(()=>[d(" Cadastro de Servi\xE7os ")]),_:1})]),_:1}),t($,{ref:"form",modelValue:o.form,"onUpdate:modelValue":e[4]||(e[4]=r=>o.form=r),class:"pa-4 pt-6"},{default:l(()=>[t(f,{modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=r=>s.name=r),rules:[o.strings,o.required],variant:"filled",color:"",label:"Nome"},null,8,["modelValue","rules"]),t(k,{modelValue:s.description,"onUpdate:modelValue":e[1]||(e[1]=r=>s.description=r),"auto-grow":"",variant:"filled",color:"",label:"Descri\xE7\xE3o",rules:[o.required],rows:"1"},null,8,["modelValue","rules"]),i("div",P,[t(y,{cols:"6"},{default:l(()=>[t(f,{modelValue:s.price,"onUpdate:modelValue":e[2]||(e[2]=r=>s.price=r),variant:"filled",rules:[o.currencies,o.required],color:"",label:"Pre\xE7o do Servi\xE7o"},null,8,["modelValue","rules"])]),_:1})]),t(T,{modelValue:s.status,"onUpdate:modelValue":e[3]||(e[3]=r=>s.status=r),color:""},{label:l(()=>[d(" Servi\xE7o ativo? ")]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(m,null,{default:l(()=>[i("button",{vclass:"btn btn-light",type:"button",onClick:e[5]||(e[5]=r=>a.$refs.form.reset())}," Limpar "),t(w),i("button",{type:"button",disabled:!o.form,loading:o.isLoading,class:"btn btn-primary",onClick:e[6]||(e[6]=r=>V(a.$refs.form))}," Salvar ",8,_)]),_:1}),i("div",q,[t(U,{modelValue:o.dialog,"onUpdate:modelValue":e[8]||(e[8]=r=>o.dialog=r),activator:"parent",type:"error"},{default:l(()=>[t(u,null,{default:l(()=>[t(S,null,{default:l(()=>[i("span",null,g(o.output),1)]),_:1}),t(m,{class:"d-grid"},{default:l(()=>[i("button",{type:"button",class:"btn btn-primary block",onClick:e[7]||(e[7]=r=>o.dialog=!1)}," FECHAR ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1}))}};export{G as default};