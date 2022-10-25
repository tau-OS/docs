"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Tips and Tricks",l={unversionedId:"guide/tips-and-tricks",id:"guide/tips-and-tricks",title:"Tips and Tricks",description:"These docs are very technical, and may require Linux experience to understand.",source:"@site/docs/guide/tips-and-tricks.md",sourceDirName:"guide",slug:"/guide/tips-and-tricks",permalink:"/docs/guide/tips-and-tricks",draft:!1,editUrl:"https://github.com/tau-OS/docs/blob/main/docs/guide/tips-and-tricks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"tauOS User Guide",permalink:"/docs/guide/"}},s={},p=[{value:"Working with Distrobox",id:"working-with-distrobox",level:2},{value:"Running applications on the host",id:"running-applications-on-the-host",level:3},{value:"Working with OSTree",id:"working-with-ostree",level:2},{value:"Tracking changes to tauOS",id:"tracking-changes-to-tauos",level:3},{value:"Working with Flatpak",id:"working-with-flatpak",level:2},{value:"Using Flatpak applications from the terminal",id:"using-flatpak-applications-from-the-terminal",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tips-and-tricks"},"Tips and Tricks"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"These docs are very technical, and may require Linux experience to understand.\nYou can help us bring these docs to more users by ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing"},"contributing"),".")),(0,i.kt)("h2",{id:"working-with-distrobox"},"Working with Distrobox"),(0,i.kt)("h3",{id:"running-applications-on-the-host"},"Running applications on the host"),(0,i.kt)("p",null,"This can be necessary if you want to interact with tools available from the host, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"podman"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nmcli")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"lpm")," without leaving the Distrobox container in between. You can use flatpak-spawn, included in the base installation for this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ flatpak-spawn --host MYAPP --help\n")),(0,i.kt)("p",null,"Replace ",(0,i.kt)("em",{parentName:"p"},"MYAPP")," with the name of the app you wish to run."),(0,i.kt)("p",null,"If the application you want to call requires sudo access, the -S option must be supplied to sudo like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ flatpak-spawn --host sudo -S <MYAPP> status\n")),(0,i.kt)("h2",{id:"working-with-ostree"},"Working with OSTree"),(0,i.kt)("h3",{id:"tracking-changes-to-tauos"},"Tracking changes to tauOS"),(0,i.kt)("p",null,"Some directories in tauOS are writable by the user, like ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc"),". You can get a quick overview of the files changed under ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo ostree admin config-diff\n")),(0,i.kt)("p",null,"To get a more elaborate diff of ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc"),", you can use something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo diff -yrW200 --suppress-common-lines --color=always /usr/etc /etc 2>/dev/null\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This works because tauOS keeps an unmodified copy of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," directory under ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/etc"),". All of your changes go to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," directly.")),(0,i.kt)("h2",{id:"working-with-flatpak"},"Working with Flatpak"),(0,i.kt)("h3",{id:"using-flatpak-applications-from-the-terminal"},"Using Flatpak applications from the terminal"),(0,i.kt)("p",null,"The most noticable change when using Flatpak applications instead of conventional installations is that the applications cannot be directly called from the CLI any more, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ hello\nbash: command not found: hello\n")),(0,i.kt)("p",null,"Instead, one can call them like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ flatpak run co.tauos.Hello\n")),(0,i.kt)("p",null,"In addition, most Flatpak applications export their internal binaries under an installation-dependent location:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Flatpak applications installed from ",(0,i.kt)("inlineCode",{parentName:"p"},"system")," remotes, these can be found under ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/flatpak/exports/bin/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Flatpak applications installed from ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," remotes, these can be found under ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.local/share/flatpak/exports/bin/")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you\u2019re unsure to which installation a Flatpak application belongs, you can use this command to print it out:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ flatpak list --app --columns=name,installation\n"))),(0,i.kt)("p",null,"You can then either add these directories to your ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ co.tauos.Hello\n")),(0,i.kt)("p",null,"If you find yourself using a certain application a lot, you can setup a shell alias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ alias hello="flatpak run co.tauos.Hello"\n  # or alias hello="co.tauos.Hello"\n$ hello\n')))}u.isMDXComponent=!0}}]);