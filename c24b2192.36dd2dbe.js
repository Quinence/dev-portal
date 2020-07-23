(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),i=t(6),r=(t(0),t(196)),o={id:"exchange-sending-transactions",title:"Sending Transactions",keywords:["constructing transaction object","signing transaction","sending transaction","zilliqa"],description:"Sending Zilliqa Transactions For Exchanges"},s={id:"exchanges/exchange-sending-transactions",isDocsHomePage:!1,title:"Sending Transactions",description:"Sending Zilliqa Transactions For Exchanges",source:"@site/docs/exchanges/exchange-sending-transactions.md",permalink:"/docs/exchanges/exchange-sending-transactions",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/exchanges/exchange-sending-transactions.md",sidebar:"ExchangesSidebar",previous:{title:"Account Management",permalink:"/docs/exchanges/exchange-account-management"},next:{title:"Polling for Deposits",permalink:"/docs/exchanges/exchange-tracking-deposits"}},c=[{value:"Constructing the Transaction Object",id:"constructing-the-transaction-object",children:[]},{value:"Signing the Transaction",id:"signing-the-transaction",children:[]},{value:"Sending the Transaction",id:"sending-the-transaction",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,"A critical feature of any exchange is the ability to withdraw the funds held\nin custody to an arbitrary address of the user's choosing. Because Zilliqa\nnodes do not provide an API for signing transactions on your behalf, you will\nhave to do so locally using an SDK of your choosing. We provide examples using\nzilliqa-js, the official JavaScript SDK."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The code in this tutorial is derived from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/dev-portal/blob/master/examples/exchange/src/services/zilliqa.ts"}),"example application"),"."))),Object(r.b)("h2",{id:"constructing-the-transaction-object"},"Constructing the Transaction Object"),Object(r.b)("p",null,"There are several ways to construct a ",Object(r.b)("inlineCode",{parentName:"p"},"Transaction")," instance. We recommend\nusing the transaction factory that is on the umbrella Zilliqa object, like\nso:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Zilliqa } from '@zilliqa-js/zilliqa';\nconst api = 'https://community-api.aws.z7a.xyz';\nconst zilliqa = new Zilliqa(api);\nconst pubKey = '02bc475d1b5dd9d6ed6347e93da3d4c1ad35f4d987d52ea91de997ecba56845cd2';\n\nconst rawTx = zilliqa.transactions.new({\n  version: bytes.pack(2, 1),\n  amount,\n  nonce: 1\n  gasLimit: Long.fromNumber(1), // normal (non-contract) transactions cost 1 gas\n  gasPrice: new BN(units.toQa(1000, units.Units.Li)), // the minimum gas price is 1,000 li\n  toAddr: to, // toAddr is self-explanatory\n  pubKey, // this determines which account is used to send the tx\n});\n")),Object(r.b)("h2",{id:"signing-the-transaction"},"Signing the Transaction"),Object(r.b)("p",null,"Again, there are a few ways you can sign your transaction. Under the hood,\nsigning is done with the elliptic curve ",Object(r.b)("inlineCode",{parentName:"p"},"secp256k1"),". The easiest way to do\nthis is by using a wallet. Extending our example above:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/* truncated */\nconst privateKey = '1CC85C5F4791232D7D9A6FC35F2FF15EFAAC4A6E0E9F4A565FD2CCCCB73FCA3B'\nconst address = 'e3ea87d7838397fc4417f5ec449f2d2d7cdb6dd1';\nzilliqa.wallet.addByPrivateKey(privateKey);\n// signWith uses the specified address to perform the signing of the transaction.\n// note that we provided the nonce to use when constructing the transaction.\n// if the nonce is not provided, zilliqa-js will automatically try to determine the correct nonce to use.\n// however, if there is no network connection, zilliqa-js will not be able to\n// do that, and signing will fail.\nconst signedTx = await this.zil.wallet.signWith(rawTx, address);\n")),Object(r.b)("p",null,"Note that we provided the nonce to use when constructing the transaction. If the nonce is not provided, zilliqa-js will automatically try to determine the correct nonce to use.\nHowever, if there is no network connection, zilliqa-js will not be able to do that, and signing will fail."),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"Transaction")," is successfully signed, you will be able to access the\n",Object(r.b)("inlineCode",{parentName:"p"},"signature")," property on ",Object(r.b)("inlineCode",{parentName:"p"},"txParams"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"console.log(signedTx.txParams.signature) // 128-bit signature\n")),Object(r.b)("p",null,"At this stage, you'll be able to broadcast your newly-signed transaction to\nthe network through a seed node."),Object(r.b)("h2",{id:"sending-the-transaction"},"Sending the Transaction"),Object(r.b)("p",null,"Broadcasting a signed transaction is trivial, but involves some subtleties\nthat can trip you up if you do not have a deep understanding of Zilliqa's\narchitecture."),Object(r.b)("p",null,"We demonstrate a lower-level way to broadcast a transaction using the built-in\n",Object(r.b)("inlineCode",{parentName:"p"},"HTTPProvider"),", as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/* truncated */\nconst res = await this.zil.provider.send('CreateTransaction', tx.txParams);\n")),Object(r.b)("p",null,"This returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," that, if successful, will contain your transaction\nhash:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"console.log(res.result && res.result.TranID) // 32-byte transaction hash\n")),Object(r.b)("p",null,"However, note that ",Object(r.b)("inlineCode",{parentName:"p"},"result")," will not exist on the response if there is an\nerror in processing the transaction. Instead, the response will contain an\n",Object(r.b)("inlineCode",{parentName:"p"},"error")," key, which is an object that complies with JSON-RPC 2.0."),Object(r.b)("p",null,"If you receive a ",Object(r.b)("inlineCode",{parentName:"p"},"TranID"),", that means your transaction was accepted by the\nseed node, and is now pending. ",Object(r.b)("inlineCode",{parentName:"p"},"zilliqa-js")," provides a way to automatically\npoll the lookup for confirmation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// returns a Promise<Transaction>\n// in this case, we try polling the node 33 times, increasing the interval\n// between attempts by 1000ms each time. this works out roughly to the block\n// time on the Zilliqa main net.\nconst tx = await signedTx.confirm(res.result.TranID, 33, 1000)\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"confirm")," method returns a Promise the status of which signifies the\nconfirmation status of the transaction. If the transaction was confirmed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"assert(signedTx.isConfirmed() === true);\n")))}d.isMDXComponent=!0},196:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,h=b["".concat(o,".").concat(u)]||b[u]||p[u]||r;return t?i.a.createElement(h,s(s({ref:n},l),{},{components:t})):i.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);