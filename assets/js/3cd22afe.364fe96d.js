"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3739],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=a(n),y=o,d=s["".concat(c,".").concat(y)]||s[y]||u[y]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8697:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return m},default:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],p={sidebar_position:5,title:"Helm Deployment",keywords:["Helm"],description:"Helm Deployment"},c=void 0,a={unversionedId:"deployment/deployment-helm",id:"deployment/deployment-helm",isDocsHomePage:!1,title:"Helm Deployment",description:"Helm Deployment",source:"@site/docs/deployment/deployment-helm.md",sourceDirName:"deployment",slug:"/deployment/deployment-helm",permalink:"/docs/next/deployment/deployment-helm",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/deployment/deployment-helm.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Helm Deployment",keywords:["Helm"],description:"Helm Deployment"},sidebar:"tutorialSidebar",previous:{title:"K8S Deployment",permalink:"/docs/next/deployment/deployment-k8s"},next:{title:"Custom Deployment",permalink:"/docs/next/deployment/deployment-custom"}},m=[],u={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article introduces the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"helm")," to deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."))}s.isMDXComponent=!0}}]);