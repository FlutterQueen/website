"use strict";(self.webpackChunkqueen=self.webpackChunkqueen||[]).push([[322],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2656:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"themes",sidebar_position:3},u="Get Started",c={unversionedId:"themes",id:"themes",title:"themes",description:"queen support multiple themes out of the box in just TWO steps",source:"@site/docs/themes.md",sourceDirName:".",slug:"/themes",permalink:"/website/docs/themes",editUrl:"https://github.com/FlutterQueen/website/tree/master/docs/themes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"themes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"validation",permalink:"/website/docs/validation"},next:{title:"LH - installation",permalink:"/website/docs/cli/installation"}},p=[{value:"Config",id:"config",children:[],level:2},{value:"booting",id:"booting",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"queen support multiple themes out of the box in just ",(0,o.kt)("inlineCode",{parentName:"p"},"TWO")," steps"),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inside config folder create theme file ",(0,o.kt)("inlineCode",{parentName:"li"},"theme.dart")),(0,o.kt)("li",{parentName:"ul"},"extend ",(0,o.kt)("inlineCode",{parentName:"li"},"QThemeConfig")),(0,o.kt)("li",{parentName:"ul"},"create your own themes list")),(0,o.kt)("h2",{id:"booting"},"booting"),(0,o.kt)("p",null,"inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function pass the theme config to the ",(0,o.kt)("inlineCode",{parentName:"p"},"boot")," function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"FlutterQueen.boot(themeConfig:AppThemeConfig());\n")),(0,o.kt)("h1",{id:"switching-between-themes"},"switching between themes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to switch to the next theme call ",(0,o.kt)("inlineCode",{parentName:"li"},"QTheme.next()")),(0,o.kt)("li",{parentName:"ul"},"to switch to specific theme by index call ",(0,o.kt)("inlineCode",{parentName:"li"},"QTheme.updateTo(int)")," and pass the index"),(0,o.kt)("li",{parentName:"ul"},"to get the current theme call ",(0,o.kt)("inlineCode",{parentName:"li"},"QTheme.current")),(0,o.kt)("li",{parentName:"ul"},"to get the current index call ",(0,o.kt)("inlineCode",{parentName:"li"},"QTheme.currentIndex"))))}m.isMDXComponent=!0}}]);