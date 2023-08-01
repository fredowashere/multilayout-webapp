"use strict";(self.webpackChunkmulti_layout=self.webpackChunkmulti_layout||[]).push([[812],{66812:(T,g,n)=>{n.r(g),n.d(g,{SiteModule:()=>u});var p=n(36895),a=n(15127),e=n(94650),h=n(44473),m=n(37556);class r{set rbacAllow(t){this.allowedRoles=t,this.showIfUserAllowed()}constructor(t,i,_){this.authService=t,this.templateRef=i,this.viewContainer=_,this.initialized=!1}ngOnInit(){this.sub=this.authService.user$.subscribe(t=>{this.user=t,this.showIfUserAllowed()})}ngOnDestroy(){this.sub.unsubscribe()}showIfUserAllowed(){this.initialized&&this.viewContainer.clear(),this.user&&this.allowedRoles&&0!==this.allowedRoles.length&&(0,h.j)(this.allowedRoles,this.user.roles).length>0?(this.viewContainer.createEmbeddedView(this.templateRef),this.initialized=!0):this.viewContainer.clear()}}function Z(o,t){1&o&&(e.TgZ(0,"div",77),e._uU(1,"YO ADMIN!"),e.qZA())}r.\u0275fac=function(t){return new(t||r)(e.Y36(m.e),e.Y36(e.Rgc),e.Y36(e.s_b))},r.\u0275dir=e.lG2({type:r,selectors:[["","rbacAllow",""]],inputs:{rbacAllow:"rbacAllow"},standalone:!0});const v=function(){return["ADMIN"]};class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-home"]],decls:315,vars:2,consts:[[1,"home-hero-wrap"],[1,"home-hero__slanted"],[1,"container"],[1,"row"],[1,"col-12","col-md-6"],[1,"phone-wrap"],[1,"phone"],[1,"phone__loud-speaker"],[1,"phone__screen"],[1,"phone__button"],[1,"col-12","col-md-6","text-md-end","text-white",2,"padding-top","7.5rem"],[1,"display-5","mb-2"],["class","text-warning",4,"rbacAllow"],[1,"lead","mb-3"],["routerLink","/dashboard",1,"btn","btn-lg","btn-outline-light"],[1,"feats","container"],[1,"card","grow-on-mouse-hover"],[1,"card-body"],[1,"d-flex","align-items-center","gap-3","fs-4","fw-bold","mb-2"],[1,"bi","bi-lightning-fill","fs-2"],[1,"lead","fs-5"],[1,"bi","bi-git","fs-2"],[1,"bi","bi-heart-fill","fs-2"],[1,"slanted-section"],[1,"container","py-5"],[1,"row","mb-5"],[1,"col-lg-8"],[1,"mb-5"],[1,"display-6","mb-3"],[1,"lead"],["href","#"],["href","http://localhost:4200/"],[1,"col-lg-4"],["src","assets/logos/angular-shadow-logo.png","alt","Angular logo",1,"img-fluid","position-sticky",2,"top","5rem"],[1,"ng-bootstrap-feats","my-5","mx-3"],[1,"d-flex","align-items-center","gap-3","mb-3"],["xmlns","http://www.w3.org/2000/svg","x","0px","y","0px","width","36","height","36","fill","currentColor","viewBox","30 25 190 210"],["points","108,135.4 125,135.4 125,135.4 125,135.4 142,135.4 125,94.5 \t"],["d","M125,30L125,30L125,30L31.9,63.2l14.2,123.1L125,230l0,0l0,0l78.9-43.7l14.2-123.1L125,30z M183.1,182.6h-21.7h0 l-11.7-29.2H125h0h0h-24.7l-11.7,29.2h0H66.9h0L125,52.1l0,0l0,0l0,0l0,0L183.1,182.6L183.1,182.6z"],[1,"m-0"],["fill","currentColor","alt","UI Widgets icon","xmlns","http://www.w3.org/2000/svg","width","36","height","36","viewBox","0 0 24 24"],["d","M19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-14c0-1.654 1.346-3 3-3h14zm5 3c0-2.761-2.238-5-5-5h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14zm-7.5 9c1.379 0 2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5h-9c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5h9zm0-1h-9c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5h9c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5zm-1 2c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm1-11h-9c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5h9c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5zm-8 5c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5z"],["fill","currentColor","alt","Quality icon","xmlns","http://www.w3.org/2000/svg","width","36","height","36","viewBox","0 0 24 24"],["d","M14.969 13.547l.031.191c0 .193-.096.379-.264.496-.538.372-.467.278-.67.885-.084.253-.33.424-.605.424h-.002c-.664-.002-.549-.038-1.083.338-.112.08-.244.119-.376.119s-.264-.039-.376-.118c-.534-.376-.419-.34-1.083-.338h-.002c-.275 0-.521-.171-.605-.424-.203-.607-.133-.513-.669-.885-.169-.118-.265-.304-.265-.497l.031-.19c.207-.604.208-.488 0-1.094l-.031-.191c0-.193.096-.379.265-.497.536-.372.466-.277.669-.885.084-.253.33-.424.605-.424h.002c.662.002.544.041 1.083-.338.112-.08.244-.119.376-.119s.264.039.376.118c.534.376.419.34 1.083.338h.002c.275 0 .521.171.605.424.203.607.132.513.67.885.168.118.264.304.264.497l-.031.191c-.207.604-.208.488 0 1.094zm-1.469-1.198l-.465-.464-1.41 1.446-.66-.627-.465.464 1.125 1.091 1.875-1.91zm8.5-4.349v14h-20v-14h20zm2-2h-24v18h24v-18zm-5 11h-14v1h14v-1zm0 2h-14v1h14v-1zm-7-19c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm-4.74 5l2.771-1.979c-.206-.267-.36-.574-.446-.91l-4.045 2.889h1.72zm11.2 0l-4.044-2.889c-.086.336-.24.643-.446.91l2.77 1.979h1.72z"],["fill","currentColor","alt","Accessible icon (escalator)","width","36","height","36","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg","fill-rule","evenodd","clip-rule","evenodd"],["d","M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m0 2c5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10m0 1c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9m-.011 11.5c-.474.006-.765.448-.989.804-.483.767-1.005 1.58-1.455 2.264-.155.238-.325.43-.609.432-.285.002-.526-.343-.389-.632.366-.769 1.953-3.539 1.953-5.868 0-.806-.429-1-1-1h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.57 0-1 .194-1 1 0 2.329 1.587 5.099 1.953 5.868.137.289-.103.634-.389.632-.284-.002-.454-.194-.609-.432-.45-.684-.973-1.497-1.455-2.264-.226-.359-.52-.806-1-.804h-.011zm.011-8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5"],[1,"list-group","px-3","my-5"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"ms-2","me-auto"],[1,"fw-bold"],["routerLink","/dashboard/demos/accordion",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/alert",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/carousel",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/collapse",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/dropdown",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/modal",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/nav",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/offcanvas",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/pagination",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/popover",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/progressbar",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/table",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/toast",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/tooltip",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/datepicker",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/timepicker",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/rating",1,"btn","btn-outline-primary"],["routerLink","/dashboard/demos/typeahead",1,"btn","btn-outline-primary"],["src","assets/logos/ng-bootstrap-shadow-logo.png","alt","Angular powered Boostrap logo",1,"img-fluid","position-sticky",2,"top","5rem"],[1,"creator-quote-wrap"],[1,"creator-quote"],["src","assets/images/federico-trotta-profile-pic.jfif","alt","An image of Federico Trotta","height","96",1,"creator-quote__img"],[1,"creator-quote__fig"],[1,"blockquote","m-0"],[1,"special-char"],[1,"blockquote-footer","m-0"],["title","Source Title"],[1,"text-warning"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"div",7)(8,"div",8)(9,"div",9),e.qZA()()(),e.TgZ(10,"div",10)(11,"div",11),e.YNc(12,Z,2,0,"div",12),e._uU(13," MultiLayout Scaffolding "),e.qZA(),e.TgZ(14,"div",13),e._uU(15,"This is multi-layout Angular app scaffolding."),e._UZ(16,"br"),e._uU(17,"You can fork and start developing with it right away."),e._UZ(18,"br"),e._uU(19,"It's also mobile friendly by design."),e.qZA(),e.TgZ(20,"button",14),e._uU(21,"See Dashboard"),e.qZA()()()()(),e.TgZ(22,"section",15)(23,"div",16)(24,"div",17)(25,"div",18),e._UZ(26,"i",19),e._uU(27," Blazing Fast "),e.qZA(),e.TgZ(28,"p",20),e._uU(29," The least amount of code possible to initialize a MultiLayout Angular application, and that makes it fast. "),e.qZA()()(),e.TgZ(30,"div",16)(31,"div",17)(32,"div",18),e._UZ(33,"i",21),e._uU(34," Flexibly Modular "),e.qZA(),e.TgZ(35,"p",20),e._uU(36," Routes are lazy loaded via the Angular router. This makes possible to create scalable application with ease. "),e.qZA()()(),e.TgZ(37,"div",16)(38,"div",17)(39,"div",18),e._UZ(40,"i",22),e._uU(41," Made with passion "),e.qZA(),e.TgZ(42,"p",20),e._uU(43,"This boilerplate is created with the intent of making something wonderful and provide value to the world."),e.qZA()()()(),e.TgZ(44,"section",23)(45,"div",24)(46,"div",25)(47,"div",26)(48,"article",27)(49,"div",28),e._uU(50,"Getting Started"),e.qZA(),e.TgZ(51,"p",29),e._uU(52,"With "),e.TgZ(53,"a",30),e._uU(54,"Angular"),e.qZA(),e._uU(55," as base-layer MultiLayout provides a "),e.TgZ(56,"b"),e._uU(57,"complete out-of-the-box solution"),e.qZA(),e._uU(58," along with a super-handy Command Line Interface!"),e.qZA(),e.TgZ(59,"ol")(60,"li"),e._uU(61,"Install NodeJs from "),e.TgZ(62,"a",30),e._uU(63,"NodeJs Official Page"),e.qZA()(),e.TgZ(64,"li"),e._uU(65,"Open Terminal"),e.qZA(),e.TgZ(66,"li")(67,"p"),e._uU(68,"Install the Angular CLI"),e.qZA(),e.TgZ(69,"pre")(70,"code"),e._uU(71,"npm install -g @angular/cli"),e.qZA()()(),e.TgZ(72,"li")(73,"p"),e._uU(74,"Install MultiLayout dependencies"),e.qZA(),e.TgZ(75,"pre")(76,"code"),e._uU(77,"npm install"),e.qZA()()(),e.TgZ(78,"li")(79,"p"),e._uU(80,"Run the project in your browser!"),e.qZA(),e.TgZ(81,"pre")(82,"code"),e._uU(83,"ng serve --open"),e.qZA()()()(),e.TgZ(84,"p"),e._uU(85,"(In case the browser didn't open on its own then navigate to "),e.TgZ(86,"a",31),e._uU(87,"http://localhost:4200/"),e.qZA(),e._uU(88,")"),e.qZA()(),e.TgZ(89,"article")(90,"div",28),e._uU(91,"Folder Structure"),e.qZA(),e.TgZ(92,"p",29),e._uU(93,"Once you have downloaded/forked the project and opened it, you will find the following folder:"),e.qZA(),e.TgZ(94,"pre")(95,"code"),e._uU(96,"src\n\u2502   favicon.ico\n\u2502   index.html\n\u2502   main.ts\n\u2502   styles.css\n\u2502\n\u251c\u2500\u2500\u2500app\n\u2502   \u2502   app-routing.module.ts\n\u2502   \u2502   app.component.css\n\u2502   \u2502   app.component.html\n\u2502   \u2502   app.component.ts\n\u2502   \u2502   app.module.ts\n\u2502   \u2502   json-typings.d.ts\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500dashboard\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u251c\u2500\u2500\u2500features\n\u2502   \u2502   \u2502   \u251c\u2500\u2500\u2500demos\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500kitchen-sink\n\u2502   \u2502   \u2514\u2500\u2500\u2500layout\n\u2502   \u2502       \u251c\u2500\u2500\u2500navbar\n\u2502   \u2502       \u2502\n\u2502   \u2502       \u2514\u2500\u2500\u2500sidebar\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500guards\n\u2502   \u2502       auth.guard.ts\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500interceptors\n\u2502   \u2502       auth.interceptor.ts\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500models\n\u2502   \u2502       user.ts\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500pages\n\u2502   \u2502   \u2514\u2500\u2500\u2500login\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500services\n\u2502   \u2502       auth.service.ts\n\u2502   \u2502       sidebar.service.ts\n\u2502   \u2502       toast.service.ts\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500shared\n\u2502   \u2502   \u2502   shared.module.ts\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u251c\u2500\u2500\u2500components\n\u2502   \u2502   \u2502   \u2502   toasts-container.component.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500\u2500back-button\n\u2502   \u2502   \u2502   \u251c\u2500\u2500\u2500breadcrumb-router\n\u2502   \u2502   \u2502   \u251c\u2500\u2500\u2500copy-paster\n\u2502   \u2502   \u2502   \u251c\u2500\u2500\u2500input\n\u2502   \u2502   \u2502   \u251c\u2500\u2500\u2500search-router\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500table\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u251c\u2500\u2500\u2500directives\n\u2502   \u2502   \u2502       role-based-access-allow.ts\n\u2502   \u2502   \u2502       sortable-header.ts\n\u2502   \u2502   \u2502       text2mask.ts\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u2514\u2500\u2500\u2500pipes\n\u2502   \u2502           hack-case.pipe.ts\n\u2502   \u2502           highlight.pipe.ts\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500site\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u251c\u2500\u2500\u2500layout\n\u2502   \u2502   \u2502   \u251c\u2500\u2500\u2500footer\n\u2502   \u2502   \u2502   \u2502\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500navbar\n\u2502   \u2502   \u2502\n\u2502   \u2502   \u2514\u2500\u2500\u2500pages\n\u2502   \u2502       \u2514\u2500\u2500\u2500home\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500\u2500utils\n\u2502           array.ts\n\u2502           json.ts\n\u2502           uuid.ts\n\u2502\n\u251c\u2500\u2500\u2500assets\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500css\n\u2502   \u2502       bootstrap-with-vars.css\n\u2502   \u2502       demos.css\n\u2502   \u2502\n\u2502   \u251c\u2500\u2500\u2500images\n\u2502   \u2502       federico-trotta-profile-pic.jfif\n\u2502   \u2502       unknown-user.png\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500\u2500logos\n\u2502           angular-logo.png\n\u2502           angular-shadow-logo.png\n\u2502           brand-violet.png\n\u2502           brand.png\n\u2502           ng-bootstrap-logo.png\n\u2502           ng-bootstrap-shadow-logo.png\n\u2502\n\u2514\u2500\u2500\u2500environments\n        environment.ts\n        versions.ts"),e.qZA()()()(),e.TgZ(97,"div",32),e._UZ(98,"img",33),e.qZA()(),e.TgZ(99,"div",3)(100,"div",26)(101,"article",27)(102,"div",28),e._uU(103,"Powered by Angular Boostrap"),e.qZA(),e.TgZ(104,"p",29),e._uU(105,"MultiLayout uses "),e.TgZ(106,"a",30),e._uU(107,"Bootstrap"),e.qZA(),e._uU(108," and "),e.TgZ(109,"a",30),e._uU(110,"Angular powered Bootstrap"),e.qZA(),e._uU(111," at its core."),e.qZA(),e.TgZ(112,"p",29)(113,"a",30),e._uU(114,"Bootstrap"),e.qZA(),e._uU(115," is the "),e.TgZ(116,"b"),e._uU(117,"most reknown UI framework"),e.qZA(),e._uU(118," in the world, and because of that it's easy for you to enroll seasoned developers and start with a minimal learning overhead, that reduces your development costs to the minimum!"),e.qZA(),e.TgZ(119,"div",34)(120,"div",16)(121,"div",17)(122,"div",35),e.O4$(),e.TgZ(123,"svg",36)(124,"g"),e._UZ(125,"polygon",37)(126,"path",38),e.qZA()(),e.kcU(),e.TgZ(127,"h4",39),e._uU(128,"Angular Native"),e.qZA()(),e.TgZ(129,"p"),e._uU(130," If you know Angular & Bootstrap CSS, you can effortlessly work with MultiLayout. "),e.qZA()()(),e.TgZ(131,"div",16)(132,"div",17)(133,"div",35),e.O4$(),e.TgZ(134,"svg",40),e._UZ(135,"path",41),e.qZA(),e.kcU(),e.TgZ(136,"h4",39),e._uU(137,"Full of Widgets"),e.qZA()(),e.TgZ(138,"p"),e._uU(139," All the Bootstrap widgets you know plus some additional goodies: datepicker, typeahead... "),e.qZA()()(),e.TgZ(140,"div",16)(141,"div",17)(142,"div",35),e.O4$(),e.TgZ(143,"svg",42),e._UZ(144,"path",43),e.qZA(),e.kcU(),e.TgZ(145,"h4",39),e._uU(146,"Highest Quality"),e.qZA()(),e.TgZ(147,"p"),e._uU(148," All code is tested, all changes are reviewed. We aim to provide a solid ground for your projects! "),e.qZA()()(),e.TgZ(149,"div",16)(150,"div",17)(151,"div",35),e.O4$(),e.TgZ(152,"svg",44),e._UZ(153,"path",45),e.qZA(),e.kcU(),e.TgZ(154,"h4",39),e._uU(155,"Super Accessible"),e.qZA()(),e.TgZ(156,"p"),e._uU(157," All the widgets are accessible as in Bootstrap. We strive to use the proper HTML elements. "),e.qZA()()()()(),e.TgZ(158,"article")(159,"div",28),e._uU(160,"Components"),e.qZA(),e.TgZ(161,"p",29),e._uU(162,"Follows a list of Angular widgets built from the ground up using Bootstrap 5 CSS with APIs designed for the Angular ecosystem."),e.qZA(),e.TgZ(163,"ol",46)(164,"li",47)(165,"div",48)(166,"div",49),e._uU(167,"Accordion"),e.qZA(),e._uU(168," Build vertically collapsing accordions "),e.qZA(),e.TgZ(169,"a",50),e._uU(170,"Try"),e.qZA()(),e.TgZ(171,"li",47)(172,"div",48)(173,"div",49),e._uU(174,"Alert"),e.qZA(),e._uU(175," Provide contextual feedback messages "),e.qZA(),e.TgZ(176,"a",51),e._uU(177,"Try"),e.qZA()(),e.TgZ(178,"li",47)(179,"div",48)(180,"div",49),e._uU(181,"Carousel"),e.qZA(),e._uU(182," A slideshow component for cycling elements "),e.qZA(),e.TgZ(183,"a",52),e._uU(184,"Try"),e.qZA()(),e.TgZ(185,"li",47)(186,"div",48)(187,"div",49),e._uU(188,"Collapse"),e.qZA(),e._uU(189," Toggle the visibility of content "),e.qZA(),e.TgZ(190,"a",53),e._uU(191,"Try"),e.qZA()(),e.TgZ(192,"li",47)(193,"div",48)(194,"div",49),e._uU(195,"Dropdown"),e.qZA(),e._uU(196," Toggle contextual overlays for lists "),e.qZA(),e.TgZ(197,"a",54),e._uU(198,"Try"),e.qZA()(),e.TgZ(199,"li",47)(200,"div",48)(201,"div",49),e._uU(202,"Modal"),e.qZA(),e._uU(203," Add dialogs for lightboxes and user notifications "),e.qZA(),e.TgZ(204,"a",55),e._uU(205,"Try"),e.qZA()(),e.TgZ(206,"li",47)(207,"div",48)(208,"div",49),e._uU(209,"Nav & Tabs"),e.qZA(),e._uU(210," Navigation demos "),e.qZA(),e.TgZ(211,"a",56),e._uU(212,"Try"),e.qZA()(),e.TgZ(213,"li",47)(214,"div",48)(215,"div",49),e._uU(216,"Offcanvas"),e.qZA(),e._uU(217," Build hidden sidebars into your site for navigation "),e.qZA(),e.TgZ(218,"a",57),e._uU(219,"Try"),e.qZA()(),e.TgZ(220,"li",47)(221,"div",48)(222,"div",49),e._uU(223,"Pagination"),e.qZA(),e._uU(224," Indicate oter content exists across multiple pages "),e.qZA(),e.TgZ(225,"a",58),e._uU(226,"Try"),e.qZA()(),e.TgZ(227,"li",47)(228,"div",48)(229,"div",49),e._uU(230,"Popover"),e.qZA(),e._uU(231," Display iOS-like popovers "),e.qZA(),e.TgZ(232,"a",59),e._uU(233,"Try"),e.qZA()(),e.TgZ(234,"li",47)(235,"div",48)(236,"div",49),e._uU(237,"Progress Bar"),e.qZA(),e._uU(238," Progress bars in many different flavors "),e.qZA(),e.TgZ(239,"a",60),e._uU(240,"Try"),e.qZA()(),e.TgZ(241,"li",47)(242,"div",48)(243,"div",49),e._uU(244,"Table"),e.qZA(),e._uU(245," Lightweight table for showing tabular content "),e.qZA(),e.TgZ(246,"a",61),e._uU(247,"Try"),e.qZA()(),e.TgZ(248,"li",47)(249,"div",48)(250,"div",49),e._uU(251,"Toast"),e.qZA(),e._uU(252," Push notifications to your visitors with a toast "),e.qZA(),e.TgZ(253,"a",62),e._uU(254,"Try"),e.qZA()(),e.TgZ(255,"li",47)(256,"div",48)(257,"div",49),e._uU(258,"Tooltip"),e.qZA(),e._uU(259," Tooltips to show to the user details elements do "),e.qZA(),e.TgZ(260,"a",63),e._uU(261,"Try"),e.qZA()(),e.TgZ(262,"li",47)(263,"div",48)(264,"div",49),e._uU(265,"Datepicker"),e.qZA(),e._uU(266," Datepicker will help the user with date selection "),e.qZA(),e.TgZ(267,"a",64),e._uU(268,"Try"),e.qZA()(),e.TgZ(269,"li",47)(270,"div",48)(271,"div",49),e._uU(272,"Timepicker"),e.qZA(),e._uU(273," Datepicker will help the user with time selection "),e.qZA(),e.TgZ(274,"a",65),e._uU(275,"Try"),e.qZA()(),e.TgZ(276,"li",47)(277,"div",48)(278,"div",49),e._uU(279,"Rating"),e.qZA(),e._uU(280," Various kind of rating picker "),e.qZA(),e.TgZ(281,"a",66),e._uU(282,"Try"),e.qZA()(),e.TgZ(283,"li",47)(284,"div",48)(285,"div",49),e._uU(286,"Typeahead"),e.qZA(),e._uU(287," Suggest a list of choices to the user while he/she is typing "),e.qZA(),e.TgZ(288,"a",67),e._uU(289,"Try"),e.qZA()()()()(),e.TgZ(290,"div",32),e._UZ(291,"img",68),e.qZA()()()(),e.TgZ(292,"section",69)(293,"div",70),e._UZ(294,"img",71),e.TgZ(295,"figure",72)(296,"blockquote",73)(297,"p"),e._uU(298,"Always "),e.TgZ(299,"span",74),e._uU(300,"K"),e.qZA(),e._uU(301,"eep "),e.TgZ(302,"span",74),e._uU(303,"I"),e.qZA(),e._uU(304,"t "),e.TgZ(305,"span",74),e._uU(306,"S"),e.qZA(),e._uU(307,"tupid "),e.TgZ(308,"span",74),e._uU(309,"S"),e.qZA(),e._uU(310,"imple!"),e.qZA()(),e.TgZ(311,"figcaption",75),e._uU(312," the creator, "),e.TgZ(313,"cite",76),e._uU(314,"Federico Trotta"),e.qZA()()()()()),2&t&&(e.xp6(12),e.Q6J("rbacAllow",e.DdM(1,v)))},dependencies:[a.rH,r],styles:[".home-hero-wrap[_ngcontent-%COMP%]{padding:5rem 0 10rem;position:relative}.home-hero__slanted[_ngcontent-%COMP%]{background:var(--app-sidebar-gradient);clip-path:polygon(0 0,100% 0,100% calc(100% - 10rem),0 100%);inset:0;position:absolute;z-index:-1}.phone-wrap[_ngcontent-%COMP%]{display:grid;place-items:center;height:50vh;perspective:3000px}.phone[_ngcontent-%COMP%]{aspect-ratio:9 / 16;background:linear-gradient(95deg,#fff 77%,#ebe0ff 93%);border-radius:3vh;box-shadow:inset 1.5vh 0 4px #a1bce8,-4vh 4vh 5vh #0003;height:100%;position:absolute;transform:rotate(-20deg) rotateY(55deg);padding-left:1rem}.phone__loud-speaker[_ngcontent-%COMP%]{background:#ebebeb;border:1px solid #ddd;box-shadow:inset -2px 0 #0002;border-radius:4px;position:absolute;width:15%;height:1%;top:3%;left:46%}.phone__screen[_ngcontent-%COMP%]{color:#fff;font-size:2vh;padding-top:.5rem;text-align:center;background:linear-gradient(45deg,#0008,#6f9ee888),linear-gradient(95deg,#000,#9470d4);border-radius:2px;box-shadow:inset 1.5vh 0 #fff,inset -1vh .5vh .5vh #0004;position:absolute;width:88%;height:78%;top:8%;left:7%}.phone__button[_ngcontent-%COMP%]{aspect-ratio:1 / 1;background:#f8f8f8;border:1px solid #ddd;box-shadow:inset -2px 0 #0002;border-radius:50%;position:absolute;width:15%;bottom:3%;left:46%}.feats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:2.5rem;padding:7.5rem 1rem}.creator-quote-wrap[_ngcontent-%COMP%]{display:grid;justify-items:center;padding:5rem 1rem}.creator-quote[_ngcontent-%COMP%]{display:grid;gap:2rem;grid-template-columns:auto auto;align-items:center;justify-content:center;margin:0 auto;max-width:800px}.creator-quote__img[_ngcontent-%COMP%]{border-radius:50%;box-shadow:0 4px 16px 2px #0002}.special-char[_ngcontent-%COMP%]{color:#f50}.slanted-section[_ngcontent-%COMP%]{background:#fff;padding:10rem 0;clip-path:polygon(0 10rem,100% 0,100% calc(100% - 10rem),0 100%)}.ng-bootstrap-feats[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2rem;max-width:1400px;padding:2.5rem 1rem}.grow-on-mouse-hover[_ngcontent-%COMP%]{box-shadow:0 0 2rem .5rem #0002;transition:box-shadow .3s ease,transform .3s ease}.grow-on-mouse-hover[_ngcontent-%COMP%]:hover{box-shadow:0 0 4rem .5rem #0002;transform:scale(1.08)}@media (max-width: 800px){.feats[_ngcontent-%COMP%], .ng-bootstrap-feats[_ngcontent-%COMP%], .creator-quote[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]});var b=n(12682);class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-navbar"]],decls:20,vars:0,consts:[[1,"app-navbar","navbar","navbar-expand-lg","navbar-light"],[1,"container-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarToggler",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["routerLink","/home",1,"app-brand"],["src","assets/logos/brand-violet.png",1,"pic"],["id","navbarToggler",1,"collapse","navbar-collapse","pt-3","pt-lg-0","ps-3"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLinkActive","active","routerLink","/home",1,"nav-link"],["routerLinkActive","active","routerLink","/dashboard",1,"nav-link"],[1,"navbar-nav"],["routerLink","/login",1,"nav-link"]],template:function(t,i){1&t&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"button",2),e._UZ(3,"span",3),e.qZA(),e.TgZ(4,"a",4),e._UZ(5,"img",5),e.TgZ(6,"div"),e._uU(7,"Brand"),e.qZA()(),e.TgZ(8,"div",6)(9,"ul",7)(10,"li",8)(11,"a",9),e._uU(12,"Home"),e.qZA()(),e.TgZ(13,"li",8)(14,"a",10),e._uU(15,"Dashboard"),e.qZA()()(),e.TgZ(16,"ul",11)(17,"li",8)(18,"a",12),e._uU(19,"Login"),e.qZA()()()()()())},dependencies:[a.rH,a.Od,b.M2],styles:[".navbar[_ngcontent-%COMP%]{background-color:#fffe;position:sticky;top:0;z-index:1}"]});class d{constructor(){this.year=(new Date).getFullYear()}}d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-footer"]],decls:3,vars:1,consts:[[1,"bg-dark","text-light","text-center","p-3"]],template:function(t,i){1&t&&(e.TgZ(0,"footer",0)(1,"span"),e._uU(2),e.qZA()()),2&t&&(e.xp6(2),e.hij("\xa9 Copyright ",i.year," Federico Trotta & Marco Agugiaro. All rights reserved."))}});class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-site"]],decls:3,vars:0,template:function(t,i){1&t&&e._UZ(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[a.lC,l,d]});var f=n(31509);const A=[{path:"",component:c,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:s}]}];class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[p.ez,a.Bz.forChild(A),f.m]})}}]);