(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),i=(n(0),n(196)),a={id:"core-broadcasting",title:"Broadcasting",keywords:["core","broadcasting"],description:"Core protocol design - broadcasting."},c={id:"contributors/core-broadcasting",isDocsHomePage:!1,title:"Broadcasting",description:"Core protocol design - broadcasting.",source:"@site/docs/contributors/core-broadcasting.md",permalink:"/docs/contributors/core-broadcasting",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/contributors/core-broadcasting.md",sidebar:"ContributorsSidebar",previous:{title:"Gossip",permalink:"/docs/contributors/core-gossip"},next:{title:"Blacklist",permalink:"/docs/contributors/core-blacklist"}},l=[{value:"Design",id:"design",children:[]},{value:"Application",id:"application",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"Gossip is used widely in the Zilliqa network for messaging. However, the gossip protocol by design needs the information of all peers that must eventually receive the rumor."),Object(i.b)("p",null,"This basic requirement for peer information is usually available to a node, except at the point when a new DS block has been mined. The DS block contains the peer information for all shards, which is extracted by each node to initialize its peer list and restart the gossip engine."),Object(i.b)("p",null,"However, distributing the DS block itself is a problem that has to be dealt with in a different manner. The solution employed is ",Object(i.b)("strong",{parentName:"p"},"tree-based cluster broadcasting"),". At the start of a new DS epoch, before DS block distribution, shard nodes don't know the information of the other nodes in the same shard.\nThus, we leverage clustered multicasting in order to broadcast the DS block to all the nodes within a shard."),Object(i.b)("h2",{id:"design"},"Design"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Assume that we have ",Object(i.b)("inlineCode",{parentName:"li"},"X")," nodes in a shard. We form clusters - each of ",Object(i.b)("inlineCode",{parentName:"li"},"Y")," nodes - out of these shard nodes. Each cluster, in turn, has ",Object(i.b)("inlineCode",{parentName:"li"},"Z")," child clusters."),Object(i.b)("li",{parentName:"ol"},"Every node is assigned a sequence number ",Object(i.b)("inlineCode",{parentName:"li"},"n")," starting from ",Object(i.b)("inlineCode",{parentName:"li"},"0"),", such that ",Object(i.b)("inlineCode",{parentName:"li"},"n/Y")," represents the cluster it belongs to. For example, ",Object(i.b)("inlineCode",{parentName:"li"},"2/10 = 0"),", ",Object(i.b)("inlineCode",{parentName:"li"},"11/10 = 1"),"."),Object(i.b)("li",{parentName:"ol"},"Therefore, we should have a total of ",Object(i.b)("inlineCode",{parentName:"li"},"X/Y")," clusters, indexed from ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to ",Object(i.b)("inlineCode",{parentName:"li"},"X/Y-1"),". A node ",Object(i.b)("inlineCode",{parentName:"li"},"n")," belonging to cluster ",Object(i.b)("inlineCode",{parentName:"li"},"n/Y")," is at level ",Object(i.b)("inlineCode",{parentName:"li"},"log_Z(n/Y)"),"."),Object(i.b)("li",{parentName:"ol"},"A node multicasts messages to nodes within the range ",Object(i.b)("inlineCode",{parentName:"li"},"(n/Y * Z + 1)*Y")," ~ ",Object(i.b)("inlineCode",{parentName:"li"},"((n/Y * Z + Z + 1)* Y - 1)"),". Bound checks on node index need to be done before multicasting. If the checks fail, we don\u2019t broadcast.")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/contributors/core/tree-based-cluster-broadcasting/broadcast.png",alt:"image01"}))),Object(i.b)("h2",{id:"application"},"Application"),Object(i.b)("p",null,"These are the parameters that control the broadcasting of DS blocks from DS committee nodes to shard nodes according to the design above."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<data_sharing>\n  <BROADCAST_TREEBASED_CLUSTER_MODE>true</BROADCAST_TREEBASED_CLUSTER_MODE>\n  <NUM_FORWARDED_BLOCK_RECEIVERS_PER_SHARD>3</NUM_FORWARDED_BLOCK_RECEIVERS_PER_SHARD>\n  <MULTICAST_CLUSTER_SIZE>10</MULTICAST_CLUSTER_SIZE>\n  <NUM_OF_TREEBASED_CHILD_CLUSTERS>3</NUM_OF_TREEBASED_CHILD_CLUSTERS>\n</data_sharing>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BROADCAST_TREEBASED_CLUSTER_MODE"),": Toggles between tree-based cluster broadcasting or pure multicasting."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NUM_FORWARDED_BLOCK_RECEIVERS_PER_SHARD"),": The number of shard nodes to initially receive the DS block from DS committee nodes."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MULTICAST_CLUSTER_SIZE"),": The number of nodes in each cluster."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NUM_OF_TREEBASED_CHILD_CLUSTERS"),": The number of child clusters for a given cluster.")))}b.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||p[u]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);