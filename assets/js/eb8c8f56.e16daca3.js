"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[8702],{8399:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(74848),r=s(28453);const t={description:""},l="\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430",c={id:"Neural-networks/Tasks/Text-task-examples",title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430",description:"",source:"@site/docs/Neural-networks/03-Tasks/03-Text-task-examples.md",sourceDirName:"Neural-networks/03-Tasks",slug:"/Neural-networks/Tasks/Text-task-examples",permalink:"/docs/Neural-networks/Tasks/Text-task-examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0438\u0434\u0435\u043e",permalink:"/docs/Neural-networks/Tasks/Video-task-examples"},next:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0437\u0432\u0443\u043a\u0430",permalink:"/docs/Neural-networks/Tasks/Sound-task-examples"}},o={},d=[];function h(n){const e={a:"a",blockquote:"blockquote",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0442\u0435\u043a\u0441\u0442\u0430",children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f (text classification). \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u044b:"}),"\n",(0,i.jsx)(e.p,{children:"\u041e\u0446\u0435\u043d\u043a\u0430 \u0442\u043e\u0433\u043e, \u043d\u0430\u043f\u0438\u0441\u0430\u043d \u043b\u0438 \u0442\u0435\u043a\u0441\u0442 \u0431\u043e\u0442\u043e\u043c \u0438\u043b\u0438 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"})," \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0435\u0442 \u043e\u0442\u0437\u044b\u0432 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043d\u0430 \u0442\u043e\u0432\u0430\u0440, \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u043b\u0438 \u043e\u043d \u0435\u043c\u0443 \u0438\u043b\u0438 \u043d\u0435\u0442 (sentiment analysis, ",(0,i.jsx)(e.a,{href:"https://udlbook.github.io/udlbook/",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),")."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(50613).A+"",width:"1215",height:"260"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439"})," (news categorization) \u043f\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u043d\u044b\u043c \u0440\u0443\u0431\u0440\u0438\u043a\u0430\u043c (\u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0441\u043f\u043e\u0440\u0442\u0430, \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0438, \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438, \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u044b \u0438 \u0442.\u0434.) \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u043e\u0439 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"})," (named entity recognition) - \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 (\u0438\u043c\u0435\u043d\u0430 \u043b\u044e\u0434\u0435\u0439, \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439, \u0432\u0440\u0435\u043c\u044f, \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u0442.\u0434.) \u0438\u0437 \u043d\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0430:"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Google bought YouTube in November 2006 for US$1.65 billion."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443:"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["[Google]",(0,i.jsx)("sub",{children:"company"})," bought [YouTube]",(0,i.jsx)("sub",{children:"company"})," in\xa0[November 2006]",(0,i.jsx)("sub",{children:"time"}),"\xa0for [US$1.65 billion]",(0,i.jsx)("sub",{children:"price"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0418\u043d\u043e\u0433\u0434\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u043c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f, \u043a\u0430\u043a \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0438."}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u0414\u0436\u043e\u043d \u043f\u043e\u043c\u043e\u0433 \u041c\u044d\u0440\u0438. \u041e\u043d \u0431\u044b\u043b \u0434\u043e\u0431\u0440\u044b\u043c."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u0417\u0430\u0434\u0430\u0447\u0435\u0439 ",(0,i.jsx)(e.strong,{children:"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0430\u043d\u0430\u0444\u043e\u0440\u044b"}),' (anaphora resolution) \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u044b\u044f\u0432\u0438\u0442\u044c, \u043d\u0430 \u043a\u0430\u043a\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u0441\u044b\u043b\u0430\u044e\u0442\u0441\u044f \u043c\u0435\u0441\u0442\u043e\u0438\u043c\u0435\u043d\u0438\u044f \u0432 \u0442\u0435\u043a\u0441\u0442\u0435 ("\u043e\u043d" \u0441\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0414\u0436\u043e\u043d\u0430).']}),"\n",(0,i.jsxs)(e.p,{children:["\u0414\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u0430, \u0447\u0430\u0441\u0442\u043e \u0434\u043b\u044f \u043d\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f ",(0,i.jsx)(e.strong,{children:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e \u0440\u0430\u0437\u0431\u043e\u0440\u0430"})," (syntax parse tree, ",(0,i.jsx)(e.a,{href:"https://commons.wikimedia.org/wiki/File:The_cat_sat_on_the_mat.png",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"), \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b:"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(16355).A+"",width:"820",height:"597"})}),"\n",(0,i.jsx)(e.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0430\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u044b:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"S=sentence (\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435)"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"NP=noun phrase (\u0444\u0440\u0430\u0437\u0430 \u0441 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c)"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"N=noun (\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435)"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"VP=verb phrase (\u0444\u0440\u0430\u0437\u0430 \u0441 \u0433\u043b\u0430\u0433\u043e\u043b\u043e\u043c)"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"V=verb (\u0433\u043b\u0430\u0433\u043e\u043b)"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"D=determiner (\u0447\u0430\u0441\u0442\u0438\u0446\u0430)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439, \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0430\u043d\u0430\u0444\u043e\u0440 \u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0431\u043e\u0440\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u043e\u0431\u043e\u0439 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0448\u0430\u0433\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 ",(0,i.jsx)(e.strong,{children:"\u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"})," (information extraction) \u0438\u0437 \u043d\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0440\u0435\u0448\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0441\u0443\u043c\u043c\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430"})," (text summarization) - \u043a\u0440\u0430\u0442\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0441\u043a\u0430\u0437 \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0432\u044b\u0432\u043e\u0434\u043e\u0432 \u0438\u0437 \u0442\u0435\u043a\u0441\u0442\u0430;"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"})," (information retrieval) - \u043f\u043e\u0438\u0441\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u0438\u0445 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432, \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u044b\u0445 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443;"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"})," (question answering) - \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0441 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439"})," (event extraction) \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u043e\u0434\u043d\u0438\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u043c\u0438 \u043f\u0440\u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u0435 \u043d\u0430 \u0431\u0438\u0440\u0436\u0435;"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043e\u043d\u0442\u043e\u043b\u043e\u0433\u0438\u0439"})," (",(0,i.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Ontology_learning",children:"ontology learning"}),") - \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438\u0437 \u0442\u0435\u043a\u0441\u0442\u0430 \u0438\u043b\u0438 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u043e\u0431 \u043e\u043a\u0440\u0443\u0436\u0430\u044e\u0449\u0435\u043c \u043c\u0438\u0440\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0433\u0440\u0430\u0444\u0430 \u0437\u043d\u0430\u043d\u0438\u0439 (",(0,i.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Knowledge_graph",children:"knowledge graph"}),"), \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:s(93915).A+"",width:"1221",height:"650"})}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u043c\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041c\u0430\u0448\u0438\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434"})," (machine translation) - \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439. \u0422\u0430\u043a\u0436\u0435 \u0440\u0435\u0448\u0430\u044e\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441 Java \u043d\u0430 Python)."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u0443"})," - \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442 \u043b\u0438 \u0434\u0432\u0430 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043e\u0434\u043d\u043e\u043c\u0443 \u0430\u0432\u0442\u043e\u0440\u0443."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430"})," - \u043f\u0435\u0440\u0435\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c \u0441\u0442\u0438\u043b\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0437 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u043d\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0435\u043b\u043e\u0432\u043e\u0439)."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0442\u0435\u043c\u0435"}),". \u0412 \u0441\u0430\u043c\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u043e\u043c \u0432\u0438\u0434\u0435 \u044d\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 ",(0,i.jsx)(e.a,{href:"https://yandex.ru/referats/",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u0420\u0435\u0444\u0435\u0440\u0430\u0442\u044b"}),", \u0445\u043e\u0442\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ChatGPT."]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},50613:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/11-sentiment-analysis-f2f1113757029f3fd2abb39a28137bbe.jpg"},16355:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/11-syntax-parse-tree-e60ea7e507741adc49d68444a2e25ac4.png"},93915:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/12-knowledge-graph-7824dcd04f6769ef140af7b4138d3e33.png"},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);