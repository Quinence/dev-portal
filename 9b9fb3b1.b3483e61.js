(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(196)),a={id:"mining-additional-info",title:"Additional Information",keywords:["mining","pow","network difficulty","reward mechanism","epoch architecture","zilliqa"],description:"Mining Additional Informantion"},c={id:"miners/mining-additional-info",isDocsHomePage:!1,title:"Additional Information",description:"Mining Additional Informantion",source:"@site/docs/miners/mining-additional-info.md",permalink:"/docs/miners/mining-additional-info",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/miners/mining-additional-info.md",sidebar:"MinersSidebar",previous:{title:"Proxy Mining",permalink:"/docs/miners/mining-proxy"}},l=[{value:"Network Epoch Architecture",id:"network-epoch-architecture",children:[]},{value:"Proof-of-Work Algorithm",id:"proof-of-work-algorithm",children:[]},{value:"Network Difficulty",id:"network-difficulty",children:[]},{value:"Network Reward Mechanism",id:"network-reward-mechanism",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"network-epoch-architecture"},"Network Epoch Architecture"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/Da4t6FW.png",alt:"Zilliqa Epoch Architecture"}))),Object(i.b)("p",null,"At the start of each DS Epoch, all mining candidates will run the Proof-of-Work (Ethash algorithm) cycle for a ",Object(i.b)("inlineCode",{parentName:"p"},"60")," seconds window to compete to join the Zilliqa network."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Nodes that fulfilled the ",Object(i.b)("inlineCode",{parentName:"li"},"DS_POW_DIFFICULTY")," parameter will qualify to join as DS nodes."),Object(i.b)("li",{parentName:"ul"},"Nodes that fulfilled the ",Object(i.b)("inlineCode",{parentName:"li"},"POW_DIFFICULTY")," parameter will qualify to join as shard nodes.")),Object(i.b)("p",null,"There are a total of ",Object(i.b)("inlineCode",{parentName:"p"},"100")," TX epochs (each 1-2 min) within each DS Epoch (2-3 hrs). Every 100th TX epoch is known as the ",Object(i.b)("strong",{parentName:"p"},"Vacuous epoch"),"."),Object(i.b)("p",null,"The vacuous epoch is solely for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Distributing the coinbase rewards to all nodes."),Object(i.b)("li",{parentName:"ul"},"Processing of the upgrade mechanism (as there are no forks in pBFT)."),Object(i.b)("li",{parentName:"ul"},"Writing of persistent state storage (updating of the nodes\u2019 levelDB).")),Object(i.b)("p",null,"During a vacuous epoch, the network does not process any transactions."),Object(i.b)("h2",{id:"proof-of-work-algorithm"},"Proof-of-Work Algorithm"),Object(i.b)("p",null,"Zilliqa uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ethereum/wiki/wiki/Ethash"}),Object(i.b)("strong",{parentName:"a"},"Ethash"))," for its PoW algorithm. Hence, Zilliqa uses a DAG in its proof-of-work algorithm, which is generated at an incremental rate for each ",Object(i.b)("strong",{parentName:"p"},"DS epoch"),". The bootstrap DAG size will be roughly ",Object(i.b)("inlineCode",{parentName:"p"},"1.02GB"),"."),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/contributors/core-pow"}),"Core Protocol Documentation")," for more details on the Zilliqa PoW algorithm."),Object(i.b)("h2",{id:"network-difficulty"},"Network Difficulty"),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/contributors/core-difficulty-adjustment"}),"Core Protocol Documentation")," for more details on the difficulty adjustment algorithm."),Object(i.b)("h2",{id:"network-reward-mechanism"},"Network Reward Mechanism"),Object(i.b)("p",null,"Refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/basics/basics-zil-reward"}),"Zilliqa Architecture - Reward mechanism"),"."))}s.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);