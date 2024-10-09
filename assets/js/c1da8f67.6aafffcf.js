"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[9653],{59140:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=s(74848),t=s(28453);const a={description:"\u041f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (overfitting) \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (underfitting) \u0432 \u043c\u043e\u0434\u0435\u043b\u044f\u0445 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0431\u043e\u0440\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 (\u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438) \u043c\u043e\u0434\u0435\u043b\u0438."},r="\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",c={id:"Machine-learning/Bias-variance/Model-complexity",title:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",description:"\u041f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (overfitting) \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (underfitting) \u0432 \u043c\u043e\u0434\u0435\u043b\u044f\u0445 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0431\u043e\u0440\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 (\u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438) \u043c\u043e\u0434\u0435\u043b\u0438.",source:"@site/docs/Machine-learning/14-Bias-variance/01-Model-complexity.md",sourceDirName:"Machine-learning/14-Bias-variance",slug:"/Machine-learning/Bias-variance/Model-complexity",permalink:"/docs/Machine-learning/Bias-variance/Model-complexity",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"\u041f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (overfitting) \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (underfitting) \u0432 \u043c\u043e\u0434\u0435\u043b\u044f\u0445 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0431\u043e\u0440\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 (\u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438) \u043c\u043e\u0434\u0435\u043b\u0438."},sidebar:"Machine-learning",previous:{title:"\u041f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",permalink:"/docs/Machine-learning/Overfitting-and-underfitting"},next:{title:"\u0420\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441",permalink:"/docs/Machine-learning/Bias-variance/Bias-variance-decomposition"}},l={},o=[];function d(n){const e={annotation:"annotation",h1:"h1",img:"img",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c-\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0445-\u043c\u043e\u0434\u0435\u043b\u0435\u0439",children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),"\n",(0,i.jsxs)(e.p,{children:["\u0417\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u043c \u043f\u0440\u043e\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0438 \u043d\u0430\u0447\u043d\u0451\u043c \u0432\u0430\u0440\u044c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0451 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c (\u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c), \u0442\u043e \u0435\u0441\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439, \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c \u043f\u0440\u0438 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0442\u043e\u0440\u0435; \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"K"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 - \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"K"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]}),"; \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u0438\u043b\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043b\u0438\u0441\u0442\u044c\u044f\u0445."]}),"\n",(0,i.jsx)(e.p,{children:"\u041e\u0431\u0449\u0438\u0439 \u0432\u0438\u0434 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u043f\u043e\u0442\u0435\u0440\u044c \u043e\u0442 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"loss-vs-model-complexity.png",src:s(44218).A+"",width:"577",height:"209"})}),"\n",(0,i.jsx)(e.p,{children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0432 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\u0448\u0435, \u0447\u0435\u043c \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u043c\u0435\u043d\u043d\u043e \u043f\u043e\u0434 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0443\u044e \u0432\u044b\u0431\u043e\u0440\u043a\u0443."}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0440\u0430\u0441\u0442\u0451\u0442 \u0435\u0451 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u043d\u0438\u0436\u0430\u044e\u0442\u0441\u044f. \u0410 \u0432\u043e\u0442 \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0442\u0435\u0440\u0438 \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043d\u0438\u0436\u0430\u044e\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043c\u043e\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u0441\u0451 \u0435\u0449\u0451 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u0430 \u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432 \u043f\u043e\u043b\u043d\u043e\u0439 \u043c\u0435\u0440\u0435 \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0430\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u0430\u043a\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 (underfitted models)."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u043e\u0442\u043e\u043c \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442 \u043f\u043e\u0432\u044b\u0448\u0430\u0442\u044c\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0432\u044b\u0448\u0435 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u0418\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u0443\u044e \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u0442\u0440\u0430\u0442\u0438\u0442 \u043d\u0430 \u043f\u043e\u0442\u043e\u0447\u0435\u0447\u043d\u0443\u044e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043f\u043e\u0434 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u044b\u043b\u0430 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e. \u0422\u043e \u0435\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u0432\u044b\u044f\u0432\u043b\u044f\u0442\u044c \u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0442 \u0432 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435. \u0422\u0430\u043a\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 (overfitted models)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0435 \u0432\u0430\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u0435\u0433\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u0432\u044b\u0448\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u0442\u043e\u0447\u043a\u043e\u0439 A."}),"\n",(0,i.jsx)(e.p,{children:"\u041d\u0430 \u0433\u0440\u0430\u0444\u0438\u043a\u0435 \u043d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u043c \u0438 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u043c. \u0421\u043b\u0435\u0432\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438, \u0430 \u0441\u043f\u0440\u0430\u0432\u0430 - \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"under-overfitting.png",src:s(10618).A+"",width:"1143",height:"303"})}),"\n",(0,i.jsx)(e.p,{children:"\u0411\u043e\u043b\u0435\u0435 \u0444\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0431\u0440\u043e\u0441, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0433\u043b\u0430\u0432\u0435."})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},44218:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/loss-vs-model-complexity-aa5dcfb82d20c763091b7af3cf838671.png"},10618:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/under-overfitting-477d486db31d90d4da7cca5a1b0b5327.png"},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var i=s(96540);const t={},a=i.createContext(t);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);