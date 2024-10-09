"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[1974],{59239:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(74848),o=i(28453);const r={description:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f (black-box model interpretation). \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u043e\u0435 \u0442\u0435\u043c, \u0447\u0442\u043e \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044f \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u043d\u043e-\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c (correlation does not imply causation)."},l="\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",s={id:"Machine-learning/Complex-models-interpretation/Intro",title:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",description:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f (black-box model interpretation). \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u043e\u0435 \u0442\u0435\u043c, \u0447\u0442\u043e \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044f \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u043d\u043e-\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c (correlation does not imply causation).",source:"@site/docs/Machine-learning/18-Complex-models-interpretation/01-Intro.md",sourceDirName:"Machine-learning/18-Complex-models-interpretation",slug:"/Machine-learning/Complex-models-interpretation/Intro",permalink:"/docs/Machine-learning/Complex-models-interpretation/Intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f (black-box model interpretation). \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u043e\u0432, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u043e\u0435 \u0442\u0435\u043c, \u0447\u0442\u043e \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044f \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u043d\u043e-\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c (correlation does not imply causation)."},sidebar:"Machine-learning",previous:{title:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",permalink:"/docs/Machine-learning/Complex-models-interpretation"},next:{title:"\u0410\u043d\u0430\u043b\u0438\u0437 \u043e\u0448\u0438\u0431\u043e\u043a \u043c\u043e\u0434\u0435\u043b\u0438",permalink:"/docs/Machine-learning/Complex-models-interpretation/Error-analysis"}},a={},c=[{value:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438",id:"\u0441\u043f\u043e\u0441\u043e\u0431\u044b-\u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438",level:2}];function d(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f-\u0441\u043b\u043e\u0436\u043d\u044b\u0445-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,t.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u0446\u0435\u043b\u044c\u044e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0442\u043e\u0447\u043d\u044b\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432, \u0430 \u043d\u0435 \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u0445, \u0442\u043e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 (black-box models), \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0449\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043d\u0430\u0434 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u0422\u0430\u043a\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0435 \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0442 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c\u044e \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b\u0435 \u043e\u043f\u043e\u0441\u0440\u0435\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u0451\u043c\u044b \u0434\u043b\u044f \u0438\u0445 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u043c\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432."}),"\n",(0,t.jsx)(e.h2,{id:"\u0441\u043f\u043e\u0441\u043e\u0431\u044b-\u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438",children:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438"}),"\n",(0,t.jsx)(e.p,{children:"\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u0435\u0451 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u043c\u043e\u0436\u043d\u043e, \u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0442\u043a\u043b\u0438\u043a\u0430;"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u043c\u043e\u0434\u0435\u043b\u0438;"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 \u0442\u0438\u043f\u0438\u0447\u043d\u044b\u0445 \u0438 \u043d\u0435\u0442\u0438\u043f\u0438\u0447\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445 \u0432\u044b\u0431\u043e\u0440\u043a\u0438;"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432;"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u044c \u0432\u044b\u0434\u0430\u0451\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437;"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0432 \u0438\u0442\u043e\u0433\u0435 \u043e\u0431\u0443\u0447\u0438\u043c;"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0430 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043c\u043e\u0434\u0435\u043b\u0438."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{title:"\u041a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044f, \u0430 \u043d\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u043d\u043e-\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",type:"warning",children:(0,t.jsxs)(e.p,{children:["\u0412\u0430\u0436\u043d\u043e \u043f\u043e\u043c\u043d\u0438\u0442\u044c, \u0447\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044e, \u0430 \u043d\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u043d\u043e-\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c (",(0,t.jsx)(e.a,{href:"https://www.statology.org/correlation-does-not-imply-causation-examples/",children:"correlation does not imply causation"}),"). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0430\u0442\u0430\u043a \u0430\u043a\u0443\u043b \u043d\u0430 \u043e\u0442\u0434\u044b\u0445\u0430\u044e\u0449\u0438\u0445 \u043d\u0430 \u043c\u043e\u0440\u0441\u043a\u043e\u043c \u043a\u0443\u0440\u043e\u0440\u0442\u0435. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u043f\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u043e\u0440\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u0420\u0430\u0437\u0443\u043c\u0435\u0435\u0442\u0441\u044f, \u044d\u0442\u043e \u043d\u0435 \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u044d\u0442\u0438 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e. \u0421\u043a\u043e\u0440\u0435\u0435, \u0438\u0437-\u0437\u0430 \u0431\u043b\u0430\u0433\u043e\u043f\u0440\u0438\u044f\u0442\u043d\u043e\u0439 \u043f\u043e\u0433\u043e\u0434\u044b \u0431\u043e\u043b\u044c\u0448\u0435 \u043b\u044e\u0434\u0435\u0439 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442 \u043e\u0442\u0434\u044b\u0445\u0430\u0442\u044c \u043d\u0430 \u043c\u043e\u0440\u0435, \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c \u043c\u043e\u0440\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0438, \u043a\u0430\u043a \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435, \u043f\u043e\u0434\u0432\u0435\u0440\u0433\u0430\u0442\u044c\u0441\u044f \u044d\u043f\u0438\u0437\u043e\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0430\u0442\u0430\u043a\u0430\u043c \u0430\u043a\u0443\u043b."]})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>s});var t=i(96540);const o={},r=t.createContext(o);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);