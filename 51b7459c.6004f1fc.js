(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(196)),i={id:"core-diagnostic-data",title:"Diagnostic Data",keywords:["core","diagnostic"],description:"Core protocol design - diagnostic data."},c={id:"contributors/core-diagnostic-data",isDocsHomePage:!1,title:"Diagnostic Data",description:"Core protocol design - diagnostic data.",source:"@site/docs/contributors/core-diagnostic-data.md",permalink:"/docs/contributors/core-diagnostic-data",editUrl:"https://github.com/Zilliqa/dev-portal/docs/contributors/core-diagnostic-data.md",sidebar:"ContributorsSidebar",previous:{title:"View Change",permalink:"/docs/contributors/core-view-change"},next:{title:"Status Server",permalink:"/docs/contributors/core-status-server"}},l=[{value:"Diagnostic Data",id:"diagnostic-data",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"diagnostic-data"},"Diagnostic Data"),Object(o.b)("p",null,"We store in LevelDB a limited amount of some operational data about the network that is intended for use when diagnosing any issues with the mainnet."),Object(o.b)("p",null,"Globally, the amount of data stored is controlled by the constant ",Object(o.b)("inlineCode",{parentName:"p"},"MAX_ENTRIES_FOR_DIAGNOSTIC_DATA"),", which is usually set to either 25 or 50."),Object(o.b)("p",null,"This is the current data stored for diagnostic purposes:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"LevelDB location"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Data stored"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Storage timing"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Tool for data extraction"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"persistence/diagnosticNodes"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DS and shard peers"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Every vacuous epoch"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"getnetworkhistory")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"persistence/diagnosticCoinb"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Coinbase values and distribution"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Every DS block"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"getrewardhistory")))),Object(o.b)("p",null,"To use the diagnostic tools:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure there is a ",Object(o.b)("inlineCode",{parentName:"li"},"persistence")," subfolder in your current directory"),Object(o.b)("li",{parentName:"ol"},"Make sure ",Object(o.b)("inlineCode",{parentName:"li"},"persistence/diagnosticNodes")," and ",Object(o.b)("inlineCode",{parentName:"li"},"persistence/diagnosticCoinb")," contain the data you want to extract"),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"getnetworkhistory <name of output CSV file>")," or ",Object(o.b)("inlineCode",{parentName:"li"},"getrewardhistory <name of output CSV file>")),Object(o.b)("li",{parentName:"ol"},"Output CSV file will appear in the current directory. Use Excel or LibreOffice Calc to open it")))}s.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,O=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);