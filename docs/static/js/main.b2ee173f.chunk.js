(this["webpackJsonpriesgo-fami"]=this["webpackJsonpriesgo-fami"]||[]).push([[0],{46:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(17),r=s.n(a),i=(s(46),s(6)),o=s(4),l=s(5),d=Object(n.createContext)(),u=s(7),j=s(20),m=s(2),b=["isAuthenticated","component"],O=function(e){var t=e.isAuthenticated,s=e.component,n=Object(j.a)(e,b);return localStorage.setItem("lastPath",n.location.pathname),Object(m.jsx)(l.b,Object(u.a)(Object(u.a)({},n),{},{component:function(e){return t?Object(m.jsx)(s,Object(u.a)({},e)):Object(m.jsx)(l.a,{to:"/auth/login"})}}))},h=["isAuthenticated","component"],g=function(e){var t=e.isAuthenticated,s=e.component,n=Object(j.a)(e,h);return Object(m.jsx)(l.b,Object(u.a)(Object(u.a)({},n),{},{component:function(e){return t?Object(m.jsx)(l.a,{to:"/home"}):Object(m.jsx)(s,Object(u.a)({},e))}}))},x="[auth] login",p="[auth] logout",f=s(3),v=function(){var e=Object(n.useContext)(d),t=e.user.name,s=e.dispatch,c=Object(l.g)();return Object(m.jsxs)(f.g,{logo:Object(m.jsxs)("div",{className:"wfp--main-navigation__logo",children:[Object(m.jsx)(o.b,{href:"/home",children:Object(m.jsx)("img",{src:"/assets/idWFP.png",alt:"menu logo",className:"menu-img"})}),Object(m.jsx)("span",{className:"menu-title",children:"EDUFAMI"})]}),children:[Object(m.jsx)(f.h,{children:Object(m.jsx)(o.b,{to:"/home",children:"Cursos"})}),Object(m.jsx)(f.h,{children:Object(m.jsx)(o.b,{to:"/account",children:"Mis Datos"})}),Object(m.jsx)(f.h,{children:Object(m.jsx)(o.b,{to:"/lenguages",children:"Mi Lengua"})}),Object(m.jsx)(f.h,{children:Object(m.jsx)(o.b,{to:"/certificates",children:"Mis Certificados"})}),Object(m.jsx)(f.h,{children:Object(m.jsx)(o.b,{to:"/progress",children:"Mi Progreso"})}),Object(m.jsx)("hr",{className:"dropdown-divider"}),Object(m.jsx)(f.h,{children:Object(m.jsx)(o.b,{to:"/information",children:"Informaci\xf3n EDUFAMI"})}),Object(m.jsx)(f.h,{className:"wfp--main-navigation__user",subNavigation:Object(m.jsx)(f.i,{children:Object(m.jsx)(f.j,{children:Object(m.jsx)(f.k,{children:Object(m.jsx)(f.d,{className:"nav-item nav-link btn",onClick:function(){c.replace("/auth/login"),s({type:p})},children:"Cerrar Sesi\xf3n"})})})}),children:Object(m.jsx)(f.m,{ellipsis:!0,name:t,missingImage:"letter"})})]})},y=s(11),I=s.n(y),N=s(26),w=s(12),E=s(13),C=s.n(E);function k(e,t,s){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r=Object(n.useState)(!0),o=Object(i.a)(r,2),l=o[0],d=o[1],u=Object(n.useState)(!1),j=Object(i.a)(u,2),m=j[0],b=j[1],O=Object(n.useState)([]),h=Object(i.a)(O,2),g=h[0],x=h[1],p=Object(n.useState)(!1),f=Object(i.a)(p,2),v=f[0],y=f[1],E=c?"&"+c+"="+a:"",k=Object(n.useCallback)(Object(w.a)(I.a.mark((function n(){var c,a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=localStorage.getItem("userToken"),n.prev=1,n.next=4,C.a.get("https://laravel.alusoft.co/api/"+s+"?offset="+e+"&limit="+t+E,{headers:{Authorization:"Bearer "+c}});case 4:a=n.sent,x((function(e){return[].concat(Object(N.a)(e),Object(N.a)(a.data.data))})),d(!1),a.data.data.length<t?y(!1):y(!0),n.next=14;break;case 10:throw n.prev=10,n.t0=n.catch(1),b(n.t0),m;case 14:case"end":return n.stop()}}),n,null,[[1,10]])}))),[e,m,t,s,E]);return Object(n.useEffect)((function(){k()}),[e,k]),{loading:l,error:m,list:g,hasMore:v}}var B=function(){var e=Object(n.useContext)(d).dispatch,t=Object(l.g)(),s=Object(n.useState)(0),c=Object(i.a)(s,2),a=c[0],r=c[1],u=k(a,3,"courses"),j=u.loading,b=u.error,O=u.list,h=u.hasMore,g=Object(n.useRef)(null),x=Object(n.useRef)(),v=Object(n.useCallback)((function(e){x.current&&x.current.disconnect(),x.current=new IntersectionObserver((function(e){e[0].isIntersecting&&h&&r((function(e){return e+3}))})),e&&x.current.observe(e)}),[h]);b&&(console.log(b),e({type:p}),t.replace("/auth/login"));return Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"text-title",children:"Cursos"}),Object(m.jsxs)("div",{className:"fund-main-enter",children:[Object(m.jsx)(f.a,{children:Object(m.jsx)(f.c,{children:Object(m.jsx)(o.b,{to:"/home",children:Object(m.jsx)(f.b,{})})})}),Object(m.jsx)("div",{className:"content-courses",children:O&&function(){var e=O;return localStorage.setItem("courses",JSON.stringify(e)),e.map((function(e){return"activo"===e.state_name?"RIESGOFAMI"===e.name_course?Object(m.jsx)("div",{ref:v,children:Object(m.jsx)(o.b,{to:"/course/".concat(e.id),children:Object(m.jsx)("img",{src:"./assets/idRIESGOF.png",alt:e.name_course,className:"img-course"})})},e.id):Object(m.jsx)("div",{ref:v,children:Object(m.jsx)(o.b,{to:"/course/".concat(e.id),children:Object(m.jsx)("img",{src:"https://laravel.alusoft.co"+e.image_course,alt:e.name_course,className:"img-course"})})},e.id):null}))}()}),j&&Object(m.jsx)("p",{children:"Loading..."}),b&&Object(m.jsx)("p",{children:"Error!"}),Object(m.jsx)("div",{ref:g})]})]})},S=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Mis Datos"}),Object(m.jsx)("hr",{})]})},L=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Mi Lengua"})})};function P(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Mis Certificados"})})}var _=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Mi Pogreso"})})},M=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Informacion EDUFAMI"})})},q=function(){var e=Object(n.useContext)(d).dispatch,t=Object(l.g)(),s=Object(n.useState)(0),c=Object(i.a)(s,2),a=c[0],r=c[1],u=Object(l.i)().cursoId,j=localStorage.getItem("course")?JSON.parse(localStorage.getItem("course")):"",b=k(a,3,"course/units","course_id",u),O=b.loading,h=b.error,g=b.list,x=b.hasMore,v=Object(n.useRef)(null),y=Object(n.useRef)(),I=Object(n.useCallback)((function(e){y.current&&y.current.disconnect(),y.current=new IntersectionObserver((function(e){e[0].isIntersecting&&x&&r((function(e){return e+3}))})),e&&y.current.observe(e)}),[x]);h&&(console.log(h),e({type:p}),t.replace("/auth/login")),""===j&&t.replace("/home");return Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"text-title",children:j&&j.name_course}),Object(m.jsxs)("div",{className:"fund-main-enter",children:[Object(m.jsxs)(f.a,{children:[Object(m.jsx)(f.c,{children:Object(m.jsx)(o.b,{to:"/home",children:Object(m.jsx)(f.b,{})})}),Object(m.jsx)(f.c,{children:Object(m.jsx)(o.b,{to:"/course/".concat(u),children:j&&j.name_course})}),Object(m.jsx)(f.c,{disableLink:!0,children:"Unidades"})]}),Object(m.jsx)("div",{className:"content-courses",children:g&&function(){var e=g;return console.log(e),e.map((function(e){return"activo"===e.state_name?"RIESGOFAMI"===e.name_course?Object(m.jsx)("div",{ref:I,children:Object(m.jsx)(o.b,{to:"/home",children:Object(m.jsx)("img",{src:"./assets/idRIESGOF.png",alt:e.name_course,className:"img-course"})})},e.id):Object(m.jsx)("div",{ref:I,children:Object(m.jsx)(o.b,{to:"/home",children:Object(m.jsx)("img",{src:"https://laravel.alusoft.co"+e.image_unit,alt:e.name_course,className:"img-course"})})},e.id):null}))}()}),O&&Object(m.jsx)("p",{children:"Loading..."}),h&&Object(m.jsx)("p",{children:"Error!"}),Object(m.jsx)("div",{ref:v})]})]})},F=function(){var e=Object(n.useContext)(d).dispatch,t=Object(l.g)(),s=Object(n.useState)(""),c=Object(i.a)(s,2),a=c[0],r=c[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),b=j[0],O=j[1],h=Object(l.i)().cursoId,g=JSON.parse(localStorage.getItem("courses")),x="";g||(e({type:p}),t.replace("/home")),Object(n.useEffect)((function(){void 0!==x?(r(x.name_course),O("RIESGOFAMI"===x.name_course?"/assets/IN_riesgof.png":"https://laravel.alusoft.co"+x.image_course),localStorage.setItem("course",JSON.stringify(x))):t.replace("/home")}),[x]);return Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"text-title",children:a}),Object(m.jsxs)(f.a,{children:[Object(m.jsx)(f.c,{children:Object(m.jsx)(o.b,{to:"/home",children:Object(m.jsx)(f.b,{})})}),Object(m.jsx)(f.c,{disableLink:!0,children:a})]}),Object(m.jsx)("div",{className:"fund-main-course",children:Object(m.jsx)("div",{className:"content-course",children:g&&((x=g.find((function(e){return e.id==h})))?Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:b,alt:x.name_course,className:"img-course"}),Object(m.jsxs)("div",{className:"course-description",children:[x.description_course,Object(m.jsx)("div",{className:"course-enter",children:Object(m.jsx)(o.b,{to:"/units/".concat(x.id),children:Object(m.jsx)(f.d,{id:"btnIngresar",type:"submit",className:"btn m-1 btn-block btn-wfp-main",children:"Ingresar"})})})]})]},x.id):null)})})]})},D=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{}),Object(m.jsx)("div",{className:"container mt-2",children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/home",component:B}),Object(m.jsx)(l.b,{exact:!0,path:"/account",component:S}),Object(m.jsx)(l.b,{exact:!0,path:"/languages",component:L}),Object(m.jsx)(l.b,{exact:!0,path:"/certificates",component:P}),Object(m.jsx)(l.b,{exact:!0,path:"/progress",component:_}),Object(m.jsx)(l.b,{exact:!0,path:"/information",component:M}),Object(m.jsx)(l.b,{exact:!0,path:"/course/:cursoId",component:F}),Object(m.jsx)(l.b,{exact:!0,path:"/units/:cursoId",component:q}),Object(m.jsx)(l.a,{to:"/home"})]})})]})},A=function(){return Object(m.jsx)("div",{className:"footer-section",children:Object(m.jsx)(f.e,{logo:Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"/assets/idWFPp.png",alt:"footer logo",className:"footer-img"})}),logoExtended:Object(m.jsx)("div",{}),children:"\xa0"})})},T=function(){return Object(m.jsxs)("div",{className:"fund-main",children:[Object(m.jsx)("img",{src:"./assets/idEDUF.png",alt:"header",className:"img-head"}),Object(m.jsxs)("div",{className:"text-main",children:["Aprender con Edufami es muy facil",Object(m.jsx)("br",{}),"Inicie su formacion Ahora",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(o.b,{to:"/auth/login",className:"btn m-1 btn-block btn-outline-primary btn-wfp-main",onClick:function(e){e.currentTarget.classList.remove("btn-wfp-main"),e.currentTarget.classList.add("btn-wfp-main-press")},children:"Ingresar"})]}),Object(m.jsx)(A,{})]})},R=s(19),J=s(39),U=s.n(J),G=function(){var e=Object(w.a)(I.a.mark((function e(t,s){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("https://laravel.alusoft.co/api/login?dni="+t+"&password="+s,{});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,s){return e.apply(this,arguments)}}(),W=function(e){var t=e.history,s=Object(n.useContext)(d).dispatch,c=Object(l.h)(),a=U.a.parse(c.search).q,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),s=Object(i.a)(t,2),c=s[0],a=s[1],r=function(e){var t=e.target;a(Object(u.a)(Object(u.a)({},c),{},Object(R.a)({},t.name,t.value)))};return[c,r,function(){a(e)}]}({userName:void 0===a?"":a}),j=Object(i.a)(r,2),b=j[0],O=j[1],h=b.userName;Object(n.useEffect)((function(){document.getElementById("userName-error-msg").style.display="none",document.getElementById("userPassword-error-msg").style.display="none"}),[]);return Object(m.jsxs)("div",{className:"fund-main",children:[Object(m.jsx)("img",{src:"/assets/idEDUF.png",alt:"header",className:"img-head"}),Object(m.jsx)("div",{className:"text-login-main",children:Object(m.jsxs)(f.f,{onSubmit:function(e){e.preventDefault();var n=document.getElementById("btnIngresar");n.classList.remove("btn-wfp-main"),n.classList.add("btn-wfp-main-press");var c=localStorage.getItem("lastPath")||"/home",a=document.getElementById("userPassword").value,r=document.getElementById("userName");""===h?(r.classList.add("is-invalid"),document.getElementById("userName-error-msg").classList.add("wfp--form-requirement-show"),document.getElementById("userName-error-msg").style.display="block"):(r.classList.remove("is-invalid"),document.getElementById("userName-error-msg").classList.remove("wfp--form-requirement-show"));var i=document.getElementById("userPassword");(""===a?(i.classList.add("is-invalid"),document.getElementById("userPassword-error-msg").classList.add("wfp--form-requirement-show"),document.getElementById("userPassword-error-msg").style.display="block"):(i.classList.remove("is-invalid"),document.getElementById("userPassword-error-msg").classList.remove("wfp--form-requirement-show")),""!==h&&""!==a)&&G(h,a).then((function(e){s({type:x,payload:{name:e.data.user.name,token:e.data.access_token}}),t.replace(c)})).catch((function(e){console.warn(e),document.getElementById("invalidMessage").classList.add("invalid-tooltip-active")}))},className:"needs-validation",children:[Object(m.jsx)("strong",{id:"invalidMessage",className:"invalid-feedback",children:"* Identificaci\xf3n y/o Contrase\xf1a invalidas"}),Object(m.jsx)(f.l,{placeholder:"Identificaci\xf3n",className:"form-control txt-input",name:"userName",id:"userName",autoComplete:"off",value:h,onChange:O,invalid:{message:""},invalidText:"Identificaci\xf3n requerido",required:!0}),Object(m.jsx)(f.l,{type:"password",placeholder:"Contrase\xf1a",className:"form-control mb-3 txt-input",id:"userPassword",name:"userPassword",autoComplete:"off",invalid:{message:""},invalidText:"Contrase\xf1a requerida",required:!0}),Object(m.jsx)("br",{}),Object(m.jsx)(f.d,{id:"btnIngresar",type:"submit",className:"btn m-1 btn-block btn-wfp-main",children:"Ingresar"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\xbfAun no se ha registrado?",Object(m.jsx)("br",{}),"Por favor registrese",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(o.b,{to:"/auth/registry",className:"btn m-1 btn-block btn-wfp-main",onClick:function(e){e.currentTarget.classList.remove("btn-wfp-main"),e.currentTarget.classList.add("btn-wfp-main-press")},children:"Registrarse"})]})}),Object(m.jsx)(A,{})]})},z=function(){var e=Object(w.a)(I.a.mark((function e(t,s,n,c,a){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("https://laravel.alusoft.co/api"+"/register?name=".concat(t,"&email=").concat(s,"&password=").concat(c,"&dni=").concat(n,"&password_confirmation=").concat(a),{});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,s,n,c,a){return e.apply(this,arguments)}}(),H=function(e){var t=e.history,s=Object(n.useContext)(d).dispatch;Object(n.useEffect)((function(){document.getElementById("userName-error-msg").style.display="none",document.getElementById("userEmail-error-msg").style.display="none",document.getElementById("userPassword-error-msg").style.display="none",document.getElementById("userConfPassword-error-msg").style.display="none",document.getElementById("userDni-error-msg").style.display="none"}),[]);return Object(m.jsxs)("div",{className:"fund-main",children:[Object(m.jsx)(o.b,{to:"/auth",children:Object(m.jsx)("img",{src:"/assets/idEDUF.png",alt:"header",className:"img-head"})}),Object(m.jsx)("div",{className:"text-reg-main",children:Object(m.jsxs)(f.f,{onSubmit:function(e){e.preventDefault();var n=document.getElementById("btnIngresar");n.classList.remove("btn-wfp-main"),n.classList.add("btn-wfp-main-press");var c=localStorage.getItem("lastPath")||"/",a=document.getElementById("userName"),r=a.value,i=document.getElementById("userEmail"),o=i.value,l=document.getElementById("userPassword"),d=l.value,u=document.getElementById("userConfPassword"),j=u.value,m=document.getElementById("userDni"),b=m.value;""===r?(a.classList.add("is-invalid"),document.getElementById("userName-error-msg").style.display="block"):(a.classList.remove("is-invalid"),document.getElementById("userName-error-msg").style.display="none"),""===o?(i.classList.add("is-invalid"),document.getElementById("userEmail-error-msg").style.display="block"):document.getElementById("userEmail-error-msg").style.display="none",""===d?(l.classList.add("is-invalid"),document.getElementById("userPassword-error-msg").style.display="block"):document.getElementById("userPassword-error-msg").style.display="none",""===j?(u.classList.add("is-invalid"),document.getElementById("userConfPassword-error-msg").style.display="block"):document.getElementById("userConfPassword-error-msg").style.display="none",""===b?(m.classList.add("is-invalid"),document.getElementById("userDni-error-msg").style.display="block"):document.getElementById("userDni-error-msg").style.display="none";var O=document.getElementById("invalidMessage");if(d===j){if(""!==r&&""!==o&&""!==b&&""!==d&&""!==j)z(r,o,b,d,j).then((function(e){s({type:x,payload:{name:e.data.user.name,token:e.data.access_token}}),t.replace(c)})).catch((function(e){console.warn(e)}));O.classList.remove("invalid-tooltip-active")}else O.classList.add("invalid-tooltip-active")},className:"needs-validation",children:[Object(m.jsx)("strong",{id:"invalidMessage",className:"invalid-feedback",children:"* Contrase\xf1a y confirmacion de Contrase\xf1a deben ser iguales"}),Object(m.jsx)(f.l,{placeholder:"Nombre",className:"form-control txt-input",name:"userName",id:"userName",autoComplete:"off",invalid:{message:""},invalidText:"Nombre requerido",required:!0}),Object(m.jsx)(f.l,{type:"email",placeholder:"Email",className:"form-control txt-input",name:"userEmail",id:"userEmail",autoComplete:"off",invalid:{message:""},invalidText:"Email requerido",required:!0}),Object(m.jsx)(f.l,{placeholder:"Identificacion",className:"form-control txt-input",name:"userDni",id:"userDni",autoComplete:"off",invalid:{message:""},invalidText:"Identificaci\xf3n requerida",required:!0}),Object(m.jsx)(f.l,{type:"password",placeholder:"Contrase\xf1a",className:"form-control txt-input",id:"userPassword",name:"userPassword",autoComplete:"off",invalid:{message:""},invalidText:"Contrase\xf1a requerida",required:!0}),Object(m.jsx)(f.l,{type:"password",placeholder:"Confirma Contrase\xf1a",className:"form-control txt-input",id:"userConfPassword",name:"userConfPassword",autoComplete:"off",invalid:{message:""},invalidText:"Confirmaci\xf3n requerida",required:!0}),Object(m.jsx)(f.d,{id:"btnIngresar",type:"submit",className:"btn m-1 btn-block btn-outline-primary btn-wfp-main",children:"Registrarse"})]})}),Object(m.jsx)(A,{})]})},K=function(){return Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/auth",component:T}),Object(m.jsx)(l.b,{exact:!0,path:"/auth/login",component:W}),Object(m.jsx)(l.b,{exact:!0,path:"/auth/registry",component:H}),Object(m.jsx)(l.a,{to:"/"})]})},Q=function(){var e=Object(n.useContext)(d).user;return Object(m.jsx)(o.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(g,{path:"/auth",component:K,isAuthenticated:e.logged}),Object(m.jsx)(O,{path:"/",component:D,isAuthenticated:e.logged})]})})})},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return localStorage.setItem("userToken",t.payload.token),Object(u.a)(Object(u.a)({},t.payload),{},{logged:!0});case p:return localStorage.removeItem("userToken"),{logged:!1};default:return e}},X=(s(91),function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}}),Y=function(){var e=Object(n.useReducer)(V,{},X),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(s))}),[s]),Object(m.jsx)(d.Provider,{value:{user:s,dispatch:c},children:Object(m.jsx)(Q,{})})},Z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,97)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[92,1,2]]]);
//# sourceMappingURL=main.b2ee173f.chunk.js.map