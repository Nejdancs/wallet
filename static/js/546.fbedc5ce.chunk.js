"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[546],{546:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var a,s,t,i=r(5539),o=r(5861),c=r(885),l=r(4687),d=r.n(l),u=r(2791),x=r(9434),p=r(7689),h=r(5705),m=r(2899),j=r(2940),w=r(7472),f=r(761),y=r.n(f),g=r(168),b=r(6031),v=r(245),Z=b.ZP.div(a||(a=(0,g.Z)(["\n  background-color: rgb(224, 224, 224);\n  width: 100%;\n  height: 4px;\n  margin-top: -15px;\n  border-radius: 15px;\n  transition: all 0.5s linear;\n"]))),P=b.ZP.div(s||(s=(0,g.Z)(["\n  margin-top: 20px;\n  @media "," {\n    margin-left: auto;\n    margin-right: auto;\n    /* margin-top: -23px; */\n  }\n"])),v.Z.tablet),k=b.ZP.p(t||(t=(0,g.Z)(["\n  font-size: 12px;\n  text-align: end;\n  position: absolute;\n  top: 36px;\n  right: 0;\n"]))),C=r(184),S=function(n){var e=n.password,r=y()(e),a=100*r.score/4,s=function(){switch(r.score){case 0:return"#E0E0E0";case 1:return"#ff0000";case 2:return"#cc7524";case 3:case 4:return"#24CCA7";default:return"none"}};return(0,C.jsxs)(P,{children:[(0,C.jsx)(Z,{style:{height:"4px"},children:(0,C.jsx)(Z,{style:{width:"".concat(a,"%"),background:s(),height:"5px"}})}),(0,C.jsx)(k,{style:{color:s()},children:function(){switch(r.score){case 0:return"Use a complex password";case 1:return"Easy password";case 2:return"Normal password";case 3:return"Good password";case 4:return"Secure password!";default:return""}}()})]})},E=r(4099),W=r(1760),A=r(9085),B=r(8724),U=function(){var n=(0,x.I0)(),e=(0,p.s0)(),r=(0,u.useState)(""),a=(0,c.Z)(r,2),s=a[0],t=a[1],l=(0,u.useState)(!1),f=(0,c.Z)(l,2),y=f[0],g=f[1],b=(0,u.useState)(!1),v=(0,c.Z)(b,2),Z=v[0],P=v[1],k=function(){var e=(0,o.Z)(d().mark((function e(r,a){var s,t,i,o,c;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.resetForm,t=r.email,i=r.password,o=r.name,e.next=4,n(B.Z.signUp({email:t,password:i,name:o}));case 4:if(!(c=e.sent).error||409!==c.payload){e.next=10;break}return A.Am.error("User with email ".concat(t," already exist")),e.abrupt("return");case 10:if(!c.error){e.next=13;break}return A.Am.error("Something went wrong! Please, try again"),e.abrupt("return");case 13:s();case 14:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,C.jsx)(W.Yb,{children:(0,C.jsx)(h.J9,{initialValues:{email:"",password:"",confirmPassword:"",name:""},validationSchema:m.Z.signUp,onSubmit:k,children:function(n){var r=n.handleSubmit,a=n.handleChange,o=n.values;return(0,C.jsxs)(W.l0,{onSubmit:r,children:[(0,C.jsx)(i.E.div,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:1.2},children:(0,C.jsx)(W.xg,{children:(0,C.jsx)(w.Z,{})})}),(0,C.jsxs)(W.lX,{children:[(0,C.jsx)(W.Wi,{type:"email",name:"email",value:o.email,onChange:a,placeholder:"E-mail"}),(0,C.jsx)(W.h,{}),(0,C.jsx)(h.Bc,{name:"email",render:function(n){return(0,C.jsx)(W.y,{children:n})}})]}),(0,C.jsxs)(W.lX,{children:[(0,C.jsx)(W.Wi,{type:y?"text":"password",name:"password",value:o.password,onChange:a,placeholder:"Password",onInput:function(n){return t(n.target.value)}}),(0,C.jsx)(W.wm,{}),(0,C.jsx)(E.Z,{type:"button",setShowPassword:g,showPassword:y}),(0,C.jsx)(h.Bc,{name:"password",render:function(n){return(0,C.jsx)(W.y,{children:n})}})]}),(0,C.jsxs)(W.lX,{children:[(0,C.jsx)(W.Wi,{type:Z?"text":"password",name:"confirmPassword",value:o.confirmPassword,onChange:a,placeholder:"Confirm password"}),(0,C.jsx)(W.wm,{}),(0,C.jsx)(E.Z,{type:"button",setShowPassword:P,showPassword:Z}),(0,C.jsx)(S,{password:s}),(0,C.jsx)(h.Bc,{name:"confirmPassword",render:function(n){return(0,C.jsx)(W.Ki,{children:n})}})]}),(0,C.jsxs)(W.lX,{children:[(0,C.jsx)(W.Wi,{type:"text",name:"name",value:o.username,onChange:a,placeholder:"First name"}),(0,C.jsx)(W.uH,{}),(0,C.jsx)(h.Bc,{name:"name",render:function(n){return(0,C.jsx)(W.y,{children:n})}})]}),(0,C.jsx)(i.E.div,{initial:{x:-340,opacity:0},animate:{x:0,opacity:1},transition:{duration:.9,delay:.8},children:(0,C.jsx)(j.Z,{main:!0,type:"submit",children:"Register"})}),(0,C.jsx)(i.E.div,{initial:{x:340,opacity:0},animate:{x:0,opacity:1},transition:{duration:.9,delay:1.3},children:(0,C.jsx)(j.Z,{type:"button",onClick:function(){e("/login")},children:"Log In"})})]})}})})},X=r(9237),F=function(){return(0,C.jsx)(X.W2,{children:(0,C.jsxs)(X._z,{children:[(0,C.jsxs)(X.fM,{children:[(0,C.jsxs)(i.E.div,{initial:{scale:.9,opacity:.5},animate:{scale:1,opacity:1},transition:{duration:1},children:[(0,C.jsx)(X.Rk,{})," "]}),(0,C.jsx)(X.Dm,{children:"Finance App"})]}),(0,C.jsx)(X.n5,{children:(0,C.jsx)(U,{})})]})})}}}]);
//# sourceMappingURL=546.fbedc5ce.chunk.js.map