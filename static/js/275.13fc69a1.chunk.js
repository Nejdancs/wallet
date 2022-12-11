"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[275],{5568:function(n,e,t){t(2791);e.Z=t.p+"static/media/close.4ca60f1813426122dabf98a3268fb691.svg"},245:function(n,e){e.Z={mobile:"screen and (min-width: 480px)",tablet:"screen and (min-width: 768px)",desktop:"screen and (min-width: 1280px)",maxTablet:"screen and (max-width: 767px)"}},5592:function(n,e,t){t.r(e),t.d(e,{default:function(){return et}});var o=t(5861),i=t(885),r=t(4687),a=t.n(r),s=t(2791);var l,c,d=t.p+"static/media/plus.6148b25880e82f256d591624f4e24e8f.svg",p=t(168),x=t(6031),f=t(245),h=x.ZP.img(l||(l=(0,p.Z)(["\n  width: 20px;\n  height: 20px;\n\n  color: ",";\n\n  margin: auto;\n"])),(function(n){return n.theme.colors.secondaryTextColor})),u=x.ZP.button(c||(c=(0,p.Z)(["\n  cursor: pointer;\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  width: 44px;\n  height: 44px;\n\n  background-color: #24cca7;\n\n  border-radius: 50%;\n\n  border: none;\n  outline: none;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover,\n  &:focus {\n    background-color: rgb(7, 126, 100);\n  }\n\n  @media "," {\n    right: 40px;\n    bottom: 40px;\n  }\n"])),f.Z.desktop),g=t(184),m=function(n){var e=n.onClick;return(0,g.jsx)(u,{type:"button",onClick:e,children:(0,g.jsx)(h,{src:d,alt:"plus"})})},b=t(9434),Z=t(4164),w=t(5705),y=t(9085),j=t(8880),v=t(1799),P=t.n(v),k=(t(5462),t(1778),t(5568));var C,S,z,T,E,M,D,L,N=t.p+"static/media/minus.726dc1e8b582e729172a0e66a2cc0dd3.svg",F=x.ZP.form(C||(C=(0,p.Z)(["\n  padding: 0;\n  margin: 0;\n\n  height: 40px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-content: center;\n\n  gap: 20px;\n  margin-bottom: 40px;\n"]))),O=x.ZP.label(S||(S=(0,p.Z)(["\n  position: relative;\n\n  width: 80px;\n  height: 40px;\n"]))),H=x.ZP.div(z||(z=(0,p.Z)(["\n  position: absolute;\n  cursor: pointer;\n\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  border: 1px solid #e0e0e0;\n  border-radius: 30px;\n\n  :before {\n    position: absolute;\n    content: '';\n    height: 44px;\n    width: 44px;\n    top: -2px;\n    left: 34px;\n\n    background-color: #ff6596;\n    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);\n\n    border-radius: 50%;\n  }\n"]))),I=x.ZP.span(T||(T=(0,p.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n\n  color: #e0e0e0;\n"]))),Y=x.ZP.span(E||(E=(0,p.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  color: #e0e0e0;\n"]))),B=x.ZP.img(M||(M=(0,p.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 6px;\n"]))),A=x.ZP.img(D||(D=(0,p.Z)(["\n  position: absolute;\n  top: 18px;\n  right: 12px;\n"]))),V=x.ZP.input(L||(L=(0,p.Z)(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n  &:checked + "," {\n    &::before {\n      transform: translateX(-40px);\n      background-color: #24cca7;\n      box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);\n    }\n  }\n"])),H),_=function(n){var e=n.onLoad,t=(0,s.useState)(!1),o=(0,i.Z)(t,2),r=o[0],a=o[1],l=(0,s.useState)("Expense"),c=(0,i.Z)(l,2),p=c[0],x=c[1];return(0,g.jsxs)(F,{onLoad:function(){e(p)},onChange:function(n){a(n.target.checked),x(r?"Expense":"Income")},children:[(0,g.jsx)(I,{type:"text",name:"income",style:{color:r?"#24cca7":"#e0e0e0"},children:"Income"}),(0,g.jsxs)(O,{children:[(0,g.jsx)(V,{type:"checkbox"}),(0,g.jsx)(H,{children:r?(0,g.jsx)(B,{src:d,alt:"plus"}):(0,g.jsx)(A,{src:N,alt:"minus"})})]}),(0,g.jsx)(Y,{ype:"text",name:"expense",style:{color:r?"#e0e0e0":"#ff6596"},children:"Expense"})]})};var q,G,J,R,X,K,Q,U,W,$,nn,en,tn=t.p+"static/media/date-range.d1038c99b2af3ff3a6013f3776bebf08.svg",on=t(1413),rn=function(n){return n.transaction.category},an=t(252),sn=function(n){var e=n.onChange,t=n.typeOfOperation,o=(0,b.v9)(rn),i=o.expenses,r=void 0===i?[]:i,a=o.income,l=void 0===a?[]:a,c=r.map((function(n){return{value:n._id,label:n.name}})),d=l.map((function(n){return{value:n._id,label:n.name}})),p=(0,b.I0)();return(0,s.useEffect)((function(){p(j.Z.getCategory())}),[p]),(0,g.jsx)(an.ZP,{options:"Expense"===t?c:d,typeOfOperation:t,onChange:function(n){e(n.value)},unstyled:!0,classNamePrefix:"custom-select",placeholder:"Select a category",styles:{option:function(n,e){return(0,on.Z)((0,on.Z)({},n),{},{color:e.isFocused?"#ff6596":"black",background:e.isFocused?"#ffffff":""})}}})},ln=function(n){y.Am.error("Please enter the transaction ".concat(n,"!!"),{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},cn=x.ZP.div(q||(q=(0,p.Z)(["\n  position: relative;\n"]))),dn=x.ZP.img(G||(G=(0,p.Z)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n"]))),pn=x.ZP.div(J||(J=(0,p.Z)(["\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.25);\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n"]))),xn=x.ZP.div(R||(R=(0,p.Z)(["\n  position: absolute;\n  top: 60px;\n  width: 320px;\n\n  padding: 20px;\n\n  background-color: #ffffff;\n\n  z-index: 2;\n"]))),fn=x.ZP.h2(X||(X=(0,p.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 45px;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),hn=x.ZP.button(K||(K=(0,p.Z)(["\n  position: absolute;\n  padding: 0;\n  top: 20px;\n  right: 20px;\n\n  width: 18px;\n  height: 18px;\n\n  border: none;\n  outline: none;\n\n  border-radius: 50%;\n  background-color: #ffffff;\n  cursor: pointer;\n"]))),un=(0,x.ZP)(w.gN)(Q||(Q=(0,p.Z)(["\n  border: none;\n  padding: 8px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  /* width: 180px;\n  height: 30px; */\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #000000;\n\n  :hover,\n  :focus {\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n"]))),gn=((0,x.ZP)(w.gN)(U||(U=(0,p.Z)(["\n  border: none;\n  outline: none;\n\n  height: 30px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #bdbdbd;\n"]))),x.ZP.option(W||(W=(0,p.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n\n  color: #000000;\n"]))),(0,x.ZP)(w.gN)($||($=(0,p.Z)(["\n  border: none;\n  padding: 8px;\n  margin-bottom: 40px;\n\n  height: 30px;\n  width: 100%;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #000000;\n\n  :hover,\n  :focus {\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n"])))),mn=x.ZP.ul(nn||(nn=(0,p.Z)(["\n  display: grid;\n\n  justify-content: center;\n  gap: 20px;\n"]))),bn=x.ZP.button(en||(en=(0,p.Z)(["\n  width: 300px;\n  height: 50px;\n\n  padding: 0;\n\n  background: #ffffff;\n  border: 1px solid #4a56e2;\n  border-radius: 20px;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  text-align: center;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n\n  color: #4a56e2;\n\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    border: none;\n    background-color: #24cca7;\n    color: #ffffff;\n  }\n"]))),Zn=document.querySelector("#modal-root"),wn=function(n){n.showModal;var e=n.setShowModal,t=(0,s.useState)(!1),o=(0,i.Z)(t,2),r=(o[0],o[1],(0,s.useState)("")),a=(0,i.Z)(r,2),l=a[0],c=a[1],d=(0,s.useState)(new Date),p=(0,i.Z)(d,2),x=p[0],f=p[1],h=(0,s.useState)("Expense"),u=(0,i.Z)(h,2),m=u[0],y=u[1],v=(0,b.I0)(),C=(0,s.useCallback)((function(n){var t;(null!==(t="Escape"===n.code)&&void 0!==t?t:n.target===n.currentTarget)&&e(!1)}),[e]);return(0,s.useEffect)((function(){return window.addEventListener("keydown",C),function(){window.removeEventListener("keydown",C)}}),[e,C]),(0,Z.createPortal)((0,g.jsx)(pn,{onClick:C,children:(0,g.jsxs)(xn,{children:[(0,g.jsx)(fn,{children:"Add transaction"}),(0,g.jsx)(hn,{type:"button",onClick:function(){e(!1)},children:(0,g.jsx)("img",{src:k.Z,alt:"close"})}),(0,g.jsx)(_,{onLoad:function(n){y(n)}}),(0,g.jsx)(w.J9,{initialValues:{total:0,comment:""},onSubmit:function(n,t){var o=t.resetForm,i={type:m,category:l,total:n.total,date:x.toLocaleDateString(),comment:n.comment};""!==i.total?""!==i.category?(v(j.Z.createTransaction(i)),o(),e(!1)):ln("category"):ln("total")},children:(0,g.jsxs)(w.l0,{autoComplete:"off",children:[(0,g.jsx)(sn,{onChange:function(n){c(n)}}),(0,g.jsxs)("div",{children:[(0,g.jsx)(un,{type:"text",name:"total",placeholder:"0.00"}),(0,g.jsxs)(cn,{children:[(0,g.jsx)(P(),{timeFormat:!1,initialValue:x,closeOnSelect:!0,dateFormat:"DD.MM.YYYY",inputProps:{className:"dateInput"},onChange:function(n){return f(n._d)}}),(0,g.jsx)(dn,{src:tn,alt:"calendar"})]})]}),(0,g.jsx)(gn,{type:"text",name:"comment",placeholder:"Comment"}),(0,g.jsxs)(mn,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(bn,{type:"submit",children:"Add"})}),(0,g.jsx)("li",{children:(0,g.jsx)(bn,{type:"button",onClick:function(){e(!1)},children:"Cancel"})})]})]})})]})}),Zn)};var yn,jn,vn,Pn,kn,Cn,Sn,zn,Tn,En,Mn,Dn,Ln,Nn,Fn,On,Hn=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.matchMedia(n).matches,t=(0,s.useState)(e),o=(0,i.Z)(t,2),r=o[0],a=o[1];return(0,s.useEffect)((function(){var e=window.matchMedia(n);e.matches!==r&&a(e.matches);var t=function(){return a(e.matches)};return e.addListener(t),function(){return e.removeListener(t)}}),[n,r]),r},In=x.ZP.div(yn||(yn=(0,p.Z)(["\n  position: relative;\n"]))),Yn=x.ZP.img(jn||(jn=(0,p.Z)(["\n  position: absolute;\n\n  right: 0;\n  top: 0;\n"]))),Bn=x.ZP.div(vn||(vn=(0,p.Z)(["\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.25);\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),An=x.ZP.div(Pn||(Pn=(0,p.Z)(["\n  position: absolute;\n\n  width: 320px;\n\n  padding: 20px;\n\n  background-color: #ffffff;\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    width: 540px;\n    padding: 40px 60px;\n    border-radius: 20px;\n  }\n"]))),Vn=x.ZP.h2(kn||(kn=(0,p.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 45px;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),_n=x.ZP.img(Cn||(Cn=(0,p.Z)(["\n  width: 18px;\n  height: 18px;\n"]))),qn=x.ZP.button(Sn||(Sn=(0,p.Z)(["\n  position: absolute;\n  padding: 0;\n  top: 20px;\n  right: 20px;\n\n  width: 18px;\n  height: 18px;\n\n  border: none;\n  outline: none;\n\n  border-radius: 50%;\n  background-color: #ffffff;\n  cursor: pointer;\n\n  &:focus > "," {\n    fill: #24cca7;\n  }\n"])),_n),Gn=x.ZP.div(zn||(zn=(0,p.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]))),Jn=(0,x.ZP)(w.gN)(Tn||(Tn=(0,p.Z)(["\n  border: none;\n  padding: 8px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    width: 180px;\n    height: 30px;\n  }\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #000000;\n\n  :hover,\n  :focus {\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n"]))),Rn=((0,x.ZP)(w.gN)(En||(En=(0,p.Z)(["\n  border: none;\n  outline: none;\n\n  height: 30px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #bdbdbd;\n"]))),x.ZP.option(Mn||(Mn=(0,p.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n\n  color: #000000;\n"]))),(0,x.ZP)(w.gN)(Dn||(Dn=(0,p.Z)(["\n  border: none;\n  padding: 8px;\n  margin-bottom: 40px;\n\n  height: 30px;\n  width: 100%;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #000000;\n\n  :hover,\n  :focus {\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n"])))),Xn=x.ZP.div(Ln||(Ln=(0,p.Z)(["\n  display: grid;\n\n  justify-content: center;\n  gap: 20px;\n"]))),Kn=x.ZP.button(Nn||(Nn=(0,p.Z)(["\n  width: 300px;\n  height: 50px;\n\n  padding: 0;\n\n  background: #ffffff;\n  border: 1px solid #4a56e2;\n  border-radius: 20px;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  text-align: center;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n\n  color: #4a56e2;\n\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    border: none;\n    background-color: #24cca7;\n    color: #ffffff;\n  }\n"]))),Qn=document.querySelector("#modal-root"),Un=function(n){var e=n.showModal,t=n.setShowModal,o=(0,s.useState)(!1),r=(0,i.Z)(o,2),a=(r[0],r[1],(0,s.useState)("")),l=(0,i.Z)(a,2),c=l[0],d=l[1],p=(0,s.useState)(new Date),x=(0,i.Z)(p,2),f=x[0],h=x[1],u=(0,s.useState)("Expense"),m=(0,i.Z)(u,2),v=m[0],C=m[1],S=(0,b.I0)(),z=Hn("(max-width: 767px)"),T=(0,s.useCallback)((function(n){var e;(null!==(e="Escape"===n.code)&&void 0!==e?e:n.target===n.currentTarget)&&t(!1)}),[t]);return(0,s.useEffect)((function(){return window.addEventListener("keydown",T),function(){window.removeEventListener("keydown",T)}}),[t,T]),(0,Z.createPortal)((0,g.jsxs)(Bn,{onClick:T,children:[z?(0,g.jsx)(wn,{showModal:e,setShowModal:t}):(0,g.jsxs)(An,{children:[(0,g.jsx)(Vn,{children:"Add transaction"}),(0,g.jsx)(qn,{type:"button",onClick:function(){t(!1)},children:(0,g.jsx)(_n,{src:k.Z,alt:"close"})}),(0,g.jsx)(_,{onLoad:function(n){C(n)}}),(0,g.jsx)(w.J9,{initialValues:{total:0,comment:""},onSubmit:function(n,e){var o=e.resetForm,i={type:v.toLocaleLowerCase(),category:c,amount:Number(n.total),date:f.toLocaleDateString(),comment:n.comment};null!==i.total?""!==i.category?(S(j.Z.createTransaction(i)),o(),t(!1)):ln("category"):ln("total")},children:(0,g.jsxs)(w.l0,{autoComplete:"off",children:[(0,g.jsx)(sn,{typeOfOperation:v,onChange:function(n){d(n)},style:{color:"#000000"}}),(0,g.jsxs)(Gn,{children:[(0,g.jsx)(Jn,{style:{textAlign:"center"},type:"number",name:"total",placeholder:"0.00"}),(0,g.jsxs)(In,{children:[(0,g.jsx)(P(),{timeFormat:!1,initialValue:f,closeOnSelect:!0,dateFormat:"DD.MM.YYYY",inputProps:{className:"dateInput"},onChange:function(n){return h(n._d)}}),(0,g.jsx)(Yn,{src:tn,alt:"calendar"})]})]}),(0,g.jsx)(Rn,{type:"text",name:"comment",placeholder:"Comment"}),(0,g.jsxs)(Xn,{children:[(0,g.jsx)(Kn,{type:"submit",children:"Add"}),(0,g.jsx)(Kn,{type:"button",onClick:function(){t(!1)},children:"Cancel"})]})]})})]}),(0,g.jsx)(y.Ix,{})]}),Qn)},Wn=x.ZP.div(Fn||(Fn=(0,p.Z)(["\n    margin-top: 20px;\n    padding: 20px;\n    text-align: center;\n    @media "," {\n        width: 700px;\n        margin-top: 100px;\n    }\n"])),f.Z.tablet),$n=x.ZP.span(On||(On=(0,p.Z)(["\n    font-family: Poppins;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 45px;\n    letter-spacing: 0em;\n"]))),ne=function(){return(0,g.jsx)(Wn,{children:(0,g.jsx)($n,{children:"No Transactions"})})},ee=t(851),te=t(5607),oe=t(1358),ie=[{Header:"Date",accessor:"date",disableFilters:!0,sticky:"centre",sortType:function(n,e,t){var o=n.values[t].split("."),i=e.values[t].split(".");o.splice(0,2,o[1],o[0]),i.splice(0,2,i[1],i[0]);var r=o.join("."),a=i.join(".");return new Date(r)>new Date(a)?1:new Date(a)>new Date(r)?-1:0}},{Header:"Type",accessor:"type",sticky:"centre"},{Header:"Category",accessor:"category",sticky:"centre"},{Header:"Comment",accessor:"comment"},{Header:"Sum",accessor:"amount",sticky:"right"},{Header:"Balance",accessor:"balance"}],re=t(5984);var ae=t.p+"static/media/arrow-left.aab4f4cb76b5866cac53aba872eaf928.svg";var se,le,ce,de,pe,xe,fe,he,ue,ge,me,be,Ze,we,ye,je,ve,Pe,ke,Ce,Se,ze,Te=t.p+"static/media/arrow-right.413660051b5529a59b84f8a6e081e72a.svg",Ee=x.ZP.div(se||(se=(0,p.Z)(["\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n"]))),Me=x.ZP.tbody(le||(le=(0,p.Z)(["\n  width: 100%;\n  border-left: 5px solid\n    ",";\n"])),(function(n){return"+"===n.type?n.theme.colors.incomeColor:n.theme.colors.expenseColor})),De=x.ZP.td(ce||(ce=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  padding: 10px 15px;\n"]))),Le=x.ZP.td(de||(de=(0,p.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: right;\n  word-wrap: break-word;\n  color: #000;\n  padding: 10px 20px 10px 0;\n"]))),Ne=x.ZP.tr(pe||(pe=(0,p.Z)(["\n  &:not(:last-child) {\n    border-bottom: 1px solid #dcdcdf;\n    box-shadow: 0px 1px 0px rgb(255 255 255 / 60%);\n  }\n"]))),Fe=x.ZP.table(xe||(xe=(0,p.Z)(["\n  background-color: #ffffff;\n  border-radius: 10px;\n  width: 100%;\n  border-collapse: collapse;\n  overflow: hidden;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  td {\n    border: none !important;\n  }\n"]))),Oe=function(){var n=(0,s.useMemo)((function(){return ie}),[]),e=(0,s.useState)([]),t=(0,i.Z)(e,2),r=t[0],l=t[1];(0,s.useEffect)((function(){var n=function(){var n=(0,o.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ee.Z.getTransaction();case 2:e=n.sent,t=e.data,console.log(t),l(t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var c=(0,oe.useTable)({columns:n,data:r},oe.useSortBy),d=c.getTableProps,p=c.getTableBodyProps,x=c.rows;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(Ee,{children:x.map((function(n,e){return(0,g.jsx)(Fe,(0,on.Z)((0,on.Z)({},d()),{},{children:(0,g.jsxs)(Me,(0,on.Z)((0,on.Z)({type:r[e].type},p()),{},{children:[(0,g.jsxs)(Ne,{children:[(0,g.jsx)(De,{children:"Date"}),(0,g.jsx)(Le,{children:r[e].date})]}),(0,g.jsxs)(Ne,{children:[(0,g.jsx)(De,{children:"Type"}),(0,g.jsx)(Le,{children:r[e].type})]}),(0,g.jsxs)(Ne,{children:[(0,g.jsx)(De,{children:"Category"}),(0,g.jsx)(Le,{children:r[e].category})]}),(0,g.jsxs)(Ne,{children:[(0,g.jsx)(De,{children:"Comment"}),(0,g.jsx)(Le,{children:r[e].comment})]}),(0,g.jsxs)(Ne,{children:[(0,g.jsx)(De,{children:"Sum"}),(0,g.jsx)(Le,{style:"+"===r[e].type?{color:"#24cca7"}:{color:"#ff6596"},children:r[e].amount})]}),(0,g.jsxs)(Ne,{children:[(0,g.jsx)(De,{children:"Balance"}),(0,g.jsx)(Le,{children:r[e].balance})]})]}),n.id)}),e)}))})})},He=x.ZP.div(fe||(fe=(0,p.Z)(["\n  @media "," {\n    padding-top: 46px;\n    padding-left: 69px;\n  }\n"])),f.Z.desktop),Ie=x.ZP.table(he||(he=(0,p.Z)(["\n  @media "," {\n    width: 100%;\n    margin: 0px;\n    display: table;\n    border-spacing: 0px;\n    height: auto;\n    table-layout: fixed;\n  }\n\n  & .-sort-desc {\n    box-shadow: none !important;\n  }\n  .-sort-desc:before {\n    content: '\u25bc';\n    float: right;\n  }\n"])),f.Z.tablet),Ye=x.ZP.thead(ue||(ue=(0,p.Z)([""]))),Be=x.ZP.th(ge||(ge=(0,p.Z)(["\n  padding: 16px 10px;\n\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  text-align: left;\n\n  background: #ffffff;\n\n  :first-child {\n    width: 100px;\n    padding-left: 20px;\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n  }\n\n  :nth-child(2) {\n    width: 100px;\n    text-align: center;\n  }\n  :nth-child(3) {\n    width: 150px;\n  }\n\n  :nth-child(5) {\n    width: 110px;\n    text-align: right;\n  }\n\n  :last-child {\n    text-align: right;\n    padding-right: 20px;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n  }\n"]))),Ae=x.ZP.tr(me||(me=(0,p.Z)(["\n  height: 54px;\n"]))),Ve=x.ZP.td(be||(be=(0,p.Z)(["\n  table-layout: fixed;\n\n  overflow: hidden;\n  padding: 8px 10px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.12;\n  word-wrap: break-word;\n  text-align: left;\n\n  color: #000000;\n\n  border-bottom: 1px solid #dcdcdf;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n\n  :nth-child(2) {\n    text-align: center;\n  }\n\n  :nth-child(5) {\n    font-weight: 700;\n    text-align: right;\n\n    color: ",";\n  }\n\n  :nth-child(6) {\n    text-align: right;\n  }\n\n  :first-child {\n    padding-left: 20px;\n  }\n\n  :last-child {\n    padding-right: 20px;\n  }\n"])),(function(n){var e=n.fields,t=n.theme;return"+"===e.type?t.colors.incomeColor:t.colors.expenseColor})),_e=x.ZP.span(Ze||(Ze=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  right: -12px;\n  transform: translateY(-50%);\n  font-size: 12px;\n"]))),qe=x.ZP.div(we||(we=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  padding: 0 20px;\n"]))),Ge=x.ZP.div(ye||(ye=(0,p.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),Je=x.ZP.button(je||(je=(0,p.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 150px;\n    height: 40px;\n    background-color: #fff;\n    border-radius: 6px;\n    border: none;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);\n\n    &:hover {\n        background-color: #e0e0e0;\n    }\n\n    &:disabled {\n        background-color: #e0e0e0;\n        cursor: not-allowed;\n    }\n"]))),Re=x.ZP.div(ve||(ve=(0,p.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    font-weight: 500;\n    color: #757575;\n    margin-left: 20px;\n    margin-right: 20px;\n"]))),Xe=x.ZP.em(Pe||(Pe=(0,p.Z)(["\n    font-size: 16px;\n    font-weight: 500;\n    color: #757575;\n    margin-left: 3px;\n"]))),Ke=x.ZP.select(ke||(ke=(0,p.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 130px;\n    height: 40px;\n    background-color: #fff;\n    border: none;\n    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n    padding: 10px 20px;\n     outline: none;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    &:hover {\n        background-color: #e0e0e0;\n    }\n"]))),Qe=x.ZP.option(Ce||(Ce=(0,p.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 130px;\n    height: 40px;\n    background-color: #fff;\n    border: 1px solid #e0e0e0;\n    border-radius: 4px;\n    padding: 10px 20px;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    &:hover {\n        background-color: #e0e0e0;\n    }\n"]))),Ue=x.ZP.img(Se||(Se=(0,p.Z)(["\n    width: 15px;\n    height: 15px;\n    margin-right: 10px;\n"]))),We=x.ZP.img(ze||(ze=(0,p.Z)(["\n    width: 15px;\n    height: 15px;\n    margin-left: 10px;\n"]))),$e=[5,10,15,20];var nt=function(n){var e=n.data,t=(0,s.useMemo)((function(){return ie}),[]),o=(0,oe.useTable)({columns:t,data:e,initialState:{pageSize:5}},oe.useSortBy,oe.usePagination),i=o.getTableProps,r=o.getTableBodyProps,a=o.headerGroups,l=(o.rows,o.prepareRow),c=o.pageOptions,d=o.page,p=o.state,x=p.pageIndex,f=p.pageSize,h=(o.gotoPage,o.previousPage),u=o.nextPage,m=o.setPageSize,b=o.canPreviousPage,Z=o.canNextPage;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(te.Z,{queries:{mobile:"(min-width: 768px)"},children:function(n){var e=n.mobile;return(0,g.jsx)(He,{children:e?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Ie,(0,on.Z)((0,on.Z)({},i()),{},{children:[(0,g.jsx)(Ye,{children:a.map((function(n){return(0,g.jsx)("tr",(0,on.Z)((0,on.Z)({},n.getHeaderGroupProps()),{},{children:n.headers.map((function(n){return(0,g.jsx)(Be,(0,on.Z)((0,on.Z)({},n.getHeaderProps(n.getSortByToggleProps())),{},{children:(0,g.jsxs)("span",{style:{position:"relative"},children:[n.render("Header"),(0,g.jsx)(_e,{children:n.isSorted?n.isSortedDesc?"\u25bc":"\u25b2":null})]})}),(function(){(0,re.x0)()}))}))}),(function(){(0,re.x0)()}))}))}),(0,g.jsx)("tbody",(0,on.Z)((0,on.Z)({},r()),{},{children:d.map((function(n){return l(n),(0,g.jsx)(Ae,(0,on.Z)((0,on.Z)({},n.getRowProps()),{},{children:n.cells.map((function(e){return(0,g.jsx)(Ve,(0,on.Z)((0,on.Z)({fields:n.values},e.getCellProps()),{},{children:e.render("Cell")}),(function(){(0,re.x0)()}))}))}),(function(){(0,re.x0)()}))}))}))]})),(0,g.jsxs)(qe,{children:[(0,g.jsxs)(Ge,{children:[(0,g.jsxs)(Je,{onClick:function(){return h()},disabled:!b,children:[(0,g.jsx)(Ue,{src:ae}),"Previous Page"]}),(0,g.jsxs)(Re,{children:["Page"," ",(0,g.jsxs)(Xe,{children:[x+1," of ",c.length]})]}),(0,g.jsxs)(Je,{onClick:function(){return u()},disabled:!Z,children:["Next Page",(0,g.jsx)(We,{src:Te})]})]}),(0,g.jsx)(Ke,{value:f,onChange:function(n){m(Number(n.target.value))},children:$e.map((function(n){return(0,g.jsxs)(Qe,{value:n,children:["Show ",n]},n)}))})]})]}):(0,g.jsx)(Oe,{})})}})})};var et=function(){var n=(0,s.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1],l=(0,s.useState)([]),c=(0,i.Z)(l,2),d=c[0],p=c[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,o.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ee.Z.getTransaction();case 2:e=n.sent,t=e.data,p(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,g.jsxs)(g.Fragment,{children:[d.length>0?(0,g.jsx)(nt,{data:d}):(0,g.jsx)(ne,{}),(0,g.jsx)(m,{onClick:function(){r(!0)}}),t&&(0,g.jsx)(Un,{showModal:t,setShowModal:r})]})}}}]);
//# sourceMappingURL=275.13fc69a1.chunk.js.map