(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,n,t){e.exports=t.p+"static/media/logo.06e73328.svg"},35:function(e,n,t){e.exports=t(67)},40:function(e,n,t){},45:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a,r,c=t(0),l=t.n(c),o=t(10),i=t.n(o),u=(t(40),t(15)),s=t(4),m=t.n(s),p=t(7),d=t(5),f=t(1),b=t(2),h=b.a.section(a||(a=Object(f.a)(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 1.5rem 0 1.5rem 5rem;\n"]))),E=b.a.button(r||(r=Object(f.a)(["\n    font-size: 1.3rem;\n    margin: 1.5rem 0 1.5rem 5rem;\n    background-color: aqua;\n    border-radius: 5px;\n    cursor: pointer;\n"])));function v(e){var n="Show Balance",t="*****",a=null;return e.showBalance&&(n="Hide Balance",t=l.a.createElement("span",null,l.a.createElement("strong",null,"Balance:")," $",e.amount.toFixed(2)),a=l.a.createElement(E,{className:"btn btn-outline-primary",onClick:e.handleAddFunds},"Add To Balance",l.a.createElement("i",{className:"fas fa-helicopter"}))),l.a.createElement(h,null,t,l.a.createElement(E,{className:"btn btn-outline-primary",onClick:e.handleShowBalance},n),a,l.a.createElement(E,{className:"btn btn-outline-primary",onClick:function(){return window.location.reload(!1)}},"Lazy Refresh"))}t(45);var g,k,O,j,w=t(6),x=t.n(w),y=t(29),B=b.a.td(g||(g=Object(f.a)(["\n    border: 1px solid #cccccc;\n    width: 40vh;\n"]))),C=b.a.button(k||(k=Object(f.a)(["\n    font-size: 1 rem;\n    background-color: aqua;\n    border-radius: 10px;\n    cursor: pointer;\n"]))),S=b.a.button(O||(O=Object(f.a)(["\n    font-size: 1 rem;\n    width: 17vw;\n"])));function N(e){var n=Object(c.useState)(!1),t=Object(d.a)(n,2),a=t[0],r=t[1],o=function(){return r(!1)},i=Object(c.useState)(""),u=Object(d.a)(i,2),s=u[0],f=u[1],b=function(){var n=Object(p.a)(m.a.mark(function n(t){var a,c,l;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(function(e){return!e}),a="https://api.coinpaprika.com/v1/coins/".concat(e.id),n.next=4,x.a.get(a);case 4:c=n.sent,l=c.data.description,f(l);case 7:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),h="*****";return e.showBalance&&(h=l.a.createElement(B,null,l.a.createElement("span",null,e.balance))),l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement(B,null,l.a.createElement(S,{className:"btn btn-outline-info",onClick:b},e.name)),l.a.createElement(y.a,{open:a,closeOnDocumentClick:!0,onClose:o},l.a.createElement("div",{className:"popup"},l.a.createElement("button",{className:"close",onClick:o},"\xd7"),s)),l.a.createElement(B,null,e.ticker),l.a.createElement(B,null,"$",e.price),h,l.a.createElement(B,null,l.a.createElement("form",{action:"#",method:"POST"},l.a.createElement(C,{className:"btn btn-outline-primary",onClick:function(n){n.preventDefault(),e.handleRefresh(e.id)}},"Refresh"),l.a.createElement(C,{className:"btn btn-outline-success",onClick:function(n){n.preventDefault(),e.handleTrading(!0,e.id)}},"Buy"),l.a.createElement(C,{className:"btn btn-outline-danger",onClick:function(n){n.preventDefault(),e.handleTrading(!1,e.id)}},"Sell")))))}var F=b.a.table(j||(j=Object(f.a)(["\n  margin: 50px auto 50px auto;\n  display: inline-block;\n  font-size: 1.4rem;\n"])));function T(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Ticker"),l.a.createElement("th",null,"Price"),e.showBalance?l.a.createElement("th",null,"Balance"):"*****",l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,e.coinData.map(function(n){var t=n.key,a=n.name,r=n.ticker,c=n.balance,o=n.price;return l.a.createElement(N,{key:t,id:t,handleRefresh:e.handleRefresh,handleTrading:e.handleTrading,name:a,ticker:r,balance:c,showBalance:e.showBalance,price:o})}))))}var D,z,R,P,q=t(30),A=t(31),L=t(34),I=t(33),J=t(32),U=t.n(J),$=b.a.header(D||(D=Object(f.a)(["\n    background-color: #282c34;\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    color: white;\n"]))),H=b.a.img(z||(z=Object(f.a)(["\n    height: 10rem;\n    pointer-events: none;\n"]))),M=b.a.h1(R||(R=Object(f.a)(["\n    font-size: 4rem;\n"]))),G=function(e){Object(L.a)(t,e);var n=Object(I.a)(t);function t(){return Object(q.a)(this,t),n.apply(this,arguments)}return Object(A.a)(t,[{key:"render",value:function(){return l.a.createElement($,null,l.a.createElement(H,{src:U.a,alt:"React logo"}),l.a.createElement(M,null,"Coin-Exchange"))}}]),t}(c.Component),K=(t(63),t(64),b.a.div(P||(P=Object(f.a)(["\n  text-align: center;\n  background-color: black;\n  color: #cccccc;\n"])))),Q=10,V=function(e){return parseFloat(Number(e).toFixed(2))};var W=function(e){var n=Object(c.useState)(5e4),t=Object(d.a)(n,2),a=t[0],r=t[1],o=Object(c.useState)(!1),i=Object(d.a)(o,2),s=i[0],f=i[1],b=Object(c.useState)([]),h=Object(d.a)(b,2),E=h[0],g=h[1],k=function(){var e=Object(p.a)(m.a.mark(function e(){var n,t,a,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,Q).map(function(e){return e.id}),a=t.map(function(e){return x.a.get("https://api.coinpaprika.com/v1/tickers/"+e)}),e.next=8,Promise.all(a);case 8:r=e.sent,c=r.map(function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:V(n.quotes.USD.price)}}),g(c);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)(function(){0===E.length&&k()});var O=function(){var e=Object(p.a)(m.a.mark(function e(n){var t,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,x.a.get(t);case 3:a=e.sent,r=E.map(function(e){var t=Object(u.a)({},e);return n===e.key&&(t.price=V(a.data.quotes.USD.price)),t}),g(r);case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();return l.a.createElement(K,null,l.a.createElement(G,null),l.a.createElement(v,{amount:a,showBalance:s,handleShowBalance:function(){f(function(e){return!e})},handleAddFunds:function(){r(function(e){return e+1200})}}),l.a.createElement(T,{coinData:E,handleRefresh:O,showBalance:s,handleTrading:function(e,n){var t=e?1:-1,a=E.map(function(e){var a=Object(u.a)({},e);return n===e.key&&(a.balance+=t,r(function(e){return e-t*a.price})),a});g(a)}}))},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then(function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,l=n.getTTFB;t(e),a(e),r(e),c(e),l(e)})};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),X()}},[[35,1,2]]]);
//# sourceMappingURL=main.952b1e7b.chunk.js.map