(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jkDv:function(t,e,n){"use strict";n.r(e);var r=n("ofXK"),a=n("/1cH"),o=n("bTqV"),i=n("Wp6s"),s=n("0IaG"),c=n("kmnG"),l=n("NFeN"),m=n("qFsG"),u=n("STbY"),b=n("M9IT"),d=n("Xa2L"),f=n("d3UM"),p=n("xHqg"),g=n("+0xr"),h=n("/t3+"),R=n("3Pt+"),S=n("KUt4"),w=n("tyNb"),C=n("Dh3D"),y=n("PSD3"),M=n.n(y),x=n("fXoL");let v=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e,e.oldName=e.name,e.oldUsername=e.username,e.oldId=e.id}ngOnInit(){}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(x.Mb(s.g),x.Mb(s.a))},t.\u0275cmp=x.Gb({type:t,selectors:[["app-modal"]],decls:14,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["matInput","","placeholder","U\u017esakovas","cdkFocusInitial","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Prisjungimo ID","cdkFocusInitial","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(x.Sb(0,"h3",0),x.zc(1),x.Rb(),x.Sb(2,"div",1),x.Sb(3,"mat-form-field"),x.Sb(4,"label"),x.Sb(5,"input",2),x.Zb("ngModelChange",(function(t){return e.data.name=t})),x.Rb(),x.Rb(),x.Rb(),x.Sb(6,"mat-form-field"),x.Sb(7,"label"),x.Sb(8,"input",3),x.Zb("ngModelChange",(function(t){return e.data.username=t})),x.Rb(),x.Rb(),x.Rb(),x.Rb(),x.Sb(9,"div",4),x.Sb(10,"button",5),x.Zb("click",(function(){return e.onNoClick()})),x.zc(11,"At\u0161aukti"),x.Rb(),x.Sb(12,"button",6),x.zc(13,"I\u0161saugoti"),x.Rb(),x.Rb()),2&t&&(x.Bb(1),x.Bc("U\u017esakovas: ",e.data.oldName,""),x.Bb(4),x.jc("ngModel",e.data.name),x.Bb(3),x.jc("ngModel",e.data.username),x.Bb(4),x.jc("mat-dialog-close",e.data))},directives:[s.h,s.e,c.c,m.b,R.c,R.k,R.n,s.c,o.a,s.d],styles:["h3[_ngcontent-%COMP%]{text-align:center}div.mat-dialog-actions[_ngcontent-%COMP%]{justify-content:center;margin:auto}"]}),t})();function k(t,e){return{validatorType:t,message:e}}function P(t){return k("required",`You must enter a ${t}`)}function O(t){return k("minlength",`Must be at least ${t} characters long`)}function z(t){return k("maxlength",`Must be at most ${t} characters long`)}var I=n("HyEY");function _(t,e){if(1&t&&(x.Sb(0,"mat-error"),x.zc(1),x.Rb()),2&t){const t=x.dc();x.Bb(1),x.Ac(t.getError("name"))}}function j(t,e){if(1&t&&(x.Sb(0,"mat-error"),x.zc(1),x.Rb()),2&t){const t=x.dc();x.Bb(1),x.Ac(t.getError("username"))}}function B(t,e){if(1&t&&(x.Sb(0,"mat-error"),x.zc(1),x.Rb()),2&t){const t=x.dc();x.Bb(1),x.Ac(t.getError("password"))}}function D(t,e){1&t&&x.Nb(0,"mat-spinner",11)}function F(t,e){if(1&t&&(x.Sb(0,"p",12),x.zc(1),x.Rb()),2&t){const t=x.dc();x.Bb(1),x.Ac(t.error)}}let N=(()=>{class t{constructor(t,e,n,r,a){this.api=t,this.router=e,this.formBuilder=n,this.dialogRef=r,this.loading=!1,this.error="",this.formErrors={name:[P("name"),k("pattern","Can contain only uppercase lowercase letters and numbers"),O(3),z(50)],username:[P("username"),k("username","Must be a valid username")],password:[P("password"),O(8),z(50)]},this.userForm=n.group({name:["",[R.p.required,R.p.minLength(3),R.p.maxLength(50),R.p.pattern(/^[A-Z0-9a-z]+$/)]],username:["",[R.p.required]],password:["",[R.p.required,R.p.minLength(8),R.p.maxLength(50),R.p.pattern(/^[A-Z0-9a-z]+$/)]],role:["user",[R.p.required,R.p.minLength(3),R.p.maxLength(50),R.p.pattern(/^[A-Z0-9a-z]+$/)]]}),a&&(this.onConfirm=a.onConfirm,a.user&&(this.user=a.user,this.userForm.setValue({name:this.user.name,username:this.user.username,password:"",role:this.user.role})))}ngOnInit(){}getError(t){for(const e of this.formErrors[t])if(this.userForm.controls[t].hasError(e.validatorType))return e.message;return""}errorResponseHandler(t){var e,n;this.loading=!1,t.error.validationErrors?(e=this.formErrors,n=this.userForm,Object.entries(t.error.validationErrors).forEach(([t,r])=>{const a=e[t].find(t=>"backend"===t.validatorType);a?a.message=r[0]:e[t].push({validatorType:"backend",message:r[0]});const o=Object.assign({},n.controls[t].errors);o.backend=!0,n.controls[t].setErrors(o)})):this.error="A network error occurred"}submit(){if(this.error="","VALID"===this.userForm.status){let t;this.loading=!0,t=this.user?this.api.put("/lei/users",this.userForm.getRawValue()):this.api.post("/lei/users",this.userForm.getRawValue()),t.subscribe(t=>{this.onConfirm&&this.onConfirm(t),this.dialogRef.close(),this.loading=!1},this.errorResponseHandler.bind(this))}}}return t.\u0275fac=function(e){return new(e||t)(x.Mb(I.a),x.Mb(w.a),x.Mb(R.d),x.Mb(s.g),x.Mb(s.a))},t.\u0275cmp=x.Gb({type:t,selectors:[["app-form"]],decls:28,vars:6,consts:[[1,"flex-column",2,"margin","50px",3,"formGroup","ngSubmit"],["appearance","standard"],["matInput","","formControlName","name"],[4,"ngIf"],["matInput","","formControlName","username"],["matInput","","type","password","formControlName","password"],["mat-stroked-button","","color","primary","type","submit"],[2,"display","flex","align-items","center","justify-content","center"],[2,"margin-right","5px"],["diameter","20",4,"ngIf"],["class","mat-error",4,"ngIf"],["diameter","20"],[1,"mat-error"]],template:function(t,e){1&t&&(x.Sb(0,"form",0),x.Zb("ngSubmit",(function(){return e.submit()})),x.Sb(1,"mat-form-field",1),x.Sb(2,"mat-label"),x.zc(3,"U\u017esakovas"),x.Rb(),x.Nb(4,"input",2),x.yc(5,_,2,1,"mat-error",3),x.Sb(6,"mat-hint"),x.zc(7,"Required"),x.Rb(),x.Rb(),x.Sb(8,"mat-form-field",1),x.Nb(9,"input",4),x.Sb(10,"mat-label"),x.zc(11,"Prisijungimo ID"),x.Rb(),x.yc(12,j,2,1,"mat-error",3),x.Sb(13,"mat-hint"),x.zc(14,"Required"),x.Rb(),x.Rb(),x.Sb(15,"mat-form-field",1),x.Sb(16,"mat-label"),x.zc(17,"Slapta\u017eodis"),x.Rb(),x.Nb(18,"input",5),x.yc(19,B,2,1,"mat-error",3),x.Sb(20,"mat-hint"),x.zc(21,"Required"),x.Rb(),x.Rb(),x.Sb(22,"button",6),x.Sb(23,"span",7),x.Sb(24,"span",8),x.zc(25,"Registruoti"),x.Rb(),x.yc(26,D,1,0,"mat-spinner",9),x.Rb(),x.Rb(),x.Rb(),x.yc(27,F,2,1,"p",10)),2&t&&(x.jc("formGroup",e.userForm),x.Bb(5),x.jc("ngIf",e.userForm.controls.name.invalid),x.Bb(7),x.jc("ngIf",e.userForm.controls.username.invalid),x.Bb(7),x.jc("ngIf",e.userForm.controls.password.invalid),x.Bb(7),x.jc("ngIf",e.loading),x.Bb(1),x.jc("ngIf",e.error))},directives:[R.q,R.l,R.f,c.c,c.g,m.b,R.c,R.k,R.e,r.l,c.f,o.a,c.b,d.b],styles:[".mat-card[_ngcontent-%COMP%]{width:100%;max-width:640px;min-width:380px;margin-top:20px;padding:50px}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.flex-column[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:0}.flex-column[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{margin-top:40px}.flex-row[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row}.flex-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;margin-right:20px}.flex-row[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{margin-right:0}h1[_ngcontent-%COMP%]{margin-bottom:0}h1[_ngcontent-%COMP%], p.mat-error[_ngcontent-%COMP%]{text-align:center}p.mat-error[_ngcontent-%COMP%]{margin:5px 0 0;font-size:small}"]}),t})();function T(t,e){1&t&&(x.Sb(0,"th",14),x.zc(1," Nr."),x.Rb())}function E(t,e){if(1&t&&(x.Sb(0,"td",15),x.zc(1),x.Rb()),2&t){const t=e.index;x.Bb(1),x.Bc(" ",t+1," ")}}function U(t,e){1&t&&(x.Sb(0,"th",14),x.zc(1," U\u017esakovas"),x.Rb())}function q(t,e){if(1&t&&(x.Sb(0,"td",15),x.zc(1),x.Rb()),2&t){const t=e.$implicit;x.Bb(1),x.Bc(" ",t.name," ")}}function A(t,e){1&t&&(x.Sb(0,"th",14),x.zc(1," Prisijungimo ID"),x.Rb())}function Z(t,e){if(1&t&&(x.Sb(0,"td",15),x.zc(1),x.Rb()),2&t){const t=e.$implicit;x.Bb(1),x.Bc(" ",t.username," ")}}function $(t,e){1&t&&x.Nb(0,"th",14)}function L(t,e){if(1&t){const t=x.Tb();x.Sb(0,"td",15),x.Sb(1,"button",16),x.Sb(2,"mat-icon"),x.zc(3,"more_vert"),x.Rb(),x.Rb(),x.Sb(4,"mat-menu",null,17),x.Sb(6,"button",18),x.Zb("click",(function(){x.qc(t);const n=e.$implicit;return x.dc().openDialog(n)})),x.Sb(7,"mat-icon"),x.zc(8,"edit"),x.Rb(),x.Sb(9,"span"),x.zc(10,"Redaguoti"),x.Rb(),x.Rb(),x.Sb(11,"button",18),x.Zb("click",(function(){x.qc(t);const n=e.$implicit;return x.dc().delete(n.id)})),x.Sb(12,"mat-icon"),x.zc(13,"delete"),x.Rb(),x.Sb(14,"span"),x.zc(15,"I\u0161trinti"),x.Rb(),x.Rb(),x.Rb(),x.Rb()}if(2&t){const t=x.nc(5);x.Bb(1),x.jc("matMenuTriggerFor",t)}}function G(t,e){1&t&&x.Nb(0,"tr",19)}function H(t,e){1&t&&x.Nb(0,"tr",20)}const J=[{path:"",component:(()=>{class t{constructor(t,e){this.api=t,this.dialog=e,this.displayedColumns=["no","name","username","actions"],this.users=[]}ngOnInit(){this.getUsers(),this.dataSource=new g.k,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}getUsers(){this.api.get("/lei/users").subscribe(t=>this.dataSource.data=t.filter(t=>"admin"!==t.name))}applyFilter(t){this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}delete(t){this.api.delete(`/lei/users/${t}`).subscribe(()=>this.users=this.users.filter(e=>e.id!==t)),this.dataSource.data=[],setTimeout(()=>this.getUsers(),1e3),M.a.fire("U\u017esakovas i\u0161trintas.","","success")}openDialog(t){this.dialog.open(v,{width:"250px",data:{id:t?t.id:null,name:t?t.name:null,username:t?t.username:null}}).afterClosed().subscribe(e=>{e&&this.api.post("/lei/users",e).subscribe(e=>{const n=this.users.find(e=>e.id===t.id);n?(n.name=e.name,n.username=e.username):this.users=[...this.users,t]}),this.dataSource.data=[],setTimeout(()=>this.getUsers(),1e3),M.a.fire("U\u017esakovo duomenys atnaujinti.","","success")})}showRegisterDialog(){this.dialog.open(N)}}return t.\u0275fac=function(e){return new(e||t)(x.Mb(I.a),x.Mb(s.b))},t.\u0275cmp=x.Gb({type:t,selectors:[["app-list"]],viewQuery:function(t,e){var n;1&t&&(x.uc(b.a,!0),x.uc(C.a,!0)),2&t&&(x.mc(n=x.ac())&&(e.paginator=n.first),x.mc(n=x.ac())&&(e.sort=n.first))},decls:25,vars:3,consts:[["matInput","","placeholder","Filtruoti",3,"keyup"],["mat-table","","matTableExporter","",1,"mat-elevation-z8",3,"dataSource"],["exporter","matTableExporter"],["matColumnDef","no"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","username"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"footer"],["color","primary"],["mat-stroked-button","","color","white",2,"width","100%",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(x.Sb(0,"h3"),x.zc(1,"U\u017esakovai"),x.Rb(),x.Sb(2,"div"),x.Sb(3,"mat-form-field"),x.Sb(4,"input",0),x.Zb("keyup",(function(t){return e.applyFilter(t.target.value)})),x.Rb(),x.Rb(),x.Sb(5,"table",1,2),x.Qb(7,3),x.yc(8,T,2,0,"th",4),x.yc(9,E,2,1,"td",5),x.Pb(),x.Qb(10,6),x.yc(11,U,2,0,"th",4),x.yc(12,q,2,1,"td",5),x.Pb(),x.Qb(13,7),x.yc(14,A,2,0,"th",4),x.yc(15,Z,2,1,"td",5),x.Pb(),x.Qb(16,8),x.yc(17,$,1,0,"th",4),x.yc(18,L,16,1,"td",5),x.Pb(),x.yc(19,G,1,0,"tr",9),x.yc(20,H,1,0,"tr",10),x.Rb(),x.Sb(21,"div",11),x.Sb(22,"mat-toolbar",12),x.Sb(23,"button",13),x.Zb("click",(function(){return e.showRegisterDialog()})),x.zc(24," REGISTRUOTI NAUJ\u0104 VARTOTOJ\u0104 "),x.Rb(),x.Rb(),x.Rb(),x.Rb()),2&t&&(x.Bb(5),x.jc("dataSource",e.dataSource),x.Bb(14),x.jc("matHeaderRowDef",e.displayedColumns),x.Bb(1),x.jc("matRowDefColumns",e.displayedColumns))},directives:[c.c,m.b,g.j,S.a,g.c,g.e,g.b,g.g,g.i,h.a,o.a,g.d,g.a,u.c,l.a,u.d,u.a,g.f,g.h],styles:["h3[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%]{margin:auto;max-width:1500px;width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{width:50px}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{width:10px}.mat-row[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.footer[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;width:100%;background-color:red;color:#fff;text-align:center}mat-form-field[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative}"]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=x.Kb({type:t}),t.\u0275inj=x.Jb({factory:function(e){return new(e||t)},imports:[[w.c.forChild(J)],w.c]}),t})();var Q=n("Egam"),K=n("wS5z");n.d(e,"AdminModule",(function(){return X}));let X=(()=>{class t{}return t.\u0275mod=x.Kb({type:t}),t.\u0275inj=x.Jb({factory:function(e){return new(e||t)},imports:[[r.c,V,i.d,c.e,R.o,d.a,m.c,o.b,f.b,s.f,u.b,l.b,R.g,p.a,g.l,b.c,a.a,Q.a,S.b,h.b,K.SystemModule]]}),t})()}}]);