"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[7154],{93862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(74848),i=t(28453);const s={description:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 (\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0439) \u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438."},o="\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432",a={id:"Machine-learning/Data-preprocessing/Outlier-filtering",title:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432",description:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 (\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0439) \u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438.",source:"@site/docs/Machine-learning/04-Data-preprocessing/01-Outlier-filtering.md",sourceDirName:"Machine-learning/04-Data-preprocessing",slug:"/Machine-learning/Data-preprocessing/Outlier-filtering",permalink:"/docs/Machine-learning/Data-preprocessing/Outlier-filtering",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 (\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0439) \u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438."},sidebar:"Machine-learning",previous:{title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs/Machine-learning/Data-preprocessing"},next:{title:"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432",permalink:"/docs/Machine-learning/Data-preprocessing/Data-imputation"}},c={},l=[];function p(e){const n={h1:"h1",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f-\u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432"}),"\n",(0,r.jsxs)(n.p,{children:["\u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0430\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043a\u0430\u043a \u0442\u0438\u043f\u0438\u0447\u043d\u044b\u0435, \u0442\u0430\u043a \u0438 \u043d\u0435\u0442\u0438\u043f\u0438\u0447\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0435 ",(0,r.jsx)(n.strong,{children:"\u0432\u044b\u0431\u0440\u043e\u0441\u0430\u043c\u0438"})," (outliers) \u0438 ",(0,r.jsx)(n.strong,{children:"\u0430\u043d\u043e\u043c\u0430\u043b\u0438\u044f\u043c\u0438"})," (anomaly). \u0412\u044b\u0431\u0440\u043e\u0441\u044b, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043b\u0435\u0436\u0430\u0442 \u0434\u0430\u043b\u0435\u043a\u043e \u043e\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0438\u0441\u043f\u043e\u0440\u0442\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043c\u043e\u0434\u0435\u043b\u0438. \u0412\u044b\u0431\u0440\u043e\u0441\u0430\u043c\u0438 \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f, \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0435 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u0438\u0441\u0442\u043a\u0430 \u043d\u0435\u0432\u0435\u0440\u043d\u043e \u0437\u0430\u043d\u0435\u0441\u043b\u0430 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440), \u043b\u0438\u0431\u043e \u0432\u0435\u0440\u043d\u043e \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u043d\u0435\u0442\u0438\u043f\u0438\u0447\u043d\u044b\u0435 \u043f\u043e \u0441\u0432\u043e\u0435\u0439 \u0441\u0443\u0442\u0438 \u0438 \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0435 \u043b\u043e\u0433\u043e\u0432 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0432\u044b\u0431\u0440\u043e\u0441\u0430\u043c \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043d\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0430 \u0431\u043e\u0442\u043e\u0432."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0427\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u043b\u043e, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e ",(0,r.jsx)(n.strong,{children:"\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432"})," (outlier detection). \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0432\u044b\u0431\u0440\u043e\u0441\u044b \u0441\u0440\u0430\u0437\u0443 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u0432\u0435\u043a\u0442\u043e\u0440\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u041e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0430\u043d\u0430\u043b\u0438\u0437 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0439 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0435\u0439 \u0430\u043d\u043e\u043c\u0430\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0438 \u0430\u043d\u043e\u043c\u0430\u043b\u044c\u043d\u043e \u043c\u0430\u043b\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);