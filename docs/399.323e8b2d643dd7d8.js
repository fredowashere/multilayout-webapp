"use strict";(self.webpackChunkmulti_layout=self.webpackChunkmulti_layout||[]).push([[399],{95399:(ce,T,o)=>{o.r(T),o.d(T,{DashboardModule:()=>b});var h=o(36895),c=o(15127),A=o(77579),k=o(82722),E=o(39300),Z=o(18505),t=o(94650);function D(e){return Array.isArray(e)?e:[e]}var F=o(39841),j=o(97272),R=o(69751),Q=o(95698),U=o(35684),J=o(78372),_=o(54004),Y=o(68675);let C;try{C=typeof Intl<"u"&&Intl.v8BreakIterator}catch{C=!1}let $=(()=>{class e{constructor(i){this._platformId=i,this.isBrowser=this._platformId?(0,h.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!C)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(t.Lbi))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const L=new Set;let f,K=(()=>{class e{constructor(i){this._platform=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):H}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&function W(e){if(!L.has(e))try{f||(f=document.createElement("style"),f.setAttribute("type","text/css"),document.head.appendChild(f)),f.sheet&&(f.sheet.insertRule(`@media ${e} {body{ }}`,0),L.add(e))}catch(n){console.error(n)}}(i),this._matchMedia(i)}}return e.\u0275fac=function(i){return new(i||e)(t.LFG($))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function H(e){return{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}let V=(()=>{class e{constructor(i,a){this._mediaMatcher=i,this._zone=a,this._queries=new Map,this._destroySubject=new A.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return O(D(i)).some(s=>this._registerQuery(s).mql.matches)}observe(i){const s=O(D(i)).map(p=>this._registerQuery(p).observable);let r=(0,F.a)(s);return r=(0,j.z)(r.pipe((0,Q.q)(1)),r.pipe((0,U.T)(1),(0,J.b)(0))),r.pipe((0,_.U)(p=>{const u={matches:!1,breakpoints:{}};return p.forEach(({matches:M,query:de})=>{u.matches=u.matches||M,u.breakpoints[de]=M}),u}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);const a=this._mediaMatcher.matchMedia(i),r={observable:new R.y(p=>{const u=M=>this._zone.run(()=>p.next(M));return a.addListener(u),()=>{a.removeListener(u)}}).pipe((0,Y.O)(a),(0,_.U)(({matches:p})=>({query:i,matches:p})),(0,k.R)(this._destroySubject)),mql:a};return this._queries.set(i,r),r}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(K),t.LFG(t.R0b))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function O(e){return e.map(n=>n.split(",")).reduce((n,i)=>n.concat(i)).map(n=>n.trim())}class d{constructor(n){this.breakpointObserver=n,this.isOpen=!0,this.breakpointObserver.observe(["(min-width: 500px)"]).subscribe(i=>{this.isOpen=!!i.matches})}toggle(){this.isOpen=!this.isOpen}}d.\u0275fac=function(n){return new(n||d)(t.LFG(V))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});var P=o(37556),N=o(12682);class v{constructor(n,i,a){this.sidebarService=n,this.authService=i,this.router=a}logout(){this.authService.logout(),this.router.navigateByUrl("/login")}}v.\u0275fac=function(n){return new(n||v)(t.Y36(d),t.Y36(P.e),t.Y36(c.F0))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-dashboard-navbar"]],decls:7,vars:0,consts:[[1,"app-navbar","navbar","navbar-light","bg-white"],[1,"container-fluid"],[1,"app-round-btn","fs-5","clickable",3,"click"],[1,"bi","bi-three-dots-vertical"],[1,"btn",3,"click"],[1,"fa","fa-power-off"]],template:function(n,i){1&n&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"label",2),t.NdJ("click",function(){return i.sidebarService.toggle()}),t._UZ(3,"i",3),t.qZA(),t.TgZ(4,"div")(5,"button",4),t.NdJ("click",function(){return i.logout()}),t._UZ(6,"i",5),t.qZA()()()())},dependencies:[N.M2]});const X=["rla"];function q(e,n){1&e&&t._UZ(0,"i",20)}function ee(e,n){1&e&&t._UZ(0,"i",21)}function te(e,n){if(1&e&&t._UZ(0,"i",13),2&e){const i=t.oxw().$implicit;t.Q6J("ngClass",i.icon)}}function ne(e,n){if(1&e&&(t.TgZ(0,"a",22),t.YNc(1,te,1,1,"i",23),t._uU(2),t.qZA()),2&e){const i=n.$implicit;t.Q6J("routerLink",i.path),t.xp6(1),t.Q6J("ngIf",i.icon),t.xp6(1),t.hij(" ",i.title," ")}}function ie(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",10,11)(2,"div",12),t.NdJ("click",function(){t.CHM(i);const s=t.oxw().$implicit;return t.KtG(s.isActive=!s.isActive)}),t._UZ(3,"i",13),t.TgZ(4,"span",14),t._uU(5),t.qZA(),t.YNc(6,q,1,0,"i",15),t.YNc(7,ee,1,0,"i",16),t.qZA(),t.TgZ(8,"div",17,18),t.NdJ("ngbCollapseChange",function(s){t.CHM(i);const r=t.oxw().$implicit;return t.KtG(!(r.isActive=s))}),t.YNc(10,ne,3,3,"a",19),t.qZA()()}if(2&e){const i=t.oxw().$implicit;t.xp6(3),t.Q6J("ngClass",i.icon),t.xp6(2),t.Oqu(i.title),t.xp6(1),t.Q6J("ngIf",!i.isActive),t.xp6(1),t.Q6J("ngIf",i.isActive),t.xp6(1),t.Q6J("ngbCollapse",!i.isActive),t.xp6(2),t.Q6J("ngForOf",i.children)}}function oe(e,n){if(1&e&&(t.TgZ(0,"a",22,11),t._UZ(2,"i",13),t._uU(3),t.qZA()),2&e){const i=t.oxw().$implicit;t.Q6J("routerLink",i.path),t.xp6(2),t.Q6J("ngClass",i.icon),t.xp6(1),t.hij(" ",i.title," ")}}function ae(e,n){if(1&e&&(t.ynx(0),t.YNc(1,ie,11,6,"div",8),t.YNc(2,oe,4,3,"a",9),t.BQk()),2&e){const i=n.$implicit;t.xp6(1),t.Q6J("ngIf",i.children),t.xp6(1),t.Q6J("ngIf",!i.children)}}class x{constructor(n,i){this.sidebarService=n,this.authService=i,this.sidebarItems=[{isActive:!1,title:"Kitchen Sink",icon:"bi-list-columns",path:"/dashboard/kitchen-sink"},{isActive:!1,title:"App input",icon:"bi-ui-radios",path:"/dashboard/demos/app-input"},{isActive:!1,title:"App table",icon:"bi-table",path:"/dashboard/demos/app-table"},{isActive:!1,title:"Demos",icon:"bi-grid",children:[{path:"/dashboard/demos/accordion",title:"Accordion"},{path:"/dashboard/demos/alert",title:"Alert"},{path:"/dashboard/demos/carousel",title:"Carousel"},{path:"/dashboard/demos/collapse",title:"Collapse"},{path:"/dashboard/demos/datepicker",title:"Datepicker"},{path:"/dashboard/demos/dropdown",title:"Dropdown"},{path:"/dashboard/demos/modal",title:"Modal"},{path:"/dashboard/demos/nav",title:"Nav"},{path:"/dashboard/demos/offcanvas",title:"Offcanvas"},{path:"/dashboard/demos/pagination",title:"Pagination"},{path:"/dashboard/demos/popover",title:"Popover"},{path:"/dashboard/demos/progressbar",title:"Progress Bar"},{path:"/dashboard/demos/rating",title:"Rating"},{path:"/dashboard/demos/table",title:"Table"},{path:"/dashboard/demos/timepicker",title:"Timepicker"},{path:"/dashboard/demos/toast",title:"Toast"},{path:"/dashboard/demos/tooltip",title:"Tooltip"},{path:"/dashboard/demos/typeahead",title:"Typeahead"}]}],this.username$=this.authService.user$.pipe((0,_.U)(a=>a.username))}ngAfterViewInit(){this.rlaList&&setTimeout(()=>{const n=this.rlaList.toArray().findIndex(i=>i.isActive);n>-1&&(this.sidebarItems[n].isActive=!0)},150)}}x.\u0275fac=function(n){return new(n||x)(t.Y36(d),t.Y36(P.e))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-dashboard-sidebar"]],viewQuery:function(n,i){if(1&n&&t.Gf(X,5),2&n){let a;t.iGM(a=t.CRH())&&(i.rlaList=a)}},decls:14,vars:4,consts:[[1,"sb-brand"],["routerLink","/home",1,"app-brand"],["src","assets/logos/brand.png",1,"pic"],[1,"menu-toggle",3,"click"],[1,"sb-user"],["src","assets/images/unknown-user.png",1,"pic"],[1,"sb-links"],[4,"ngFor","ngForOf"],["routerLinkActive","",4,"ngIf"],["routerLinkActive","is-active","class","sb-link text-reset text-decoration-none",3,"routerLink",4,"ngIf"],["routerLinkActive",""],["rla","routerLinkActive"],[1,"sb-link","clickable",3,"click"],[1,"pe-3","bi",3,"ngClass"],[1,"me-auto"],["class","bi bi-caret-up-fill",4,"ngIf"],["class","bi bi-caret-down-fill",4,"ngIf"],[1,"sb-sublinks",3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],["routerLinkActive","is-active","class","sb-link text-reset text-decoration-none",3,"routerLink",4,"ngFor","ngForOf"],[1,"bi","bi-caret-up-fill"],[1,"bi","bi-caret-down-fill"],["routerLinkActive","is-active",1,"sb-link","text-reset","text-decoration-none",3,"routerLink"],["class","pe-3 bi",3,"ngClass",4,"ngIf"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"img",2),t.TgZ(3,"div"),t._uU(4,"Brand"),t.qZA()(),t.TgZ(5,"label",3),t.NdJ("click",function(){return i.sidebarService.toggle()}),t._uU(6,"\u2715"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"img",5),t.TgZ(9,"div"),t._uU(10),t.ALo(11,"async"),t.qZA()(),t.TgZ(12,"div",6),t.YNc(13,ae,3,2,"ng-container",7),t.qZA()),2&n&&(t.xp6(10),t.Oqu(t.lcZ(11,2,i.username$)),t.xp6(3),t.Q6J("ngForOf",i.sidebarItems))},dependencies:[h.mk,h.sg,h.O5,c.rH,c.Od,N._D,h.Ov],styles:[".menu-toggle[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none}.sb-brand[_ngcontent-%COMP%]{align-items:center;box-shadow:inset 0 -1px #eee4;display:flex;justify-content:space-between;padding:.75rem}.sb-user[_ngcontent-%COMP%]{align-items:center;box-shadow:inset 0 -1px #eee4;display:flex;gap:.5rem;padding:1rem}.sb-user[_ngcontent-%COMP%] > .pic[_ngcontent-%COMP%]{width:34px;height:34px;border-radius:50%;box-shadow:0 16px 38px -12px #0000008f,0 4px 25px #0000001f,0 8px 10px -5px #0003}.sb-links[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-rows:min-content;overflow:auto;padding:1rem}.sb-sublinks[_ngcontent-%COMP%]:is(.collapsing, .show)[_ngcontent-%COMP%]{display:grid;gap:.5rem;margin-top:.5rem;padding-left:.75rem}.sb-link[_ngcontent-%COMP%]{border:1px solid #eee4;border-radius:.5rem;display:flex;padding:.65rem .75rem;transition:background-color .3s ease,border-color .3s ease}.sb-link[_ngcontent-%COMP%]:hover{background-color:#eee2;border-color:#eee7}.sb-link.is-active[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 20px #00000024,0 7px 10px -5px #3c485866;color:#444!important}"]});class y{constructor(n,i){this.sidebarService=n,this.router=i,this.destroy$=new A.x}ngOnInit(){this.router.events.pipe((0,k.R)(this.destroy$),(0,E.h)(n=>n instanceof c.m2),(0,Z.b)(()=>document.querySelector(".sb-layout__main")?.scrollTop)).subscribe()}ngOnDestroy(){this.destroy$.next()}}y.\u0275fac=function(n){return new(n||y)(t.Y36(d),t.Y36(c.F0))},y.\u0275cmp=t.Xpm({type:y,selectors:[["app-dashboard"]],decls:5,vars:2,consts:[[1,"sb-layout"],[1,"sb-layout__nav"],[1,"sb-layout__side"],[1,"sb-layout__main"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-dashboard-navbar",1)(2,"app-dashboard-sidebar",2),t.TgZ(3,"main",3),t._UZ(4,"router-outlet"),t.qZA()()),2&n&&(t.xp6(2),t.ekj("is-open",i.sidebarService.isOpen))},dependencies:[c.lC,v,x],styles:['.sb-layout[_ngcontent-%COMP%]{display:grid;grid-template-areas:"side navbar" "side main";grid-template-columns:auto 1fr;grid-template-rows:min-content 1fr;height:100vh}.sb-layout__nav[_ngcontent-%COMP%]{grid-area:navbar;box-shadow:0 3px 1rem #0002;z-index:1000}.sb-layout__side[_ngcontent-%COMP%]{grid-area:side;background:var(--app-sidebar-gradient);box-shadow:0 16px 38px -12px #00000057,0 4px 25px #00000012,0 8px 10px -5px #0000001f;color:#fff;display:flex;flex-direction:column;opacity:1;overflow:hidden;transition:opacity .35s ease .35s,padding .35s ease,width .35s ease;width:clamp(25ch,25vw,30ch);z-index:1001}.sb-layout__side[_ngcontent-%COMP%]:not(.is-open){opacity:0;padding:0;transition:opacity .35s ease,padding .35s ease .35s,width .35s ease .35s;width:0}.sb-layout__main[_ngcontent-%COMP%]{grid-area:main;overflow:auto}@media (max-width: 700px){.sb-layout__side[_ngcontent-%COMP%]{box-shadow:4px 0 8px 3px #0002;min-height:100vh;position:fixed;width:85vw;z-index:1000}}']});var re=o(44466);const se=[{path:"",component:y,children:[{path:"",redirectTo:"kitchen-sink",pathMatch:"full"},{path:"kitchen-sink",loadChildren:()=>o.e(476).then(o.bind(o,63476)).then(e=>e.KitchenSinkModule)},{path:"demos",loadChildren:()=>Promise.all([o.e(228),o.e(825)]).then(o.bind(o,96825)).then(e=>e.DemosModule)}]}];class b{}b.\u0275fac=function(n){return new(n||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[h.ez,c.Bz.forChild(se),re.m]})}}]);