"use strict";(self.webpackChunkmulti_layout=self.webpackChunkmulti_layout||[]).push([[953],{69953:(m,s,o)=>{o.r(s),o.d(s,{LoginModule:()=>e});var c=o(36895),g=o(57599),r=o(90433),l=o(65783),n=o(94650),u=o(37556),d=o(89247);class a{constructor(t,i){this.authService=t,this.router=i}ngOnInit(){this.email=new r.NI,this.username=new r.NI("admin"),this.password=new r.NI("admin"),this.loginForm=new r.cw({username:this.username,password:this.password})}login(){const t=this.loginForm.value;!t.username||!t.password||this.authService.setSession(l.Vp).subscribe(()=>{this.router.navigateByUrl("/docs")})}}a.\u0275fac=function(t){return new(t||a)(n.Y36(u.e),n.Y36(g.F0))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-login"]],decls:28,vars:10,consts:[[1,"subscription-wrapper"],["hidden","","id","subscription-switch","type","checkbox",1,"subscription-switch"],[1,"subscription-container"],[1,"login-container"],["name","username","label","Username",3,"ngControl","floatingLabel"],["type","password","name","password","label","Password",3,"ngControl","floatingLabel"],[1,"btn","btn-primary",3,"click"],[1,"sign-up-container"],["name","email","label","Email",3,"ngControl","floatingLabel"],[1,"btn","btn-primary"],[1,"login-btn-wrapper"],["for","subscription-switch",1,"btn","btn-primary"],[1,"sign-up-btn-wrapper"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"input",1),n.TgZ(2,"div",2)(3,"div",3)(4,"h2"),n._uU(5,"Login"),n.qZA(),n._UZ(6,"app-input",4)(7,"app-input",5),n.TgZ(8,"button",6),n.NdJ("click",function(){return i.login()}),n._uU(9,"Login"),n.qZA()(),n.TgZ(10,"div",7)(11,"h2"),n._uU(12,"Sign Up"),n.qZA(),n._UZ(13,"app-input",8)(14,"app-input",4)(15,"app-input",5),n.TgZ(16,"button",9),n._uU(17,"Sign Up"),n.qZA()()(),n.TgZ(18,"div",10)(19,"h3"),n._uU(20,"Have an account?"),n.qZA(),n.TgZ(21,"label",11),n._uU(22,"Sign In"),n.qZA()(),n.TgZ(23,"div",12)(24,"h3"),n._uU(25,"Don't have it?"),n.qZA(),n.TgZ(26,"label",11),n._uU(27,"Sign Up"),n.qZA()()()),2&t&&(n.xp6(6),n.Q6J("ngControl",i.username)("floatingLabel",!0),n.xp6(1),n.Q6J("ngControl",i.password)("floatingLabel",!0),n.xp6(6),n.Q6J("ngControl",i.email)("floatingLabel",!0),n.xp6(1),n.Q6J("ngControl",i.username)("floatingLabel",!0),n.xp6(1),n.Q6J("ngControl",i.password)("floatingLabel",!0))},dependencies:[d.a],styles:["[_nghost-%COMP%]{background-image:var(--app-sidebar-gradient);display:grid;height:100vh;place-items:center}.subscription-wrapper[_ngcontent-%COMP%]{position:relative;width:clamp(250px,500px,100vw);height:300px;color:#fff;background-color:#345;box-shadow:0 5px 10px #0004;border-radius:5px}.subscription-container[_ngcontent-%COMP%]{position:absolute;top:-50px;left:40px;right:0;z-index:1;width:250px;height:400px;color:rgba(var(--app-gray_1000),1);background-color:rgba(var(--app-gray_0),1);background-size:200% 200%;background-position:50% 50%;box-shadow:-5px 5px 10px #0004;transition:all .3s ease;overflow:hidden;border-radius:5px}.login-btn-wrapper[_ngcontent-%COMP%], .sign-up-btn-wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);display:grid;justify-content:center;width:100px;text-align:center}.login-btn-wrapper[_ngcontent-%COMP%]{left:50px}.sign-up-btn-wrapper[_ngcontent-%COMP%]{right:50px}.login-container[_ngcontent-%COMP%], .sign-up-container[_ngcontent-%COMP%]{position:absolute;display:grid;align-content:center;grid-gap:1em;width:100%;padding:1em;transition:all .3s ease}.login-container[_ngcontent-%COMP%]{left:0}.sign-up-container[_ngcontent-%COMP%]{right:-250px}.subscription-switch[_ngcontent-%COMP%]:checked ~ .subscription-container[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]{left:-250px}.subscription-switch[_ngcontent-%COMP%]:checked ~ .subscription-container[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%]{right:0}@media (min-width: 500px){.subscription-switch[_ngcontent-%COMP%]:checked ~ .subscription-container[_ngcontent-%COMP%]{left:calc(100% - 40px);transform:translate(-100%);background-position:100% 100%;box-shadow:5px 5px 10px #0004}}@media (max-width: 500px){.subscription-wrapper[_ngcontent-%COMP%]{height:100vh}.subscription-container[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.login-btn-wrapper[_ngcontent-%COMP%], .sign-up-btn-wrapper[_ngcontent-%COMP%]{position:fixed;top:14vh}}@media (max-width: 500px) and (max-height: 700px){.login-btn-wrapper[_ngcontent-%COMP%], .sign-up-btn-wrapper[_ngcontent-%COMP%]{position:fixed;top:7vh}.login-btn-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%], .sign-up-btn-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{display:none}}"]});var h=o(16408);const b=[{path:"",component:a}];class e{}e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.ez,g.Bz.forChild(b),h.m]})}}]);