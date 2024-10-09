"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5591],{86670:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(74848),l=a(28453);const i={description:""},t="\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",c={id:"Neural-networks/ConvPool-Images/Image-representation",title:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",description:"",source:"@site/docs/Neural-networks/10-ConvPool-Images/01-Image-representation.md",sourceDirName:"Neural-networks/10-ConvPool-Images",slug:"/Neural-networks/ConvPool-Images/Image-representation",permalink:"/docs/Neural-networks/ConvPool-Images/Image-representation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",permalink:"/docs/Neural-networks/Convolution-for-images-2D"},next:{title:"\u0421\u0432\u0451\u0440\u0442\u043a\u0430 \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",permalink:"/docs/Neural-networks/ConvPool-Images/Conv-images"}},r={},m=[{value:"\u0427\u0435\u0440\u043d\u043e-\u0431\u0435\u043b\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",id:"\u0447\u0435\u0440\u043d\u043e-\u0431\u0435\u043b\u044b\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",level:2},{value:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u043e\u0432",id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0446\u0432\u0435\u0442\u043e\u0432",level:2},{value:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 RGB",id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0432-rgb",level:3},{value:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 CIELab",id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0432-cielab",level:3},{value:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 HCL",id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-hcl",level:3},{value:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u043d\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0446\u0432\u0435\u0442\u043d\u044b\u0445-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function h(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,n.jsx)(e.h2,{id:"\u0447\u0435\u0440\u043d\u043e-\u0431\u0435\u043b\u044b\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",children:"\u0427\u0435\u0440\u043d\u043e-\u0431\u0435\u043b\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,n.jsxs)(e.p,{children:["\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u044b\u0432\u0430\u044e\u0442 \u0446\u0432\u0435\u0442\u043d\u044b\u0435 \u0438 \u043e\u0434\u043d\u043e\u0446\u0432\u0435\u0442\u043d\u044b\u0435. \u041e\u0434\u043d\u043e\u0446\u0432\u0435\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u043e\u0433\u043e, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0442\u0430\u043a\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0451\u0440\u043d\u043e-\u0431\u0435\u043b\u044b\u043c\u0438. \u0422\u0430\u043a\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"H"}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsx)(e.mi,{children:"W"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"H\\times W"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})]})]}),", \u0433\u0434\u0435 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"H"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"H"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"})]})})]})," - \u0432\u044b\u0441\u043e\u0442\u0430, \u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"W"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"W"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})})]})," - \u0448\u0438\u0440\u0438\u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f:"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(70795).A+"",width:"793",height:"244"})}),"\n",(0,n.jsx)(e.h2,{id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0446\u0432\u0435\u0442\u043e\u0432",children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u043e\u0432"}),"\n",(0,n.jsx)(e.h3,{id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0432-rgb",children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 RGB"}),"\n",(0,n.jsx)(e.p,{children:"\u0414\u043b\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u043d\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u0447\u0442\u043e \u043b\u044e\u0431\u043e\u0439 \u0446\u0432\u0435\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043a\u0430\u043a \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u0438\u0441\u043d\u044b\u0445 \u0446\u0432\u0435\u0442\u043e\u0432: \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e (red), \u0437\u0435\u043b\u0451\u043d\u043e\u0433\u043e (green) \u0438 \u0441\u0438\u043d\u0435\u0433\u043e (blue). \u0422\u0430\u043a\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f RGB \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c, \u0438 \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c\u0441\u044f \u0432\u0431\u043b\u0438\u0437\u0438 \u043a \u044d\u043a\u0440\u0430\u043d\u0443 \u0441\u0442\u0430\u0440\u044b\u0445 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u043e\u0432, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0443\u0432\u0438\u0434\u0435\u0442\u044c, \u0447\u0442\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0442\u0440\u0451\u0445, \u0441\u0432\u0435\u0442\u044f\u0449\u0438\u0445 \u043a\u0440\u0430\u0441\u043d\u044b\u043c, \u0437\u0435\u043b\u0451\u043d\u044b\u043c \u0438 \u0441\u0438\u043d\u0438\u043c \u0446\u0432\u0435\u0442\u043e\u043c."}),"\n",(0,n.jsx)(e.h3,{id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0432-cielab",children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 CIELab"}),"\n",(0,n.jsx)(e.p,{children:"\u0412 \u0446\u0432\u0435\u0442\u043e\u0432\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 CIELab (Lab, Luv) \u0446\u0432\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u0442\u0440\u0451\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"L-luminance (\u044f\u0440\u043a\u043e\u0441\u0442\u044c)"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"(a,b) - \u0446\u0432\u0435\u0442"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f (a,b) \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0438\u0436\u0435 \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u044f\u0440\u043a\u043e\u0441\u0442\u0438 L ",(0,n.jsx)(e.a,{href:"https://ru.wikipedia.org/wiki/LAB",children:"[1]"}),":"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(62210).A+"",width:"494",height:"229"})}),"\n",(0,n.jsxs)(e.p,{children:["\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u044f\u0440\u043a\u043e\u0441\u0442\u044c \u0438 \u0446\u0432\u0435\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u0432\u0430\u0440\u044c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044f\u0440\u043a\u043e\u0441\u0442\u044c \u0438 \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044f \u0446\u0432\u0435\u0442\u0430. \u0422\u0430\u043a\u0436\u0435 \u044d\u0442\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u0415\u0432\u043a\u043b\u0438\u0434\u043e\u0432\u043e\u0433\u043e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f 2-\u043c\u044f \u043c\u0435\u0436\u0434\u0443 \u0446\u0432\u0435\u0442\u0430\u043c\u0438 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(L_1,a_1,b_1)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u0438 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(L_2,a_2,b_2)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u043b\u0438\u043d\u0435\u0439\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u043e\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u043c \u0433\u043b\u0430\u0437\u043e\u043c \u0440\u0430\u0437\u043d\u0438\u0446\u0435 \u0432 \u0446\u0432\u0435\u0442\u0430\u0445 (\u0434\u043b\u044f RGB - \u043d\u0435 \u0442\u0430\u043a)."]}),"\n",(0,n.jsx)(e.p,{children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 CIELab \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438\u043d\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043d\u043e"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u043a \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438 (\u0435\u0441\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e a,b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b)"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u0438\u043d\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043d\u043e \u043a \u0446\u0432\u0435\u0442\u0443 (\u0435\u0441\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e L \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443)"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0440\u0430\u0441\u0442\u0435\u043d\u0438\u0439 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0438\u043d\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043d\u0430 \u043a \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043a\u0430\u0434\u0440\u044b \u0432 \u0440\u0430\u0437\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u0443\u0442\u043e\u043a. \u0410 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043c\u0430\u0440\u043e\u043a \u043c\u0430\u0448\u0438\u043d \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0446\u0432\u0435\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u044b\u043c, \u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430\u043c\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u044f\u0440\u043a\u043e\u0441\u0442\u0438 L."}),"\n",(0,n.jsx)(e.h3,{id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-hcl",children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 HCL"}),"\n",(0,n.jsx)(e.p,{children:"\u0426\u0432\u0435\u0442\u043e\u0432\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 HCL \u043a\u043e\u0434\u0438\u0440\u0443\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0446\u0432\u0435\u0442 \u0435\u0449\u0451 \u0431\u043e\u043b\u0435\u0435 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u043c\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u0446\u0432\u0435\u0442 (hue)"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0446\u0432\u0435\u0442\u0430 (chroma)"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u044f\u0440\u043a\u043e\u0441\u0442\u044c (lightness)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e HCL \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c ",(0,n.jsx)(e.a,{href:"https://www.freepng.ru/download/%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%BC%D0%B0%D0%BD%D1%81%D0%B5%D0%BB%D0%BB%D0%B0.html",children:"[2]"}),":"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(16351).A+"",width:"480",height:"360"})}),"\n",(0,n.jsx)(e.p,{children:"\u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0443\u0447\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0435 \u0438\u043d\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043d\u043e \u043a \u0446\u0432\u0435\u0442\u0443, \u044f\u0440\u043a\u043e\u0441\u0442\u0438 \u0438 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,n.jsx)(e.p,{children:"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0446\u0432\u0435\u0442\u043e\u0432\u043e\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 CYMK, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c, \u0442.\u043a. \u043e\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u043c \u0434\u0435\u043b\u0435."}),"\n",(0,n.jsx)(e.h2,{id:"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0446\u0432\u0435\u0442\u043d\u044b\u0445-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u043d\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}),"\n",(0,n.jsxs)(e.p,{children:["\u0426\u0432\u0435\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0435\u043d\u0437\u043e\u0440\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsx)(e.mi,{children:"H"}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsx)(e.mi,{children:"W"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"3\\times H\\times W"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})]})]}),", \u0442.\u0435. \u0442\u0440\u0451\u043c \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043c\u0430\u0442\u0440\u0438\u0446\u0430\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"H"}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsx)(e.mi,{children:"W"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"H\\times W"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})]})]}),", \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445 \u043a\u0430\u0440\u0442\u044b \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u0442\u0440\u0451\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0446\u0432\u0435\u0442 (RGB, Lab, HCL). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f RGB \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0436\u0434\u0430\u044f \u043c\u0430\u0442\u0440\u0438\u0446\u0430 \u0437\u0430\u0434\u0430\u0451\u0442 \u043a\u0430\u0440\u0442\u0443 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e, \u0437\u0435\u043b\u0451\u043d\u043e\u0433\u043e \u0438 \u0441\u0438\u043d\u0435\u0433\u043e \u0446\u0432\u0435\u0442\u043e\u0432, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435:"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:a(39582).A+"",width:"616",height:"123"})}),"\n",(0,n.jsx)(e.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://ru.wikipedia.org/wiki/LAB",children:"https://ru.wikipedia.org/wiki/LAB"})}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://www.freepng.ru/download/%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2%D0%B0%D1%8F-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%BC%D0%B0%D0%BD%D1%81%D0%B5%D0%BB%D0%BB%D0%B0.html",children:"https://www.freepng.ru/download/\u0446\u0432\u0435\u0442\u043e\u0432\u0430\u044f-\u0441\u0438\u0441\u0442\u0435\u043c\u0430-\u043c\u0430\u043d\u0441\u0435\u043b\u043b\u0430.html"})}),"\n"]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},70795:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/01-Grayscale-image-as-matrix-ec381b3c5dba493c2185182625129156.jpg"},39582:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/02-Color-Image-from-RGB-8a842858954576844cbabcafdfccaa66.jpg"},62210:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/03-Lab-colorspace-9983750b1c1e4582708dc63c92b7a4cc.png"},16351:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/04-HCL-colorspace-5f50251a89a18d61b8f4e818c7ca60ea.jpg"},28453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>c});var n=a(96540);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);