"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[3876],{15150:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(74848),s=i(28453);const r={description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},o="\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",c={id:"Machine-learning/Metric-methods/Questions",title:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",description:"",source:"@site/docs/Machine-learning/06-Metric-methods/09-Questions.md",sourceDirName:"Machine-learning/06-Metric-methods",slug:"/Machine-learning/Metric-methods/Questions",permalink:"/docs/Machine-learning/Metric-methods/Questions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},sidebar:"Machine-learning",previous:{title:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e-\u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f",permalink:"/docs/Machine-learning/Metric-methods/Local-linear-regression"},next:{title:"\u041b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f \u0438 \u0435\u0451 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u044f",permalink:"/docs/Machine-learning/Linear-regression-extensions"}},l={},a=[];function d(e){const n={h1:"h1",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u0434\u043b\u044f-\u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0441\u0440\u0430\u0432\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u0430 \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u043c\u0435\u0442\u043e\u0434\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0446\u0435\u043d\u0442\u0440\u043e\u0438\u0434\u043e\u0432, \u043c\u0435\u0442\u043e\u0434\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0438 \u043c\u0435\u0442\u043e\u0434\u0430 \u041d\u0430\u0434\u0430\u0440\u0430\u044f-\u0412\u0430\u0442\u0441\u043e\u043d\u0430."}),"\n",(0,t.jsx)(n.li,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043c\u0435\u0442\u043e\u0434 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0446\u0435\u043d\u0442\u0440\u043e\u0438\u0434\u043e\u0432, \u043c\u0435\u0442\u043e\u0434 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0438 \u043c\u0435\u0442\u043e\u0434 \u041d\u0430\u0434\u0430\u0440\u0430\u044f-\u0412\u0430\u0442\u0441\u043e\u043d\u0430. \u041a\u0430\u043a\u043e\u0439 \u0438\u0437 \u044d\u0442\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0440\u0435\u0448\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438, \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u043e\u0431\u0435 \u044d\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0438?"}),"\n",(0,t.jsx)(n.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u043a\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u044f\u0434\u0440\u0430 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e-\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u043d\u0435 \u0432\u0441\u0435\u0445, \u0430 \u043b\u0438\u0448\u044c \u0447\u0430\u0441\u0442\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430? \u041a\u0430\u043a\u0438\u0435 \u044d\u0442\u043e \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u044b?"}),"\n",(0,t.jsx)(n.li,{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 h \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043d\u0435\u043b\u044c\u0437\u044f \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043f\u043e \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435?"}),"\n",(0,t.jsx)(n.li,{children:"\u041a\u0430\u043a \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 h \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u043e\u0434 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438?"}),"\n",(0,t.jsx)(n.li,{children:"\u041a\u0430\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0432\u0435\u043a\u0442\u043e\u0440\u0430\u043c\u0438 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0434\u043b\u0438\u043d \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432?"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);