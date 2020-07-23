(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),l=(a(0),a(196)),c={id:"dev-tools-cli",title:"CLI-Tools",keywords:["cli tools","go-zli","zilliqa"],description:"Zilliqa CLI Tools"},r={id:"dev/dev-tools-cli",isDocsHomePage:!1,title:"CLI-Tools",description:"Zilliqa CLI Tools",source:"@site/docs/dev/dev-tools-cli.md",permalink:"/docs/dev/dev-tools-cli",editUrl:"https://github.com/Zilliqa/dev-portal/docs/dev/dev-tools-cli.md",sidebar:"DevelopersSidebar",previous:{title:"WebSocket Server",permalink:"/docs/dev/dev-tools-websockets"},next:{title:"Scilla IDEs",permalink:"/docs/dev/dev-tools-ide"}},o=[{value:"go-zli",id:"go-zli",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Getting zli",id:"getting-zli",children:[{value:"Installation",id:"installation",children:[]},{value:"Commands",id:"commands",children:[]},{value:"RPC",id:"rpc",children:[]},{value:"Examples",id:"examples",children:[]}]}],b={rightToc:o};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("h2",{id:"go-zli"},"go-zli"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/zli"}),"zli")," is a command-line tool based on the Zilliqa ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/gozilliqa-sdk"}),"Golang SDK"),"."),Object(l.b)("h2",{id:"source-code"},"Source Code"),Object(l.b)("p",null,"The Github repository can be found at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/zli"}),"https://github.com/Zilliqa/zli")),Object(l.b)("h2",{id:"getting-zli"},"Getting zli"),Object(l.b)("p",null,"Run the following to clone the repository to your local machine"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/Zilliqa/zli.git\n")),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("h4",{id:"build"},"Build"),Object(l.b)("p",null,"Run the following command to generate the ",Object(l.b)("inlineCode",{parentName:"p"},"zli")," binary:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"go build -o zli main/main.go\n")),Object(l.b)("h4",{id:"install"},"Install"),Object(l.b)("p",null,"Option 1: Install the ",Object(l.b)("inlineCode",{parentName:"p"},"zli")," binary by specifying the output path during the build:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"go build -o $GOPATH/bin/zli main/main.go\n")),Object(l.b)("p",null,"Option 2: Run the installation script:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sh install.sh\n")),Object(l.b)("h3",{id:"commands"},"Commands"),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"zli -h")," to see the help message along with the list of available commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'A convenient command-line tool to generate accounts, run integration testings or run http server .etc\nUsage:\n  zli [flags]\n  zli [command]\nAvailable Commands:\n  account     Generate or load multiple accounts\n  contract    Deploy or call zilliqa smart contract\n  help        Help about any command\n  rpc         readonly json rpc of zilliqa\n  transfer    Transfer zilliqa token to a specific account\n  version     Print the version number of zli\n  wallet      Init a new wallet or get exist wallet info\nFlags:\n  -h, --help   help for zli\nUse "zli [command] --help" for more information about a command.\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"zli")," works by storing account information in a wallet configuration file in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.zilliqa"),"."),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"zli [command] --help")," to see the usage details for each available command. Here are some commonly used commands:"),Object(l.b)("h4",{id:"wallet"},"Wallet"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli wallet init"),": Generate a new wallet (configuration file) for ",Object(l.b)("inlineCode",{parentName:"li"},"zli")," to use. A default account (using randomly generated private key) is created inside the wallet."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli wallet echo"),": Print out the contents of the wallet (i.e., the configuration file)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli wallet from [flags]")," : Generate a new wallet from a specific private key.")),Object(l.b)("h4",{id:"contract"},"Contract"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli contract deploy [flags]"),": Deploy a new contract."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli contract call [flags]"),": Call an existing contract."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli contract state [flags]"),": Get the state data for a specific smart contract.")),Object(l.b)("h4",{id:"account"},"Account"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli account generate [flags]"),": Generate a random private key.")),Object(l.b)("h4",{id:"transfer"},"Transfer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli transfer [flags]"),": Transfer Zilliqa tokens to a specific account.")),Object(l.b)("h3",{id:"rpc"},"RPC"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"zli rpc transaction [flags]"),": Get the transaction details for a specific transaction ID.")),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("h4",{id:"executing-corner-case-tests-on-a-tiny-contract"},"Executing Corner-Case Tests on a Tiny Contract"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Prepare the wallet (configuration file ",Object(l.b)("inlineCode",{parentName:"li"},"~/.zilliqa"),") by running ",Object(l.b)("inlineCode",{parentName:"li"},"zli wallet init")," or ",Object(l.b)("inlineCode",{parentName:"li"},"zli wallet from -p [private_key]"),":")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "api": "https://ipc-ud-api.dev.z7a.xyz",\n    "chain_id": 2,\n    "default_account": {\n        "private_key": "227159779c78c9a920cba73086cf73fb3ee15cdd95380aa3b93757669e345300",\n        "public_key": "0324cdd72db3de0e9f570d550631438d581056fb0d9c4daddbad2928eaf49f54ee",\n        "address": "31f33d13ad6aa724cde1f3d12d75fb344a1df9de",\n        "bech_32_address": "zil1x8en6yadd2njfn0p70gj6a0mx39pm7w7lz3kpm"\n    },\n    "accounts": [{\n        "private_key": "227159779c78c9a920cba73086cf73fb3ee15cdd95380aa3b93757669e345300",\n        "public_key": "0324cdd72db3de0e9f570d550631438d581056fb0d9c4daddbad2928eaf49f54ee",\n        "address": "31f33d13ad6aa724cde1f3d12d75fb344a1df9de",\n        "bech_32_address": "zil1x8en6yadd2njfn0p70gj6a0mx39pm7w7lz3kpm"\n    }]\n}\n')),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Deploy a tiny contract by running ",Object(l.b)("inlineCode",{parentName:"p"},"sh scripts/deploy-tiny-contract.sh"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run ",Object(l.b)("inlineCode",{parentName:"p"},"zli testsuit tiny -a [contract_address]")," or ",Object(l.b)("inlineCode",{parentName:"p"},"sh scripts/test-tiny-contract.sh")," to execute the tests. If the receipt of any transaction returns ",Object(l.b)("inlineCode",{parentName:"p"},"false"),", execution stops and the remaining tests are aborted."))),Object(l.b)("h4",{id:"invoking-a-contract"},"Invoking a Contract"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Prepare the wallet similar to the previous example.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the following command to invoke a smart contract:"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"zli contract call -a <smart contract address> -t <transition name> -r <parameter>\n")),Object(l.b)("p",null,"For instance:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'zli contract call -a 305d5b3acaa2f4a56b5e149400466c58194e695f -t SubmitTransaction -r "[{\\"vname\\":\\"recipient\\",\\"type\\":\\"ByStr20\\",\\"value\\":\\"0x381f4008505e940ad7681ec3468a719060caf796\\"},{\\"vname\\":\\"amount\\",\\"type\\":\\"Uint128\\",\\"value\\":\\"10\\"},{\\"vname\\":\\"tag\\",\\"type\\":\\"String\\",\\"value\\":\\"a\\"}]"\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},Object(l.b)("inlineCode",{parentName:"p"},"zli")," supports passing the private key as a parameter to the ",Object(l.b)("inlineCode",{parentName:"p"},"zli contract deploy")," or ",Object(l.b)("inlineCode",{parentName:"p"},"zli contract call")," command. Just use the ",Object(l.b)("inlineCode",{parentName:"p"},"-k [private key]")," option to switch to a different private key for sending transactions."))),Object(l.b)("h4",{id:"running-zli-inside-a-docker-container"},"Running zli Inside a Docker Container"),Object(l.b)("p",null,"An alternative to running ",Object(l.b)("inlineCode",{parentName:"p"},"zli")," as a native binary is to build (or download) the ",Object(l.b)("inlineCode",{parentName:"p"},"go-zli")," Docker image, and to run ",Object(l.b)("inlineCode",{parentName:"p"},"zli")," from inside the container. This option requires prior installation of Docker (refer to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker installation page"),")."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Build the ",Object(l.b)("inlineCode",{parentName:"li"},"go-zli")," Docker image:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sh build_docker_image.sh\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Run ",Object(l.b)("inlineCode",{parentName:"li"},"zli")," inside a container environment:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it -v ~/contract:/contract docker.pkg.github.com/zilliqa/zli/zli bash\n")))}p.isMDXComponent=!0},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return a?i.a.createElement(u,r(r({ref:t},b),{},{components:a})):i.a.createElement(u,r({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var b=2;b<l;b++)c[b]=a[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);