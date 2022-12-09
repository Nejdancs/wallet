"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[762],{7866:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,l,c,s,d=t(5861),o=t(885),p=t(7757),y=t.n(p),x=t(2791),m=t(4569),u=t.n(m),v=function(){var n=(0,d.Z)(y().mark((function n(){var e,t;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("https://wallet-api-nnb3.onrender.com/api/currency");case 3:e=n.sent,t=e.data,console.log("fetching datas"),console.log(t.data.currency),localStorage.setItem("currencyData",JSON.stringify(t.data.currency)),n.next=13;break;case 10:throw n.prev=10,n.t0=n.catch(0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),f=v,g=t(168),Z=t(6031),b=t(4935),k=Z.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border-radius: 30px 30px 0px 0px;\n  background-color: #4a56e2;\n  opacity: 0.8;\n  padding: 12px 20px;\n  height: 50px;\n\n  @media (min-width: 768px) {\n    padding: 12px 12px 12px 20px;\n  }\n  @media (min-width: 1280px) {\n    height: 60px;\n    padding: 16px 64px 16px 44px;\n  }\n"]))),z=Z.ZP.ul(a||(a=(0,g.Z)(["\n  margin: 0;\n  height: 124px;\n  padding: 12px 20px 16px 20px;\n  border-radius: 0px 0px 30px 30px;\n\n  background-color: #4a56e2;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: 100%;\n\n  @media (min-width: 768px) {\n    height: 132px;\n    padding: 16px 20px 20px 20px;\n  }\n  @media (min-width: 1280px) {\n    height: 287px;\n    padding: 20px 61px 20px 58px;\n  }\n"])),b),h=Z.ZP.li(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n\n  @media (min-width: 1280px) {\n    &:not(:last-child) {\n      margin-bottom: 24px;\n    }\n  }\n"]))),j=Z.ZP.div(l||(l=(0,g.Z)(["\n  margin: 0 auto;\n  width: 100%;\n\n  /* @media (min-width: 480px) {\n    width: 280px;\n  } */\n\n  @media (min-width: 768px) {\n    width: 336px;\n  }\n  @media (min-width: 1280px) {\n    width: 393px;\n  }\n"]))),L=Z.ZP.p(c||(c=(0,g.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 27px;\n\n  color: #ffffff;\n"]))),D=Z.ZP.p(s||(s=(0,g.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n\n  color: #ffffff;\n\n  @media (min-width: 768px) {\n  }\n\n  @media (min-width: 1280px) {\n  }\n"]))),A=t(184);var w=function(){var n=(0,x.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1];function a(){return i.apply(this,arguments)}function i(){return(i=(0,d.Z)(y().mark((function n(){var e,t;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(e=JSON.parse(localStorage.getItem("currencyData")))&&3===e.length?(console.log("data is already in the Local Storage"),r(e)):t=setInterval((function(){var n=JSON.parse(localStorage.getItem("currencyData"));n&&n.length>0?(r(n),console.log("this is console after data has been got"),clearInterval(t),setTimeout((function(){localStorage.removeItem("currencyData")}),6e5)):(console.log("data has not been found. calling fetch function"),f())}),3e3);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,x.useEffect)((function(){a();var n=setInterval((function(){a()}),12e5);return function(){return clearInterval(n)}}),[]),(0,A.jsxs)(j,{children:[(0,A.jsxs)(k,{children:[(0,A.jsx)(L,{children:"Currency"}),(0,A.jsx)(L,{children:"Purchase"}),(0,A.jsx)(L,{children:"Sale"})]}),(0,A.jsx)(z,{children:0===t.length?"waiting for rates.......  some spinner":null===t||void 0===t?void 0:t.map((function(n,e){return(0,A.jsxs)(h,{children:[(0,A.jsxs)(D,{children:[0===e&&"USD",1===e&&"EUR",2===e&&"\u0404/$"]}),(0,A.jsx)(D,{children:0===e||1===e?Number(n.rateBuy).toFixed(2):Number(n.rateBuy).toFixed(3)}),(0,A.jsx)(D,{children:0===e||1===e?Number(n.rateSell).toFixed(2):Number(n.rateSell).toFixed(3)})]},"".concat(e).concat(n.currencyCodeA))}))})]})}},4935:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=762.4de4cbb6.chunk.js.map