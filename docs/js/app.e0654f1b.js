(function(e){function t(t){for(var r,o,u=t[0],i=t[1],c=t[2],p=0,f=[];p<u.length;p++)o=u[p],a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("aside",[n("tree-view",{attrs:{data:e.data,selected:e.selectedDept}})],1),n("aside",[n("section",[n("label",[e._v("搜索成员：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],attrs:{type:"text"},domProps:{value:e.q},on:{input:[function(t){t.target.composing||(e.q=t.target.value)},e.onSearch]}})]),e.selectedUser.length?n("ul",e._l(e.selectedUser,function(t,r){return n("li",{key:r,staticClass:"item"},[n("span",[e._v("姓名："+e._s(t.name))]),n("span",[e._v("性别："+e._s("male"===t.sex?"男":"女"))])])})):n("div",[e._v("该部门下暂无小伙伴呦")])])])},s=[],o=(n("6762"),n("2fdb"),n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-view"},[n("div",{class:{selected:e.selected===e.data.name},on:{click:e.onTreeChange}},[e._v("\n    "+e._s(e.data.name)+"\n    "),e.hasChild?n("span",[e._v("["+e._s(e.open?"-":"+")+"]")]):e._e()]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}]},e._l(e.data.group,function(t,r){return n("tree-view",{key:r,attrs:{data:t,selected:e.selected}})}))])}),u=[],i={name:"tree-view",props:{data:Object,selected:String},data:function(){return{open:!1}},computed:{hasChild:function(){return Array.isArray(this.data.group)&&!!this.data.group.length}},methods:{onTreeChange:function(){this.hasChild&&(this.open=!this.open),this.$bus.$emit("onTreeChange",this.data)}}},c=i,l=(n("e520"),n("2877")),p=Object(l["a"])(c,o,u,!1,null,"4725b81a",null);p.options.__file="tree-view.vue";var f=p.exports,d={name:"总部门",user:[{name:"Prometheus",sex:"male"},{name:"Athena",sex:"female"}],group:[{name:"子部门A",user:[{name:"Dijkstra",sex:"male"},{name:"Linus",sex:"male"}],group:[{name:"孙子部门A",user:[{name:"one",sex:"female"},{name:"for",sex:"male"},{name:"all",sex:"male"}]}]},{name:"子部门B",user:[{name:"老王",sex:"male"},{name:"小明",sex:"male"},{name:"冬梅",sex:"female"}],group:[]}]},m=function(e,t){var n,r=function(){var r=this,a=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(r,a)},t)};return r.cancel=function(){clearTimeout(n),n=null},r},v={name:"app",components:{TreeView:f},data:function(){return{data:d,users:d.user||[],selectedUser:d.user||[],selectedDept:d.name,q:""}},methods:{onSearch:m(function(){var e=this;this.selectedUser=this.users.filter(function(t){return t.name.includes(e.q)})},200)},created:function(){var e=this;this.$bus.$on("onTreeChange",function(t){e.q="",e.users=t.user||[],e.selectedUser=t.user||[],e.selectedDept=t.name})},beforeDestroy:function(){this.$bus.$off("onTreeChange"),m.cancel()}},h=v,b=(n("7c55"),Object(l["a"])(h,a,s,!1,null,null,null));b.options.__file="App.vue";var g=b.exports;r["a"].config.productionTip=!1;var _={install:function(e){e.prototype.$bus=new e}};r["a"].use(_),new r["a"]({render:function(e){return e(g)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},e520:function(e,t,n){"use strict";var r=n("eb4c"),a=n.n(r);a.a},eb4c:function(e,t,n){}});
//# sourceMappingURL=app.e0654f1b.js.map