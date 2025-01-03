import{a as ee,b as Ie}from"./chunk-2NYCWUTY.js";import{a as De}from"./chunk-H5AKZ6H6.js";import{a as Z}from"./chunk-TKFL673F.js";import"./chunk-ZEPRHR7M.js";import"./chunk-4JG5EM3W.js";import{R as Ae,a as ye,b as _e,d as a,e as Ce,f as Ee,g as Se,i as p,k as ke,l as Te,m as Me,p as xe,q as qe,r as we,s as Ne,v as Pe}from"./chunk-6R6CSPKX.js";import"./chunk-HU7WFQWJ.js";import{f as ve,g as be,h as he,k as re}from"./chunk-DCU7AGSP.js";import{$a as pe,Bb as de,Gb as t,Hb as e,Ib as u,Lc as fe,Mb as ce,Ob as b,Pb as se,Qc as ge,Zb as i,_a as r,aa as W,gc as f,lb as v,mb as X,na as ae,oa as ue,qb as d,xa as oe,xb as m}from"./chunk-T7DXHWNE.js";var ne=class l{static \u0275fac=function(c){return new(c||l)};static \u0275cmp=v({type:l,selectors:[["app-catalogue"]],standalone:!1,decls:1,vars:0,template:function(c,n){c&1&&u(0,"router-outlet")},dependencies:[ve],encapsulation:2})};var ze=()=>({cancel:"Cancel",save:"Save"}),te=class l{text="";dataEmitter=new oe;isDataVisible=!1;closeModalEvent=new oe(!1);sendData(){this.dataEmitter.emit("Hello from Child Component!")}closeModal(){this.isDataVisible=!1,this.closeModalEvent.emit(!0)}submitForm(o){console.log(o),this.dataEmitter.emit(o)}static \u0275fac=function(c){return new(c||l)};static \u0275cmp=v({type:l,selectors:[["app-popup"]],inputs:{text:"text",isDataVisible:"isDataVisible"},outputs:{dataEmitter:"dataEmitter",closeModalEvent:"closeModalEvent"},standalone:!1,decls:10,vars:2,consts:[["tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","!isDataVisible",1,"modal","fade","d-block","show"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],[3,"buttonClick","buttonText"]],template:function(c,n){c&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),i(5,"Modal title"),e(),t(6,"button",5),b("click",function(){return n.submitForm("reset")}),e()(),u(7,"div",6),t(8,"div",7)(9,"app-buttons",8),b("buttonClick",function(s){return n.submitForm(s)}),e()()()()()),c&2&&(r(9),m("buttonText",f(1,ze)))},dependencies:[ee],styles:[".modal[_ngcontent-%COMP%]{background-color:#00000036}"]})};var Qe=()=>({heading:"New Catalogue",subitems:"Create New Catalogue"}),$e=()=>({heading:"Item details",id:"itemdetails"}),Le=()=>({heading:"Inventory",id:"inventory"}),je=()=>({heading:"Sales",id:"sales"}),Be=()=>({heading:"Pricing",id:"pricing"}),He=()=>({heading:"Item Modifiers",id:"itemmodifiers"}),Ke=()=>({cancel:"Cancel",save:"Save Product"});function Ue(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Name is Required"),e()()())}function Ye(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Category is Required"),e()()())}function Je(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Food Type is Required"),e()()())}function We(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Service Type is Required"),e()()())}function Xe(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Dilivery Type is Required"),e()()())}function Ze(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Product Type is Required"),e()()())}function en(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Item Code is Required"),e()()())}function nn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"EAN Code is Required"),e()()())}function tn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Display Order is Required"),e()()())}function ln(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Preparation As is Required"),e()()())}function on(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"HSN No. is Required"),e()()())}function rn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Kitchen Instructions is Required"),e()()())}function mn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Status is Required"),e()()())}function an(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Min Qty is Required"),e()()())}function un(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Max Qty is Required"),e()()())}function pn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"No. of decimals for fractional Qty is Required"),e()()())}function dn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Abandent Percentage is Required"),e()()())}function cn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Discount Type is Required"),e()()())}function sn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Half Plate is Required"),e()()())}function fn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Selling Price is Required"),e()()())}function gn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Discount is Required"),e()()())}function vn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Packing Amount is Required"),e()()())}function bn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"SKU is Required"),e()()())}function hn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Apply For Online is Required"),e()()())}function yn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Cost Price is Required"),e()()())}function _n(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Selling Price is Required"),e()()())}function Cn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Discount is Required"),e()()())}function En(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Packing Amount is Required"),e()()())}function Sn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"SKU is Required"),e()()())}function kn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Apply For Online is Required"),e()()())}function Tn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Extra Toppings is Required"),e()()())}function Mn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Extra Cream is Required"),e()()())}function xn(l,o){l&1&&(t(0,"div",71)(1,"div",72)(2,"b"),i(3,"Green Salad is Required"),e()()())}function qn(l,o){if(l&1){let c=ce();t(0,"app-popup",73),b("dataEmitter",function(g){ae(c);let s=se();return ue(s.handleData(g))}),e()}l&2&&m("text","popup checking")}var y=class l{isPopShow=!1;menucomponentform=new Se({name:new p(null,[a.required]),category:new p("",[a.required]),foodType:new p("",[a.required]),serviceType:new p("",[a.required]),deliveryType:new p("",[a.required]),productType:new p("",[a.required]),itemCode:new p("",[a.required,a.pattern("^[0-9]*$")]),eanCode:new p("",[a.required,a.pattern("^[0-9]*$")]),displayOrder:new p("",[a.required,a.pattern("^[0-9]*$")]),preparationAs:new p("",[a.required]),hsnNo:new p("",[a.required,a.pattern("^[0-9]*$")]),taxType:new p(!1),kitchenInstructions:new p("",[a.required]),status:new p(!1),minQty:new p("",[a.required,a.pattern("^[0-9]*$")]),maxQty:new p("",[a.required,a.pattern("^[0-9]*$")]),inventoryApplicable:new p(!1),batchApplicable:new p(!1),updateChangeInCost:new p(!1),decimalsForQty:new p("",[a.required]),abandonPercentage:new p("",[a.required]),discountType:new p("",[a.required]),costPrice:new p("",[a.required,a.pattern("^[0-9]*$")]),sellingPrice:new p("",[a.required,a.pattern("^[0-9]*$")]),discount:new p("",[a.required,a.pattern("^[0-9]*$")]),packingAmount:new p("",[a.required,a.pattern("^[0-9]*$")]),sku:new p("",[a.required]),applyForOnline:new p(!1),regularcostPrice:new p("",[a.required,a.pattern("^[0-9]*$")]),regularsellingPrice:new p("",[a.required,a.pattern("^[0-9]*$")]),regulardiscount:new p("",[a.required,a.pattern("^[0-9]*$")]),regularpackingAmount:new p("",[a.required,a.pattern("^[0-9]*$")]),regularsku:new p("",[a.required]),regularapplyForOnline:new p(!1),extraToppings:new p(!1),extraCream:new p(!1),greenSalad:new p(!1)});isDataVisible=!1;formValue;receivedData="";handleData(o){o=="save"?(alert("Done"),this.isDataVisible=!1):o=="reset"&&(this.isDataVisible=!1)}toggleData(){this.isDataVisible=!this.isDataVisible}closeModalEventMenu(o){o==!0&&(this.isPopShow=!1)}submitForm(o){o=="save"&&(this.menucomponentform.invalid?(alert("Please fill all required fields correctly."),this.menucomponentform.markAllAsTouched(),this.isDataVisible=!0):alert("Form submitted successfully!"))}static \u0275fac=function(c){return new(c||l)};static \u0275cmp=v({type:l,selectors:[["app-menu"]],standalone:!1,decls:313,vars:49,consts:[[1,"catelogue_online"],[3,"topHeadingContent"],[1,"top_header"],[1,"top_header_button"],["type","button","routerLink","/layout/catalogue/menulist",1,"btn","btn-secondary","d-flex","justify-content-between","align-items-center"],[1,"d-flex","align-items-center"],["name","arrow-left",1,"icons","custom-icons"],[1,"",3,"formGroup"],[3,"accordianItems"],[1,"row"],[1,"col-lg-4","col-12"],["for","",1,"mb-2"],[1,"input-group","mb-3"],["type","text","formControlName","name","placeholder","Name",1,"form-control"],["class","mb-2",4,"ngIf"],["formControlName","category","aria-label","Default select example",1,"form-select","mb-3"],["selected","","disabled",""],["value","1"],["value","2"],["value","3"],["formControlName","foodType","aria-label","Default select example",1,"form-select","mb-3"],["formControlName","serviceType","aria-label","Default select example",1,"form-select","mb-3"],["formControlName","deliveryType","aria-label","Default select example",1,"form-select","mb-3"],["formControlName","productType","aria-label","Default select example",1,"form-select","mb-3"],["type","number","formControlName","itemCode","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","Item Code",1,"form-control"],[1,"input-group"],["type","number","formControlName","eanCode","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","EAN Code",1,"form-control","mb-3"],["type","number","formControlName","displayOrder","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","Display Order",1,"form-control","mb-3"],["formControlName","preparationAs","aria-label","Default select example",1,"form-select","mb-3"],["type","number","formControlName","hsnNo","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","HSN No.",1,"form-control"],[1,"toggle"],[1,"toggle_button"],[1,"form-check","form-switch"],["formControlName","taxType","type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],[1,"col-lg-8","col-12"],["for","",1,"pb-2"],["formControlName","kitchenInstructions","placeholder","About Kitchens","id","floatingTextarea",1,"form-control"],["for","floatingTextarea"],["for","",1,""],["formControlName","status","type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["type","number","formControlName","minQty","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","Min Qty.",1,"form-control"],["type","number","formControlName","maxQty","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","Max Qty.",1,"form-control"],[1,"toggle_button","my-2"],["formControlName","inventoryApplicable","type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["formControlName","batchApplicable","type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["formControlName","updateChangeInCost","type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["type","number","formControlName","decimalsForQty","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","No. of decimals for fractional Qty",1,"form-control"],["type","number","formControlName","abandonPercentage","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","Abandent Percentage",1,"form-control"],["type","number","formControlName","discountType","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","Percentage",1,"form-control"],[1,"col-lg-2","col-4"],["type","number","formControlName","costPrice","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","number","formControlName","sellingPrice","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","number","formControlName","discount","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","number","formControlName","packingAmount","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","text","formControlName","sku","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","SKU",1,"form-control"],["formControlName","applyForOnline","type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["type","number","formControlName","regularcostPrice","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","number","formControlName","regularsellingPrice","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","number","formControlName","regulardiscount","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","number","formControlName","regularpackingAmount","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","\u20B9",1,"form-control"],["type","text","formControlName","regularsku","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default","placeholder","SKU",1,"form-control"],["formControlName","regularapplyForOnline","type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],[1,"col-lg-3","col-12"],[1,"form-check"],["type","checkbox","formControlName","extraToppings","value","","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","formControlName","extraCream","value","","id","flexCheckDefault",1,"form-check-input"],["type","checkbox","formControlName","greenSalad","value","","id","flexCheckDefault",1,"form-check-input"],[3,"buttonClick","buttonText"],[3,"text"],[1,"mb-2"],[1,"text-danger"],[3,"dataEmitter","text"]],template:function(c,n){if(c&1&&(t(0,"section")(1,"div",0)(2,"app-pageheaders",1)(3,"div",2)(4,"div",3)(5,"button",4)(6,"div",5),u(7,"i-feather",6),i(8," Back to Menu List "),e()()()()(),t(9,"form",7)(10,"app-accordian",8)(11,"div",9)(12,"div",10)(13,"label",11),i(14,"Name :"),e(),t(15,"div",12),u(16,"input",13),e(),d(17,Ue,4,0,"div",14),e(),t(18,"div",10)(19,"label",11),i(20,"Category :"),e(),t(21,"select",15)(22,"option",16),i(23,"Your Choice"),e(),t(24,"option",17),i(25,"One"),e(),t(26,"option",18),i(27,"Two"),e(),t(28,"option",19),i(29,"Three"),e()(),d(30,Ye,4,0,"div",14),e(),t(31,"div",10)(32,"label",11),i(33,"Food Type :"),e(),t(34,"select",20)(35,"option",16),i(36,"Vegetarian"),e(),t(37,"option",17),i(38,"Veg"),e(),t(39,"option",18),i(40,"Non-Veg"),e()(),d(41,Je,4,0,"div",14),e(),t(42,"div",10)(43,"label",11),i(44,"Service Type :"),e(),t(45,"select",21)(46,"option",16),i(47,"Your Choice"),e(),t(48,"option",17),i(49,"One"),e(),t(50,"option",18),i(51,"Two"),e(),t(52,"option",19),i(53,"Three"),e()(),d(54,We,4,0,"div",14),e(),t(55,"div",10)(56,"label",11),i(57,"Delivery Type :"),e(),t(58,"select",22)(59,"option",16),i(60,"Your Choice"),e(),t(61,"option",17),i(62,"One"),e(),t(63,"option",18),i(64,"Two"),e(),t(65,"option",19),i(66,"Three"),e()(),d(67,Xe,4,0,"div",14),e(),t(68,"div",10)(69,"label",11),i(70,"Product Type :"),e(),t(71,"select",23)(72,"option",16),i(73,"Your Choice"),e(),t(74,"option",17),i(75,"One"),e(),t(76,"option",18),i(77,"Two"),e(),t(78,"option",19),i(79,"Three"),e()(),d(80,Ze,4,0,"div",14),e(),t(81,"div",10)(82,"label",11),i(83,"Item Code :"),e(),t(84,"div",12),u(85,"input",24),e(),d(86,en,4,0,"div",14),e(),t(87,"div",10)(88,"div")(89,"label",11),i(90,"EAN Code :"),e(),t(91,"div",25),u(92,"input",26),e(),d(93,nn,4,0,"div",14),e()(),t(94,"div",10)(95,"div")(96,"label",11),i(97,"Display Order :"),e(),t(98,"div",25),u(99,"input",27),e()(),d(100,tn,4,0,"div",14),e(),t(101,"div",10)(102,"div")(103,"label",11),i(104,"Preparation As :"),e(),t(105,"select",28)(106,"option",16),i(107,"Your Choice"),e(),t(108,"option",17),i(109,"One"),e(),t(110,"option",18),i(111,"Two"),e(),t(112,"option",19),i(113,"Three"),e()()(),d(114,ln,4,0,"div",14),e(),t(115,"div",10)(116,"label",11),i(117,"HSN No. :"),e(),t(118,"div",12),u(119,"input",29),e(),d(120,on,4,0,"div",14),e(),t(121,"div",10)(122,"div",30)(123,"label",11),i(124,"Tax type :"),e(),t(125,"div",31)(126,"div",32),u(127,"input",33)(128,"label",34),e()()()(),t(129,"div",35)(130,"div")(131,"label",36),i(132,"Kitchen Instructions:"),e(),u(133,"textarea",37)(134,"label",38),e(),d(135,rn,4,0,"div",14),e(),t(136,"div",10)(137,"div",30)(138,"label",39),i(139,"Status:"),e(),t(140,"div",31)(141,"div",32),u(142,"input",40)(143,"label",34),e()()(),d(144,mn,4,0,"div",14),e()()(),t(145,"app-accordian",8)(146,"div",9)(147,"div",10)(148,"label",11),i(149,"Min Qty :"),e(),t(150,"div",12),u(151,"input",41),e(),d(152,an,4,0,"div",14),e(),t(153,"div",10)(154,"label",11),i(155,"Max Qty :"),e(),t(156,"div",12),u(157,"input",42),e(),d(158,un,4,0,"div",14),e()(),t(159,"div",9)(160,"div",10)(161,"div",30)(162,"label",39),i(163,"Inventory Applicable:"),e(),t(164,"div",43)(165,"div",32),u(166,"input",44)(167,"label",34),e()()()(),t(168,"div",10)(169,"div",30)(170,"label",39),i(171,"Batch Applicable:"),e(),t(172,"div",43)(173,"div",32),u(174,"input",45)(175,"label",34),e()()()(),t(176,"div",10)(177,"div",30)(178,"label",39),i(179,"Update Change in cost as weighted average:"),e(),t(180,"div",43)(181,"div",32),u(182,"input",46)(183,"label",34),e()()()()()(),t(184,"app-accordian",8)(185,"div",9)(186,"div",10)(187,"label",11),i(188,"No. of decimals for fractional Qty :"),e(),t(189,"div",12),u(190,"input",47),e(),d(191,pn,4,0,"div",14),e(),t(192,"div",10)(193,"label",11),i(194," Abandent Percentage :"),e(),t(195,"div",12),u(196,"input",48),e(),d(197,dn,4,0,"div",14),e(),t(198,"div",10)(199,"label",11),i(200,"Discount Type :"),e(),t(201,"div",12),u(202,"input",49),e(),d(203,cn,4,0,"div",14),e()()(),t(204,"app-accordian",8)(205,"fieldset")(206,"legend"),i(207,"Half Plate "),e(),t(208,"div",9)(209,"div",50)(210,"label",11),i(211," Cost Price :"),e(),t(212,"div",12),u(213,"input",51),e(),d(214,sn,4,0,"div",14),e(),t(215,"div",50)(216,"label",11),i(217," Selling Price :"),e(),t(218,"div",12),u(219,"input",52),e(),d(220,fn,4,0,"div",14),e(),t(221,"div",50)(222,"label",11),i(223," Discount :"),e(),t(224,"div",12),u(225,"input",53),e(),d(226,gn,4,0,"div",14),e(),t(227,"div",50)(228,"label",11),i(229," Packing Amount :"),e(),t(230,"div",12),u(231,"input",54),e(),d(232,vn,4,0,"div",14),e(),t(233,"div",50)(234,"label",11),i(235," SKU :"),e(),t(236,"div",12),u(237,"input",55),e(),d(238,bn,4,0,"div",14),e(),t(239,"div",50)(240,"div",30)(241,"label",11),i(242," Apply For Online :"),e(),t(243,"div",43)(244,"div",32),u(245,"input",56)(246,"label",34),e(),d(247,hn,4,0,"div",14),e()()()()(),t(248,"fieldset")(249,"legend"),i(250,"Regular : "),e(),t(251,"div",9)(252,"div",50)(253,"label",11),i(254," Cost Price :"),e(),t(255,"div",12),u(256,"input",57),e(),d(257,yn,4,0,"div",14),e(),t(258,"div",50)(259,"label",11),i(260," Selling Price :"),e(),t(261,"div",12),u(262,"input",58),e(),d(263,_n,4,0,"div",14),e(),t(264,"div",50)(265,"label",11),i(266," Discount :"),e(),t(267,"div",12),u(268,"input",59),e(),d(269,Cn,4,0,"div",14),e(),t(270,"div",50)(271,"label",11),i(272," Packing Amount :"),e(),t(273,"div",12),u(274,"input",60),e(),d(275,En,4,0,"div",14),e(),t(276,"div",50)(277,"label",11),i(278," SKU :"),e(),t(279,"div",12),u(280,"input",61),e(),d(281,Sn,4,0,"div",14),e(),t(282,"div",50)(283,"div",30)(284,"label",11),i(285," Apply For Online :"),e(),t(286,"div",43)(287,"div",32),u(288,"input",62)(289,"label",34),e(),d(290,kn,4,0,"div",14),e()()()()()(),t(291,"app-accordian",8)(292,"div",9)(293,"div",63)(294,"div",64),u(295,"input",65),t(296,"label",66),i(297," Extra Toppings "),e()(),d(298,Tn,4,0,"div",14),e(),t(299,"div",63)(300,"div",64),u(301,"input",67),t(302,"label",66),i(303," Extra Cream "),e()(),d(304,Mn,4,0,"div",14),e(),t(305,"div",63)(306,"div",64),u(307,"input",68),t(308,"label",66),i(309," Green Salad "),e()(),d(310,xn,4,0,"div",14),e(),t(311,"app-buttons",69),b("buttonClick",function(s){return n.submitForm(s)}),e()()()()(),d(312,qn,1,1,"app-popup",70),e()),c&2){let g,s,_,C,E,S,k,T,M,x,q,w,N,P,I,D,A,F,R,O,z,V,G,Q,$,L,j,B,H,K,U,Y,J;r(2),m("topHeadingContent",f(42,Qe)),r(7),m("formGroup",n.menucomponentform),r(),m("accordianItems",f(43,$e)),r(7),m("ngIf",(n.menucomponentform==null||(g=n.menucomponentform.get("name"))==null?null:g.touched)&&(n.menucomponentform==null||(g=n.menucomponentform.get("name"))==null?null:g.hasError("required"))),r(13),m("ngIf",(n.menucomponentform==null||(s=n.menucomponentform.get("category"))==null?null:s.touched)&&(n.menucomponentform==null||(s=n.menucomponentform.get("category"))==null?null:s.hasError("required"))),r(11),m("ngIf",(n.menucomponentform==null||(_=n.menucomponentform.get("foodType"))==null?null:_.touched)&&(n.menucomponentform==null||(_=n.menucomponentform.get("foodType"))==null?null:_.hasError("required"))),r(13),m("ngIf",(n.menucomponentform==null||(C=n.menucomponentform.get("serviceType"))==null?null:C.touched)&&(n.menucomponentform==null||(C=n.menucomponentform.get("serviceType"))==null?null:C.hasError("required"))),r(13),m("ngIf",(n.menucomponentform==null||(E=n.menucomponentform.get("deliveryType"))==null?null:E.touched)&&(n.menucomponentform==null||(E=n.menucomponentform.get("deliveryType"))==null?null:E.hasError("required"))),r(13),m("ngIf",(n.menucomponentform==null||(S=n.menucomponentform.get("productType"))==null?null:S.touched)&&(n.menucomponentform==null||(S=n.menucomponentform.get("productType"))==null?null:S.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(k=n.menucomponentform.get("itemCode"))==null?null:k.touched)&&(n.menucomponentform==null||(k=n.menucomponentform.get("itemCode"))==null?null:k.hasError("required"))),r(7),m("ngIf",(n.menucomponentform==null||(T=n.menucomponentform.get("eanCode"))==null?null:T.touched)&&(n.menucomponentform==null||(T=n.menucomponentform.get("eanCode"))==null?null:T.hasError("required"))),r(7),m("ngIf",(n.menucomponentform==null||(M=n.menucomponentform.get("displayOrder"))==null?null:M.touched)&&(n.menucomponentform==null||(M=n.menucomponentform.get("displayOrder"))==null?null:M.hasError("required"))),r(14),m("ngIf",(n.menucomponentform==null||(x=n.menucomponentform.get("preparationAs"))==null?null:x.touched)&&(n.menucomponentform==null||(x=n.menucomponentform.get("preparationAs"))==null?null:x.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(q=n.menucomponentform.get("hsnNo"))==null?null:q.touched)&&(n.menucomponentform==null||(q=n.menucomponentform.get("hsnNo"))==null?null:q.hasError("required"))),r(15),m("ngIf",(n.menucomponentform==null||(w=n.menucomponentform.get("kitchenInstructions"))==null?null:w.touched)&&(n.menucomponentform==null||(w=n.menucomponentform.get("kitchenInstructions"))==null?null:w.hasError("required"))),r(9),m("ngIf",(n.menucomponentform==null||(N=n.menucomponentform.get("status"))==null?null:N.touched)&&(n.menucomponentform==null||(N=n.menucomponentform.get("status"))==null?null:N.hasError("required"))),r(),m("accordianItems",f(44,Le)),r(7),m("ngIf",(n.menucomponentform==null||(P=n.menucomponentform.get("minQty"))==null?null:P.touched)&&(n.menucomponentform==null||(P=n.menucomponentform.get("minQty"))==null?null:P.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(I=n.menucomponentform.get("maxQty"))==null?null:I.touched)&&(n.menucomponentform==null||(I=n.menucomponentform.get("maxQty"))==null?null:I.hasError("required"))),r(26),m("accordianItems",f(45,je)),r(7),m("ngIf",(n.menucomponentform==null||(D=n.menucomponentform.get("decimalsForQty"))==null?null:D.touched)&&(n.menucomponentform==null||(D=n.menucomponentform.get("decimalsForQty"))==null?null:D.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(A=n.menucomponentform.get("abandonPercentage"))==null?null:A.touched)&&(n.menucomponentform==null||(A=n.menucomponentform.get("abandonPercentage"))==null?null:A.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(F=n.menucomponentform.get("discountType"))==null?null:F.touched)&&(n.menucomponentform==null||(F=n.menucomponentform.get("discountType"))==null?null:F.hasError("required"))),r(),m("accordianItems",f(46,Be)),r(10),m("ngIf",(n.menucomponentform==null||(R=n.menucomponentform.get("costPrice"))==null?null:R.touched)&&(n.menucomponentform==null||(R=n.menucomponentform.get("costPrice"))==null?null:R.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(O=n.menucomponentform.get("sellingPrice"))==null?null:O.touched)&&(n.menucomponentform==null||(O=n.menucomponentform.get("sellingPrice"))==null?null:O.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(z=n.menucomponentform.get("discount"))==null?null:z.touched)&&(n.menucomponentform==null||(z=n.menucomponentform.get("discount"))==null?null:z.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(V=n.menucomponentform.get("packingAmount"))==null?null:V.touched)&&(n.menucomponentform==null||(V=n.menucomponentform.get("packingAmount"))==null?null:V.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(G=n.menucomponentform.get("sku"))==null?null:G.touched)&&(n.menucomponentform==null||(G=n.menucomponentform.get("sku"))==null?null:G.hasError("required"))),r(9),m("ngIf",(n.menucomponentform==null||(Q=n.menucomponentform.get("applyForOnline"))==null?null:Q.touched)&&(n.menucomponentform==null||(Q=n.menucomponentform.get("applyForOnline"))==null?null:Q.hasError("required"))),r(10),m("ngIf",(n.menucomponentform==null||($=n.menucomponentform.get("regularcostPrice"))==null?null:$.touched)&&(n.menucomponentform==null||($=n.menucomponentform.get("regularcostPrice"))==null?null:$.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(L=n.menucomponentform.get("regularsellingPrice"))==null?null:L.touched)&&(n.menucomponentform==null||(L=n.menucomponentform.get("regularsellingPrice"))==null?null:L.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(j=n.menucomponentform.get("regulardiscount"))==null?null:j.touched)&&(n.menucomponentform==null||(j=n.menucomponentform.get("regulardiscount"))==null?null:j.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(B=n.menucomponentform.get("regularpackingAmount"))==null?null:B.touched)&&(n.menucomponentform==null||(B=n.menucomponentform.get("regularpackingAmount"))==null?null:B.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(H=n.menucomponentform.get("regularsku"))==null?null:H.touched)&&(n.menucomponentform==null||(H=n.menucomponentform.get("regularsku"))==null?null:H.hasError("required"))),r(9),m("ngIf",(n.menucomponentform==null||(K=n.menucomponentform.get("regularapplyForOnline"))==null?null:K.touched)&&(n.menucomponentform==null||(K=n.menucomponentform.get("regularapplyForOnline"))==null?null:K.hasError("required"))),r(),m("accordianItems",f(47,He)),r(7),m("ngIf",(n.menucomponentform==null||(U=n.menucomponentform.get("extraToppings"))==null?null:U.touched)&&(n.menucomponentform==null||(U=n.menucomponentform.get("extraToppings"))==null?null:U.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(Y=n.menucomponentform.get("extraCream"))==null?null:Y.touched)&&(n.menucomponentform==null||(Y=n.menucomponentform.get("extraCream"))==null?null:Y.hasError("required"))),r(6),m("ngIf",(n.menucomponentform==null||(J=n.menucomponentform.get("greenSalad"))==null?null:J.touched)&&(n.menucomponentform==null||(J=n.menucomponentform.get("greenSalad"))==null?null:J.hasError("required"))),r(),m("buttonText",f(48,Ke)),r(),de(n.isDataVisible?312:-1)}},dependencies:[fe,he,ke,we,Ne,_e,Te,ye,qe,Ce,Ee,Me,xe,Pe,Z,ee,Ie,te],styles:[".catelogue_online[_ngcontent-%COMP%]   .top_header_button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#092c4c}.catelogue_online[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#516a7f}.catelogue_online[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]   .toggle_button[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{height:1.5rem;width:3rem}.catelogue_online[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]   .toggle_button[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked{background-color:#ff9f43;border-color:#ff9f43}"]})};var wn=()=>({heading:"Menu List",subitems:"List Menu"}),ie=class l{constructor(o){this.router=o}columns=[{key:"id",label:"ID"},{key:"menu",label:"Menu"},{key:"category",label:"Category"},{key:"foodtype",label:"Food Type"},{key:"status",label:"Status"},{key:"action",label:"Action"}];tableData=[{id:1,menu:"M1",category:"Italian",foodtype:"Veg",status:"Active",action:["edit","view"],mainId:"nmansajkjk12"},{id:2,menu:"M2",category:"Chinese",foodtype:"Non-Veg",status:"Active",action:["edit","view"],mainId:"nmansajkjk13"},{id:3,menu:"M3",category:"North Indian",foodtype:"Veg",status:"Active",action:["edit","view"],mainId:"nmansajkjk14"}];tableAction(o){o?.type=="edit"&&(console.log(o),this.router.navigate(["/layout/catalogue/online"]))}static \u0275fac=function(c){return new(c||l)(pe(be))};static \u0275cmp=v({type:l,selectors:[["app-menu-list"]],standalone:!1,decls:3,vars:4,consts:[[3,"topHeadingContent"],[3,"actionType","columns","tableData"]],template:function(c,n){c&1&&(t(0,"section"),u(1,"app-pageheaders",0),t(2,"app-table",1),b("actionType",function(s){return n.tableAction(s)}),e()()),c&2&&(r(),m("topHeadingContent",f(3,wn)),r(),m("columns",n.columns)("tableData",n.tableData))},dependencies:[De,Z],encapsulation:2})};var Nn=[{path:"",component:ne,children:[{path:"offline",component:y},{path:"online",component:y},{path:"menulist",component:ie}]}],le=class l{static \u0275fac=function(c){return new(c||l)};static \u0275mod=X({type:l});static \u0275inj=W({imports:[re.forChild(Nn),re]})};var Re=class l{static \u0275fac=function(c){return new(c||l)};static \u0275mod=X({type:l});static \u0275inj=W({imports:[ge,le,Ae]})};export{Re as CatalogueModule};
