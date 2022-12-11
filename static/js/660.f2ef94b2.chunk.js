"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[660],{245:function(n,e){e.Z={mobile:"screen and (min-width: 480px)",tablet:"screen and (min-width: 768px)",desktop:"screen and (min-width: 1280px)",maxTablet:"screen and (max-width: 767px)"}},9660:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var a,i,r=t(1413),o=t(5861),s=t(885),l=t(4687),d=t.n(l),c=t(2791),p=t(8268),x=t(3623),u=t(3622),h=t(168),g=t(6031),m=g.ZP.div(a||(a=(0,h.Z)(["\n  position: relative;\n  margin-bottom: 32px;\n"]))),b=g.ZP.p(i||(i=(0,h.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n"]))),f=function(n){if(!n)return"0.00";var e=n.toFixed(2).toString().slice(-6),t=n.toFixed(2).toString().slice(-9,-6),a=n.toFixed(2).toString().slice(-13,-9);return a?"".concat(a," ").concat(t," ").concat(e):t?"".concat(t," ").concat(e):e},Z=t(5607),j=t(184);p.kL.register(p.qi,p.u);var v,A,w,y,C,k,P,S,F,D,z,B,E,I,N,R,Q=function(n){var e,t=n.balance,a=n.expenses;e=a.length>0?{labels:a.map((function(n){return n.categoryName[0]})),datasets:[{data:a.map((function(n){return n.amount})),backgroundColor:u.Z.doughnutColors,borderColor:u.Z.doughnutColors,borderWidth:1}]}:{labels:["no data"],datasets:[{data:[1],backgroundColor:"#ababab",borderColor:u.Z.colors.accentSecondary,borderWidth:1}]};var i={cutout:"70%"};return(0,j.jsx)(Z.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1279px)",large:"(min-width: 1280px)"},children:function(n){return(0,j.jsx)(j.Fragment,{children:(n.small||n.medium||n.large)&&(0,j.jsxs)(m,{children:[(0,j.jsx)(x.$I,{data:e,options:i}),(0,j.jsxs)(b,{children:["\u20b4"," ",f(t)]})]})})}})},M=t(5705),T=t(9065),Y=t(245),q=(0,g.ZP)(M.l0)(v||(v=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  gap: 20px;\n\n  @media "," {\n    flex-direction: row;\n  }\n"])),Y.Z.tablet),U=g.ZP.div(A||(A=(0,h.Z)(["\n  position: relative;\n\n  @media "," {\n    flex-basis: 50%;\n  }\n\n  &::after {\n    content: '';\n    z-index: 2;\n    position: absolute;\n    display: block;\n    top: 50%;\n    transform: translate(0, -50%);\n    right: 21px;\n    width: 18px;\n    height: 9px;\n    /* background-color: blue; */\n    background: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    pointer-events: none;\n  }\n"])),Y.Z.tablet,T),X=g.ZP.select(w||(w=(0,h.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 12px 20px;\n  border: 1px solid ",";\n  border-radius: 30px;\n  background-color: transparent;\n  /* gap: 20px; */\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  display: block;\n"])),u.Z.colors.primaryTextColor),J=function(n){var e=n.onFilterChange,t=n.actDates,a=n.dates,i=(0,c.useState)(0===t.length?"month":(new Date).getMonth()+1),r=(0,s.Z)(i,2),o=r[0],l=r[1],d=(0,c.useState)(0===t.length?"year":(new Date).getFullYear()),p=(0,s.Z)(d,2),x=p[0],u=p[1],h=(0,c.useState)([]),g=(0,s.Z)(h,2),m=g[0],b=g[1];(0,c.useEffect)((function(){var n,e=null!==(n=t.map((function(n){return n.year})))&&void 0!==n?n:[];b(e)}),[t]);var f=function(n){return!t.find((function(e){return e.year===+a.year&&e.monthes.includes(+n)}))};return(0,j.jsx)("div",{children:(0,j.jsx)(M.J9,{initialValues:{month:"month",year:"year"},children:(0,j.jsxs)(q,{children:[(0,j.jsx)(U,{children:(0,j.jsx)(M.gN,{as:X,name:"month",onChange:function(n){l(n.target.value),e({month:+n.target.value})},value:o,children:0===t.length?(0,j.jsx)("option",{value:"month",disabled:!0,children:"Month"}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("option",{value:"01",disabled:f(1),children:"January"}),(0,j.jsx)("option",{value:"02",disabled:f(2),children:"February"}),(0,j.jsx)("option",{value:"03",disabled:f(3),children:"March"}),(0,j.jsx)("option",{value:"04",disabled:f(4),children:"April"}),(0,j.jsx)("option",{value:"05",disabled:f(5),children:"May"}),(0,j.jsx)("option",{value:"06",disabled:f(6),children:"June"}),(0,j.jsx)("option",{value:"07",disabled:f(7),children:"July"}),(0,j.jsx)("option",{value:"08",disabled:f(8),children:"August"}),(0,j.jsx)("option",{value:"09",disabled:f(9),children:"September"}),(0,j.jsx)("option",{value:"10",disabled:f(10),children:"October"}),(0,j.jsx)("option",{value:"11",disabled:f(11),children:"November"}),(0,j.jsx)("option",{value:"12",disabled:f(12),children:"December"})]})})}),(0,j.jsx)(U,{children:(0,j.jsx)(M.gN,{as:X,name:"year",value:x,onChange:function(n){u(n.target.value),e({year:+n.target.value})},children:0===t.length?(0,j.jsx)("option",{value:"year",disabled:!0,children:"Year"}):m.map((function(n){return(0,j.jsx)("option",{value:n,children:n},n)}))})})]})})})},L=g.ZP.div(y||(y=(0,h.Z)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  border-radius: 30px;\n"])),u.Z.colors.secondaryBg),V=g.ZP.div(C||(C=(0,h.Z)(["\n  padding: 15px 20px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n  /* display: flex;\n  justify-content: space-between; */\n"]))),G=g.ZP.div(k||(k=(0,h.Z)(["\n  height: 54px;\n  padding: 15px 20px;\n  display: flex;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.13;\n  align-items: center;\n  border-bottom: 1px solid #dcdcdf;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n"]))),H=g.ZP.span(P||(P=(0,h.Z)(["\n  height: 24px;\n  width: 24px;\n  margin-right: 16px;\n  background-color: ",";\n  border-radius: 2px;\n"])),(function(n){return n.color?n.color:"grey"})),O=g.ZP.span(S||(S=(0,h.Z)(["\n  margin-right: auto;\n"]))),W=g.ZP.span(F||(F=(0,h.Z)([""]))),K=g.ZP.div(D||(D=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 20px;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),$=g.ZP.span(z||(z=(0,h.Z)([""]))),_=g.ZP.span(B||(B=(0,h.Z)(["\n  color: ",";\n"])),u.Z.colors.expenseColor),nn=g.ZP.span(E||(E=(0,h.Z)(["\n  color: ",";\n"])),u.Z.colors.accentPrimary),en=function(n){var e=n.statistics;console.log(e);for(var t=[],a=0;a<e.expenses.length;a+=1){var i;t.push((0,j.jsxs)(G,{children:[(0,j.jsx)(H,{color:null!==(i=u.Z.doughnutColors[a])&&void 0!==i?i:u.Z.doughnutColors[a-38]}),(0,j.jsx)(O,{children:e.expenses[a].categoryName[0]}),(0,j.jsx)(W,{children:f(e.expenses[a].amount)})]},e.expenses[a].categoryId[0]))}return(0,j.jsxs)("div",{children:[(0,j.jsxs)(L,{children:[(0,j.jsx)(V,{children:"Category"}),(0,j.jsx)(V,{children:"Sum"})]}),t,(0,j.jsxs)(K,{children:[(0,j.jsx)($,{children:"Expenses:"}),(0,j.jsx)(_,{children:f(e.totalExpenses)})]}),(0,j.jsxs)(K,{children:[(0,j.jsx)($,{children:"Income:"}),(0,j.jsx)(nn,{children:f(e.totalIncome)})]})]})},tn=g.ZP.section(I||(I=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media "," {\n    flex-direction: row;\n    gap: 32px;\n  }\n  @media "," {\n    margin-top: 32px;\n    margin-left: 69px;\n    flex-basis: 715px;\n  }\n"])),Y.Z.tablet,Y.Z.desktop),an=g.ZP.div(N||(N=(0,h.Z)(["\n  &:nth-child(1) {\n    @media "," {\n      flex-basis: 45%;\n    }\n    @media "," {\n      flex-basis: 35%;\n    }\n  }\n  &:nth-child(2) {\n    flex-grow: 1;\n  }\n"])),Y.Z.tablet,Y.Z.desktop),rn=g.ZP.h1(R||(R=(0,h.Z)(["\n  margin-bottom: 8px;\n  font-family: ",";\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 1.5;\n\n  @media "," {\n    margin-left: 15px;\n  }\n"])),u.Z.fontFamily.poppins,Y.Z.desktop),on=t(851),sn=t(9434),ln=t(9085),dn=function(){var n=(0,c.useState)({month:(new Date).getMonth()+1,year:(new Date).getFullYear()}),e=(0,s.Z)(n,2),t=e[0],a=e[1],i=(0,c.useState)({expenses:[],totalExpenses:0,totalIncome:0,actDates:[]}),l=(0,s.Z)(i,2),p=l[0],x=l[1],u=(0,sn.v9)((function(n){return n.auth.user.balance}));(0,c.useEffect)((function(){(0,o.Z)(d().mark((function n(){var e,a;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,on.Z.getStatistics(t);case 3:e=n.sent,a=e.data,x(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,ln.Am)("can't connect");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[t]);return(0,j.jsxs)(tn,{children:[(0,j.jsxs)(an,{children:[(0,j.jsx)(rn,{children:"Statistics"}),(0,j.jsx)(Q,{balance:u,expenses:p.expenses})]}),(0,j.jsxs)(an,{children:[(0,j.jsx)(J,{onFilterChange:function(n){a((function(e){return(0,r.Z)((0,r.Z)({},e),n)}))},actDates:p.actDates,dates:t}),(0,j.jsx)(en,{statistics:p})]})]})}},9065:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgBrdHdCQAgCARgR3CERnD/ZVqloB7E/vTsIIjwPqiIRpjyKXpT+xLCI9Nge4Cgxy6CPjsR1D3rGQzf5laA33tXzHzeAqQxi37BNOrCGt2NFm9ygZ0AAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=660.f2ef94b2.chunk.js.map