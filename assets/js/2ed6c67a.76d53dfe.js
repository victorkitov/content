"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[6853],{44616:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(74848),s=i(28453);const r={description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},a="\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",l={id:"Machine-learning/Classifier-evaluation/Questions",title:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",description:"",source:"@site/docs/Machine-learning/12-Classifier-evaluation/10-Questions.md",sourceDirName:"Machine-learning/12-Classifier-evaluation",slug:"/Machine-learning/Classifier-evaluation/Questions",permalink:"/docs/Machine-learning/Classifier-evaluation/Questions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"",sidebar_label:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"},sidebar:"Machine-learning",previous:{title:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439",permalink:"/docs/Machine-learning/Classifier-evaluation/Probability-calibration"},next:{title:"\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f",permalink:"/docs/Machine-learning/Decision-trees"}},o={},c=[];function u(e){const n={h1:"h1",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b-\u0434\u043b\u044f-\u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0442 F-\u043c\u0435\u0440\u043e\u0439, \u0430 \u043d\u0435 \u0441\u0440\u0435\u0434\u043d\u0438\u043c \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043e\u0442 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 (precision) \u0438 \u043f\u043e\u043b\u043d\u043e\u0442\u044b (recall)?"}),"\n",(0,t.jsx)(n.li,{children:"\u041f\u0440\u0438\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u0434\u0430\u0447\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u0435\u0440\u0430 precision \u0432\u0430\u0436\u043d\u0435\u0435 recall. \u0418 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u0433\u0434\u0435 recall \u0432\u0430\u0436\u043d\u0435\u0435 precision."}),"\n",(0,t.jsx)(n.li,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443. \u0427\u0435\u043c \u043c\u0435\u0440\u0430 precision@K \u043b\u0443\u0447\u0448\u0435 \u0438 \u0445\u0443\u0436\u0435 \u043c\u0435\u0440\u044b Average Precision \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u043d\u0436\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f?"}),"\n",(0,t.jsx)(n.li,{children:"\u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u043d\u0430 ROC-\u043a\u0440\u0438\u0432\u0430\u044f \u0438 \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u0434 \u043d\u0435\u0439 \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u0443\u0433\u0430\u0434\u044b\u0432\u0430\u043d\u0438\u044f? \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u043b\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b, \u0434\u0430\u044e\u0449\u0438\u0435 \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u043d\u0438\u0437\u043a\u0443\u044e \u043c\u0435\u0440\u0443 AUC?"}),"\n",(0,t.jsx)(n.li,{children:"\u0411\u0443\u0434\u0435\u0442 \u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f ROC-\u043a\u0440\u0438\u0432\u0430\u044f \u0438 \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043f\u043e\u0434 \u043d\u0435\u0439 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043c\u043e\u043d\u043e\u0442\u043e\u043d\u043d\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u044e\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043d\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430?"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);