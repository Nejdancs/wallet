"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[68],{1168:function(A,n,e){e.d(n,{Z:function(){return i}});var t=e(1724),r={email:/^\w+([.-]?\w+){2}@\w+([.-]?\w+)*(\.\w{2,3})+$/,name:/^[a-zA-Z\u0430-\u044f\u0451\u0410-\u042f\u0401\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407\u0430-\u0449\u044c\u044e\u044f\u0491\u0454\u0456\u04570-9]+$/,password:/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,12}$/},i=t.Ry().shape({email:t.Z_().min(6).max(50,"email length must be less than 50 characters").matches(r.email,"type valid email").required(),password:t.Z_().min(6,"password must contain at least 6 characters").max(12,"the password must contain no more than 12 characters").matches(r.password,"must contain a letter and a number").required(),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"both passwords need to be the same").required("is required field"),name:t.Z_().min(2).max(14,"must be less than 14 characters").matches(r.name,"type valid name").required()})},9404:function(A,n,e){e.d(n,{y:function(){return z},l0:function(){return M},Yb:function(){return j},Wi:function(){return G},lX:function(){return N},h:function(){return T},uH:function(){return U},wm:function(){return R},xg:function(){return Y}});var t,r=e(168),i=e(6031),o=e(245),g=e(5705),a=e(2791),c=["title","titleId"];function l(){return l=Object.assign||function(A){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(A[t]=e[t])}return A},l.apply(this,arguments)}function s(A,n){if(null==A)return{};var e,t,r=function(A,n){if(null==A)return{};var e,t,r={},i=Object.keys(A);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=A[e]);return r}(A,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(r[e]=A[e])}return r}function u(A,n){var e=A.title,r=A.titleId,i=s(A,c);return a.createElement("svg",l({width:19,height:18,viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),e?a.createElement("title",{id:r},e):null,t||(t=a.createElement("path",{d:"M0.5 2V16C0.5 17.1 1.39 18 2.5 18H16.5C17.6 18 18.5 17.1 18.5 16V2C18.5 0.9 17.6 0 16.5 0H2.5C1.39 0 0.5 0.9 0.5 2ZM12.5 6C12.5 7.66 11.16 9 9.5 9C7.84 9 6.5 7.66 6.5 6C6.5 4.34 7.84 3 9.5 3C11.16 3 12.5 4.34 12.5 6ZM3.5 14C3.5 12 7.5 10.9 9.5 10.9C11.5 10.9 15.5 12 15.5 14V15H3.5V14Z"})))}var f,d=a.forwardRef(u),p=(e.p,["title","titleId"]);function w(){return w=Object.assign||function(A){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(A[t]=e[t])}return A},w.apply(this,arguments)}function C(A,n){if(null==A)return{};var e,t,r=function(A,n){if(null==A)return{};var e,t,r={},i=Object.keys(A);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=A[e]);return r}(A,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(r[e]=A[e])}return r}function B(A,n){var e=A.title,t=A.titleId,r=C(A,p);return a.createElement("svg",w({width:21,height:16,viewBox:"0 0 21 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,f||(f=a.createElement("path",{d:"M18.5 0H2.5C1.4 0 0.51 0.9 0.51 2L0.5 14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V2C20.5 0.9 19.6 0 18.5 0ZM18.5 4L10.5 9L2.5 4V2L10.5 7L18.5 2V4Z"})))}var m,b=a.forwardRef(B),D=(e.p,["title","titleId"]);function h(){return h=Object.assign||function(A){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(A[t]=e[t])}return A},h.apply(this,arguments)}function x(A,n){if(null==A)return{};var e,t,r=function(A,n){if(null==A)return{};var e,t,r={},i=Object.keys(A);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=A[e]);return r}(A,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(r[e]=A[e])}return r}function Z(A,n){var e=A.title,t=A.titleId,r=x(A,D);return a.createElement("svg",h({width:17,height:21,viewBox:"0 0 17 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,m||(m=a.createElement("path",{d:"M14.5 7H13.5V5C13.5 2.24 11.26 0 8.5 0C5.74 0 3.5 2.24 3.5 5V7H2.5C1.4 7 0.5 7.9 0.5 9V19C0.5 20.1 1.4 21 2.5 21H14.5C15.6 21 16.5 20.1 16.5 19V9C16.5 7.9 15.6 7 14.5 7ZM8.5 16C7.4 16 6.5 15.1 6.5 14C6.5 12.9 7.4 12 8.5 12C9.6 12 10.5 12.9 10.5 14C10.5 15.1 9.6 16 8.5 16ZM11.6 7H5.4V5C5.4 3.29 6.79 1.9 8.5 1.9C10.21 1.9 11.6 3.29 11.6 5V7Z"})))}var y,O,H,v,Q,I,E,P,k,F=a.forwardRef(Z),j=(e.p,i.ZP.div(y||(y=(0,r.Z)(["\n  width: 100%;\n  /* height: 100vh; */\n  padding: 0 20px;\n  margin: 0 auto;\n\n  /* border: 1px solid black; */\n\n  @media "," {\n    width: 480px;\n    height: auto;\n    border-radius: 20px;\n  }\n\n  @media "," {\n    /* position: absolute;\n    top: 43%;\n    left: 15%; */\n    width: 533px;\n    padding: 40px 58.5px 62px 65px;\n    background-color: ",";\n  }\n"])),o.Z.mobile,o.Z.tablet,(function(A){return A.theme.colors.secondaryBg}))),M=i.ZP.form(O||(O=(0,r.Z)(["\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n"]))),N=i.ZP.label(H||(H=(0,r.Z)(["\n  display: block;\n  margin-bottom: 40px;\n  position: relative;\n"]))),R=(0,i.ZP)(F)(v||(v=(0,r.Z)(["\n  position: absolute;\n  left: 10px;\n  top: 4px;\n  fill: #e0e0e0;\n"]))),T=(0,i.ZP)(b)(Q||(Q=(0,r.Z)(["\n  position: absolute;\n  left: 10px;\n  top: 4px;\n  fill: #e0e0e0;\n"]))),U=(0,i.ZP)(d)(I||(I=(0,r.Z)(["\n  position: absolute;\n  left: 10px;\n  top: 4px;\n  fill: #e0e0e0;\n"]))),G=(0,i.ZP)(g.gN)(E||(E=(0,r.Z)(["\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  height: 32px;\n  outline: none;\n  padding-left: 54.5px;\n  width: 100%;\n  color: #000000;\n\n  &:-webkit-autofill {\n    box-shadow: inset 0 0 0 100px #ffffff;\n    -webkit-text-fill-color: #000000;\n  }\n\n  &:focus + ",", &:focus + ",", &:focus + "," {\n    fill: ",";\n  }\n  ::placeholder {\n    color: #e0e0e0;\n  }\n  @media "," {\n    width: 410px;\n  }\n"])),R,T,U,(function(A){return A.theme.colors.accentPrimary}),o.Z.desktop),Y=i.ZP.div(P||(P=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 60px;\n"]))),z=i.ZP.p(k||(k=(0,r.Z)(["\n  position: absolute;\n  top: 38px;\n  left: 5px;\n  font-size: 12px;\n  color: rgb(240, 0, 0);\n"])))},2940:function(A,n,e){e.d(n,{Z:function(){return c}});var t,r=e(168),i=e(6031),o=e(245),g=i.ZP.button(t||(t=(0,r.Z)(["\n  border-radius: 20px;\n  margin: 0 auto 20px;\n  border: 1px solid\n    ",";\n  background-color: ",";\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  width: 280px;\n  height: 50px;\n  color: ",";\n  cursor: pointer;\n\n  font-family: inherit;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 27px;\n  font-style: normal;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  font-weight: 400;\n\n  :hover,\n  :focus {\n    transform: scale(1.03);\n  }\n  @media "," {\n    padding: 13px 65px;\n    width: 300px;\n  }\n"])),(function(A){var n=A.main,e=A.theme;return n?e.colors.accentPrimary:e.colors.accentSecondary}),(function(A){var n=A.main,e=A.theme;return n?e.colors.accentPrimary:e.colors.secondaryBg}),(function(A){var n=A.main,e=A.theme;return n?e.colors.secondaryTextColor:e.colors.accentSecondary}),o.Z.mobile),a=e(184),c=function(A){var n=A.children,e=A.main,t=void 0!==e&&e,r=A.type,i=A.onSubmit,o=A.onClick;return(0,a.jsx)(g,{onClick:o,onSubmit:i,type:r,main:t,children:n})}},9237:function(A,n,e){e.d(n,{Dm:function(){return x},Rk:function(){return y},W2:function(){return m},_z:function(){return b},fM:function(){return D},n5:function(){return Z},tA:function(){return h}});var t,r,i,o,g,a,c,l=e(168),s=e(6031),u=e(245),f=e(5418),d=e(2616),p=e(5257),w=e(128),C=e(2695),B=e(3478),m=s.ZP.div(t||(t=(0,l.Z)(["\n  display: block;\n  height: 100%;\n  padding: 0;\n"]))),b=s.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  top: 0px;\n  left: 0px;\n  background-color: ",";\n\n  @media "," {\n    background-color: ",";\n    background-image: url(","), url(",");\n    background-repeat: no-repeat, no-repeat;\n    background-position: 0px 100%, right 0px top 0px;\n\n    padding: 60px 114px 0;\n    width: 100vw;\n    min-height: 1024px;\n    text-align: center;\n    height: 100vh;\n  }\n\n  @media "," {\n    flex-direction: row;\n    padding: 0;\n    min-height: 720px;\n  }\n"])),(function(A){return A.theme.colors.secondaryBg}),u.Z.tablet,(function(A){return A.theme.colors.authPageBg}),C,B,u.Z.desktop),D=s.ZP.div(i||(i=(0,l.Z)(["\n  @media "," {\n    display: flex;\n    margin-bottom: 50px;\n    margin-right: auto;\n    margin-left: auto;\n    width: 540px;\n  }\n  @media "," {\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 0px;\n  }\n"])),u.Z.tablet,u.Z.desktop),h=s.ZP.div(o||(o=(0,l.Z)(["\n  @media "," {\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    margin-left: auto;\n    margin-right: auto;\n    height: 250px;\n    width: 274px;\n  }\n\n  @media "," {\n    background-image: url(",");\n    width: 452px;\n    height: 412px;\n    margin-right: 32px;\n    margin-bottom: 32px;\n  }\n"])),u.Z.tablet,f,u.Z.desktop,d),x=s.ZP.p(g||(g=(0,l.Z)(["\n  display: none;\n  @media "," {\n    color: ",";\n    display: flex;\n    margin-right: auto;\n    font-family: 'Poppins';\n    font-weight: 400;\n    font-size: 30px;\n    line-height: 45px;\n    margin-left: 40px;\n    align-items: center;\n  }\n  @media "," {\n    margin-left: auto;\n    width: 187px;\n  }\n"])),u.Z.tablet,(function(A){return A.theme.colors.primaryTextColor}),u.Z.desktop),Z=s.ZP.div(a||(a=(0,l.Z)(["\n  align-items: center;\n  display: flex;\n  @media "," {\n    height: 100vh;\n  }\n  @media "," {\n    width: 57%;\n    height: 100%;\n    background: hsla(0, 0%, 100%, 0.3);\n    backdrop-filter: blur(15px);\n  }\n"])),u.Z.maxTablet,u.Z.desktop),y=s.ZP.div(c||(c=(0,l.Z)(["\n  @media "," {\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    margin-left: auto;\n    margin-right: auto;\n    height: 250px;\n    width: 274px;\n  }\n\n  @media "," {\n    background-image: url(",");\n    width: 452px;\n    height: 412px;\n    margin-bottom: 32px;\n    margin-right: 32px;\n  }\n"])),u.Z.tablet,p,u.Z.desktop,w)},2616:function(A,n,e){A.exports=e.p+"static/media/Log_img_desctop.9ba04be8971316586062.png"},5418:function(A,n,e){A.exports=e.p+"static/media/Log_img_tablet.fa07888e831f6341be4d.png"},3478:function(A){A.exports="data:image/png;base64,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"},128:function(A,n,e){A.exports=e.p+"static/media/Reg_img_desctop.3a70813e7bb97d3c7ce2.png"},5257:function(A,n,e){A.exports=e.p+"static/media/Reg_img_tablet.ddae50acd944c8d2a830.png"},2695:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=68.53906cb4.chunk.js.map