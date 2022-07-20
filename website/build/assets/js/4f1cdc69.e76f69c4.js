"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1387],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1200:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4,sidebar_label:"Scenarios"},s="Applicable scenarios",c={unversionedId:"03scenarios",id:"03scenarios",title:"Applicable scenarios",description:"HwameiStor provisions two kind of local volumes: LVM and Disk.",source:"@site/docs/03scenarios.md",sourceDirName:".",slug:"/03scenarios",permalink:"/docs/03scenarios",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03scenarios.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Scenarios"},sidebar:"tutorialSidebar",previous:{title:"Install Independently",permalink:"/docs/02installation/02install"},next:{title:"Kubernetes Storage",permalink:"/docs/04concepts/00k8s-store"}},u={},p=[{value:"Hot backup",id:"hot-backup",level:2},{value:"Intra-node hot backup",id:"intra-node-hot-backup",level:3},{value:"Inter-node hot backup",id:"inter-node-hot-backup",level:3},{value:"Rebalance data",id:"rebalance-data",level:2},{value:"Change volume type",id:"change-volume-type",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"applicable-scenarios"},"Applicable scenarios"),(0,o.kt)("p",null,"HwameiStor provisions two kind of local volumes: LVM and Disk."),(0,o.kt)("p",null,"As a component of HwameiStor, Local Storage provisions two types of local LVM volumes, such as HA and non-HA."),(0,o.kt)("p",null,"For the non-HA local LVM volume, it's the best solution for data persistency in the following use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database")," with HA capability, such as MongoDB, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Messaging system")," with HA capability, such as Kafka, RabbitMQ, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Key-value store")," with HA capability, such as Redis, etc."),(0,o.kt)("li",{parentName:"ul"},"Others with HA capability")),(0,o.kt)("p",null,"For the HA local LVM volume, it's the best solution for data persistency in the following use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database"),", such as MySQL, PostgreSQL, etc."),(0,o.kt)("li",{parentName:"ul"},"Other applications which require the data with HA features.")),(0,o.kt)("h2",{id:"hot-backup"},"Hot backup"),(0,o.kt)("h3",{id:"intra-node-hot-backup"},"Intra-node hot backup"),(0,o.kt)("p",null,"It guarantees with raid 5, which can tolerate a set of disk failure."),(0,o.kt)("p",null,"Control flow is independent of data flow to ensure the stability of data access."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"intra-node hot backup",src:n(3514).Z,width:"568",height:"684"})),(0,o.kt)("h3",{id:"inter-node-hot-backup"},"Inter-node hot backup"),(0,o.kt)("p",null,"It provides protection with raid 5 + active/standby mechanism."),(0,o.kt)("p",null,"The dce-storage, a dedicated network logical interface for HA, is designed to synchronize storage traffic between nodes. It can synchronously replicate data across nodes to guarantee hot backup of data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"inter-node hot backup",src:n(4266).Z,width:"964",height:"669"})),(0,o.kt)("h2",{id:"rebalance-data"},"Rebalance data"),(0,o.kt)("p",null,"Balanced placement of data in the cluster is achieved through data volume migration technology. Move data online to nodes with more storage space."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"data rebalance",src:n(8495).Z,width:"1678",height:"696"})),(0,o.kt)("h2",{id:"change-volume-type"},"Change volume type"),(0,o.kt)("p",null,"In order to support some special scenarios, a single-replica volume is allowed to be changed to multiple replicas, and inter-node hot backup is supported."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"volume change",src:n(4796).Z,width:"1110",height:"692"})))}h.isMDXComponent=!0},8495:function(e,t,n){t.Z=n.p+"assets/images/balance-50cea0a1c01ee8149b354ac8135e0006.png"},4266:function(e,t,n){t.Z=n.p+"assets/images/ha-2eea34961e0646bf41935b51466fa8cf.png"},3514:function(e,t,n){t.Z=n.p+"assets/images/ioflow-d9cc73809e2b7e142fd22a3e6196c288.png"},4796:function(e,t,n){t.Z=n.p+"assets/images/volumechange-9b25e89564151d63458ef20505d32075.png"}}]);