"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[660],{9660:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var i,a,o=t(1413),r=t(5861),s=t(885),l=t(4687),d=t.n(l),c=t(2791),p=t(8268),x=t(3623),u=t(3622),h=t(168),g=t(6031),b=g.ZP.div(i||(i=(0,h.Z)(["\n  position: relative;\n  margin-bottom: 32px;\n"]))),f=g.ZP.p(a||(a=(0,h.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n"]))),m=function(n){if(!n)return"0.00";var e=n.toFixed(2).toString().slice(-6),t=n.toFixed(2).toString().slice(-9,-6),i=n.toFixed(2).toString().slice(-13,-9);return i?"".concat(i," ").concat(t," ").concat(e):t?"".concat(t," ").concat(e):e},j=t(5607),Z=t(184);p.kL.register(p.qi,p.u);var v,A,y,w,C,k,P,S,z,B,F,I,D,E,N,R,Q=function(n){var e,t=n.balance,i=n.expenses;e=i.length>0?{labels:i.map((function(n){return n.categoryName[0]})),datasets:[{data:i.map((function(n){return n.amount})),backgroundColor:u.Z.doughnutColors,borderColor:u.Z.doughnutColors,borderWidth:1}]}:{labels:["no data"],datasets:[{data:[1],backgroundColor:"#ababab",borderColor:u.Z.colors.accentSecondary,borderWidth:1}]};var a={cutout:"70%"};return(0,Z.jsx)(j.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1279px)",large:"(min-width: 1280px)"},children:function(n){return(0,Z.jsx)(Z.Fragment,{children:(n.small||n.medium||n.large)&&(0,Z.jsxs)(b,{children:[(0,Z.jsx)(x.$I,{data:e,options:a}),(0,Z.jsxs)(f,{children:["\u20b4"," ",m(t)]})]})})}})},q=t(5705),M=t(9065),T=t(245),U=(0,g.ZP)(q.l0)(v||(v=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  gap: 20px;\n\n  @media "," {\n    flex-direction: row;\n  }\n"])),T.Z.tablet),X=g.ZP.div(A||(A=(0,h.Z)(["\n  position: relative;\n\n  @media "," {\n    flex-basis: 50%;\n  }\n\n  &::after {\n    content: '';\n    z-index: 2;\n    position: absolute;\n    display: block;\n    top: 50%;\n    transform: translate(0, -50%);\n    right: 21px;\n    width: 18px;\n    height: 9px;\n    /* background-color: blue; */\n    background: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    pointer-events: none;\n  }\n"])),T.Z.tablet,M),Y=g.ZP.select(y||(y=(0,h.Z)(["\n  width: 100%;\n  height: 50px;\n  padding: 12px 20px;\n  border: 1px solid ",";\n  border-radius: 30px;\n  background-color: transparent;\n  /* gap: 20px; */\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  display: block;\n"])),u.Z.colors.primaryTextColor),J=function(n){var e=n.onFilterChange,t=n.actDates,i=n.dates,a=(0,c.useState)("month"),o=(0,s.Z)(a,2),r=o[0],l=o[1],d=(0,c.useState)("year"),p=(0,s.Z)(d,2),x=p[0],u=p[1],h=function(n){return!t.find((function(e){return e.year===+i.year&&e.monthes.includes(+n)}))},g=function(n){return!t.find((function(e){return e.year===n}))};return(0,Z.jsx)("div",{children:(0,Z.jsx)(q.J9,{initialValues:{month:"month",year:"year"},children:(0,Z.jsxs)(U,{children:[(0,Z.jsx)(X,{children:(0,Z.jsxs)(q.gN,{as:Y,name:"month",onChange:function(n){l(n.target.value),e({month:+n.target.value})},value:r,children:[(0,Z.jsx)("option",{value:"month",disabled:!0,children:"Month"}),(0,Z.jsx)("option",{value:"01",disabled:h(1),children:"January"}),(0,Z.jsx)("option",{value:"02",disabled:h(2),children:"February"}),(0,Z.jsx)("option",{value:"03",disabled:h(3),children:"March"}),(0,Z.jsx)("option",{value:"04",disabled:h(4),children:"April"}),(0,Z.jsx)("option",{value:"05",disabled:h(5),children:"May"}),(0,Z.jsx)("option",{value:"06",disabled:h(6),children:"June"}),(0,Z.jsx)("option",{value:"07",disabled:h(7),children:"July"}),(0,Z.jsx)("option",{value:"08",disabled:h(8),children:"August"}),(0,Z.jsx)("option",{value:"09",disabled:h(9),children:"September"}),(0,Z.jsx)("option",{value:"10",disabled:h(10),children:"October"}),(0,Z.jsx)("option",{value:"11",disabled:h(11),children:"November"}),(0,Z.jsx)("option",{value:"12",disabled:h(12),children:"December"})]})}),(0,Z.jsx)(X,{children:(0,Z.jsxs)(q.gN,{as:Y,name:"year",value:x,onChange:function(n){u(n.target.value),e({year:+n.target.value})},children:[(0,Z.jsx)("option",{value:"year",disabled:!0,children:"Year"}),(0,Z.jsx)("option",{value:"2021",disabled:g(2021),children:"2021"}),(0,Z.jsx)("option",{value:"2022",disabled:g(2022),children:"2022"}),(0,Z.jsx)("option",{value:"2023",disabled:g(2023),children:"2023"}),(0,Z.jsx)("option",{value:"2024",disabled:g(2024),children:"2024"}),(0,Z.jsx)("option",{value:"2025",disabled:g(2025),children:"2025"}),(0,Z.jsx)("option",{value:"2026",disabled:g(2026),children:"2026"}),(0,Z.jsx)("option",{value:"2027",disabled:g(2027),children:"2027"}),(0,Z.jsx)("option",{value:"2028",disabled:g(2028),children:"2028"}),(0,Z.jsx)("option",{value:"2029",disabled:g(2029),children:"2029"}),(0,Z.jsx)("option",{value:"2030",disabled:g(2030),children:"2030"})]})})]})})})},L=g.ZP.div(w||(w=(0,h.Z)(["\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  border-radius: 30px;\n"])),u.Z.colors.secondaryBg),V=g.ZP.div(C||(C=(0,h.Z)(["\n  padding: 15px 20px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n  /* display: flex;\n  justify-content: space-between; */\n"]))),G=g.ZP.div(k||(k=(0,h.Z)(["\n  height: 54px;\n  padding: 15px 20px;\n  display: flex;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.13;\n  align-items: center;\n  border-bottom: 1px solid #dcdcdf;\n  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n"]))),H=g.ZP.span(P||(P=(0,h.Z)(["\n  height: 24px;\n  width: 24px;\n  margin-right: 16px;\n  background-color: ",";\n  border-radius: 2px;\n"])),(function(n){return n.color?n.color:"grey"})),O=g.ZP.span(S||(S=(0,h.Z)(["\n  margin-right: auto;\n"]))),W=g.ZP.span(z||(z=(0,h.Z)([""]))),K=g.ZP.div(B||(B=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 20px;\n\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),$=g.ZP.span(F||(F=(0,h.Z)([""]))),_=g.ZP.span(I||(I=(0,h.Z)(["\n  color: ",";\n"])),u.Z.colors.expenseColor),nn=g.ZP.span(D||(D=(0,h.Z)(["\n  color: ",";\n"])),u.Z.colors.accentPrimary),en=function(n){var e=n.statistics;console.log(e);for(var t=[],i=0;i<e.expenses.length;i+=1){var a;t.push((0,Z.jsxs)(G,{children:[(0,Z.jsx)(H,{color:null!==(a=u.Z.doughnutColors[i])&&void 0!==a?a:u.Z.doughnutColors[i-38]}),(0,Z.jsx)(O,{children:e.expenses[i].categoryName[0]}),(0,Z.jsx)(W,{children:m(e.expenses[i].amount)})]},e.expenses[i].categoryId[0]))}return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(L,{children:[(0,Z.jsx)(V,{children:"Category"}),(0,Z.jsx)(V,{children:"Sum"})]}),t,(0,Z.jsxs)(K,{children:[(0,Z.jsx)($,{children:"Expenses:"}),(0,Z.jsx)(_,{children:m(e.totalExpenses)})]}),(0,Z.jsxs)(K,{children:[(0,Z.jsx)($,{children:"Income:"}),(0,Z.jsx)(nn,{children:m(e.totalIncome)})]})]})},tn=g.ZP.section(E||(E=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media "," {\n    flex-direction: row;\n    gap: 32px;\n  }\n  @media "," {\n    margin-top: 32px;\n    margin-left: 69px;\n    flex-basis: 715px;\n  }\n"])),T.Z.tablet,T.Z.desktop),an=g.ZP.div(N||(N=(0,h.Z)(["\n  &:nth-child(1) {\n    @media "," {\n      flex-basis: 45%;\n    }\n    @media "," {\n      flex-basis: 35%;\n    }\n  }\n  &:nth-child(2) {\n    flex-grow: 1;\n  }\n"])),T.Z.tablet,T.Z.desktop),on=g.ZP.h1(R||(R=(0,h.Z)(["\n  margin-bottom: 8px;\n  font-family: ",";\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 1.5;\n\n  @media "," {\n    margin-left: 15px;\n  }\n"])),u.Z.fontFamily.poppins,T.Z.desktop),rn=t(851),sn=t(9434),ln=t(9085),dn=function(){var n=(0,c.useState)({month:(new Date).getMonth()+1,year:(new Date).getFullYear()}),e=(0,s.Z)(n,2),t=e[0],i=e[1],a=(0,c.useState)({expenses:[],totalExpenses:0,totalIncome:0,actDates:[]}),l=(0,s.Z)(a,2),p=l[0],x=l[1],u=(0,sn.v9)((function(n){return n.auth.user.balance}));(0,c.useEffect)((function(){(0,r.Z)(d().mark((function n(){var e,i;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,rn.Z.getStatistics(t);case 3:e=n.sent,i=e.data,x(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,ln.Am)("can't connect");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[t]);return(0,Z.jsxs)(tn,{children:[(0,Z.jsxs)(an,{children:[(0,Z.jsx)(on,{children:"Statistics"}),(0,Z.jsx)(Q,{balance:u,expenses:p.expenses})]}),(0,Z.jsxs)(an,{children:[(0,Z.jsx)(J,{onFilterChange:function(n){i((function(e){return(0,o.Z)((0,o.Z)({},e),n)}))},actDates:p.actDates,dates:t}),(0,Z.jsx)(en,{statistics:p})]})]})}},9065:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgBrdHdCQAgCARgR3CERnD/ZVqloB7E/vTsIIjwPqiIRpjyKXpT+xLCI9Nge4Cgxy6CPjsR1D3rGQzf5laA33tXzHzeAqQxi37BNOrCGt2NFm9ygZ0AAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=660.b990605a.chunk.js.map