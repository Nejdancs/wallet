"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[872],{7664:function(n,e,t){t.r(e),t.d(e,{default:function(){return Wn}});var o=t(1413),i=t(885),r=t(2791),a=t(5607),l=t(1358),d=[{Header:"Date",accessor:"date",disableFilters:!0,sticky:"centre"},{Header:"Type",accessor:"type",sticky:"centre"},{Header:"Category",accessor:"category",sticky:"centre"},{Header:"Comment",accessor:"comment"},{Header:"Sum",accessor:"amount",sticky:"right"},{Header:"Balance",accessor:"balance"}],s=t(5984),c=t(5694),p=t(4164),h=t(5705),x=t(1724),f=t(5568);var g=t.p+"static/media/plus.6148b25880e82f256d591624f4e24e8f.svg";var u,m,b,Z,y,j,w,P,v=t.p+"static/media/minus.726dc1e8b582e729172a0e66a2cc0dd3.svg",k=t(168),C=t(6031),S=C.ZP.div(u||(u=(0,k.Z)(["\n  padding: 0;\n  margin: 0;\n\n  height: 40px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-content: center;\n\n  gap: 20px;\n  margin-bottom: 40px;\n"]))),z=C.ZP.label(m||(m=(0,k.Z)(["\n  position: relative;\n\n  width: 80px;\n  height: 40px;\n"]))),F=C.ZP.div(b||(b=(0,k.Z)(["\n  position: absolute;\n  cursor: pointer;\n\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  border: 1px solid #e0e0e0;\n  border-radius: 30px;\n\n  :before {\n    position: absolute;\n    content: '';\n    height: 44px;\n    width: 44px;\n    top: -2px;\n    left: 34px;\n\n    background-color: #ff6596;\n    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);\n\n    border-radius: 50%;\n  }\n"]))),H=C.ZP.span(Z||(Z=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n\n  color: #e0e0e0;\n"]))),T=C.ZP.span(y||(y=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  color: #e0e0e0;\n"]))),D=C.ZP.img(j||(j=(0,k.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 6px;\n"]))),B=C.ZP.img(w||(w=(0,k.Z)(["\n  position: absolute;\n  top: 18px;\n  right: 12px;\n"]))),M=C.ZP.input(P||(P=(0,k.Z)(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n  &:checked + "," {\n    &::before {\n      transform: translateX(-40px);\n      background-color: #24cca7;\n      box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);\n    }\n  }\n"])),F),N=t(184),R=function(n){var e=n.onChange,t=(0,r.useState)(!1),o=(0,i.Z)(t,2),a=o[0],l=o[1];return(0,N.jsxs)(S,{children:[(0,N.jsx)(H,{style:{color:a?"#24cca7":"#e0e0e0"},children:"Income"}),(0,N.jsxs)(z,{children:[(0,N.jsx)(M,{type:"checkbox",onChange:function(n){l(n.target.checked),e(n.target.checked)}}),(0,N.jsx)(F,{children:a?(0,N.jsx)(D,{src:g,alt:"plus"}):(0,N.jsx)(B,{src:v,alt:"minus"})})]}),(0,N.jsx)(T,{style:{color:a?"#e0e0e0":"#ff6596"},children:"Expense"})]})};var q,A,E,Y,_,G,I,V,J,O,X,K,L,Q,U,W,$,nn,en,tn,on,rn,an,ln,dn,sn,cn,pn=t.p+"static/media/date-range.d1038c99b2af3ff3a6013f3776bebf08.svg",hn=t(1799),xn=t.n(hn),fn=(t(1778),function(){var n=(0,r.useState)(new Date),e=(0,i.Z)(n,2),t=e[0];e[1];return(0,N.jsx)(xn(),{timeFormat:!1,initialValue:t,closeOnSelect:!0,dateFormat:"DD.MM.YYYY",inputProps:{className:"dateInput"}})}),gn=t(252),un=[{value:"Main",label:"Main"},{value:"Food",label:"Food"},{value:"Auto",label:"Auto"},{value:"Development",label:"Development"},{value:"Children",label:"Children"},{value:"House",label:"House"},{value:"Education",label:"Education"},{value:"Reset",label:"Reset"}],mn=function(){var n=(0,r.useState)(""),e=(0,i.Z)(n,2);e[0],e[1];return(0,N.jsx)(gn.ZP,{unstyled:!0,classNamePrefix:"custom-select",options:un,placeholder:"Select a category",styles:{option:function(n,e){return(0,o.Z)((0,o.Z)({},n),{},{color:e.isFocused?"#ff6596":"black",background:e.isFocused?"#ffffff":""})}}})},bn=C.ZP.div(q||(q=(0,k.Z)(["\n  position: relative;\n"]))),Zn=C.ZP.img(A||(A=(0,k.Z)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n"]))),yn=C.ZP.div(E||(E=(0,k.Z)(["\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.25);\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),jn=C.ZP.div(Y||(Y=(0,k.Z)(["\n  position: absolute;\n  top: 60px;\n  width: 320px;\n\n  padding: 20px;\n\n  background-color: #ffffff;\n  @media screen and (min-widrh: 768px) {\n    position: absolute;\n    width: 540px;\n    padding: 40px 60px;\n    border-radius: 20px;\n  }\n"]))),wn=C.ZP.h2(_||(_=(0,k.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 45px;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),Pn=C.ZP.button(G||(G=(0,k.Z)(["\n  position: absolute;\n  padding: 0;\n  top: 20px;\n  right: 20px;\n\n  width: 18px;\n  height: 18px;\n\n  border: none;\n  outline: none;\n\n  border-radius: 50%;\n  background-color: #ffffff;\n"]))),vn=C.ZP.div(I||(I=(0,k.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]))),kn=(0,C.ZP)(h.gN)(V||(V=(0,k.Z)(["\n  border: none;\n  padding: 8px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  /* width: 180px;\n  height: 30px; */\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #bdbdbd;\n\n  :hover,\n  :focus {\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n"]))),Cn=((0,C.ZP)(h.gN)(J||(J=(0,k.Z)(["\n  border: none;\n  outline: none;\n\n  height: 30px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #bdbdbd;\n"]))),C.ZP.option(O||(O=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  display: flex;\n  align-items: center;\n\n  color: #000000;\n"])))),Sn=(0,C.ZP)(h.gN)(X||(X=(0,k.Z)(["\n  border: none;\n  padding: 8px;\n  margin-bottom: 40px;\n\n  height: 30px;\n  width: 100%;\n\n  border-bottom: 1px solid #e0e0e0;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #bdbdbd;\n\n  :hover,\n  :focus {\n    outline: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n"]))),zn=C.ZP.ul(K||(K=(0,k.Z)(["\n  display: grid;\n\n  justify-content: center;\n  gap: 20px;\n"]))),Fn=C.ZP.button(L||(L=(0,k.Z)(["\n  width: 300px;\n  height: 50px;\n\n  padding: 0;\n\n  background: #ffffff;\n  border: 1px solid #4a56e2;\n  border-radius: 20px;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  text-align: center;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n\n  color: #4a56e2;\n\n  :hover,\n  :focus {\n    border: none;\n    background-color: #24cca7;\n    color: #ffffff;\n  }\n"]))),Hn=document.querySelector("#modal-root"),Tn={category:"",total:"",date:"",comment:""},Dn=x.Ry().shape({category:x.Z_().required(),total:x.Z_().required(),date:x.Z_().required()}),Bn=function(n){var e=n.onClick,t=(0,r.useState)(!1),o=(0,i.Z)(t,2),a=o[0],l=o[1],d=(0,r.useState)(""),s=(0,i.Z)(d,2);s[0],s[1],["Main","Food","Auto","Development","Children","House","Education","Reset"].map((function(n,e){return(0,N.jsx)(Cn,{children:n},e)}));return(0,p.createPortal)((0,N.jsx)(yn,{children:(0,N.jsxs)(jn,{children:[(0,N.jsx)(wn,{children:"Add transaction"}),(0,N.jsx)(Pn,{type:"button",onClick:e,children:(0,N.jsx)("img",{src:f.Z,alt:"close"})}),(0,N.jsx)(R,{onChange:function(n){l(n)}}),(0,N.jsx)(h.J9,{initialValues:Tn,validationSchema:Dn,onSubmit:function(n,e){var t=e.resetForm;console.log(n),t()},children:(0,N.jsxs)(h.l0,{autoComplete:"off",children:[!a&&(0,N.jsx)(h.gN,{as:mn}),(0,N.jsxs)(vn,{children:[(0,N.jsx)(kn,{type:"text",name:"total",placeholder:"0.00"}),(0,N.jsxs)(bn,{children:[(0,N.jsx)(kn,{type:"date",name:"date",as:fn}),(0,N.jsx)(Zn,{src:pn,alt:"calendar"})]})]}),(0,N.jsx)(Sn,{type:"text",name:"comment",placeholder:"Comment"}),(0,N.jsxs)(zn,{children:[(0,N.jsx)("li",{children:(0,N.jsx)(Fn,{type:"submit",children:"Add"})}),(0,N.jsx)("li",{children:(0,N.jsx)(Fn,{type:"button",children:"Cancel"})})]})]})})]})}),Hn)},Mn=[{date:"04.01.19",type:"+",category:"other",comment:"gift",amount:"300.00",balance:"6900.00"},{date:"05.01.19",type:"-",category:"car",comment:"oil",amount:"200.00",balance:"6700.00"},{date:"06.01.19",type:"-",category:"products",comment:"meat",amount:"1000.00",balance:"7700.00"}],Nn=C.ZP.div(Q||(Q=(0,k.Z)(["\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n"]))),Rn=C.ZP.tbody(U||(U=(0,k.Z)(["\n  width: 100%;\n  border-left: 5px solid\n    ",";\n"])),(function(n){return"+"===n.type?n.theme.colors.incomeColor:n.theme.colors.expenseColor})),qn=C.ZP.td(W||(W=(0,k.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  padding: 10px 15px;\n"]))),An=C.ZP.td($||($=(0,k.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: right;\n  word-wrap: break-word;\n  color: #000;\n  padding: 10px 20px 10px 0;\n"]))),En=C.ZP.tr(nn||(nn=(0,k.Z)(["\n  &:not(:last-child) {\n    border-bottom: 1px solid #dcdcdf;\n    box-shadow: 0px 1px 0px rgb(255 255 255 / 60%);\n  }\n"]))),Yn=C.ZP.table(en||(en=(0,k.Z)(["\n  background-color: #ffffff;\n  border-radius: 10px;\n  width: 100%;\n  border-collapse: collapse;\n  overflow: hidden;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  td {\n    border: none !important;\n  }\n"]))),_n=function(){var n=(0,r.useMemo)((function(){return d}),[]),e=Mn,t=(0,l.useTable)({columns:n,data:e},l.useSortBy),i=t.getTableProps,a=t.getTableBodyProps,s=t.rows;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(Nn,{children:s.map((function(n,t){return(0,N.jsx)(Yn,(0,o.Z)((0,o.Z)({},i()),{},{children:(0,N.jsxs)(Rn,(0,o.Z)((0,o.Z)({type:e[t].type},a()),{},{children:[(0,N.jsxs)(En,{children:[(0,N.jsx)(qn,{children:"Date"}),(0,N.jsx)(An,{children:e[t].date})]}),(0,N.jsxs)(En,{children:[(0,N.jsx)(qn,{children:"Type"}),(0,N.jsx)(An,{children:e[t].type})]}),(0,N.jsxs)(En,{children:[(0,N.jsx)(qn,{children:"Category"}),(0,N.jsx)(An,{children:e[t].category})]}),(0,N.jsxs)(En,{children:[(0,N.jsx)(qn,{children:"Comment"}),(0,N.jsx)(An,{children:e[t].comment})]}),(0,N.jsxs)(En,{children:[(0,N.jsx)(qn,{children:"Sum"}),(0,N.jsx)(An,{style:"+"===e[t].type?{color:"#24cca7"}:{color:"#ff6596"},children:e[t].amount})]}),(0,N.jsxs)(En,{children:[(0,N.jsx)(qn,{children:"Balance"}),(0,N.jsx)(An,{children:e[t].balance})]})]}),n.id)}),t)}))})})},Gn=t(245),In=C.ZP.div(tn||(tn=(0,k.Z)(["\n    margin-top: 20px;\n    padding: 20px;\n    text-align: center;\n    @media "," {\n        width: 700px;\n        margin-top: 100px;\n    }\n"])),Gn.Z.tablet),Vn=C.ZP.span(on||(on=(0,k.Z)(["\n    font-family: Poppins;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 45px;\n    letter-spacing: 0em;\n"]))),Jn=function(){return(0,N.jsx)(In,{children:(0,N.jsx)(Vn,{children:"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})},On=C.ZP.div(rn||(rn=(0,k.Z)(["\n  td {\n    border-bottom: 1px solid #dcdcdf;\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n  }\n\n  th:last-child,\n  td:last-child {\n    border-right: 0;\n  }\n\n  @media "," {\n    padding-top: 46px;\n    padding-left: 69px;\n  }\n"])),Gn.Z.desktop),Xn=C.ZP.table(an||(an=(0,k.Z)(["\n  width: 100%;\n\n  /* position: absolute;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  color: currentColor;\n  clip: rect(0 0 0 0);\n  overflow: hidden; */\n\n  td {\n    table-layout: fixed;\n    width: 114.66 px;\n    overflow: hidden;\n    word-wrap: break-word;\n    padding: 10px;\n    padding-top: 14px;\n    padding-bottom: 14px;\n    text-align: center;\n  }\n\n  td:nth-child(1) {\n    color: #000!important;\n  }\n\n  td:nth-child(2) {\n    color: #000!important;\n  }\n\n  td:nth-child(3) {\n    text-align: left;\n    color: #000!important;\n  }\n\n  th:nth-child(3) {\n    text-align: left;\n  }\n\n  td:nth-child(4) {\n    text-align: left;\n    color: #000!important;\n  }\n\n  td:nth-child(5) {\n    text-align: right;\n    font-weight: 700;\n  }\n\n  td:nth-child(6) {\n    text-align: right;\n    padding-right: 20px;\n    color: #000!important;\n  }\n\n  th:nth-child(5) {\n    text-align: right;\n  }\n\n  th:nth-child(6) {\n    text-align: right;\n    padding-right: 20px;\n  }\n\n  @media "," {\n    margin: 0px;\n    position: static;\n    display: table;\n    border-spacing: 0px;\n    height: auto;\n    table-layout: fixed;\n  }\n"])),Gn.Z.tablet),Kn=C.ZP.thead(ln||(ln=(0,k.Z)(["\n  th:first-child {\n    background: #ffffff;\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n  }\n\n  th:last-child {\n    background: #ffffff;\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n  }\n\n  th {\n    padding: 10px;\n    text-align: center;\n  }\n\n  th:not(:first-child) {\n    background: #ffffff;\n  }\n"]))),Ln=C.ZP.th(dn||(dn=(0,k.Z)(["\n  font-family: Circe;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 27px;\n"]))),Qn=C.ZP.tr(sn||(sn=(0,k.Z)(["\n  &:not(:nth-child(5)) {\n    color: #000;\n  }\n"]))),Un=C.ZP.td(cn||(cn=(0,k.Z)(["\n  font-family: Circe;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  text-align: right;\n  word-wrap: break-word;\n  color: #000;\n\n  th {\n    table-layout: fixed;\n    width: 114.66 px;\n    overflow: hidden;\n    word-wrap: break-word;\n\n    padding: 10px;\n    text-align: center;\n  }\n"]))),Wn=function(){var n=(0,r.useState)(!1),e=(0,i.Z)(n,2),t=e[0],p=e[1],h=(0,r.useMemo)((function(){return d}),[]),x=Mn,f=(0,l.useTable)({columns:h,data:x},l.useSortBy),g=f.getTableProps,u=f.getTableBodyProps,m=f.headerGroups,b=f.rows,Z=f.prepareRow;return(0,N.jsxs)(N.Fragment,{children:[x.length>0?(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(a.Z,{queries:{mobile:"(min-width: 768px)"},children:function(n){var e=n.mobile;return(0,N.jsx)(On,{children:e?(0,N.jsxs)(Xn,(0,o.Z)((0,o.Z)({},g()),{},{children:[(0,N.jsx)(Kn,{children:m.map((function(n){return(0,N.jsx)("tr",(0,o.Z)((0,o.Z)({},n.getHeaderGroupProps()),{},{children:n.headers.map((function(n){return(0,N.jsx)(Ln,(0,o.Z)((0,o.Z)({},n.getHeaderProps(n.getSortByToggleProps())),{},{children:n.render("Header")}),(function(){(0,s.x0)()}))}))}),(function(){(0,s.x0)()}))}))}),(0,N.jsx)("tbody",(0,o.Z)((0,o.Z)({},u()),{},{children:b.map((function(n){return Z(n),(0,N.jsx)(Qn,(0,o.Z)((0,o.Z)({},n.getRowProps()),{},{children:n.cells.map((function(e){return(0,N.jsx)(Un,(0,o.Z)((0,o.Z)({style:"+"===n.values.type?{color:"#24cca7"}:{color:"#ff6596"}},e.getCellProps()),{},{children:e.render("Cell")}),(function(){(0,s.x0)()}))}))}),(function(){(0,s.x0)()}))}))}))]})):(0,N.jsx)(_n,{})})}})}):(0,N.jsx)(Jn,{}),(0,N.jsx)(c.Z,{onClick:function(){p(!0)}}),t&&(0,N.jsx)(Bn,{onClick:function(){p(!1)}})]})}}}]);
//# sourceMappingURL=872.29eb1b60.chunk.js.map