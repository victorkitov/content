"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[737],{3186:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var n=a(5893),i=a(1151);const t={description:""},c="\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439",l={id:"Metric-methods/KNN",title:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439",description:"",source:"@site/docs/05-Metric-methods/03-KNN.md",sourceDirName:"05-Metric-methods",slug:"/Metric-methods/KNN",permalink:"/deepmachinelearning/docs/Metric-methods/KNN",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:""},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0435\u0442\u043e\u0434 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0446\u0435\u043d\u0442\u0440\u043e\u0438\u0434\u043e\u0432",permalink:"/deepmachinelearning/docs/Metric-methods/Nearest-centroids"},next:{title:"\u0410\u043d\u0430\u043b\u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439",permalink:"/deepmachinelearning/docs/Metric-methods/KNN-analysis"}},r={},h=[];function m(s){const e={admonition:"admonition",annotation:"annotation",em:"em",h1:"h1",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.a)(),...s.components},{Details:t}=e;return t||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u043c\u0435\u0442\u043e\u0434-k-\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445-\u0441\u043e\u0441\u0435\u0434\u0435\u0439",children:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439"}),"\n",(0,n.jsxs)(e.p,{children:["\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 (K nearest neighbors) \u0443\u043c\u0435\u0435\u0442 \u0440\u0435\u0448\u0430\u0442\u044c \u043a\u0430\u043a \u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0442\u0430\u043a \u0438 \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438. \u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u0432 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438. \u041d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"x"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," \u0438\u0449\u0443\u0442\u0441\u044f ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"K"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]}),' \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043a \u043d\u0435\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 ("\u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0441\u043e\u0441\u0435\u0434\u0438"), \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e']}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438: \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u0439 \u0447\u0430\u0441\u0442\u043e\u0442\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0441\u0440\u0435\u0434\u0438 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"K"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438: \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u0439 \u043e\u0442\u043a\u043b\u0438\u043a \u043f\u043e \u043e\u0442\u043a\u043b\u0438\u043a\u0430\u043c \u0441\u0440\u0435\u0434\u0438 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"K"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u0418\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0434\u0432\u0443\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u043d\u0438\u0436\u0435. \u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d \u043a\u0440\u0430\u0441\u043d\u044b\u043c \u0448\u0430\u0440\u043e\u043c, \u0430 \u0440\u0430\u0434\u0438\u0443\u0441 \u0448\u0430\u0440\u0430 - \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0442\u043a\u043b\u0438\u043a\u0430. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0435\u043b\u0451\u043d\u044b\u043c \u0448\u0430\u0440\u043e\u043c. \u0415\u0433\u043e \u043e\u0442\u043a\u043b\u0438\u043a (\u0440\u0430\u0434\u0438\u0443\u0441) \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u0432 (\u0440\u0430\u0434\u0438\u0443\u0441\u043e\u0432) \u0441\u0440\u0435\u0434\u0438 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"KNN-regression.png",src:a(6132).Z+"",width:"330",height:"295"})}),"\n",(0,n.jsx)(e.p,{children:"\u0412\u044b\u0431\u043e\u0440 K \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 K \u043e\u0442 3 \u0434\u043e 5 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u043e \u0434\u0432\u0443\u043c \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0440\u0430\u0434\u0438\u0443\u0441\u043e\u043c."}),"\n",(0,n.jsx)(e.p,{children:"\u0410 \u0437\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u041a\u043b\u0430\u0441\u0441 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d \u0446\u0432\u0435\u0442\u043e\u043c \u0438 \u0444\u043e\u0440\u043c\u043e\u0439. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0435\u043b\u0451\u043d\u044b\u043c \u0448\u0430\u0440\u043e\u043c."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"KNN-classification.png",src:a(1042).Z+"",width:"330",height:"295"})}),"\n",(0,n.jsx)(e.p,{children:"\u0422\u0443\u0442 \u0442\u0430\u043a\u0436\u0435 \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440 K \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u041f\u0440\u0438 K=3 \u0446\u0435\u043b\u0435\u0432\u043e\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441, \u0430 \u043f\u0440\u0438 K=5 - \u0443\u0436\u0435 \u0441\u0438\u043d\u0438\u0439."}),"\n",(0,n.jsx)(e.admonition,{title:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u043b\u0430\u0441\u0441\u043e\u0432",type:"tip",children:(0,n.jsx)(e.p,{children:"\u041c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0443\u043c\u0435\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0442\u043a\u0443 \u043a\u043b\u0430\u0441\u0441\u0430, \u043d\u043e \u0438 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 - \u043a\u0430\u043a \u0434\u043e\u043b\u044e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u0445 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443."})}),"\n",(0,n.jsx)(e.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u0443 \u043c\u0435\u0442\u043e\u0434\u0430 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0434\u0432\u0443\u043c\u0435\u0440\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 K."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"1-NN-classification.png",src:a(8841).Z+"",width:"517",height:"518"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"3-NN-classification.png",src:a(8257).Z+"",width:"522",height:"519"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"5-NN-classification.png",src:a(3857).Z+"",width:"517",height:"523"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"10-NN-classification.png",src:a(5835).Z+"",width:"524",height:"521"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"100-NN-classification.png",src:a(3928).Z+"",width:"524",height:"519"})}),"\n",(0,n.jsx)(e.p,{children:"\u041a\u0430\u043a \u0432\u0438\u0434\u0438\u043c, \u043f\u0440\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0438 K \u043c\u043e\u0434\u0435\u043b\u044c \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043c\u0435\u043d\u0435\u0435 \u0433\u0438\u0431\u043a\u043e\u0439, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0443\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u043e\u0439 \u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u041a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438 K=N?"}),(0,n.jsx)("p",{children:(0,n.jsx)(e.p,{children:"\u041f\u0440\u0438 K=N \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u0441\u0440\u0430\u0437\u0443 \u043f\u043e \u0432\u0441\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0432\u044b\u0431\u043e\u0440\u043a\u0438, \u0438 \u043c\u0435\u0442\u043e\u0434 \u0432\u044b\u0440\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437."})})]}),"\n",(0,n.jsxs)(e.p,{children:["\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0443, \u0433\u0434\u0435 \u0438\u0441\u0442\u0438\u043d\u043d\u044b\u0439 \u043e\u0442\u043a\u043b\u0438\u043a \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0435 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"sin"}),(0,n.jsx)(e.mo,{children:"\u2061"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"\u03b5"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=\\sin x+\\varepsilon"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7512em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mop",children:"sin"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})]})]}),", \u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"\u03b5"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]})," - \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u0448\u0443\u043c. \u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0447\u0435\u0440\u043d\u044b\u043c\u0438 \u0442\u043e\u0447\u043a\u0430\u043c\u0438, \u0430 \u0446\u0435\u043b\u0435\u0432\u0430\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c - \u043f\u0443\u043d\u043a\u0442\u0438\u0440\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0435\u0439. \u0421\u043f\u043b\u043e\u0448\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0435\u0439 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c K."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"K-NN-sin-regresssion.png",src:a(3452).Z+"",width:"772",height:"563"})}),"\n",(0,n.jsx)(e.p,{children:"\u0417\u0434\u0435\u0441\u044c \u0442\u0430\u043a\u0436\u0435 \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043c\u0430\u043b\u043e\u043c K \u043c\u0435\u0442\u043e\u0434 \u0447\u0435\u0440\u0435\u0441\u0447\u0443\u0440 \u0433\u0438\u0431\u043a\u0438\u0439 \u0438 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0448\u0443\u043c \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u0410 \u043f\u0440\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 K - \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0433\u0438\u0431\u043a\u0438\u0439 \u0438 \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0430\u0435\u0442\u0441\u044f."}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 K \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0442\u044c \u043f\u043e \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435?"}),(0,n.jsx)("p",{children:(0,n.jsxs)(e.p,{children:["\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 K \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438. \u0427\u0435\u043c \u043e\u043d \u043d\u0438\u0436\u0435, \u0442\u0435\u043c \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u043e\u0439 \u0438 \u0442\u0435\u043c \u0442\u043e\u0447\u043d\u0435\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0435. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 K \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 K=1, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f 100% \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 K \u044f\u0432\u043b\u044f\u0435\u0442\u044c\u0441\u044f \u0433\u0438\u043f\u0435\u0440\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c, \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0435\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 ",(0,n.jsx)(e.em,{children:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435"}),"."]})})]}),"\n",(0,n.jsxs)(e.p,{children:["\u041f\u0440\u0438 K=1 \u043c\u0435\u0442\u043e\u0434 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,n.jsx)(e.strong,{children:"\u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0441\u043e\u0441\u0435\u0434\u0430"})," (nearest neighbor method)."]}),"\n",(0,n.jsx)(e.admonition,{title:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043c\u0435\u0442\u043e\u0434\u0430",type:"tip",children:(0,n.jsxs)(e.p,{children:["\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0440\u0435\u0434\u043d\u044f\u0442\u044c \u043d\u0435 \u043f\u043e \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c\u0443 \u0447\u0438\u0441\u043b\u0443 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0430 \u043f\u043e \u0432\u0441\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c, \u043f\u043e\u043f\u0430\u0432\u0448\u0438\u043c \u0432 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"\u03b5"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]}),"-\u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0446\u0435\u043b\u0435\u0432\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"x"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]}),", \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u044b \u0438\u0445 \u043d\u0435 \u043e\u043a\u0430\u0437\u0430\u043b\u043e\u0441\u044c. \u0412 \u0447\u0435\u043c-\u0442\u043e \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043b\u043e\u0433\u0438\u0447\u043d\u0435\u0435, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0435\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437. \u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u0443\u043c\u0435\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e, \u043a\u043e\u0433\u0434\u0430 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"\u03b5"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]}),"-\u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043e\u043a\u0430\u0437\u0430\u043b\u043e\u0441\u044c. \u0422\u0430\u043a\u043e\u0439 \u043c\u0435\u0442\u043e\u0434 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f fixed-radius nearest neighbor."]})}),"\n",(0,n.jsx)(e.p,{children:"\u0423\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f."})]})}function d(s={}){const{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(m,{...s})}):m(s)}},8841:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1-NN-classification-337c9e5c525c8d925b769c003b3876c6.png"},5835:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/10-NN-classification-6df07a71999bc9250b45d6a4a2f3ed34.png"},3928:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/100-NN-classification-326c8e3222e517e470b27438c036cfa5.png"},8257:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/3-NN-classification-d2d7a8cb2c385159ad6dd4a5bd2c6e2a.png"},3857:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/5-NN-classification-7ff429a976079e795a332a69b977dc95.png"},3452:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/K-NN-sin-regresssion-bb93e4bec4e36fa553ef848b86f747ca.png"},1042:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/KNN-classification-14b555ba4ad44b56319763fed846bb40.png"},6132:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/KNN-regression-21f3657e6564c7f165461938ca84de2f.png"},1151:(s,e,a)=>{a.d(e,{Z:()=>l,a:()=>c});var n=a(7294);const i={},t=n.createContext(i);function c(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:c(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);