webpackJsonp([3],{"5k09":function(t,e){},VNqj:function(t,e){},o9cx:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),s=r.n(n),a=r("exGp"),i=r.n(a),o=r("0xDb"),c=r("5reh"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xg-user-profile-item"},[e("aside",{staticClass:"item-icon"},[this._t("icon")],2),this._v(" "),e("div",{staticClass:"item-info"},[this._t("default"),this._v(" "),e("span",{staticClass:"item-info-icon"},[e("span",{staticClass:"item-info-content"},[this._t("content")],2),this._v(" "),this._m(0)])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"icon icon-arrow-right"})])}]};var u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"number-board"},t._l(t.board,function(e,n){return r("div",{key:n,staticClass:"number-board-item"},[e.link?r("router-link",{attrs:{to:e.link}},[r("div",{staticClass:"number-board-item-inner"},[r("div",{staticClass:"number-board-item-name"},[t._v("\n                    "+t._s(e.name)+"\n                ")]),t._v(" "),r("strong",{staticClass:"number-board-item-value",style:{color:e.color}},[t._v("\n                    "+t._s(e.value)+"\n                ")])])]):[r("div",{staticClass:"number-board-item-inner"},[r("div",{staticClass:"number-board-item-name"},[t._v("\n                    "+t._s(e.name)+"\n                ")]),t._v(" "),r("strong",{staticClass:"number-board-item-value",style:{color:e.color}},[t._v("\n                    "+t._s(e.value)+"\n                ")])])]],2)}))},staticRenderFns:[]};var f={name:"XgProfile",data:function(){return{filename:""}},computed:{board:function(){var t=this.$store.getters.allNotes,e=this.$store.getters.finishNotes,r=this.$store.getters.collectNotes;return[{name:"全部",value:t.length,link:"/notes/all",color:"#26a2ff"},{name:"完成",value:e.length,link:"/notes/finish",color:"rgb(255, 95, 62)"},{name:"收藏",value:r.length,link:"/collection",color:"rgb(247, 186, 42)"}]}},methods:{handleExport:function(){var t=this;return i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$messagebox.confirm("您确定要导出笔记为.json文件吗？");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return");case 8:Object(o.b)();case 9:case"end":return e.stop()}},e,t,[[0,5]])}))()},handleImport:function(){var t=this;return i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$messagebox.confirm("您确定要导入笔记，此操作会将ID相同的笔记合并");case 3:t.$refs.file.click(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return");case 9:case"end":return e.stop()}},e,t,[[0,6]])}))()},upload:function(t){var e=this;return i()(s.a.mark(function r(){var n;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t.target.files[0]){r.next=3;break}return e.filename="",r.abrupt("return");case 3:return e.filename=t.target.files[0].name,n=void 0,r.prev=5,r.next=8,Object(o.f)(e.$refs.file);case 8:n=r.sent,r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(5),r.abrupt("return",e.$messagebox.alert(r.t0));case 14:return r.next=16,e.$store.dispatch(c.o,n);case 16:e.$messagebox.alert("上传成功！");case 17:case"end":return r.stop()}},r,e,[[5,11]])}))()}},components:{XgProfileItem:r("VU/8")({name:"xg-user-profile-item"},l,!1,function(t){r("sil4")},"data-v-3e3ed0e5",null).exports,XgNumberBoard:r("VU/8")({name:"xg-number-board",props:["board"]},u,!1,function(t){r("VNqj")},"data-v-4f6c7f04",null).exports}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xg-user"},[r("div",{staticClass:"xg-user-profile"},[r("span",{staticClass:"xg-user-profile-avatar"},[r("svg",{attrs:{viewBox:"0 0 122 122",id:"avatar-default",width:"100%",height:"100%"}},[r("path",{attrs:{fill:"#DCDCDC","fill-rule":"evenodd",d:"M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),r("xg-number-board",{attrs:{board:t.board}}),t._v(" "),r("router-link",{attrs:{to:"/profile/tag"}},[r("xg-profile-item",[r("i",{staticClass:"icon icon-tag",staticStyle:{color:"rgb(74, 165, 240)"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n      标签管理\n    ")])],1),t._v(" "),r("xg-profile-item",{nativeOn:{click:function(e){t.handleExport(e)}}},[r("i",{staticClass:"icon icon-export",staticStyle:{color:"rgb(74, 165, 240)"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n    导出笔记\n  ")]),t._v(" "),r("xg-profile-item",{nativeOn:{click:function(e){t.handleImport(e)}}},[r("i",{staticClass:"icon icon-import",staticStyle:{color:"rgb(106, 194, 11)"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n    导入笔记\n    "),t.filename?r("template",{slot:"content"},[t._v("文件名："+t._s(t.filename))]):t._e()],2),t._v(" "),r("input",{ref:"file",staticClass:"import-notes-file",attrs:{type:"file"},on:{change:t.upload}}),t._v(" "),r("div",{staticClass:"copyright"},[r("p",[r("a",{attrs:{href:"https://github.com/xg4",target:"_blank"}},[r("svg",{attrs:{viewBox:"0 0 24 24",height:"32",width:"32","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",fill:"#586069",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])]),t._v(" "),t._m(2)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xg-user-profile-detail"},[e("p",{staticClass:"xg-user-profile-username"},[this._v("用户名")]),this._v(" "),e("p",[this._v("签名")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"xg-user-profile-icon"},[e("i",{staticClass:"icon icon-arrow-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      © 2018\n      "),e("span",[this._v("xg4")])])}]};var m=r("VU/8")(f,v,!1,function(t){r("5k09")},"data-v-00a7885a",null);e.default=m.exports},sil4:function(t,e){}});