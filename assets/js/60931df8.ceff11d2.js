"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[3324],{10428:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var a=n(74848),i=n(28453);const t={description:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 (K nearest neighbors) \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438."},r="\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439",c={id:"Machine-learning/Metric-methods/KNN",title:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439",description:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 (K nearest neighbors) \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438.",source:"@site/docs/Machine-learning/06-Metric-methods/03-KNN.md",sourceDirName:"Machine-learning/06-Metric-methods",slug:"/Machine-learning/Metric-methods/KNN",permalink:"/docs/Machine-learning/Metric-methods/KNN",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 (K nearest neighbors) \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438."},sidebar:"Machine-learning",previous:{title:"\u041c\u0435\u0442\u043e\u0434 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0446\u0435\u043d\u0442\u0440\u043e\u0438\u0434\u043e\u0432",permalink:"/docs/Machine-learning/Metric-methods/Nearest-centroids"},next:{title:"\u0410\u043d\u0430\u043b\u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439",permalink:"/docs/Machine-learning/Metric-methods/KNN-analysis"}},l={},h=[{value:"\u0418\u0434\u0435\u044f \u043c\u0435\u0442\u043e\u0434\u0430",id:"\u0438\u0434\u0435\u044f-\u043c\u0435\u0442\u043e\u0434\u0430",level:2},{value:"\u0410\u043d\u0430\u043b\u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430",id:"\u0430\u043d\u0430\u043b\u0438\u0437-\u043c\u0435\u0442\u043e\u0434\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0432 Python",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-\u0432-python",level:2}];function m(s){const e={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{Details:t}=e;return t||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u043c\u0435\u0442\u043e\u0434-k-\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445-\u0441\u043e\u0441\u0435\u0434\u0435\u0439",children:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439"}),"\n",(0,a.jsx)(e.h2,{id:"\u0438\u0434\u0435\u044f-\u043c\u0435\u0442\u043e\u0434\u0430",children:"\u0418\u0434\u0435\u044f \u043c\u0435\u0442\u043e\u0434\u0430"}),"\n",(0,a.jsxs)(e.p,{children:["\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 (K nearest neighbors) \u0443\u043c\u0435\u0435\u0442 \u0440\u0435\u0448\u0430\u0442\u044c \u043a\u0430\u043a \u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0442\u0430\u043a \u0438 \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438. \u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u0432 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438. \u041d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"x"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," \u0438\u0449\u0443\u0442\u0441\u044f ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]}),' \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043a \u043d\u0435\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 ("\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0441\u043e\u0441\u0435\u0434\u0438"), \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e']}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438: \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u0439 \u0447\u0430\u0441\u0442\u043e\u0442\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0441\u0440\u0435\u0434\u0438 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438: \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u0439 \u043e\u0442\u043a\u043b\u0438\u043a \u043f\u043e \u043e\u0442\u043a\u043b\u0438\u043a\u0430\u043c \u0441\u0440\u0435\u0434\u0438 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0434\u0432\u0443\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u043d\u0438\u0436\u0435. \u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d \u043a\u0440\u0430\u0441\u043d\u044b\u043c \u0448\u0430\u0440\u043e\u043c, \u0430 \u0440\u0430\u0434\u0438\u0443\u0441 \u0448\u0430\u0440\u0430 - \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0442\u043a\u043b\u0438\u043a\u0430. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0435\u043b\u0451\u043d\u044b\u043c \u0448\u0430\u0440\u043e\u043c. \u0415\u0433\u043e \u043e\u0442\u043a\u043b\u0438\u043a (\u0440\u0430\u0434\u0438\u0443\u0441) \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u0432 (\u0440\u0430\u0434\u0438\u0443\u0441\u043e\u0432) \u0441\u0440\u0435\u0434\u0438 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"KNN-regression.png",src:n(86664).A+"",width:"330",height:"295"})}),"\n",(0,a.jsx)(e.p,{children:"\u0412\u044b\u0431\u043e\u0440 K \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f K \u0441 3 \u0434\u043e 5 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430."}),"\n",(0,a.jsx)(e.p,{children:"\u041d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0440\u0438\u0441\u0443\u043d\u043a\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u041a\u043b\u0430\u0441\u0441 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d \u0446\u0432\u0435\u0442\u043e\u043c \u0438 \u0444\u043e\u0440\u043c\u043e\u0439. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0435\u043b\u0451\u043d\u044b\u043c \u0448\u0430\u0440\u043e\u043c."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"KNN-classification.png",src:n(77087).A+"",width:"330",height:"295"})}),"\n",(0,a.jsx)(e.p,{children:"\u0417\u0434\u0435\u0441\u044c \u0442\u0430\u043a\u0436\u0435 \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440 K \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041f\u0440\u0438 K=3 \u0446\u0435\u043b\u0435\u0432\u043e\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441, \u0430 \u043f\u0440\u0438 K=5 - \u0443\u0436\u0435 \u0441\u0438\u043d\u0438\u0439."}),"\n",(0,a.jsx)(e.admonition,{title:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u043b\u0430\u0441\u0441\u043e\u0432",type:"tip"}),"\n",(0,a.jsx)(e.h2,{id:"\u0430\u043d\u0430\u043b\u0438\u0437-\u043c\u0435\u0442\u043e\u0434\u0430",children:"\u0410\u043d\u0430\u043b\u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430"}),"\n",(0,a.jsx)(e.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u0443 \u043c\u0435\u0442\u043e\u0434\u0430 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0434\u0432\u0443\u043c\u0435\u0440\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 K."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"1-NN-classification.png",src:n(7268).A+"",width:"517",height:"518"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"3-NN-classification.png",src:n(5270).A+"",width:"522",height:"519"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"5-NN-classification.png",src:n(6960).A+"",width:"517",height:"523"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"10-NN-classification.png",src:n(88862).A+"",width:"524",height:"521"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"100-NN-classification.png",src:n(64812).A+"",width:"524",height:"519"})}),"\n",(0,a.jsx)(e.p,{children:"\u041a\u0430\u043a \u0432\u0438\u0434\u0438\u043c, \u043f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 K \u043c\u043e\u0434\u0435\u043b\u044c \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 (\u043c\u0435\u043d\u0435\u0435 \u0433\u0438\u0431\u043a\u043e\u0439), \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0439 \u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"\u041a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438 K=N?"}),(0,a.jsx)("p",{children:(0,a.jsx)(e.p,{children:"\u041f\u0440\u0438 K=N \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u0441\u0440\u0430\u0437\u0443 \u043f\u043e \u0432\u0441\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0432\u044b\u0431\u043e\u0440\u043a\u0438, \u0438 \u043c\u0435\u0442\u043e\u0434 \u0432\u044b\u0440\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437."})})]}),"\n",(0,a.jsxs)(e.p,{children:["\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0443, \u0433\u0434\u0435 \u0438\u0441\u0442\u0438\u043d\u043d\u044b\u0439 \u043e\u0442\u043a\u043b\u0438\u043a \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0435 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"y"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"sin"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsx)(e.mi,{children:"\u03b5"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=\\sin x+\\varepsilon"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7512em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mop",children:"sin"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})]})]}),", \u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"\u03b5"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]})," - \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0448\u0443\u043c. \u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0447\u0435\u0440\u043d\u044b\u043c\u0438 \u0442\u043e\u0447\u043a\u0430\u043c\u0438, \u0430 \u0446\u0435\u043b\u0435\u0432\u0430\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c - \u043f\u0443\u043d\u043a\u0442\u0438\u0440\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0435\u0439. \u0421\u043f\u043b\u043e\u0448\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0435\u0439 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u043f\u0440\u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0445 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 K."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"K-NN-sin-regresssion.png",src:n(63437).A+"",width:"772",height:"563"})}),"\n",(0,a.jsx)(e.p,{children:"\u0417\u0434\u0435\u0441\u044c \u0442\u0430\u043a\u0436\u0435 \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043c\u0430\u043b\u043e\u043c K \u043c\u0435\u0442\u043e\u0434 \u0447\u0435\u0440\u0435\u0441\u0447\u0443\u0440 \u0433\u0438\u0431\u043a\u0438\u0439 \u0438 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0448\u0443\u043c \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u0410 \u043f\u0440\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 K - \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0433\u0438\u0431\u043a\u0438\u0439 \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0430\u0435\u0442\u0441\u044f."}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 K \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0442\u044c \u043f\u043e \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435?"}),(0,a.jsx)("p",{children:(0,a.jsxs)(e.p,{children:["\u0413\u0438\u043f\u0435\u0440\u0430\u0440\u0430\u043c\u0435\u0442\u0440 K \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438. \u0427\u0435\u043c \u043e\u043d \u043d\u0438\u0436\u0435, \u0442\u0435\u043c \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u043e\u0439 \u0438 \u0442\u0435\u043c \u0442\u043e\u0447\u043d\u0435\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0435. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 K \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 K=1, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f 100% \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 K \u0438 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c (\u0430 \u043d\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c, \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u043c \u043d\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435), \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0435\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 ",(0,a.jsx)(e.em,{children:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435"}),"."]})})]}),"\n",(0,a.jsxs)(e.p,{children:["\u041f\u0440\u0438 K=1 \u043c\u0435\u0442\u043e\u0434 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,a.jsx)(e.strong,{children:"\u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0441\u043e\u0441\u0435\u0434\u0430"})," (nearest neighbor method)."]}),"\n",(0,a.jsxs)(e.admonition,{title:"\u0420\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434",type:"tip",children:[(0,a.jsxs)(e.p,{children:["\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0440\u0435\u0434\u043d\u044f\u0442\u044c \u043d\u0435 \u043f\u043e \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c\u0443 \u0447\u0438\u0441\u043b\u0443 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0430 \u043f\u043e \u0432\u0441\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c, \u043f\u043e\u043f\u0430\u0432\u0448\u0438\u043c \u0432 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"\u03b5"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]}),"-\u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0446\u0435\u043b\u0435\u0432\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"x"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]}),", \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u044b \u0438\u0445 \u043d\u0435 \u043e\u043a\u0430\u0437\u0430\u043b\u043e\u0441\u044c (radius nearest neighbor). \u0412 \u0447\u0435\u043c-\u0442\u043e \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043b\u043e\u0433\u0438\u0447\u043d\u0435\u0435, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0435\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437."]}),(0,a.jsxs)(e.p,{children:["\u041e\u0434\u043d\u0430\u043a\u043e \u043e\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u0436\u0435 \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u044b\u0431\u043e\u0440\u0430 \u0440\u0430\u0434\u0438\u0443\u0441\u0430 \u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"\u03b5"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]}),". \u0415\u0441\u043b\u0438 \u043e\u043d\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0432\u0435\u043b\u0438\u043a\u0430, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u0435 \u043f\u043e \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u0410 \u0435\u0441\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u0430, \u0442\u043e \u0432 \u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0438 \u043e\u0434\u0438\u043d \u043e\u0431\u044a\u0435\u043a\u0442!"]})]}),"\n",(0,a.jsx)(e.p,{children:"\u0423\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f."}),"\n",(0,a.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-\u0432-python",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0432 Python"}),"\n",(0,a.jsx)("div",{class:"code_start",children:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.metrics import accuracy_score\nfrom sklearn.metrics import brier_score_loss\n\nX_train, X_test, Y_train, Y_test = get_demo_classification_data()  \nmodel = KNeighborsClassifier(n_neighbors=3)  # \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438\nmodel.fit(X_train,Y_train)                   # \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438                \nY_hat = model.predict(X_test)                # \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432\nprint(f'\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432: {100*accuracy_score(Y_test, Y_hat):.1f}%')  \n\nP_hat = model.predict_proba(X_test)  # \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0441\u043e\u0432\n\nloss = brier_score_loss(Y_test, P_hat[:,1])  # \u043c\u0435\u0440\u0430 \u0411\u0440\u0438\u0435\u0440\u0430 \u043d\u0430 \u0432\u0435\u0440-\u0442\u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430\nprint(f'\u041c\u0435\u0440\u0430 \u0411\u0440\u0438\u0435\u0440\u0430 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439: {loss:.2f}')\n"})}),"\n",(0,a.jsx)("div",{class:"code_end"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://scikit-learn.org/stable/modules/neighbors.html#nearest-centroid-classifier",children:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),". ",(0,a.jsx)(e.a,{href:"https://github.com/victorkitov/ML/blob/main/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B%20%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%B2%20sklearn.ipynb",children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u0434"}),"."]}),"\n",(0,a.jsx)("div",{class:"code_start",children:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"from sklearn.neighbors import KNeighborsRegressor\nfrom sklearn.metrics import mean_absolute_error\n\nX_train, X_test, Y_train, Y_test = get_demo_regression_data()  \nmodel = KNeighborsRegressor(n_neighbors=3)  # \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438\nmodel.fit(X_train,Y_train)                  # \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438                \nY_hat = model.predict(X_test)               # \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432\nprint(f'\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043e\u0448\u0438\u0431\u043a\u0438 (MAE): \\\n            {mean_absolute_error(Y_test, Y_hat):.2f}')   \n"})}),"\n",(0,a.jsx)("div",{class:"code_end"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://scikit-learn.org/stable/modules/neighbors.html#nearest-neighbors-regression",children:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),". ",(0,a.jsx)(e.a,{href:"https://github.com/victorkitov/ML/blob/main/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B%20%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%B2%20sklearn.ipynb",children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u0434"}),"."]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(m,{...s})}):m(s)}},7268:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/1-NN-classification-337c9e5c525c8d925b769c003b3876c6.png"},88862:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/10-NN-classification-6df07a71999bc9250b45d6a4a2f3ed34.png"},64812:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/100-NN-classification-326c8e3222e517e470b27438c036cfa5.png"},5270:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/3-NN-classification-d2d7a8cb2c385159ad6dd4a5bd2c6e2a.png"},6960:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/5-NN-classification-7ff429a976079e795a332a69b977dc95.png"},63437:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/K-NN-sin-regresssion-bb93e4bec4e36fa553ef848b86f747ca.png"},77087:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/KNN-classification-14b555ba4ad44b56319763fed846bb40.png"},86664:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/KNN-regression-21f3657e6564c7f165461938ca84de2f.png"},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var a=n(96540);const i={},t=a.createContext(i);function r(s){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),a.createElement(t.Provider,{value:e},s.children)}}}]);