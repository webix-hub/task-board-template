!function(t){function e(e){for(var i,n,l=e[0],r=e[1],d=e[2],u=0,m=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&m.push(a[n][0]),a[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(c&&c(e);m.length;)m.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={0:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=r;o.push([3,1]),s()}([function(t,e,s){var i=s(1),a=s(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},n=(i(a,o),a.locals?a.locals:{});t.exports=n},,function(t,e,s){},function(t,e,s){"use strict";s.r(e);var i={css:"webix_layout_custom",padding:{top:5},rows:[{view:"label",height:50,label:"Recomended actions",css:"header-label"},{view:"grouplist",borderless:!0,scroll:"y",data:[{id:"item1",type:"folder",icon:"mdi mdi-calendar-blank",color:"violet",num:"44",value:"Scheduled items overdue",data:[{id:"item1.1",value:"Scheduled item 1"},{id:"item1.2",value:"Scheduled item 2"}]},{id:"item2",icon:"mdi mdi-bag-checked",type:"folder",color:"red",num:"11",value:"Jobs ending within 30 days",data:[{id:"item2.1",value:"Job 1"},{id:"item2.2",value:"Job 2"}]},{id:"item3",icon:"mdi mdi-file",num:"2",color:"green",value:"Jobs waiting for invoicing",data:[{id:"item3.1",value:"Job 1"},{id:"item3.2",value:"Job 2"}]},{id:"item4",icon:"mdi mdi-account",num:"41",color:"orange",value:"Unassigned sheduled items",data:[{id:"item4.1",value:"Item 1"},{id:"item4.2",value:"Item 2"}]},{id:"item5",icon:"mdi mdi-calendar-check",num:"1",color:"blue",value:"Approved quotes to convert to jobs",data:[{id:"item5.1",value:"Quote 1"},{id:"item5.2",value:"Quote 2"}]},{id:"item6",icon:"mdi mdi-clipboard-list",color:"violet",num:"1",value:"Requests with completed assessements",data:[{id:"item6.1",value:"Request 1"},{id:"item6.2",value:"Request 2"}]}],css:"list-actions",item:{height:50,template:t=>1!==t.$level?t.value:'\n\t\t\t\t\t\t<span class="actions-sum color-'+t.color+'">\n\t\t\t\t\t\t\t<span class="list-item-icon">\n\t\t\t\t\t\t\t\t<span class="'+t.icon+'"></span> \n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<strong>'+t.num+"</strong>\n\t\t\t\t\t\t</span> -  "+t.value+"\n\t\t\t\t\t\t"}}]},a={css:"webix_layout_custom",padding:{top:5},rows:[{view:"label",height:50,label:"Assignments",css:"header-label"},{template:"Unscheduled",type:"clean",css:"header-template orange",height:30},{view:"datatable",borderless:!0,scroll:"xy",css:"table-assignments",rowHeight:50,rowLineHeight:15,headerRowHeight:50,columns:[{template:'<span class="icon-check mdi mdi-check"></span>',header:'<span class="icon-check mdi mdi-check"></span>',css:"cell-icon-pos",width:50},{id:"task",header:"Task",fillspace:!0,minWidth:180},{id:"description",header:"Description",fillspace:!0,minWidth:210},{id:"unscheduled",header:{text:"Unscheduled/<br>Unassigned",css:"header-multiline"},fillspace:!0,minWidth:130}],data:[{id:"1",task:"Check email notification",description:"Sort all Letters by Importance",unscheduled:"Twice a day",css:""},{id:"2",task:"Collect documents for business meetings",description:"Request information from an accountant",unscheduled:"Accountant, Lawyer",css:""},{id:"3",task:"Meeting in conference hall",description:"Take all the necessary information for the meeting",unscheduled:"Secretary",css:""}]}]},o={css:"webix_layout_custom",borderless:!0,minWidth:230,padding:{top:5},rows:[{paddingX:20,rows:[{view:"label",height:50,label:"Outstanding balances"},{template:t=>'\n\t\t\t\t\t\t<div class="template-summary">\n\t\t\t\t\t\t\t<div style="display:inline-block;">\n\t\t\t\t\t\t\t\t<div class="font-18 red">$'+(t.total_outstanding||0)+'</div>\n\t\t\t\t\t\t\t\t<div class="text-secondary uppercase gray">Total outstanding</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style="display:inline-block; float:right;">\n\t\t\t\t\t\t\t\t<div class="text-right font-18 gray">'+(t.customers||0)+'</div>\n\t\t\t\t\t\t\t\t<div class="text-right text-secondary uppercase gray">Customers</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t',type:"clean",autoheight:!0,borderless:!0,data:{customers:6,total_outstanding:"-2,035"}}]},{view:"datatable",borderless:!0,scroll:"y",css:"custom-table",headerRowHeight:30,rowHeight:40,columns:[{id:"name",header:{text:"Customer",css:"table-gray-header uppercase"},fillspace:!0,css:"semi-bold"},{id:"amount",header:{text:"Amount",css:"text-right table-gray-header uppercase"},css:"text-right semi-bold"}],data:[{id:"3.1",name:"Alex Smith",amount:"$-497"},{id:"3.2",name:"Henry Jones",amount:"$-189"},{id:"3.3",name:"Geoffrey Anderson",amount:"$-421"},{id:"3.4",name:"John Moore",amount:"$-231"},{id:"3.5",name:"William Thompson",amount:"$-562"},{id:"3.6",name:"Jane Clark",amount:"$-135"}]},{view:"button",label:"<span>View All Customers</span><span class='webix_icon wxi-angle-right'></span>",css:"webix_transparent"}]},n={css:"webix_layout_custom",minHeight:400,minWidth:230,padding:{top:5},rows:[{paddingX:20,rows:[{view:"label",height:50,label:"Past due invoices"},{view:"list",borderless:!0,autoheight:!0,css:"list-with-badges",type:{height:50,template:t=>'\n\t\t<div class="list-item-section semi-bold font-16">\n\t\t<div>\n\t\t\t\t\t\t   $ '+t.sum+'\n\t\t</div>\n\t\t\n\t\t<div class= "text-secondary gray">\n\t\t\t\t\t\t\t'+t.invoice+' invoices\n\t\t</div>\n\t\t </div>\n\t\t<div class="list-item-section text-right"> <span class="badge color-'+t.color+'"> '+t.num+" </span> </div>\n\t\t"},data:[{id:"4.1",sum:"1,044",invoice:"3",color:"red",num:"50+"},{id:"4.2",sum:"100",invoice:"1",color:"yellow",num:"20-30"},{id:"4.3",sum:"324",invoice:"0",color:"blue",num:"<20"}]}]},{view:"datatable",borderless:!0,scroll:"y",css:"custom-table",headerRowHeight:30,rowHeight:45,columns:[{id:"customer",header:{text:"Customer",css:"table-gray-header uppercase"},fillspace:!0,css:"semi-bold"},{id:"sum",header:{text:"Amount/Time",css:"text-right table-gray-header uppercase"},template:t=>'\n\t\t\t\t\t\t<div class="semi-bold">$ '+t.sum+"</div>\n\t\t\t\t\t\t<div> "+t.ago+" months ago</div>\n\t\t\t\t\t\t",fillspace:!0,css:"text-right"}],data:[{id:"4.2.1",customer:"Alex Smith",sum:"300",ago:"6"},{id:"4.2.2",customer:"Henry Jones",sum:"100",ago:"5"},{id:"4.2.3",customer:"Geoffrey Anderson",sum:"221",ago:"7"},{id:"4.2.4",customer:"Jane Clark",sum:"479",ago:"3"}]},{view:"button",type:"icon",label:"<span>View All Invoices</span><span class='webix_icon wxi-angle-right'></span>",css:"webix_transparent"}]},l={css:"webix_layout_custom",minWidth:230,padding:{top:5},rows:[{paddingX:20,rows:[{view:"label",height:50,label:"Upcoming Jobs"},{view:"list",borderless:!0,autoheight:!0,css:"list-with-badges",type:{height:50,template:t=>'\n\t\t<div class="list-item-section semi-bold font-16">\n\t\t<div>\n\t\t\t\t\t\t   $ '+t.sum+'\n\t\t</div>\n\t\t\n\t\t<div class= "text-secondary gray">\n\t\t\t\t\t\t\t'+t.jobs+' invoices\n\t\t</div>\n\t\t </div>\n\t\t<div class="list-item-section text-right"> <span class="badge color-'+t.color+'"> '+t.label+" </span> </div>\n\t\t"},data:[{id:"5.1",sum:"544",jobs:"3",color:"green",label:"Next 2 Days"},{id:"5.2",sum:"100",jobs:"1",color:"bright-blue",label:"Next 2 Days"},{id:"5.3",sum:"124",jobs:"0",color:"gray",label:"Next 2 Days"}]}]},{view:"datatable",borderless:!0,scroll:"y",css:"custom-table",headerRowHeight:30,rowHeight:45,columns:[{id:"customer",header:{text:"Customer",css:"table-gray-header uppercase"},fillspace:!0,css:"semi-bold"},{id:"hours",header:{text:"Amount/Time",css:"text-right table-gray-header uppercase"},fillspace:!0,css:"text-right semi-bold"}],data:[{id:"5.1.1",customer:"Alex Smith",hours:"1 h"}]},{view:"button",type:"icon",label:"<span>View All Jobs</span><span class='webix_icon wxi-angle-right'></span>",css:"webix_transparent"}]},r={css:"webix_layout_custom",minWidth:230,padding:{top:5},rows:[{view:"label",height:50,label:"Today's hours",css:"header-label"},{view:"datatable",borderless:!0,scroll:"y",css:"custom-table",headerRowHeight:30,rowHeight:40,columns:[{id:"customer",header:{text:"Name",css:"table-gray-header uppercase"},fillspace:!0,css:"semi-bold"},{id:"hours",header:{text:"Time",css:"text-right table-gray-header uppercase"},css:"text-right semi-bold"}],data:[{id:"6.1",customer:"Alex Smith",hours:"1 h"},{id:"6.2",customer:"Henry Jones",hours:"3 h"},{id:"6.3",customer:"Geoffrey Anderson",hours:"2.5 h"},{id:"6.4",customer:"John Moore",hours:"4 h"},{id:"6.5",customer:"William Thompson",hours:"1 h"},{id:"6.6",customer:"Jane Clark",hours:"5 h"}]}]};s(0);webix.ready(()=>{!webix.env.touch&&webix.env.scrollSize&&webix.CustomScroll&&webix.CustomScroll.init(),webix.ui({padding:10,type:"wide",margin:20,rows:[{cols:[{view:"template",type:"header",css:"webix_clean font-18",borderless:!0,template:"Activities of the day"},{view:"button",width:150,align:"right",css:"webix_primary",label:"<span>Assignements</span><span class='webix_icon wxi-angle-down'></span>"}]},{margin:20,cols:[i,a]},{margin:20,cols:[o,n,l,r]}]})})}]);