"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[6990],{80758:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=n(74848),t=n(28453);const c={description:""},d="\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0432\u0451\u0440\u0442\u043a\u0438",a={id:"Neural-networks/ConvPool-Images/Conv-params",title:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0432\u0451\u0440\u0442\u043a\u0438",description:"",source:"@site/docs/Neural-networks/10-ConvPool-Images/03-Conv-params.md",sourceDirName:"Neural-networks/10-ConvPool-Images",slug:"/Neural-networks/ConvPool-Images/Conv-params",permalink:"/docs/Neural-networks/ConvPool-Images/Conv-params",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"\u0421\u0432\u0451\u0440\u0442\u043a\u0430 \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",permalink:"/docs/Neural-networks/ConvPool-Images/Conv-images"},next:{title:"\u041f\u0443\u043b\u0438\u043d\u0433",permalink:"/docs/Neural-networks/ConvPool-Images/Pooling"}},r={},o=[{value:"\u041f\u0430\u0434\u0434\u0438\u043d\u0433",id:"\u043f\u0430\u0434\u0434\u0438\u043d\u0433",level:2},{value:"\u0421\u0434\u0432\u0438\u0433 (stride)",id:"\u0441\u0434\u0432\u0438\u0433-stride",level:2},{value:"\u0428\u0430\u0433 (dilation)",id:"\u0448\u0430\u0433-dilation",level:2}];function h(e){const s={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b-\u0441\u0432\u0451\u0440\u0442\u043a\u0438",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0432\u0451\u0440\u0442\u043a\u0438"}),"\n",(0,i.jsxs)(s.p,{children:["\u0422\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u043f\u0440\u0438 ",(0,i.jsx)(s.a,{href:"../ConvPool-1D/Conv-1D-params",children:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439"}),", \u0443 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0435\u0441\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u0430\u0434\u0434\u0438\u043d\u0433\u0430, \u0441\u0434\u0432\u0438\u0433\u0430 \u0438 \u0448\u0430\u0433\u0430."]}),"\n",(0,i.jsx)(s.h2,{id:"\u043f\u0430\u0434\u0434\u0438\u043d\u0433",children:"\u041f\u0430\u0434\u0434\u0438\u043d\u0433"}),"\n",(0,i.jsx)(s.p,{children:"\u041f\u0430\u0434\u0434\u0438\u043d\u0433 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 - \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u044b \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439 \u0441\u0432\u0451\u0440\u0442\u043a\u0438. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0432\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0443 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e. \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0432\u0438\u0434\u043e\u0432 \u043f\u0430\u0434\u0434\u0438\u043d\u0433\u0430 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0438\u0436\u0435:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(93605).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(89765).A+"",width:"441",height:"491"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(78729).A+"",width:"441",height:"491"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(26790).A+"",width:"441",height:"491"})}),"\n",(0,i.jsx)(s.p,{children:"\u041e\u0442\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0439 (mirror) \u043f\u0430\u0434\u0434\u0438\u043d\u0433 \u043e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0438 \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u043f\u043e\u043b\u044f\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043a\u0430\u0440\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432."}),"\n",(0,i.jsx)(s.h2,{id:"\u0441\u0434\u0432\u0438\u0433-stride",children:"\u0421\u0434\u0432\u0438\u0433 (stride)"}),"\n",(0,i.jsx)(s.p,{children:"\u0421\u0434\u0432\u0438\u0433 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 (stride) \u0437\u0430\u0434\u0430\u0451\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u044f\u0434\u0440\u043e \u0441\u0432\u0451\u0440\u0442\u043a\u0438, \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430. \u041d\u0438\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u043f\u043e\u0437\u0438\u0446\u0438\u0438, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u0432\u0451\u0440\u0442\u043a\u0430 \u0441\u043e \u0441\u0434\u0432\u0438\u0433\u043e\u043c 1:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(26834).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(60803).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(87704).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:"\u0422\u0430\u043a \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f \u0434\u043e \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(9921).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:"\u0410 \u0434\u0430\u043b\u0435\u0435 \u043f\u043e\u043a\u0430\u0436\u0435\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0441\u043e stride=2:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(76212).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(82865).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(49070).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:"\u0422\u0430\u043a \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f \u0434\u043e \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(2995).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.h2,{id:"\u0448\u0430\u0433-dilation",children:"\u0428\u0430\u0433 (dilation)"}),"\n",(0,i.jsx)(s.p,{children:"\u0428\u0430\u0433 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 (dilation) \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043a\u0430\u0440\u0442\u044b \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u044f\u0434\u0440\u0430 \u0441\u0432\u0451\u0440\u0442\u043a\u0438. \u0412\u044b\u0448\u0435 \u0431\u044b\u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0441 dilation=1. \u041f\u043e\u043a\u0430\u0436\u0435\u043c, \u043e\u0442 \u043a\u0430\u043a\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0441 dilation=2:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(62642).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(64515).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(77144).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0434\u043e\u0439\u0434\u0451\u043c \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(50401).A+"",width:"303",height:"342"})}),"\n",(0,i.jsx)(s.p,{children:"\u0428\u0430\u0433 \u0431\u043e\u043b\u044c\u0448\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u0432\u0451\u0440\u0442\u043a\u0438, \u043d\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u044f \u0447\u0438\u0441\u043b\u043e \u0435\u0451 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438 \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438\u0437 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043b\u0430\u0432\u043d\u043e."})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},26790:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/mirror-padding-1d509aafa817d3eb20be89c3313f670f.png"},78729:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/same-padding-b373ffcb5ad0ee7746cd171eeee6aef9.png"},93605:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/valid-padding-ea169f3978aa561dfd8872ec5182bc66.png"},89765:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/zero-padding-0302acc73d309ff579ba8ba7d7654379.png"},26834:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/01-conv-c8c430d639dc147af2026e0391b49791.png"},60803:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/02-conv-e510ed8120f5ee3910fe5a2c95e2864e.png"},87704:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/03-conv-fc85d0b0a31ff6d94eca042c8debab04.png"},9921:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/04-conv-946d0f7bc830c6a6d87ccde9a2dc523c.png"},76212:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/01-conv-655d8536c1829867c20d33c5d3de69b7.png"},82865:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/02-conv-b3c614c36942cf386a9c6d8aedd58477.png"},49070:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/03-conv-fbfb39643d767dfa6a090e6f607a17a1.png"},2995:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/04-conv-afe843b8601ab07a740a0f59f6b9f04a.png"},62642:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/01-conv-0799ae8ca016b117b3579913fcf1774e.png"},64515:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/02-conv-a006fa2b1df27ab33252b1ceff5da94d.png"},77144:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/03-conv-e1ffe0a7c5ec0536ca20409db9493c67.png"},50401:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/04-conv-d4abd71c9e6c5432db4e4cd1c513c132.png"},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>a});var i=n(96540);const t={},c=i.createContext(t);function d(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);