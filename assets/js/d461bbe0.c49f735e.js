"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[492],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7909:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:10},u="Overlay Button",s={unversionedId:"hig/patterns/overlay_button",id:"hig/patterns/overlay_button",title:"Overlay Button",description:"Use a Overlay Button for the most important action on a Window. The Overlay Button appears in front of all other content on Window, and is recognizable for its circle shape and icon in the center. Only use a Overlay Button for presenting a Window's primary action. The Overlay Button can be aligned left, center, or right.",source:"@site/docs/hig/patterns/overlay_button.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/overlay_button",permalink:"/docs/hig/patterns/overlay_button",draft:!1,editUrl:"https://github.com/tau-OS/docs/blob/main/docs/hig/patterns/overlay_button.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"hig",previous:{title:"Buttons",permalink:"/docs/hig/patterns/buttons"},next:{title:"Chips",permalink:"/docs/hig/patterns/chips"}},c={},p=[{value:"Geometry",id:"geometry",level:2},{value:"Small Overlay Button",id:"small-overlay-button",level:3},{value:"Large Overlay Button",id:"large-overlay-button",level:3},{value:"Textual Overlay Button",id:"textual-overlay-button",level:3}],d={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overlay-button"},"Overlay Button"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8299).Z,width:"428",height:"359"})),(0,a.kt)("p",null,"Use a Overlay Button for the most important action on a Window. The Overlay Button appears in front of all other content on Window, and is recognizable for its circle shape and icon in the center. Only use a Overlay Button for presenting a Window's primary action. The Overlay Button can be aligned left, center, or right."),(0,a.kt)("p",null,"There are 3 sizes of Overlay Buttons, Normal being the default:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Normal (50\xd750px, icon: 24px)"),(0,a.kt)("li",{parentName:"ol"},"Small (34\xd734px, icon: 16px)"),(0,a.kt)("li",{parentName:"ol"},"Large (90\xd790px, icon: 32px)")),(0,a.kt)("h2",{id:"geometry"},"Geometry"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9552).Z,width:"428",height:"359"})),(0,a.kt)("p",null,"The Overlay Button is typically shown in a circle container, and the coloring of its background should be the app's accent color, and should contrast well with the background."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It should by default be spaced 18px from all sides."),(0,a.kt)("li",{parentName:"ul"},"Don't layer things on top of a Overlay Button."),(0,a.kt)("li",{parentName:"ul"},"Ensure that the Overlay Button contrasts very well with the area behind it.")),(0,a.kt)("p",null,"An icon in an Overlay Button should be understandable and clear. On hover, Overlay Buttons should display a tooltip showing what it does in one or 3 words maximum. It shouldn't contain notifications or actions seen elsewhere."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use clear and simple icons, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"list-add-symbolic"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"chat-message-new-symbolic"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"document-edit-symbolic"),". Ensure that a tooltip is available for clarity."),(0,a.kt)("li",{parentName:"ul"},"Don't use confusing or open-ended icons that suggest less common actions.")),(0,a.kt)("p",null,"An Overlay Button can trigger an action either on the current Window, or it can perform an action that creates a new Window.\nIt promotes an important, constructive action such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create"),(0,a.kt)("li",{parentName:"ul"},"Favorite"),(0,a.kt)("li",{parentName:"ul"},"Share"),(0,a.kt)("li",{parentName:"ul"},"Start a process")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3747).Z,width:"501",height:"153"})),(0,a.kt)("h3",{id:"small-overlay-button"},"Small Overlay Button"),(0,a.kt)("p",null,"This type of Overlay Button is used for secondary, supporting actions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If multiple important actions are necessary, use a small Overlay Button for those."),(0,a.kt)("li",{parentName:"ul"},"Don't use multiple normal-sized Overlay Buttons as they might compete for attention.")),(0,a.kt)("h3",{id:"large-overlay-button"},"Large Overlay Button"),(0,a.kt)("p",null,"This type of Overlay Button is used when the layout calls for a prominent action, when a larger footprint would aid in user engagement."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don\u2019t use an Overlay Button in a non-scrolling view, use a Button instead."),(0,a.kt)("li",{parentName:"ul"},"Consider a large Overlay Button when there's a clear action to do in the user flow."),(0,a.kt)("li",{parentName:"ul"},"Don't use a large Overlay Button if it will hide important UI when scrolling. Instead use a normal sized Overlay Button.")),(0,a.kt)("h3",{id:"textual-overlay-button"},"Textual Overlay Button"),(0,a.kt)("p",null,"This type of Overlay Button can be more effective where an icon alone might be too ambiguous in the View."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don\u2019t use a Textual Overlay Button in a non-scrolling view."),(0,a.kt)("li",{parentName:"ul"},"If a primary action is needed in a non-scrolling View, use a Button instead.")))}m.isMDXComponent=!0},8299:function(e,t,n){t.Z=n.p+"assets/images/overlay_button-2014536b160b72c9b42dc9ce6d0bae22.png"},9552:function(e,t,n){t.Z=n.p+"assets/images/overlay_button_geo-c59cee7579dfadf80df1b70c787b7b2f.png"},3747:function(e,t){t.Z="data:image/png;base64,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"}}]);