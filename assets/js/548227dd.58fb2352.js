"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[9495],{66160:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=n(74848),i=n(28453);const a={description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},l="\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",c={id:"docs_ml/Numerical-optimization/Questions",title:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",description:"",source:"@site/docs/docs_ml/11-Numerical-optimization/07-Questions.md",sourceDirName:"docs_ml/11-Numerical-optimization",slug:"/docs_ml/Numerical-optimization/Questions",permalink:"/docs/docs_ml/Numerical-optimization/Questions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},sidebar:"docs_ml",previous:{title:"\u041c\u0435\u0442\u043e\u0434 \u041d\u044c\u044e\u0442\u043e\u043d\u0430",permalink:"/docs/docs_ml/Numerical-optimization/Newton-method"},next:{title:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438",permalink:"/docs/docs_ml/Classifier-evaluation"}},r={},o=[];function m(s){const e={annotation:"annotation",h1:"h1",li:"li",math:"math",mi:"mi",mrow:"mrow",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u0434\u043b\u044f-\u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u0435\u0441\u0430 \u0432 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u0430\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043c\u0435\u0449\u0430\u044e\u0442 \u043d\u0430 \u0430\u043d\u0442\u0438\u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0442\u0435\u0440\u044c?"}),"\n",(0,t.jsx)(e.li,{children:"\u0412 \u0447\u0451\u043c \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430 \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043e\u0431\u044b\u0447\u043d\u044b\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430?"}),"\n",(0,t.jsxs)(e.li,{children:["\u0412 \u0447\u0435\u043c \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u043e\u0445\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430 \u0441 \u0438\u043d\u0435\u0440\u0446\u0438\u0435\u0439? \u041c\u043e\u0436\u0435\u0442 \u043b\u0438 \u043e\u043d \u0441\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u0447\u0435\u043c \u043c\u0435\u0442\u043e\u0434 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430 \u043f\u0440\u0438 \u043d\u0435\u0431\u043b\u0430\u0433\u043e\u043f\u0440\u0438\u044f\u0442\u043d\u043e\u043c \u0432\u044b\u0431\u043e\u0440\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"\u03bc"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mu"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"\u03bc"})]})})]}),"?"]}),"\n",(0,t.jsxs)(e.li,{children:["\u041a\u0430\u043a \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"\u03b1"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"})]})})]})," \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u044d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0433\u043b\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u044f?"]}),"\n",(0,t.jsx)(e.li,{children:"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u043c\u0435\u0442\u043e\u0434\u0430 \u041d\u044c\u044e\u0442\u043e\u043d\u0430 \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0441\u043f\u0443\u0441\u043a\u0430. \u041e\u0431\u043e\u0441\u043d\u0443\u0439\u0442\u0435, \u043f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d \u043d\u0430\u0439\u0434\u0451\u0442 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u043e \u0437\u0430 \u043e\u0434\u043d\u0443 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044e."}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(m,{...s})}):m(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>l,x:()=>c});var t=n(96540);const i={},a=t.createContext(i);function l(s){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),t.createElement(a.Provider,{value:e},s.children)}}}]);