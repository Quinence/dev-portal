(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),c=n(6),a=(n(0),n(196)),o={id:"basics-intro-accounts",title:"Accounts",keywords:["blockchain","accounts","contract account","user account"],description:"Zilliqa types of accounts"},s={id:"basics/basics-intro-accounts",isDocsHomePage:!1,title:"Accounts",description:"Zilliqa types of accounts",source:"@site/docs/basics/basics-intro-accounts.md",permalink:"/docs/basics/basics-intro-accounts",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/basics/basics-intro-accounts.md",sidebar:"BasicsSideBar",previous:{title:"Consensus mechanism",permalink:"/docs/basics/basics-intro-consensus"},next:{title:"Transactions",permalink:"/docs/basics/basics-intro-txns"}},i=[{value:"1. Externally-Owned Account (aka User Account)",id:"1-externally-owned-account-aka-user-account",children:[]},{value:"2. Contract Account",id:"2-contract-account",children:[]}],u={rightToc:i};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"The Zilliqa blockchain follows an account-based model similar to Ethereum.\nAccounts can hold native assets such as $ZIL or app-layer tokens issued as\nFungible or Non-Fungible assets. These assets can be transferred from one\naccount to another."),Object(a.b)("p",null,"The collective state of all the accounts represents the global state of the\nblockchain. Each account is identified by its address which is a 20-byte\nstring generated using a hash function."),Object(a.b)("p",null,"Similar to Ethereum, the Zilliqa network supports two types of accounts:"),Object(a.b)("h3",{id:"1-externally-owned-account-aka-user-account"},"1. Externally-Owned Account (aka User Account)"),Object(a.b)("p",null,"An account controlled by an end user who owns a public-private signature key pair. The address of an externally-owned account is essentially a truncated hash of the public key."),Object(a.b)("h3",{id:"2-contract-account"},"2. Contract Account"),Object(a.b)("p",null,"An account that has a smart contract code associated withit. A contract account gets created by a user when she deploys a smart contract on the network. The address of a contract account is the hash of the address of the user account that deployed the contract and some other information. "))}l.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?c.a.createElement(f,s(s({ref:t},u),{},{components:n})):c.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);