webpackJsonp([1],{Bk7k:function(t,e){},ETNL:function(t,e){},NGQz:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("img",{attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}}),t._v(" "),a("ul",{staticClass:"clearFix"},[a("li",[a("a",{attrs:{href:"#"}}),t._v("首页")]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}}),t._v("新手入门")]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}}),t._v("API")]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}}),t._v("关于")]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}}),t._v("登录")])])])}]};var i=a("VU/8")({name:"Header"},s,!1,function(t){a("NGQz")},"data-v-4eba7c6c",null).exports,r=a("mtWM"),o=a.n(r),c=a("7t+N"),l=a.n(c),u={name:"Pagination",data:function(){return{pagebtns:[1,2,3,4,5,"......"],currentPage:1,jduge:!1}},methods:{changeBtn:function(t){if("number"==typeof t)this.currentPage=t,this.jduge=t>4,t==this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t==this.pagebtns[0]&&1!=t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":l()("button.currentPage").prev().click();break;case"下一页":l()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5,"......"],this.changeBtn(1)}}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination",attrs:{id:"Pagination"}},[a("button",{on:{click:t.changeBtn}},[t._v("首页")]),t._v(" "),a("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t._v(" "),t.jduge?a("button",{staticClass:"pagebtn"},[t._v("......")]):t._e(),t._v(" "),t._l(t.pagebtns,function(e){return a("button",{key:e,class:[{currentPage:e==t.currentPage},"pagebtn"],on:{click:function(a){t.changeBtn(e)}}},[t._v("\n      "+t._s(e)+"\n  ")])}),t._v(" "),a("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},staticRenderFns:[]};var v=a("VU/8")(u,_,!1,function(t){a("UMaW")},null,null).exports;n.a.prototype.$http="aosix";var p={name:"PostList",data:function(){return{items:{},pages:1}},components:{Pagination:v},methods:{getData:function(){var t=this;o.a.get("https://cnodejs.org/api/v1/topics",{params:{page:this.pages,limit:10}}).then(function(e){console.log(e),t.items=e.data.data,console.log(t.items)}).catch(function(t){console.log(t)})},changepages:function(t){this.pages=t,this.getData()}},beforeMount:function(){this.getData()}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"PostList"}},[t._m(0),t._v(" "),a("ul",t._l(t.items,function(e){return a("li",{key:e.id},[a("img",{attrs:{src:e.author.avatar_url}}),t._v(" "),a("span",[a("span",[t._v(t._s(e.reply_count))]),t._v("/"+t._s(e.visit_count)+"\n          ")]),t._v(" "),a("span",{class:[{item_good:1==e.good},{item_top:1==e.top},{item_tab:1!=e.good&&1!=e.top}]},[a("span",[t._v(t._s(t._f("tabF")(e)))])]),t._v(" "),a("router-link",{attrs:{to:{name:"postlist",params:{id:e.id,name:e.author.loginname}}}},[a("h5",[t._v(t._s(e.title))])]),t._v(" "),a("span",{staticClass:"timeR"},[t._v(t._s(t._f("timeF")(e.create_at)))])],1)})),t._v(" "),a("Pagination",{on:{handleList:t.changepages}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toplist"},[a("span",[t._v("全部")]),t._v(" "),a("span",[t._v("精选")]),t._v(" "),a("span",[t._v("问答")]),t._v(" "),a("span",[t._v("招聘")]),t._v(" "),a("span",[t._v("分享")])])}]};var d=a("VU/8")(p,m,!1,function(t){a("qeuC")},"data-v-bc1d5af2",null).exports,h={name:"App",components:{Header:i,PostList:d}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("div",{staticClass:"main"},[e("router-view",{attrs:{name:"slide"}}),this._v(" "),e("router-view",{attrs:{name:"main"}})],1)],1)},staticRenderFns:[]};var g=a("VU/8")(h,f,!1,function(t){a("foKb")},null,null).exports,b=a("/ocq");n.a.prototype.$http="axios";var k={name:"Articel",data:function(){return{items:[]}},methods:{geturl:function(){var t=this;o.a.get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id,{page:1,limit:10}).then(function(e){!0===e.data.success&&(console.log(e.data.data),t.items=e.data.data,console.log(t.items.author.loginname))}).catch(function(t){console.log(t)})}},beforeMount:function(){this.geturl()},watch:{$route:function(t,e){this.geturl()}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article",attrs:{id:"articel"}},[a("div",{staticClass:"topic_header"},[a("div",[a("span",[t._v(t._s(t._f("timeF")(t.items.create_at)))]),t._v(" "),a("div",{staticClass:"topic_title"},[t._v(t._s(t.items.title))])]),t._v(" "),a("ul",[a("li",[t._v("•发布于"+t._s(t._f("timeF")(t.items.create_at)))]),t._v(" "),a("li",[t._v("•作者"+t._s(t.items.author.loginname))]),t._v(" "),a("li",[t._v("•"+t._s(t.items.visit_count)+"次浏览")]),t._v(" "),a("li",[t._v("•来自"+t._s(t._f("tabF")(t.items)))])]),t._v(" "),a("p",{staticClass:"markdown-body topic_content",domProps:{innerHTML:t._s(t.items.content)}})]),t._v(" "),a("div",{attrs:{id:"reply"}},[a("ul",[a("div",{staticClass:"topbar"},[t._v("回复")]),t._v(" "),t._l(t.items.replies,function(e,n){return a("li",{key:e.id,staticClass:"replySec"},[a("router-link",{attrs:{to:{name:"details",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url}})]),t._v(" "),a("router-link",{attrs:{to:{name:"details",params:{name:e.author.loginname}}}},[a("span",[t._v(t._s(e.author.loginname))])]),t._v(" "),a("span",[t._v(t._s(n+1)+"楼")]),t._v(" "),a("span",[t._v(t._s(t._f("timeF")(e.create_at)))]),t._v(" "),a("span",[t._v("☝"+t._s(e.ups.length))]),t._v(" "),a("p",{staticClass:"markdown-body",domProps:{innerHTML:t._s(e.content)}})],1)})],2)])])},staticRenderFns:[]};var y=a("VU/8")(k,C,!1,function(t){a("gyS8")},null,null).exports;n.a.prototype.$http="axios";var F={name:"UseInfo",data:function(){return{item:{}}},methods:{geturl:function(){var t=this;o.a.get("https://cnodejs.org/api/v1/user/"+this.$route.params.name).then(function(e){!0===e.data.success&&(console.log(e.data.data),t.item=e.data.data)}).catch(function(t){console.log(t)})}},beforeMount:function(){this.geturl()}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"UseInfo"}},[a("div",{staticClass:"userInfomation"},[a("section",[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"postlist"},[t._v("主页")])]),t._v(" "),a("div",{staticClass:"lineH"},[a("img",{attrs:{src:t.item.avatar_url}}),t._v(" "),a("span",[t._v(t._s(t.item.loginname))])]),t._v(" "),a("p",[t._v(t._s(t.item.score)+"积分")]),t._v(" "),a("span",[t._v("注册时间 "+t._s(t._f("timeF")(t.item.create_at)))])],1),t._v(" "),a("div",{staticClass:"replies"},[a("p",[t._v("最近创建的话题")]),t._v(" "),a("ul",t._l(t.item.recent_topics,function(e){return a("li",{key:e.id},[a("img",{attrs:{src:e.author.avavtar_url}}),t._v(" "),a("router-link",{attrs:{to:{name:"postlist",params:{id:e.id}}}},[a("span",[t._v(t._s(e.title))])]),t._v(" "),a("span",[t._v(t._s(t._f("timeF")(e.last_reply_at)))])],1)}))]),t._v(" "),a("div",{staticClass:"topics"},[a("p",[t._v("最近参与的话题")]),t._v(" "),a("ul",t._l(t.item.recent_replies,function(e){return a("li",{key:e.id},[a("img",{attrs:{src:e.author.avavtar_url}}),t._v(" "),a("router-link",{attrs:{to:{name:"postlist",params:{id:e.id}}}},[a("span",[t._v(t._s(e.title))])]),t._v(" "),a("span",[t._v(t._s(t._f("timeF")(e.last_reply_at)))])],1)}))])])])},staticRenderFns:[]};var P=a("VU/8")(F,$,!1,function(t){a("Bk7k")},null,null).exports;n.a.prototype.$http="axios";var w={name:"SlideBar",data:function(){return{item:{}}},methods:{geturl:function(){var t=this;o.a.get("https://cnodejs.org/api/v1/user/"+this.$route.params.name).then(function(e){!0===e.data.success&&(console.log(e.data.data),t.item=e.data.data)}).catch(function(t){console.log(t)})}},computed:{slideslistone:function(){if(this.item.recent_topics)return this.item.recent_topics.splice(0,5)},slideslisttwo:function(){if(this.item.recent_replies)return this.item.recent_replies.splice(0,5)}},beforeMount:function(){this.geturl()},watch:{$route:function(t,e){this.geturl()}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"autherinfo",attrs:{id:"SlideBar"}},[a("div",{staticClass:"authersummay"},[a("div",{staticClass:"topbar"},[t._v("作者")]),t._v(" "),a("div",{staticClass:"imgss"},[a("img",{attrs:{src:t.item.avatar_url}}),t._v(" "),a("span",[t._v(t._s(t.item.loginname))])]),t._v(" "),a("p",[t._v("积分："+t._s(t.item.score))])]),t._v(" "),a("div",{staticClass:"recent_topics"},[a("div",{staticClass:"topbar"},[t._v("作者的其他话题")]),t._v(" "),a("ul",t._l(t.slideslistone,function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"postlist",params:{id:e.id,name:e.author.loginname}}}},[t._v("\n              "+t._s(e.title)+"\n          ")])],1)}))]),t._v(" "),a("div",{staticClass:"recent_replies"},[a("div",{staticClass:"topbar"},[t._v("作者的其他话题")]),t._v(" "),a("ul",t._l(t.slideslisttwo,function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"postlist",params:{id:e.id,name:e.author.loginname}}}},[t._v("\n              "+t._s(e.title)+"\n          ")])],1)}))])])},staticRenderFns:[]};var j=a("VU/8")(w,x,!1,function(t){a("Rldj")},"data-v-471dde46",null).exports;n.a.use(b.a);var E=new b.a({mode:"hash",routes:[{path:"/",components:{main:d}},{name:"postlist",path:"/topic/:id&author=:name",components:{main:y,slide:j}},{name:"details",path:"/user/:name",components:{main:P}}]}),I=a("NYxO");n.a.use(I.a);var U=new I.a.Store({state:{num:80},mutations:{increase:function(){this.state.num++},decrease:function(){this.state.num=this.state.num-10}},actions:{actionsIncrease:function(t){t.commit("increase")},actionsDecrease:function(t){t.commit("decrease")}},getters:{getNum:function(t){return t.num>0?t.num:0}}});a("ETNL");n.a.config.productionTip=!1,new n.a({el:"#app",router:E,store:U,components:{App:g},template:"<App/>"}),n.a.filter("timeF",function(t){if(!t)return"";var e=new Date(t),a=(new Date).getTime()-e.getTime();return a<0?"":a/1e3<30?"刚刚":a/1e3<60?parseInt(a/1e3)+"秒前":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"}),n.a.filter("tabF",function(t){return!0===t.good?"精华":!0===t.top?"置顶":"分享"})},Rldj:function(t,e){},UMaW:function(t,e){},foKb:function(t,e){},gyS8:function(t,e){},qeuC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b5a162f91c8b85112c69.js.map