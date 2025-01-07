import{b as T}from"./chunk-Q6X56Y2M.js";import{d as s,e as E,f as F,g as S,i as f,k as y,m as q,p as _,q as x,r as N,s as A}from"./chunk-HZWQU5Y5.js";import{Gb as t,Hb as e,Lc as b,Zb as n,_a as m,gc as C,lb as v,ma as g,qb as p,xa as h,xb as r}from"./chunk-T7DXHWNE.js";var B=()=>({heading:"Location Details",id:"locationdetails"});function R(i,l){i&1&&(t(0,"div",13)(1,"div",14)(2,"b"),n(3,"Country is Required"),e()()())}function I(i,l){i&1&&(t(0,"div",13)(1,"div",14)(2,"b"),n(3,"Company is Required"),e()()())}function D(i,l){i&1&&(t(0,"div",13)(1,"div",14)(2,"b"),n(3,"Branch is Required"),e()()())}var w=class i{triggerAction;actioCompleted=new h;isBranchRequired=!1;locationForm=new S({country:new f("",[s.required]),company:new f("",[s.required]),branch:new f("")});ngOnChanges(l){this.triggerAction&&this.performAction(),l.isBranchRequired&&this.toggleBranchRequired(this.isBranchRequired)}toggleBranchRequired(l){let a=this.locationForm.get("branch");l?a?.setValidators([s.required]):a?.clearValidators(),a?.updateValueAndValidity()}performAction(){this.locationForm.valid||this.locationForm.markAllAsTouched()}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=v({type:i,selectors:[["app-locationdetails"]],inputs:{triggerAction:"triggerAction",isBranchRequired:"isBranchRequired"},outputs:{actioCompleted:"actioCompleted"},standalone:!1,features:[g],decls:42,vars:6,consts:[[3,"accordianItems"],["action","","submit","submitForm",3,"formGroup"],[1,"row"],[1,"col-lg-4","col-12"],["for","",1,"mb-2"],["formControlName","country","aria-label","Default select example",1,"form-select","mb-3"],["selected","","value",""],["value","1"],["value","2"],["value","3"],["class","mb-2",4,"ngIf"],["formControlName","company","aria-label","Default select example",1,"form-select","mb-3"],["formControlName","branch","aria-label","Default select example",1,"form-select","mb-3"],[1,"mb-2"],[1,"text-danger"]],template:function(a,o){if(a&1&&(t(0,"app-accordian",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"label",4),n(5,"Country :"),e(),t(6,"select",5)(7,"option",6),n(8,"Select Country"),e(),t(9,"option",7),n(10,"One"),e(),t(11,"option",8),n(12,"Two"),e(),t(13,"option",9),n(14,"Three"),e()(),p(15,R,4,0,"div",10),e(),t(16,"div",3)(17,"label",4),n(18,"Company :"),e(),t(19,"select",11)(20,"option",6),n(21,"Select Company"),e(),t(22,"option",7),n(23,"One"),e(),t(24,"option",8),n(25,"Two"),e(),t(26,"option",9),n(27,"Three"),e()(),p(28,I,4,0,"div",10),e(),t(29,"div",3)(30,"label",4),n(31,"Branch :"),e(),t(32,"select",12)(33,"option",6),n(34,"Select Branch"),e(),t(35,"option",7),n(36,"One"),e(),t(37,"option",8),n(38,"Two"),e(),t(39,"option",9),n(40,"Three"),e()(),p(41,D,4,0,"div",10),e()()()()),a&2){let c,d,u;r("accordianItems",C(5,B)),m(),r("formGroup",o.locationForm),m(14),r("ngIf",(o.locationForm==null||(c=o.locationForm.get("country"))==null?null:c.touched)&&(o.locationForm==null||(c=o.locationForm.get("country"))==null?null:c.hasError("required"))),m(13),r("ngIf",(o.locationForm==null||(d=o.locationForm.get("company"))==null?null:d.touched)&&(o.locationForm==null||(d=o.locationForm.get("company"))==null?null:d.hasError("required"))),m(13),r("ngIf",(o.locationForm==null||(u=o.locationForm.get("branch"))==null?null:u.touched)&&(o.locationForm==null||(u=o.locationForm.get("branch"))==null?null:u.hasError("required")))}},dependencies:[b,y,N,A,x,E,F,q,_,T],encapsulation:2})};export{w as a};