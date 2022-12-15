"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[782],{3782:function(n,e,t){t.r(e),t.d(e,{default:function(){return pn}});var a,i,r=t(1413),o=t(5861),s=t(885),l=t(4687),c=t.n(l),d=t(2791),u=t(9434),x=t(9085),p=t(851),h=t(8268),g=t(3623),f=t(3622),b=t(168),Z=t(6031),m=Z.ZP.div(a||(a=(0,b.Z)(["\n  position: relative;\n  margin-bottom: 32px;\n"]))),v=Z.ZP.p(i||(i=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n"]))),j=function(n){if(!n)return"0.00";var e=n.toFixed(2).toString().slice(-6),t=n.toFixed(2).toString().slice(-9,-6),a=n.toFixed(2).toString().slice(-12,-9),i=n.toFixed(2).toString().slice(-15,-12),r=n.toFixed(2).toString().slice(-18,-15);return r?"".concat(r," ").concat(i," ").concat(a," ").concat(t," ").concat(e):i?"".concat(i," ").concat(a," ").concat(t," ").concat(e):a?"".concat(a," ").concat(t," ").concat(e):t?"".concat(t," ").concat(e):e},A=t(5607),w=t(4925),y=t(8175),C=t(184),k=["width"],P=function(n){var e=n.width,t=(0,w.Z)(n,k);return(0,C.jsx)(y.ZP,(0,r.Z)((0,r.Z)({style:{width:e,height:e},speed:2,backgroundColor:"#efebff",foregroundColor:"#fff3e5"},t),{},{children:(0,C.jsx)("circle",{cx:e/2,cy:e/2,r:e/2})}))};h.kL.register(h.qi,h.u);var S,F,z,E,R,D,B,I,N,L,Q,M,q,T,U,X,Y=function(n){var e,t=n.balance,a=n.expenses,i=n.isLoading,r=function(){var n=(0,d.useRef)(),e=(0,d.useState)(null),t=(0,s.Z)(e,2),a=t[0],i=t[1],r=(0,d.useRef)(new ResizeObserver((function(n){var e=n[0].contentRect.width;i(e)})));return(0,d.useEffect)((function(){r.current.observe(n.current)}),[n,r,a]),[n,a]}(),o=(0,s.Z)(r,2),l=o[0],c=o[1];(0,d.useEffect)((function(){for(var n in h.kL.instances)h.kL.instances[n].resize(c,c)}),[l,c]),e=a.length>0?{labels:a.map((function(n){return n.categoryName[0]})),datasets:[{data:a.map((function(n){return n.amount})),backgroundColor:f.Z.doughnutColors,borderColor:f.Z.doughnutColors,borderWidth:1}]}:{labels:["no data"],datasets:[{data:[1],backgroundColor:"#ababab",borderColor:f.Z.colors.accentSecondary,borderWidth:1}]};var u={cutout:"70%"};return(0,C.jsx)(A.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1279px)",large:"(min-width: 1280px)"},children:function(n){return(0,C.jsx)(C.Fragment,{children:(n.small||n.medium||n.large)&&(0,C.jsx)(m,{ref:l,children:i?(0,C.jsx)(P,{width:c}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(g.$I,{data:e,options:u,updateMode:"resize",redraw:!0}),(0,C.jsxs)(v,{children:["\u20b4"," ",j(t)]})]})})})}})},J=t(5705),O=t(9065),V=t(245),G=(0,Z.ZP)(J.l0)(S||(S=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  gap: 20px;\n\n  @media "," {\n    flex-direction: row;\n  }\n"])),V.Z.tablet),H=Z.ZP.div(F||(F=(0,b.Z)(["\n  position: relative;\n\n  @media "," {\n    flex-basis: 50%;\n  }\n\n  &::after {\n    content: '';\n    z-index: 2;\n    position: absolute;\n    display: block;\n    top: 50%;\n    transform: translate(0, -50%);\n    right: 21px;\n    width: 18px;\n    height: 9px;\n\n    background: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    pointer-events: none;\n  }\n"])),V.Z.tablet,O),W=Z.ZP.select(z||(z=(0,b.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 12px 20px;\n  border: 1px solid ",";\n  border-radius: 30px;\n  background-color: transparent;\n\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  display: block;\n"])),f.Z.colors.primaryTextColor),K=function(n){var e=n.onFilterChange,t=n.actDates,a=n.dates,i=(0,d.useState)((new Date).getMonth()+1),r=(0,s.Z)(i,2),o=r[0],l=r[1],c=(0,d.useState)((new Date).getFullYear()),u=(0,s.Z)(c,2),x=u[0],p=u[1],h=(0,d.useState)([]),g=(0,s.Z)(h,2),f=g[0],b=g[1];(0,d.useEffect)((function(){var n,e=null!==(n=t.map((function(n){return n.year})))&&void 0!==n?n:[];b(e)}),[t]);var Z=function(n){return!t.find((function(e){return e.year===+a.year&&e.monthes.includes(+n)}))};return(0,C.jsx)("div",{children:(0,C.jsx)(J.J9,{initialValues:{month:"month",year:"year"},children:(0,C.jsxs)(G,{children:[(0,C.jsx)(H,{children:(0,C.jsxs)(J.gN,{as:W,name:"month",onChange:function(n){l(n.target.value),e({month:+n.target.value})},value:o,children:[(0,C.jsx)("option",{value:"01",disabled:Z(1),children:"January"}),(0,C.jsx)("option",{value:"02",disabled:Z(2),children:"February"}),(0,C.jsx)("option",{value:"03",disabled:Z(3),children:"March"}),(0,C.jsx)("option",{value:"04",disabled:Z(4),children:"April"}),(0,C.jsx)("option",{value:"05",disabled:Z(5),children:"May"}),(0,C.jsx)("option",{value:"06",disabled:Z(6),children:"June"}),(0,C.jsx)("option",{value:"07",disabled:Z(7),children:"July"}),(0,C.jsx)("option",{value:"08",disabled:Z(8),children:"August"}),(0,C.jsx)("option",{value:"09",disabled:Z(9),children:"September"}),(0,C.jsx)("option",{value:"10",disabled:Z(10),children:"October"}),(0,C.jsx)("option",{value:"11",disabled:Z(11),children:"November"}),(0,C.jsx)("option",{value:"12",disabled:Z(12),children:"December"})]})}),(0,C.jsx)(H,{children:(0,C.jsx)(J.gN,{as:W,name:"year",value:x,onChange:function(n){p(n.target.value),e({year:+n.target.value})},children:null!==f&&void 0!==f&&f.length?f.map((function(n){return(0,C.jsx)("option",{value:n,children:n},n)})):(0,C.jsx)("option",{value:x,disabled:!0,children:x},x)})})]})})})},$=Z.ZP.div(E||(E=(0,b.Z)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  border-radius: 30px;\n"])),f.Z.colors.secondaryBg),_=Z.ZP.div(R||(R=(0,b.Z)(["\n  padding: 15px 20px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n"]))),nn=Z.ZP.div(D||(D=(0,b.Z)(["\n  height: 54px;\n  padding: 15px 20px;\n  display: flex;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.13;\n  align-items: center;\n  border-bottom: 1px solid #dcdcdf;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n"]))),en=Z.ZP.span(B||(B=(0,b.Z)(["\n  height: 24px;\n  width: 24px;\n  margin-right: 16px;\n  background-color: ",";\n  border-radius: 2px;\n"])),(function(n){return n.color?n.color:"grey"})),tn=Z.ZP.span(I||(I=(0,b.Z)(["\n  margin-right: auto;\n"]))),an=Z.ZP.span(N||(N=(0,b.Z)([""]))),rn=Z.ZP.div(L||(L=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 20px;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),on=Z.ZP.span(Q||(Q=(0,b.Z)([""]))),sn=Z.ZP.span(M||(M=(0,b.Z)(["\n  color: ",";\n"])),f.Z.colors.expenseColor),ln=Z.ZP.span(q||(q=(0,b.Z)(["\n  color: ",";\n"])),f.Z.colors.accentPrimary),cn=function(n){for(var e=n.statistics,t=[],a=0;a<e.expenses.length;a+=1){var i;t.push((0,C.jsxs)(nn,{children:[(0,C.jsx)(en,{color:null!==(i=f.Z.doughnutColors[a])&&void 0!==i?i:f.Z.doughnutColors[a-38]}),(0,C.jsx)(tn,{children:e.expenses[a].categoryName[0]}),(0,C.jsx)(an,{children:j(e.expenses[a].amount)})]},e.expenses[a].categoryId[0]))}return(0,C.jsxs)("div",{children:[(0,C.jsxs)($,{children:[(0,C.jsx)(_,{children:"Category"}),(0,C.jsx)(_,{children:"Sum"})]}),t,(0,C.jsxs)(rn,{children:[(0,C.jsx)(on,{children:"Expenses:"}),(0,C.jsx)(sn,{children:j(e.totalExpenses)})]}),(0,C.jsxs)(rn,{children:[(0,C.jsx)(on,{children:"Income:"}),(0,C.jsx)(ln,{children:j(e.totalIncome)})]})]})},dn=Z.ZP.section(T||(T=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media "," {\n    flex-direction: row;\n    gap: 32px;\n  }\n  @media "," {\n    margin-top: 32px;\n    margin-left: 69px;\n    flex-basis: 715px;\n  }\n"])),V.Z.tablet,V.Z.desktop),un=Z.ZP.div(U||(U=(0,b.Z)(["\n  &:nth-child(1) {\n    @media "," {\n      flex-basis: 45%;\n    }\n    @media "," {\n      flex-basis: 35%;\n    }\n  }\n  &:nth-child(2) {\n    flex-grow: 1;\n  }\n"])),V.Z.tablet,V.Z.desktop),xn=Z.ZP.h1(X||(X=(0,b.Z)(["\n  margin-bottom: 8px;\n  font-family: ",";\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 1.5;\n\n  @media "," {\n    margin-left: 15px;\n  }\n"])),f.Z.fontFamily.poppins,V.Z.desktop),pn=function(){var n=(0,d.useState)({month:(new Date).getMonth()+1,year:(new Date).getFullYear()}),e=(0,s.Z)(n,2),t=e[0],a=e[1],i=(0,d.useState)(!0),l=(0,s.Z)(i,2),h=l[0],g=l[1],f=(0,d.useState)({expenses:[],totalExpenses:0,totalIncome:0,actDates:[]}),b=(0,s.Z)(f,2),Z=b[0],m=b[1],v=(0,u.v9)((function(n){return n.auth.user.balance}));(0,d.useEffect)((function(){(0,o.Z)(c().mark((function n(){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.next=4,p.Z.getStatistics(t);case 4:e=n.sent,a=e.data,m(a),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),x.Am.error("can't connect");case 12:g(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()}),[t]);return(0,C.jsxs)(dn,{children:[(0,C.jsxs)(un,{children:[(0,C.jsx)(xn,{children:"Statistics"}),(0,C.jsx)(Y,{isLoading:h,balance:v,expenses:Z.expenses})]}),(0,C.jsxs)(un,{children:[(0,C.jsx)(K,{onFilterChange:function(n){a((function(e){return(0,r.Z)((0,r.Z)({},e),n)}))},actDates:Z.actDates,dates:t}),(0,C.jsx)(cn,{statistics:Z})]})]})}},9065:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgBrdHdCQAgCARgR3CERnD/ZVqloB7E/vTsIIjwPqiIRpjyKXpT+xLCI9Nge4Cgxy6CPjsR1D3rGQzf5laA33tXzHzeAqQxi37BNOrCGt2NFm9ygZ0AAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=782.35af3a11.chunk.js.map