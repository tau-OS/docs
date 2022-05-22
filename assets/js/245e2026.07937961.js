"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[24],{3905:function(A,e,t){t.d(e,{Zo:function(){return g},kt:function(){return p}});var n=t(7294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var a=n.createContext({}),w=function(A){var e=n.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},g=function(A){var e=w(A.components);return n.createElement(a.Provider,{value:e},A.children)},l={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,r=A.originalType,a=A.parentName,g=o(A,["components","mdxType","originalType","parentName"]),h=w(t),p=i,c=h["".concat(a,".").concat(p)]||h[p]||l[p]||r;return t?n.createElement(c,s(s({ref:e},g),{},{components:t})):n.createElement(c,s({ref:e},g))}));function p(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var r=t.length,s=new Array(r);s[0]=h;var o={};for(var a in e)hasOwnProperty.call(e,a)&&(o[a]=e[a]);o.originalType=A,o.mdxType="string"==typeof A?A:i,s[1]=o;for(var w=2;w<r;w++)s[w]=t[w];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2765:function(A,e,t){t.r(e),t.d(e,{assets:function(){return g},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return w},toc:function(){return l}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],o={sidebar_position:5},a="Views",w={unversionedId:"hig/patterns/views",id:"hig/patterns/views",title:"Views",description:"A View is the main door to your app's content. It displays what the app's aim is for. Views should contain a label that titles it, using the View Title typography style. This Title should be concise and not go over 3 words. Views can also contain a simple description below the View Title, spaced by 6 units, and styled with View Subtitle typography style.",source:"@site/docs/hig/patterns/views.md",sourceDirName:"hig/patterns",slug:"/hig/patterns/views",permalink:"/docs/hig/patterns/views",draft:!1,editUrl:"https://github.com/tau-OS/devdocs/blob/main/docs/hig/patterns/views.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"hig",previous:{title:"Sidebars",permalink:"/docs/hig/patterns/sidebars"},next:{title:"View Switcher",permalink:"/docs/hig/patterns/view_switcher"}},g={},l=[],h={toc:l};function p(A){var e=A.components,o=(0,i.Z)(A,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"views"},"Views"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5386).Z,width:"1126",height:"366"})),(0,r.kt)("p",null,"A View is the main door to your app's content. It displays what the app's aim is for. Views should contain a label that titles it, using the View Title typography style. This Title should be concise and not go over 3 words. Views can also contain a simple description below the View Title, spaced by 6 units, and styled with View Subtitle typography style."),(0,r.kt)("p",null,"There are 3 types of Views we suggest to follow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monoview"),(0,r.kt)("p",{parentName:"li"},"This type of View contains one space for content. It pairs well with a View Switcher. It's the default View type.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dualview"),(0,r.kt)("p",{parentName:"li"},"This type of View is usually used when there's a details portion and a main portion in a View. Both sides should be equally important to the View.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"View + Auxiliary Sidebar"),(0,r.kt)("p",{parentName:"li"},"This is a special type of View where there's an Auxiliary Sidebar with transient information that isn't details of the main portion of the View. The Auxiliary Sidebar should be toggle-able, and show itself separated with a separator from the rest of the View. The Auxiliary Sidebar should not exceed 200 units in width."))))}p.isMDXComponent=!0},5386:function(A,e){e.Z="data:image/png;base64,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"}}]);