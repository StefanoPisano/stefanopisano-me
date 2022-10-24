(function(){"use strict";var a={376:function(a,e,t){var n=t(963),i=t(252);const o={class:"container"};function s(a,e,t,n,s,d){const r=(0,i.up)("Header"),c=(0,i.up)("About"),l=(0,i.up)("Experience"),p=(0,i.up)("Contacts"),f=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(r),(0,i.Wm)(c,{"section-index":1}),(0,i.Wm)(l,{"section-index":2}),(0,i.Wm)(p,{"section-index":3}),(0,i.Wm)(f)])}const d={id:"spi-header",class:"row"},r=(0,i.uE)('<div class="col-md-8 offset-md-2" data-v-e76ac72a><div class="card" data-v-e76ac72a><div class="card-body" data-v-e76ac72a><h6 class="greetings" data-v-e76ac72a>Hi! :)</h6><h1 class="card-title" data-v-e76ac72a>Stefano Pisano.</h1><h1 class="card-title card-title-2" data-v-e76ac72a>I code things.</h1><p class="card-text" data-v-e76ac72a>A passionate developer and Team Lead at <a class="link-info spi-link" href="https://www.techgap.it/" data-v-e76ac72a>Tech Gap Italia</a><br data-v-e76ac72a>I strongly believe in team working and producing clean and maintainable code.</p><button class="btn btn-dark spi-button" disabled type="button" data-v-e76ac72a>Download CV</button></div></div></div>',1),c=[r];function l(a,e,t,n,o,s){return(0,i.wg)(),(0,i.iD)("div",d,c)}var p={name:"SPHeader"},f=t(744);const v=(0,f.Z)(p,[["render",l],["__scopeId","data-v-e76ac72a"]]);var u=v,m=t(577),b=t.p+"img/avatar_00.600d116c.jpg";const y=a=>((0,i.dD)("data-v-1a61fd2f"),a=a(),(0,i.Cn)(),a),h={id:"spi-about",class:"row"},g={class:"col-md-8 offset-md-2"},w={class:"card mb-3"},k={class:"row g-0"},_={class:"card-body"},C={class:"card-title spi-card-title-border"},x={class:"index-name"},I=y((()=>(0,i._)("span",{class:"section-name"},"About me",-1))),S=(0,i.uE)('<div class="spi-card-content-img-right" data-v-1a61fd2f><div data-v-1a61fd2f><p class="card-text" data-v-1a61fd2f>I’m an italian software developer based in Milan. I strongly believe in good practices and team working. <br data-v-1a61fd2f>I always try to write code easy to read and update. <br data-v-1a61fd2f>In addition to coding, I am passionate about every music genre and in my free time I like being a self-taught guitar player. I also like photography and whenever I can, I go for a hike in the nature with my camera.</p><ul class="skill-list" data-v-1a61fd2f><li data-v-1a61fd2f>JAVA</li><li data-v-1a61fd2f>SQL</li><li data-v-1a61fd2f>HTML</li><li data-v-1a61fd2f>CSS</li><li data-v-1a61fd2f>JavaScript</li><li data-v-1a61fd2f>Vue JS</li></ul></div><div data-v-1a61fd2f><img alt="..." class="img-fluid rounded-start" src="'+b+'" data-v-1a61fd2f></div></div>',1);function O(a,e,t,n,o,s){return(0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("div",g,[(0,i._)("div",w,[(0,i._)("div",k,[(0,i._)("div",_,[(0,i._)("h5",C,[(0,i._)("span",x,(0,m.zw)(t.sectionIndex),1),(0,i.Uk)(),I]),S])])])])])}var D={name:"SPAbout",props:{sectionIndex:Number}};const j=(0,f.Z)(D,[["render",O],["__scopeId","data-v-1a61fd2f"]]);var P=j;const z=a=>((0,i.dD)("data-v-61cc76fd"),a=a(),(0,i.Cn)(),a),J={id:"spi-experience",class:"row"},A={class:"col-md-8 offset-md-2"},T={class:"card"},U={class:"card-body"},F={class:"card-title spi-card-title-border"},E={class:"index-name"},H=z((()=>(0,i._)("span",{class:"section-name"},"Experience",-1))),N={class:"card-text spi-card-content-img-left"},L={class:"list-group"},M=["onClick"],V={class:"spi-experience-values"},W=z((()=>(0,i._)("span",{class:"spi-experience-key"},"Company Name:",-1))),Z=z((()=>(0,i._)("span",{class:"spi-experience-key"},"City:",-1))),G=z((()=>(0,i._)("span",{class:"spi-experience-key"},"Job:",-1))),Q=z((()=>(0,i._)("span",{class:"spi-experience-key"},"From:",-1))),K=z((()=>(0,i._)("span",{class:"spi-experience-key"},"To:",-1))),B=z((()=>(0,i._)("span",{class:"spi-experience-key"},"Description:",-1)));function R(a,e,t,n,o,s){return(0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("div",A,[(0,i._)("div",T,[(0,i._)("div",U,[(0,i._)("h5",F,[(0,i._)("span",E,(0,m.zw)(t.sectionIndex),1),(0,i.Uk)(),H]),(0,i._)("div",N,[(0,i._)("ul",L,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.listOfCompanies,(a=>((0,i.wg)(),(0,i.iD)("li",{key:a.companyCode,class:(0,m.C_)(o.selectedCompany.companyCode===a.companyCode?"list-group-item active":"list-group-item"),onClick:e=>o.selectedCompany=a},(0,m.zw)(a.label),11,M)))),128))]),(0,i._)("div",V,[(0,i._)("div",null,[W,(0,i.Uk)(" "+(0,m.zw)(o.selectedCompany.companyName),1)]),(0,i._)("div",null,[Z,(0,i.Uk)(" "+(0,m.zw)(o.selectedCompany.city),1)]),(0,i._)("div",null,[G,(0,i.Uk)(" "+(0,m.zw)(o.selectedCompany.job),1)]),(0,i._)("div",null,[Q,(0,i.Uk)(" "+(0,m.zw)(o.selectedCompany.from),1)]),(0,i._)("div",null,[K,(0,i.Uk)(" "+(0,m.zw)(o.selectedCompany.to),1)]),(0,i._)("div",null,[B,(0,i.Uk)(" "+(0,m.zw)(o.selectedCompany.description),1)])])])])])])])}var Y={name:"SPExperience",props:{sectionIndex:Number},data(){return{listOfCompanies:{ank:{companyCode:"ank",label:"ANK",companyName:"Anoki S.r.l.",city:"Milan, Italy",job:"Full Stack Developer",from:"Sept 2016",to:"Oct 2020",description:"Full-stack developer on a project for a client leader in the game translation/localization industry.\nResponsible for the maintenance team, coordinating other resources to solve issues notified by the client.\nI also worked on code refactoring sessions and on the introduction of new technologies like Vue JS.\nSoftware built upon a Model-View-Controller architecture using Java, Spring, Hibernate, JSP, Javascript, JQuery, Vue.js and an SQLServer database.\nUsed Jenkins as the deployment tool and SonarQube for static analysis of the code.\nOccasionally, I was a tutor for new resources. "},tgi:{companyCode:"tgi",label:"TGI",companyName:"Tech Gap Italia",city:"Milan, Italy",job:"Full Stack Developer & Team Lead",from:"Oct 2020",to:"Present",description:"Working as Full-Stack Developer and Team Leader on an International project.\nMainly working on the development of new functionalities, from the analysis paper to the development phase"}},selectedCompany:{}}},methods:{getJob(a){this.selectedCompany=this.listOfCompanies[a]}},created(){this.selectedCompany=this.listOfCompanies["tgi"]}};const q=(0,f.Z)(Y,[["render",R],["__scopeId","data-v-61cc76fd"]]);var X=q;const $=a=>((0,i.dD)("data-v-6d9d556f"),a=a(),(0,i.Cn)(),a),aa={id:"spi-contacts",class:"row"},ea={class:"col-md-8 offset-md-2"},ta={class:"card mb-3"},na={class:"row g-0"},ia={class:"card-body"},oa={class:"card-title spi-card-title-border"},sa={class:"index-name"},da=$((()=>(0,i._)("span",{class:"section-name"},"Get in touch",-1))),ra=(0,i.uE)('<div data-v-6d9d556f><p class="card-text" style="text-align:center;" data-v-6d9d556f><a class="btn btn-dark spi-button" href="#" style="pointer-events:none;opacity:.5;" type="button" data-v-6d9d556f>Blog</a><br data-v-6d9d556f><a class="btn btn-dark spi-button" href="https://github.com/StefanoPisano" type="button" data-v-6d9d556f>Git Hub</a><br data-v-6d9d556f><a class="btn btn-dark spi-button" href="https://www.linkedin.com/in/stefano-pisano/" type="button" data-v-6d9d556f>Linkedin</a><br data-v-6d9d556f><a class="btn btn-dark spi-button" href="https://www.instagram.com/im.stee/" type="button" data-v-6d9d556f>Instagram</a><br data-v-6d9d556f><a class="btn btn-dark spi-button" href="mailto:spisano@protonmail.com" type="button" data-v-6d9d556f>Contact me!</a></p></div>',1);function ca(a,e,t,n,o,s){return(0,i.wg)(),(0,i.iD)("div",aa,[(0,i._)("div",ea,[(0,i._)("div",ta,[(0,i._)("div",na,[(0,i._)("div",ia,[(0,i._)("h5",oa,[(0,i._)("span",sa,(0,m.zw)(t.sectionIndex),1),(0,i.Uk)(),da]),ra])])])])])}var la={name:"SPContact",props:{sectionIndex:Number}};const pa=(0,f.Z)(la,[["render",ca],["__scopeId","data-v-6d9d556f"]]);var fa=pa;const va=a=>((0,i.dD)("data-v-1867444b"),a=a(),(0,i.Cn)(),a),ua={id:"spi-footer",class:"row"},ma=va((()=>(0,i._)("div",{class:"col-md-8 offset-md-2"},[(0,i._)("footer",null,"Coded by Stefano Pisano")],-1))),ba=[ma];function ya(a,e,t,n,o,s){return(0,i.wg)(),(0,i.iD)("div",ua,ba)}var ha={name:"SPFooter"};const ga=(0,f.Z)(ha,[["render",ya],["__scopeId","data-v-1867444b"]]);var wa=ga,ka={name:"App",components:{Header:u,About:P,Experience:X,Contacts:fa,Footer:wa}};const _a=(0,f.Z)(ka,[["render",s]]);var Ca=_a;(0,n.ri)(Ca).mount("#app")}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return a[n](o,o.exports,t),o.exports}t.m=a,function(){var a=[];t.O=function(e,n,i,o){if(!n){var s=1/0;for(l=0;l<a.length;l++){n=a[l][0],i=a[l][1],o=a[l][2];for(var d=!0,r=0;r<n.length;r++)(!1&o||s>=o)&&Object.keys(t.O).every((function(a){return t.O[a](n[r])}))?n.splice(r--,1):(d=!1,o<s&&(s=o));if(d){a.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=a.length;l>0&&a[l-1][2]>o;l--)a[l]=a[l-1];a[l]=[n,i,o]}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/stefanopisano-me/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var i,o,s=n[0],d=n[1],r=n[2],c=0;if(s.some((function(e){return 0!==a[e]}))){for(i in d)t.o(d,i)&&(t.m[i]=d[i]);if(r)var l=r(t)}for(e&&e(n);c<s.length;c++)o=s[c],t.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return t.O(l)},n=self["webpackChunkstefanopisano_me"]=self["webpackChunkstefanopisano_me"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(376)}));n=t.O(n)})();
//# sourceMappingURL=app.d6d1016c.js.map