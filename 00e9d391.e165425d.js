(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(2),r=n(6),a=(n(0),n(196)),o={id:"basics-intro-blockchain",title:"Blockchain",keywords:["intro","blockchain","cryptocurrency",101,"zilliqa"],description:"Blockchain Basics"},c={id:"basics/basics-intro-blockchain",isDocsHomePage:!1,title:"Blockchain",description:"Blockchain Basics",source:"@site/docs/basics/basics-intro-blockchain.md",permalink:"/docs/basics/basics-intro-blockchain",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/basics/basics-intro-blockchain.md",sidebar:"BasicsSideBar",next:{title:"Consensus mechanism",permalink:"/docs/basics/basics-intro-consensus"}},s=[{value:"What is Blockchain?",id:"what-is-blockchain",children:[]},{value:"Other Key Benefits",id:"other-key-benefits",children:[{value:"1. Decentralization",id:"1-decentralization",children:[]},{value:"2. Permissionless",id:"2-permissionless",children:[]},{value:"3. Public verifiability",id:"3-public-verifiability",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("h2",{id:"what-is-blockchain"},"What is Blockchain?"),Object(a.b)("p",null,"Blockchain is a ",Object(a.b)("strong",{parentName:"p"},"distributed ledger")," that is ",Object(a.b)("strong",{parentName:"p"},"immutable"),". It is a\n",Object(a.b)("strong",{parentName:"p"},"ledger")," in the sense that it is a global accounting system that keeps track\nof balance (and other data) of each account. It is ",Object(a.b)("strong",{parentName:"p"},"distributed")," as it is not\nmaintained by a single entity but rather by a distributed network of\nindependent machines who are given the incentive to do so. It is ",Object(a.b)("strong",{parentName:"p"},"immutable"),"\nin the sense that it is not easy to change the chronological history of changes\nmade to the ledger."),Object(a.b)("h2",{id:"other-key-benefits"},"Other Key Benefits"),Object(a.b)("p",null,"Blockchains have some key properties that make them a powerful technology:"),Object(a.b)("h3",{id:"1-decentralization"},"1. Decentralization"),Object(a.b)("p",null,"Since the ledger is maintained by a decentralized network of machines that is\nopen for anyone to join, it cannot be shutdown making blockchains resistant to\nany external control and censorship."),Object(a.b)("h3",{id:"2-permissionless"},"2. Permissionless"),Object(a.b)("p",null,"Due to the public nature of blockchains, anyone (with sufficient resources)\ncan join the network to maintain the ledger and can make use of the network.\nThere is no need to get permission from any central entity making it open for\nanyone and everyone.  "),Object(a.b)("h3",{id:"3-public-verifiability"},"3. Public verifiability"),Object(a.b)("p",null,"The entire chronological history is public for anyone to review. This provides\ntransparency, trust and auditability allowing anyone to re-create the current\nstate of the system from the historical data. "))}b.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),h=i,d=u["".concat(o,".").concat(h)]||u[h]||p[h]||a;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);