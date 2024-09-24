"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[6172],{31572:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=t(74848),s=t(28453);const i={description:""},r="\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",c={id:"docs_ml/Boosting/Comparison-with-bagging",title:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",description:"",source:"@site/docs/docs_ml/16-Boosting/02-Comparison-with-bagging.md",sourceDirName:"docs_ml/16-Boosting",slug:"/docs_ml/Boosting/Comparison-with-bagging",permalink:"/docs/docs_ml/Boosting/Comparison-with-bagging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:""},sidebar:"docs_ml",previous:{title:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433",permalink:"/docs/docs_ml/Boosting/Boosting-general"},next:{title:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c AdaBoost",permalink:"/docs/docs_ml/Boosting/AdaBoost"}},d={},a=[{value:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0431\u044d\u0433\u0433\u0438\u043d\u0433",id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0431\u044d\u0433\u0433\u0438\u043d\u0433",level:2},{value:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0441\u0442\u044d\u043a\u0438\u043d\u0433",id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0441\u0442\u044d\u043a\u0438\u043d\u0433",level:2}];function l(n){const e={em:"em",h1:"h1",h2:"h2",img:"img",p:"p",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430-\u0441-\u0434\u0440\u0443\u0433\u0438\u043c\u0438-\u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f\u043c\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,o.jsx)(e.h2,{id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0431\u044d\u0433\u0433\u0438\u043d\u0433",children:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0431\u044d\u0433\u0433\u0438\u043d\u0433"}),"\n",(0,o.jsx)(e.p,{children:"\u0420\u0430\u043d\u0435\u0435 \u0438\u0437\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0431\u044d\u0433\u0433\u0438\u043d\u0433, \u043c\u0435\u0442\u043e\u0434 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u043f\u043e\u0434\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u043b\u0435\u0441 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430, \u0447\u0442\u043e  \u0431\u043e\u0440\u0435\u0442\u0441\u044f \u0441 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (\u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u044e \u0438\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u0432 \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441). \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u0430\u0441\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043a\u0430\u0436\u0434\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c. \u041d\u0435\u043b\u044c\u0437\u044f \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 - \u043f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u0438\u0445 \u0447\u0438\u0441\u043b\u0430 \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u044f \u0431\u0443\u0434\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0441\u0442\u0438. \u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u044f\u043c \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430."}),"\n",(0,o.jsx)(e.p,{children:"\u0412 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0435 \u0438\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u0445 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443. \u041e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0435 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e, \u0430 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e - \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u043d\u043d\u0438\u0445. \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0447\u0435\u0433\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0431\u043e\u0440\u044c\u0431\u0430 \u0441 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 (\u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0432 \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441). \u0412\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u0447\u043d\u0435\u0435 \u0431\u044d\u0433\u0433\u0438\u043d\u0433\u0430, \u043d\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0447\u0438\u0441\u043b\u0443 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043c\u043e\u0436\u0435\u0442 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0430\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u0438\u0445 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"boosting-overfitting.png",src:t(30160).A+"",width:"850",height:"578"})}),"\n",(0,o.jsx)(e.p,{children:"\u0414\u043b\u044f \u043f\u043e\u0434\u0431\u043e\u0440\u0430 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435."}),"\n",(0,o.jsx)(e.h2,{id:"\u0431\u0443\u0441\u0442\u0438\u043d\u0433-\u0438-\u0441\u0442\u044d\u043a\u0438\u043d\u0433",children:"\u0411\u0443\u0441\u0442\u0438\u043d\u0433 \u0438 \u0441\u0442\u044d\u043a\u0438\u043d\u0433"}),"\n",(0,o.jsx)(e.p,{children:"\u0412 \u0441\u0442\u044d\u043a\u0438\u043d\u0433\u0435 \u0442\u0430\u043a\u0436\u0435 \u043a\u0430\u0436\u0434\u0430\u044f \u0431\u0430\u0437\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445. \u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 (\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0439) \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0441\u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b."}),"\n",(0,o.jsxs)(e.p,{children:["\u0418\u0442\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430 \u043f\u0440\u0438 \u043d\u0435\u0439 \u0432 \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c, \u043e\u0434\u043d\u0430\u043a\u043e \u043a\u0430\u0436\u0434\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u0435\u0451 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 ",(0,o.jsx)(e.em,{children:"\u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),", \u043d\u043e \u043d\u0435 \u0431\u0443\u0434\u0443\u0449\u0438\u0445."]})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},30160:(n,e,t)=>{t.d(e,{A:()=>o});const o=t.p+"assets/images/boosting-overfitting-ee8523ea7b1a1ab9f3327a9d011b63b5.png"},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var o=t(96540);const s={},i=o.createContext(s);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);