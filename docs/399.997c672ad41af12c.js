"use strict";(self.webpackChunkmulti_layout=self.webpackChunkmulti_layout||[]).push([[399],{95399:(Z,w,o)=>{o.r(w),o.d(w,{DashboardModule:()=>b});var d=o(36895),s=o(15127),M=o(77579),l=o(82722),T=o(39300),B=o(18505),e=o(94650);function k(t){return Array.isArray(t)?t:[t]}var Q=o(39841),R=o(97272),j=o(69751),U=o(95698),Y=o(35684),J=o(78372),A=o(54004),$=o(68675);let L;try{L=typeof Intl<"u"&&Intl.v8BreakIterator}catch{L=!1}let z=(()=>{class t{constructor(n){this._platformId=n,this.isBrowser=this._platformId?(0,d.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!L)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(e.Lbi))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const P=new Set;let g,W=(()=>{class t{constructor(n){this._platform=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):H}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&function V(t){if(!P.has(t))try{g||(g=document.createElement("style"),g.setAttribute("type","text/css"),document.head.appendChild(g)),g.sheet&&(g.sheet.insertRule(`@media ${t} {body{ }}`,0),P.add(t))}catch(i){console.error(i)}}(n),this._matchMedia(n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(z))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function H(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let X=(()=>{class t{constructor(n,a){this._mediaMatcher=n,this._zone=a,this._queries=new Map,this._destroySubject=new M.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return O(k(n)).some(r=>this._registerQuery(r).mql.matches)}observe(n){const r=O(k(n)).map(h=>this._registerQuery(h).observable);let c=(0,Q.a)(r);return c=(0,R.z)(c.pipe((0,U.q)(1)),c.pipe((0,Y.T)(1),(0,J.b)(0))),c.pipe((0,A.U)(h=>{const m={matches:!1,breakpoints:{}};return h.forEach(({matches:S,query:me})=>{m.matches=m.matches||S,m.breakpoints[me]=S}),m}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);const a=this._mediaMatcher.matchMedia(n),c={observable:new j.y(h=>{const m=S=>this._zone.run(()=>h.next(S));return a.addListener(m),()=>{a.removeListener(m)}}).pipe((0,$.O)(a),(0,A.U)(({matches:h})=>({query:n,matches:h})),(0,l.R)(this._destroySubject)),mql:a};return this._queries.set(n,c),c}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(W),e.LFG(e.R0b))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function O(t){return t.map(i=>i.split(",")).reduce((i,n)=>i.concat(n)).map(i=>i.trim())}class p{constructor(i){this.breakpointObserver=i,this.isOpen=!0,this.breakpointObserver.observe(["(min-width: 500px)"]).subscribe(n=>{this.isOpen=!!n.matches})}toggle(){this.isOpen=!this.isOpen}}p.\u0275fac=function(i){return new(i||p)(e.LFG(X))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var N=o(37556),E=o(12682);class _{constructor(i,n,a){this.sidebarService=i,this.authService=n,this.router=a}logout(){this.authService.logout(),this.router.navigateByUrl("/login")}}_.\u0275fac=function(i){return new(i||_)(e.Y36(p),e.Y36(N.e),e.Y36(s.F0))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-dashboard-navbar"]],decls:7,vars:0,consts:[[1,"app-navbar","navbar","navbar-light","bg-white"],[1,"container-fluid"],[1,"app-round-btn","fs-5","clickable",3,"click"],[1,"bi","bi-three-dots-vertical"],[1,"btn",3,"click"],[1,"fa","fa-power-off"]],template:function(i,n){1&i&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"label",2),e.NdJ("click",function(){return n.sidebarService.toggle()}),e._UZ(3,"i",3),e.qZA(),e.TgZ(4,"div")(5,"button",4),e.NdJ("click",function(){return n.logout()}),e._UZ(6,"i",5),e.qZA()()()())},dependencies:[E.M2]});var q=o(44473),ee=o(138);const te=["rla"];function ne(t,i){1&t&&e._UZ(0,"i",21)}function ie(t,i){1&t&&e._UZ(0,"i",22)}function oe(t,i){if(1&t&&e._UZ(0,"i",25),2&t){const n=e.oxw(2).$implicit;e.Q6J("ngClass",n.icon)}}function ae(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"a",23),e.YNc(2,oe,1,1,"i",24),e._uU(3),e.qZA(),e.BQk()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink",n.path),e.xp6(1),e.Q6J("ngIf",n.icon),e.xp6(1),e.hij(" ",n.title," ")}}function re(t,i){if(1&t&&(e.ynx(0),e.YNc(1,ae,4,3,"ng-container",9),e.BQk()),2&t){const n=i.$implicit,a=e.oxw(3).ngLet,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!n.roles||r.intersection(a.roles,n.roles).length)}}function se(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",12,13)(2,"div",14),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(3).$implicit;return e.KtG(r.isActive=!r.isActive)}),e._UZ(3,"i",15),e.TgZ(4,"span",16),e._uU(5),e.qZA(),e.YNc(6,ne,1,0,"i",17),e.YNc(7,ie,1,0,"i",18),e.qZA(),e.TgZ(8,"div",19,20),e.NdJ("ngbCollapseChange",function(r){e.CHM(n);const c=e.oxw(3).$implicit;return e.KtG(!(c.isActive=r))}),e.YNc(10,re,2,1,"ng-container",7),e.qZA()()}if(2&t){const n=e.oxw(3).$implicit;e.xp6(3),e.Q6J("ngClass",n.icon),e.xp6(2),e.Oqu(n.title),e.xp6(1),e.Q6J("ngIf",!n.isActive),e.xp6(1),e.Q6J("ngIf",n.isActive),e.xp6(1),e.Q6J("ngbCollapse",!n.isActive),e.xp6(2),e.Q6J("ngForOf",n.children)}}function de(t,i){if(1&t&&(e.TgZ(0,"a",23,13),e._UZ(2,"i",15),e._uU(3),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.Q6J("routerLink",n.path),e.xp6(2),e.Q6J("ngClass",n.icon),e.xp6(1),e.hij(" ",n.title," ")}}function ce(t,i){if(1&t&&(e.ynx(0),e.YNc(1,se,11,6,"div",10),e.YNc(2,de,4,3,"a",11),e.BQk()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",n.children),e.xp6(1),e.Q6J("ngIf",!n.children)}}function le(t,i){if(1&t&&(e.ynx(0),e.YNc(1,ce,3,2,"ng-container",9),e.BQk()),2&t){const n=i.ngLet,a=e.oxw().$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngIf",!a.roles||r.intersection(n.roles,a.roles).length)}}function pe(t,i){if(1&t&&(e.ynx(0),e.YNc(1,le,2,1,"ng-container",8),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngLet",e.lcZ(2,1,n.authService.user$))}}class x{constructor(i,n){this.sidebarService=i,this.authService=n,this.intersection=q.jV,this.sidebarItems=[{isActive:!1,title:"Kitchen Sink",icon:"bi-list-columns",path:"/dashboard/kitchen-sink"},{isActive:!1,title:"App input",icon:"bi-ui-radios",path:"/dashboard/demos/app-input"},{isActive:!1,title:"App table",icon:"bi-table",path:"/dashboard/demos/app-table"},{isActive:!1,title:"Wizard",icon:"bi-eyeglasses",path:"/dashboard/demos/wizard"},{isActive:!1,title:"Demos",icon:"bi-grid",children:[{path:"/dashboard/demos/accordion",title:"Accordion"},{path:"/dashboard/demos/alert",title:"Alert"},{path:"/dashboard/demos/carousel",title:"Carousel"},{path:"/dashboard/demos/collapse",title:"Collapse"},{path:"/dashboard/demos/datepicker",title:"Datepicker"},{path:"/dashboard/demos/dropdown",title:"Dropdown"},{path:"/dashboard/demos/modal",title:"Modal"},{path:"/dashboard/demos/nav",title:"Nav"},{path:"/dashboard/demos/offcanvas",title:"Offcanvas"},{path:"/dashboard/demos/pagination",title:"Pagination"},{path:"/dashboard/demos/popover",title:"Popover"},{path:"/dashboard/demos/progressbar",title:"Progress Bar"},{path:"/dashboard/demos/rating",title:"Rating"},{path:"/dashboard/demos/table",title:"Table"},{path:"/dashboard/demos/timepicker",title:"Timepicker"},{path:"/dashboard/demos/toast",title:"Toast"},{path:"/dashboard/demos/tooltip",title:"Tooltip"},{path:"/dashboard/demos/typeahead",title:"Typeahead"}]}],this.username$=this.authService.user$.pipe((0,A.U)(a=>a.username))}ngAfterViewInit(){this.rlaList&&setTimeout(()=>{const i=this.rlaList.toArray().findIndex(n=>n.isActive);i>-1&&(this.sidebarItems[i].isActive=!0)},150)}}x.\u0275fac=function(i){return new(i||x)(e.Y36(p),e.Y36(N.e))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-dashboard-sidebar"]],viewQuery:function(i,n){if(1&i&&e.Gf(te,5),2&i){let a;e.iGM(a=e.CRH())&&(n.rlaList=a)}},decls:14,vars:4,consts:[[1,"sb-brand"],["routerLink","/home",1,"app-brand"],["src","assets/logos/brand.png",1,"pic"],[1,"menu-toggle",3,"click"],[1,"sb-user"],["src","assets/images/unknown-user.png",1,"pic"],[1,"sb-links"],[4,"ngFor","ngForOf"],[4,"ngLet"],[4,"ngIf"],["routerLinkActive","",4,"ngIf"],["routerLinkActive","is-active","class","sb-link text-reset text-decoration-none",3,"routerLink",4,"ngIf"],["routerLinkActive",""],["rla","routerLinkActive"],[1,"sb-link","clickable",3,"click"],[1,"pe-3",3,"ngClass"],[1,"me-auto"],["class","bi bi-caret-up-fill",4,"ngIf"],["class","bi bi-caret-down-fill",4,"ngIf"],[1,"sb-sublinks",3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],[1,"bi","bi-caret-up-fill"],[1,"bi","bi-caret-down-fill"],["routerLinkActive","is-active",1,"sb-link","text-reset","text-decoration-none",3,"routerLink"],["class","pe-3 bi",3,"ngClass",4,"ngIf"],[1,"pe-3","bi",3,"ngClass"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"a",1),e._UZ(2,"img",2),e.TgZ(3,"div"),e._uU(4,"Brand"),e.qZA()(),e.TgZ(5,"label",3),e.NdJ("click",function(){return n.sidebarService.toggle()}),e._uU(6,"\u2715"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"img",5),e.TgZ(9,"div"),e._uU(10),e.ALo(11,"async"),e.qZA()(),e.TgZ(12,"div",6),e.YNc(13,pe,3,3,"ng-container",7),e.qZA()),2&i&&(e.xp6(10),e.Oqu(e.lcZ(11,2,n.username$)),e.xp6(3),e.Q6J("ngForOf",n.sidebarItems))},dependencies:[d.mk,d.sg,d.O5,s.rH,s.Od,E._D,ee.e,d.Ov],styles:[".menu-toggle[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.sb-brand[_ngcontent-%COMP%]{align-items:center;box-shadow:inset 0 -1px #eee4;display:flex;justify-content:space-between;padding:.75rem}.sb-user[_ngcontent-%COMP%]{align-items:center;box-shadow:inset 0 -1px #eee4;display:flex;gap:.5rem;padding:1rem}.sb-user[_ngcontent-%COMP%] > .pic[_ngcontent-%COMP%]{width:34px;height:34px;border-radius:50%;box-shadow:0 16px 38px -12px #0000008f,0 4px 25px #0000001f,0 8px 10px -5px #0003}.sb-links[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-rows:min-content;overflow:auto;padding:1rem}.sb-sublinks[_ngcontent-%COMP%]:is(.collapsing, .show)[_ngcontent-%COMP%]{display:grid;gap:.5rem;margin-top:.5rem;padding-left:.75rem}.sb-link[_ngcontent-%COMP%]{border:1px solid #eee4;border-radius:.5rem;display:flex;padding:.65rem .75rem;transition:background-color .3s ease,border-color .3s ease}.sb-link[_ngcontent-%COMP%]:hover{background-color:#eee2;border-color:#eee7}.sb-link.is-active[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 20px #00000024,0 7px 10px -5px #3c485866;color:#444!important}"]});class y{constructor(i,n){this.sidebarService=i,this.router=n,this.destroy$=new M.x}ngOnInit(){this.router.events.pipe((0,l.R)(this.destroy$),(0,T.h)(i=>i instanceof s.m2),(0,B.b)(()=>document.querySelector(".sb-layout__main")?.scrollTop)).subscribe()}ngOnDestroy(){this.destroy$.next()}}y.\u0275fac=function(i){return new(i||y)(e.Y36(p),e.Y36(s.F0))},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-dashboard"]],decls:5,vars:2,consts:[[1,"sb-layout"],[1,"sb-layout__nav"],[1,"sb-layout__side"],[1,"sb-layout__main"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"app-dashboard-navbar",1)(2,"app-dashboard-sidebar",2),e.TgZ(3,"main",3),e._UZ(4,"router-outlet"),e.qZA()()),2&i&&(e.xp6(2),e.ekj("is-open",n.sidebarService.isOpen))},dependencies:[s.lC,_,x],styles:['.sb-layout[_ngcontent-%COMP%]{display:grid;grid-template-areas:"side navbar" "side main";grid-template-columns:auto 1fr;grid-template-rows:min-content 1fr;height:100vh}.sb-layout__nav[_ngcontent-%COMP%]{grid-area:navbar;box-shadow:0 3px 1rem #0002;z-index:1000}.sb-layout__side[_ngcontent-%COMP%]{grid-area:side;background:var(--app-sidebar-gradient);box-shadow:0 16px 38px -12px #00000057,0 4px 25px #00000012,0 8px 10px -5px #0000001f;color:#fff;display:flex;flex-direction:column;opacity:1;overflow:hidden;transition:opacity .35s ease .35s,padding .35s ease,width .35s ease;width:clamp(25ch,25vw,30ch);z-index:1001}.sb-layout__side[_ngcontent-%COMP%]:not(.is-open){opacity:0;padding:0;transition:opacity .35s ease,padding .35s ease .35s,width .35s ease .35s;width:0}.sb-layout__main[_ngcontent-%COMP%]{grid-area:main;overflow:auto}@media (max-width: 700px){.sb-layout__side[_ngcontent-%COMP%]{box-shadow:4px 0 8px 3px #0002;min-height:100vh;position:fixed;width:85vw;z-index:1000}}']});var ue=o(31509);const he=[{path:"",component:y,children:[{path:"",redirectTo:"kitchen-sink",pathMatch:"full"},{path:"kitchen-sink",loadChildren:()=>o.e(476).then(o.bind(o,63476)).then(t=>t.KitchenSinkModule)},{path:"demos",loadChildren:()=>Promise.all([o.e(228),o.e(274)]).then(o.bind(o,67274)).then(t=>t.DemosModule)}]}];class b{}b.\u0275fac=function(i){return new(i||b)},b.\u0275mod=e.oAB({type:b}),b.\u0275inj=e.cJS({imports:[d.ez,s.Bz.forChild(he),ue.m]})},138:(Z,w,o)=>{o.d(w,{e:()=>s});var d=o(94650);class s{constructor(l,T){this.ctx={ngLet:null},l.createEmbeddedView(T,this.ctx)}set ngLet(l){this.ctx.ngLet=l}}s.\u0275fac=function(l){return new(l||s)(d.Y36(d.s_b),d.Y36(d.Rgc))},s.\u0275dir=d.lG2({type:s,selectors:[["","ngLet",""]],inputs:{ngLet:"ngLet"}})}}]);