import{A as ee,B as te,C as re,D as oe,E as ne,F as ae,G as ie,H as le,I as ce,J as me,K as pe,L as de,M as se,N as ue,O as fe,f as J,h as K,k as W,v as X,w as Y,x as h,y as b,z as Z}from"./chunk-HZWQU5Y5.js";import{$b as E,Bb as f,Cb as R,Eb as V,Fb as $,Gb as n,Hb as a,Ib as d,Jb as C,Jc as L,Kb as w,Kc as B,Mb as S,Mc as U,Ob as k,Oc as q,Pb as l,Qb as z,Rb as H,Tb as v,Ub as M,Vb as T,Yb as P,Zb as c,_a as i,_b as D,gc as F,ic as Q,jc as j,kc as G,lb as N,ma as A,na as x,oa as y,qb as u,xa as O,xb as p}from"./chunk-T7DXHWNE.js";var s=class{static icon(r){return{edit:"edit",view:"eye",delete:"trash-2"}[r]}static sideShow(){return window.location?.pathname=="/layout/sales/sale"}};var ge=["*"],_e=()=>[5,10,25,100],xe=(t,r)=>({"text-success":t,"text-danger":r}),ye=()=>({height:"20px",width:"20px"});function Ce(t,r){if(t&1&&(n(0,"th",23),c(1),a()),t&2){let e=l().$implicit;i(),D(e.label)}}function we(t,r){if(t&1&&c(0),t&2){let e=l().$implicit,o=l().$implicit;E(" ",e[o.key]," ")}}function Se(t,r){if(t&1&&(n(0,"span",25),c(1),a()),t&2){let e=l().$implicit,o=l().$implicit;p("ngClass",Q(2,xe,e[o.key]=="Active",e[o.key]=="Disabled")),i(),E(" ",e[o.key]," ")}}function ke(t,r){if(t&1){let e=S();n(0,"button",28),k("click",function(){let m=x(e).$implicit,I=l(2).$implicit,_=l(2);return y(_.performAction(m,I))}),d(1,"i-feather",29),n(2,"span",30),c(3),j(4,"titlecase"),a()()}if(t&2){let e=r.$implicit,o=l(4);i(),p("name",o.iconList.icon(e))("ngStyle",F(5,ye)),i(2),D(G(4,3,e))}}function ve(t,r){if(t&1&&(n(0,"button",26)(1,"mat-icon"),c(2,"more_vert"),a()(),n(3,"mat-menu",null,1),V(5,ke,5,6,"button",27,R),a()),t&2){let e=P(4),o=l().$implicit,m=l().$implicit;p("matMenuTriggerFor",e),i(5),$(o[m.key])}}function Me(t,r){if(t&1&&(n(0,"td",24),u(1,we,1,1)(2,Se,2,5,"span",25)(3,ve,7,1),a()),t&2){let e=l().$implicit;i(),f(e.key!="status"&&e.key!="action"?1:-1),i(),f(e.key=="status"?2:-1),i(),f(e.key=="action"?3:-1)}}function Te(t,r){if(t&1&&(C(0,20),u(1,Ce,2,1,"th",21)(2,Me,4,3,"td",22),w()),t&2){let e=r.$implicit;p("matColumnDef",e.key)}}function De(t,r){t&1&&d(0,"tr",31)}function Ee(t,r){t&1&&d(0,"tr",32)}var he=["blueberry","lychee","kiwi","mango","peach","lime","pomegranate","pineapple"],g=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"],be=class t{dataSource;columns=[];tableData=[];actionType=new O;paginator;sort;displayedColumns=[];iconList=s;constructor(){let r=Array.from({length:100},(e,o)=>Fe(o+1));this.dataSource=new me(r)}ngOnInit(){this.dataSource.data=this.tableData,this.displayedColumns=this.columns.map(r=>r.key)}ngOnChanges(r){r.tableData&&(this.dataSource.data=r.tableData.currentValue)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(r){let e=r.target.value;this.dataSource.filter=e.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}performAction(r,e){this.actionType.emit({type:r,data:e})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=N({type:t,selectors:[["app-table"]],viewQuery:function(e,o){if(e&1&&(v(h,5),v(b,5)),e&2){let m;M(m=T())&&(o.paginator=m.first),M(m=T())&&(o.sort=m.first)}},inputs:{columns:"columns",tableData:"tableData"},outputs:{actionType:"actionType"},standalone:!1,features:[A],ngContentSelectors:ge,decls:32,vars:6,consts:[["input",""],["menu","matMenu"],[1,"product-wrapper","mb-3"],[1,"table-wrapper"],[1,"d-flex","justify-content-between","align-items-center","table-filter-cust"],["role","search",1,"d-flex","cust-search-bar","m-3"],["type","search","placeholder","Search","aria-label","Search","matInput","",1,"form-control",3,"keyup"],[1,"d-flex"],[1,"dropdown","me-3","table-dropdown"],["type","button","data-bs-toggle","dropdown",1,"btn","btn-outline-secondary","dropdown-toggle","d-flex","justify-content-center","align-items-center"],["name","sliders",1,"me-2"],[1,"dropdown-menu"],[1,"d-flex","justify-content-center","align-items-center","px-3"],["href","#",1,"dropdown-item"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of users",3,"pageSizeOptions"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],[1,"fw-bold",3,"ngClass"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[3,"name","ngStyle"],[1,"ps-2"],["mat-header-row",""],["mat-row",""]],template:function(e,o){if(e&1){let m=S();z(),d(0,"div",2),n(1,"div",3)(2,"div",4)(3,"form",5)(4,"input",6,0),k("keyup",function(_){return x(m),y(o.applyFilter(_))}),a()(),n(6,"div",7)(7,"div",8)(8,"button",9),d(9,"i-feather",10),c(10," Short by Date "),a(),n(11,"ul",11)(12,"li",12)(13,"a",13),c(14,"Grocery Alpha"),a()(),n(15,"li",12)(16,"a",13),c(17,"Grocery Apex "),a()(),n(18,"li",12)(19,"a",13),c(20,"Grocery Bevy"),a()(),n(21,"li",12)(22,"a",13),c(23,"Grocery Eden"),a()()()()()(),C(24),H(25),w(),n(26,"div",14)(27,"table",15),u(28,Te,3,1,"ng-container",16)(29,De,1,0,"tr",17)(30,Ee,1,0,"tr",18),a(),d(31,"mat-paginator",19),a()()}e&2&&(i(27),p("dataSource",o.dataSource),i(),p("ngForOf",o.columns),i(),p("matHeaderRowDef",o.displayedColumns),i(),p("matRowDefColumns",o.displayedColumns),i(),p("pageSizeOptions",F(5,_e)))},dependencies:[L,B,U,W,J,K,X,Z,te,ae,re,ee,ie,oe,ne,le,ce,h,b,pe,se,de,ue,fe,Y,q],styles:[".light-theme .product-wrapper .product-right a{text-decoration:none}  .light-theme .product-wrapper .product-right .icon-button{width:38px;border:1px solid #e8ebed}  .light-theme .product-wrapper .product-right .add-button{font-size:14px!important;background-color:#ff9f43;border:none;color:#fff}  .light-theme .product-wrapper .product-right .add-button:hover{background-color:#092c4c}  .light-theme .product-wrapper .product-right .import-buton{font-size:14px!important;background-color:#092c4c;border:none}  .light-theme .product-wrapper .product-right .import-buton:hover{background-color:#ff9f43}  .light-theme .table-wrapper{border:1px solid #e8ebed;border-radius:10px;padding:16px}  .light-theme .table-wrapper .cust-search-bar{width:300px}  .light-theme .table-wrapper .filtr-button{background-color:#ff9f43;border:none;color:#fff}  .light-theme .table-wrapper .table-dropdown button{border:1px solid #e8ebed}  .light-theme   .mat-mdc-table{background-color:transparent!important;border-spacing:50px 150px}  .light-theme   .mat-mdc-header-cell{border-bottom-color:#e8ebed!important;color:#000}  .light-theme   .mat-mdc-cell{border-bottom-color:#e8ebed!important;color:#000}  .light-theme   .mat-mdc-paginator-container{background-color:#f8f9fa;color:#000}  .light-theme   .mat-mdc-select-trigger{color:#000}  .light-theme   .mat-mdc-icon-button{color:#000!important;filter:invert(0)}  .light-theme   .mat-icon{color:#000!important;filter:invert(0)}  .dark-theme .product-wrapper .product-right a{text-decoration:none}  .dark-theme .product-wrapper .product-right .icon-button{width:38px;border:1px solid #e8ebed}  .dark-theme .product-wrapper .product-right .add-button{font-size:14px!important;background-color:#ff9f43;border:none;color:#fff}  .dark-theme .product-wrapper .product-right .add-button:hover{background-color:#092c4c}  .dark-theme .product-wrapper .product-right .import-buton{font-size:14px!important;background-color:#092c4c;border:none}  .dark-theme .product-wrapper .product-right .import-buton:hover{background-color:#ff9f43}  .dark-theme .table-wrapper{border:1px solid #97a2d2;border-radius:10px;padding:16px}  .dark-theme .table-wrapper .cust-search-bar{width:300px}  .dark-theme .table-wrapper .filtr-button{background-color:#ff9f43;border:none;color:#fff}  .dark-theme .table-wrapper .table-dropdown button{border:1px solid #e8ebed}  .dark-theme   .mat-mdc-table{background-color:transparent!important;border-spacing:50px 150px}  .dark-theme   .mat-mdc-header-cell{border-bottom-color:#e8ebed!important;color:#97a2d2}  .dark-theme   .mat-mdc-cell{border-bottom-color:#e8ebed!important;color:#97a2d2}  .dark-theme   .mat-mdc-paginator-container{background-color:#031727;color:#97a2d2}  .dark-theme   .mat-mdc-select-trigger{color:#97a2d2}  .dark-theme   .mat-mdc-icon-button{color:#97a2d2!important;filter:invert(1)}  .dark-theme   .mat-icon{color:#97a2d2!important;filter:invert(1)}"]})};function Fe(t){let r=g[Math.round(Math.random()*(g.length-1))]+" "+g[Math.round(Math.random()*(g.length-1))].charAt(0)+".";return{id:t.toString(),name:r,progress:Math.round(Math.random()*100).toString(),fruit:he[Math.round(Math.random()*(he.length-1))]}}export{be as a};
