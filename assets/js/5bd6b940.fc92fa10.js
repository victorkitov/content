"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2354],{5464:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=s(5893),r=s(1151);const i={description:""},c="\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430",o={id:"Data-preprocessing/Time-preprocessing",title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430",description:"",source:"@site/docs/03-Data-preprocessing/03-Time-preprocessing.md",sourceDirName:"03-Data-preprocessing",slug:"/Data-preprocessing/Time-preprocessing",permalink:"/deepmachinelearning/docs/Data-preprocessing/Time-preprocessing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:""},sidebar:"tutorialSidebar",previous:{title:"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432",permalink:"/deepmachinelearning/docs/Data-preprocessing/Data-imputation"},next:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",permalink:"/deepmachinelearning/docs/Data-preprocessing/Categorical-preprocessing"}},a={},p=[];function d(e){const n={em:"em",h1:"h1",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430",children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430"}),"\n",(0,t.jsxs)(n.p,{children:["\u0427\u0430\u0441\u0442\u043e \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,t.jsx)(n.strong,{children:"\u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f"})," \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0447\u0438\u0441\u043b\u0430 \u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0434\u043d\u0435\u0439, \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0442\u044c \u0434\u0435\u043d\u044c \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u0441 \u0434\u0430\u0442\u043e\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043f\u043e\u0433\u043e\u0434\u044b, \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u0434\u043d\u044f. \u0414\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a, \u0440\u0430\u0432\u043d\u044b\u0439 ",(0,t.jsx)(n.em,{children:"\u0447\u0438\u0441\u043b\u0443 \u0434\u043d\u0435\u0439 \u0441 \u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439"}),", \u0442.\u0435. \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u0415\u0441\u043b\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0430\u0442\u0430, \u043d\u043e \u0438 \u0432\u0440\u0435\u043c\u044f, \u044d\u0442\u043e\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a ",(0,t.jsx)(n.em,{children:"\u0447\u0438\u0441\u043b\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u0441 \u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0439"}),". \u0422\u0430\u043a\u0430\u044f \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0443\u0447\u0435\u0441\u0442\u044c \u0442\u0440\u0435\u043d\u0434 \u0432 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f\u0445, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0447\u0438\u0441\u043b\u043e \u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u043e\u0441\u043b\u043e \u0441\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c \u0438\u0437-\u0437\u0430 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0441\u0435\u0440\u0432\u0438\u0441 \u0430\u0440\u0435\u043d\u0434\u044b \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043e\u0432 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0441\u044f \u0432\u0441\u0451 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u043c."]}),"\n",(0,t.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0432 \u043d\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043e\u0442\u043a\u043b\u0438\u043a \u0438\u043c\u0435\u0435\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u043d\u0443\u044e \u0441\u0435\u0437\u043e\u043d\u043d\u043e\u0441\u0442\u044c \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0434\u043d\u044f \u043d\u0435\u0434\u0435\u043b\u0438: \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u043e\u0432 \u0441\u0432\u043e\u0451 \u043f\u043e \u0431\u0443\u0434\u043d\u044f\u043c \u0438 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u043c, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u043b\u0435\u0442\u043d\u0438\u0435 \u0438 \u0437\u0438\u043c\u043d\u0438\u0435 \u0434\u043d\u0438. \u0414\u043b\u044f \u0443\u0447\u0451\u0442\u0430 \u0441\u0435\u0437\u043e\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0449\u0438\u0435 ",(0,t.jsx)(n.em,{children:"\u043d\u043e\u043c\u0435\u0440 \u043c\u0435\u0441\u044f\u0446\u0430 \u0438 \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438"}),". \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0449\u0438\u0435 ",(0,t.jsx)(n.em,{children:"\u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u044b\u0435 \u0434\u043d\u0438"}),". \u0415\u0441\u043b\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0430\u0442\u0430, \u043d\u043e \u0438 \u0432\u0440\u0435\u043c\u044f, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438\u0434\u043d\u0435\u0432\u043d\u0443\u044e \u0441\u0435\u0437\u043e\u043d\u043d\u043e\u0441\u0442\u044c, \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044f \u0442\u0430\u043a\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a, \u043a\u0430\u043a \u043d\u043e\u043c\u0435\u0440 \u0447\u0430\u0441\u0430."]}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043c\u043e\u0434\u0435\u043b\u0438, \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u0438 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u0438\u0437\u0432\u043b\u0435\u0447\u0451\u043d\u043d\u0443\u044e \u0438\u0437 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"time-series-forecasting.png",src:s(333).Z+"",width:"578",height:"439"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},333:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/time-series-forecasting-8b99c27048fc0ef563d579a405b09e96.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var t=s(7294);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);