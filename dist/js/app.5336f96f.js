(function(t){function s(s){for(var e,c,l=s[0],r=s[1],o=s[2],m=0,d=[];m<l.length;m++)c=l[m],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(s);while(d.length)d.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(e=!1)}e&&(n.splice(s--,1),t=c(c.s=a[0]))}return t}var e={},i={app:0},n=[];function c(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=e,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)c.d(a,e,function(s){return t[s]}.bind(null,e));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var o=0;o<l.length;o++)s(l[o]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"0dfd":function(t,s,a){},4678:function(t,s,a){var e={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var s=n(t);return a(s)}function n(t){if(!a.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}i.keys=function(){return Object.keys(e)},i.resolve=n,t.exports=i,i.id="4678"},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4");var e=a("8bbf"),i=a.n(e),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("top"),a("index")],1)},c=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"top-container"},[a("div",{staticClass:"left-box"},[a("div",{staticClass:"icon-wrapper"},[a("span",{staticClass:"iconfont icon-home",on:{click:function(s){return t.$router.replace("/")}}}),a("span",{staticClass:"iconfont icon-sami-select"}),a("span",{staticClass:"iconfont icon-full-screen"})]),a("div",{staticClass:"history-wrapper"},[a("span",{staticClass:"iconfont icon-arrow-lift",on:{click:function(s){return t.$router.go(-1)}}}),a("span",{staticClass:"iconfont icon-arrow-right",on:{click:function(s){return t.$router.go(1)}}})])]),a("div",{staticClass:"right-box"},[a("el-input",{attrs:{size:"small",placeholder:"搜索"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.toResult(s)}},model:{value:t.query,callback:function(s){t.query="string"===typeof s?s.trim():s},expression:"query"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)])},r=[],o={name:"top",data:function(){return{query:""}},methods:{toResult:function(){this.query?this.$router.push("/result?keywords=".concat(this.query)):this.$message.warning("请输入查询内容")}}},u=o,m=a("2877"),d=Object(m["a"])(u,l,r,!1,null,"55ca0c65",null),p=d.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-container"},[a("div",{staticClass:"nav"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/discovery"}},[a("span",{staticClass:"iconfont icon-find-music"}),t._v(" 发现音乐 ")])],1),a("li",[a("router-link",{attrs:{to:"/playlists"}},[a("span",{staticClass:"iconfont icon-music-list"}),t._v(" 推荐歌单 ")])],1),a("li",[a("router-link",{attrs:{to:"/songs"}},[a("span",{staticClass:"iconfont icon-music"}),t._v(" 最新音乐 ")])],1),a("li",[a("router-link",{attrs:{to:"/mvs"}},[a("span",{staticClass:"iconfont icon-mv"}),t._v(" 最新MV ")])],1)])]),a("div",{staticClass:"main"},[a("router-view")],1),a("div",{staticClass:"player"},[a("audio",{attrs:{controls:"",autoplay:"",src:t.url,loop:""}})])])},f=[],C={name:"index",data:function(){return{activeIndex:0,url:""}}},h=C,_=Object(m["a"])(h,v,f,!1,null,null,null),b=_.exports,g={name:"app",components:{top:p,index:b}},y=g,j=Object(m["a"])(y,n,c,!1,null,null,null),k=j.exports,w=(a("0fb7"),a("450d"),a("f529")),x=a.n(w),$=(a("e612"),a("dd87")),D=a.n($),M=(a("075a"),a("72aa")),z=a.n(M),U=(a("672e"),a("101e")),O=a.n(U),L=(a("5466"),a("ecdf")),I=a.n(L),R=(a("38a0"),a("ad41")),T=a.n(R),q=(a("186a"),a("301f")),N=a.n(q),V=(a("96dc"),a("9cea")),P=a.n(V),E=(a("be4f"),a("896a")),Y=a.n(E),S=(a("10cb"),a("f3ad")),A=a.n(S),G={install:function(t){t.use(A.a),t.use(Y.a),t.use(P.a),t.use(N.a),t.use(T.a),t.use(I.a),t.use(O.a),t.use(z.a),t.use(D.a),t.prototype.$message=x.a}},J=(a("0dfd"),a("6389")),F=a.n(J),B=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"discovery-container"},[a("el-carousel",{attrs:{interval:4e3,type:"card"}},t._l(t.banners,(function(t,s){return a("el-carousel-item",{key:s},[a("img",{attrs:{src:t.imageUrl,alt:""}})])})),1),a("div",{staticClass:"recommend"},[a("h3",{staticClass:"title"},[t._v(" 推荐歌单 ")]),a("div",{staticClass:"items"},t._l(t.playList,(function(s){return a("div",{key:s.id,staticClass:"item"},[a("div",{staticClass:"img-wrap",on:{click:function(a){return t.toPlayList(s.id)}}},[a("div",{staticClass:"desc-wrap"},[a("span",{staticClass:"desc"},[t._v(t._s(s.copywriter))])]),a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)]),a("div",{staticClass:"news"},[a("h3",{staticClass:"title"},[t._v(" 最新音乐 ")]),a("div",{staticClass:"items"},t._l(t.newsong,(function(s,e){return a("div",{key:e,staticClass:"item"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play",on:{click:function(a){return t.playMusic(s.id)}}})]),a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"song-name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.song.artists[0].name))])])])})),0)]),a("div",{staticClass:"mvs"},[a("h3",{staticClass:"title"},[t._v("推荐MV")]),a("div",{staticClass:"items"},t._l(t.mv,(function(s){return a("div",{key:s.id,staticClass:"item"},[a("div",{staticClass:"img-wrap",on:{click:function(a){return t.toMv(s.id)}}},[a("img",{attrs:{src:s.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(s.playCount))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.copywriter))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])],1)},H=[],K=(a("d3b7"),a("cebe")),Q=a.n(K),W=Q.a.create({baseURL:"https://autumnfish.cn",timeout:3e4});W.interceptors.request.use((function(t){return t.params||(t.params={}),t.params.t=Date.now(),t}),(function(t){return Promise.reject(t)})),W.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var X=W;function Z(){return X({url:"/banner",method:"get"})}function tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=t.limit,a=void 0===s?10:s;return X({url:"/personalized",method:"get",params:{limit:a}})}function st(){return X({url:"/personalized/newsong",method:"get"})}function at(){return X({url:"/personalized/mv",method:"get"})}function et(t){var s=t.id;return X({url:"/song/url",method:"get",params:{id:s}})}var it={name:"discovery",data:function(){return{banners:[],playList:[],newsong:[],mv:[],songUrl:""}},created:function(){var t=this;Z().then((function(s){t.banners=s.banners})),tt().then((function(s){t.playList=s.result})),st().then((function(s){t.newsong=s.result})),at().then((function(s){t.mv=s.result}))},methods:{toMv:function(t){this.$router.push("/mv?id=".concat(t))},toPlayList:function(t){this.$router.push("/playlist?id=".concat(t))},playMusic:function(t){var s=this;et({id:t}).then((function(t){s.$parent.url=t.data[0].url}))}}},nt=it,ct=Object(m["a"])(nt,B,H,!1,null,null,null),lt=ct.exports,rt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"playlists-container"},[t.listName?a("div",{staticClass:"top-card"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:t.listCover,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"tag"},[t._v("精品歌单")]),a("div",{staticClass:"title"},[t._v(" "+t._s(t.listName)+" ")]),a("div",{staticClass:"info"},[t._v(t._s(t.listDesc))])]),a("img",{staticClass:"bg",attrs:{src:t.listCover,alt:""}}),a("div",{staticClass:"bg-mask"})]):t._e(),a("div",{staticClass:"tab-container"},[a("div",{staticClass:"tab-bar"},[a("span",{staticClass:"item",class:{active:"全部"==t.cat},on:{click:function(s){t.cat="全部"}}},[t._v("全部")]),a("span",{staticClass:"item",class:{active:"欧美"==t.cat},on:{click:function(s){t.cat="欧美"}}},[t._v("欧美")]),a("span",{staticClass:"item",class:{active:"华语"==t.cat},on:{click:function(s){t.cat="华语"}}},[t._v("华语")]),a("span",{staticClass:"item",class:{active:"流行"==t.cat},on:{click:function(s){t.cat="流行"}}},[t._v("流行")]),a("span",{staticClass:"item",class:{active:"说唱"==t.cat},on:{click:function(s){t.cat="说唱"}}},[t._v("说唱")]),a("span",{staticClass:"item",class:{active:"摇滚"==t.cat},on:{click:function(s){t.cat="摇滚"}}},[t._v("摇滚")]),a("span",{staticClass:"item",class:{active:"民谣"==t.cat},on:{click:function(s){t.cat="民谣"}}},[t._v("民谣")]),a("span",{staticClass:"item",class:{active:"电子"==t.cat},on:{click:function(s){t.cat="电子"}}},[t._v("电子")]),a("span",{staticClass:"item",class:{active:"轻音乐"==t.cat},on:{click:function(s){t.cat="轻音乐"}}},[t._v("轻音乐")]),a("span",{staticClass:"item",class:{active:"影视原声"==t.cat},on:{click:function(s){t.cat="影视原声"}}},[t._v("影视原声")]),a("span",{staticClass:"item",class:{active:"ACG"==t.cat},on:{click:function(s){t.cat="ACG"}}},[t._v("ACG")]),a("span",{staticClass:"item",class:{active:"怀旧"==t.cat},on:{click:function(s){t.cat="怀旧"}}},[t._v("怀旧")]),a("span",{staticClass:"item",class:{active:"治愈"==t.cat},on:{click:function(s){t.cat="治愈"}}},[t._v("治愈")]),a("span",{staticClass:"item",class:{active:"旅行"==t.cat},on:{click:function(s){t.cat="旅行"}}},[t._v("旅行")])]),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"items"},t._l(t.playList,(function(s,e){return a("div",{key:e,staticClass:"item",on:{click:function(a){return t.toPlayList(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),a("span",{staticClass:"num"},[t._v(t._s(t._f("formatCount")(s.playCount)))])]),a("img",{attrs:{src:s.coverImgUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.description))])])})),0)])]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":10,"current-page":t.page},on:{"current-change":t.handleCurrentChange}})],1)},ot=[];a("b0c0"),a("a4d3"),a("e01a");function ut(t){var s=t.cat;return X({url:"/top/playlist/highquality",method:"get",params:{limit:1,cat:s}})}function mt(t){var s=t.cat,a=t.offset;return X({url:"/top/playlist",method:"get",params:{limit:10,offset:a,cat:s}})}var dt={name:"recommend",data:function(){return{cat:"全部",listName:"",listDesc:"",listCover:"",total:0,page:1,playList:[]}},watch:{cat:function(){this.getData()}},created:function(){this.getData()},methods:{toPlayList:function(t){this.$router.push("/playlist?id=".concat(t))},getData:function(){var t=this;ut({cat:this.cat}).then((function(s){0!=s.playlists.length?(t.listName=s.playlists[0].name,t.listDesc=s.playlists[0].description,t.listCover=s.playlists[0].coverImgUrl):t.listName=""})),mt({cat:this.cat,offset:10*(this.page-1)}).then((function(s){t.playList=s.playlists,t.total=s.total}))},handleCurrentChange:function(t){this.page=t,this.getData()}}},pt=dt,vt=Object(m["a"])(pt,rt,ot,!1,null,null,null),ft=vt.exports,Ct=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"playlist-container"},[a("div",{staticClass:"top-wrap"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.coverImgUrl,alt:""}})]),a("div",{staticClass:"info-wrap"},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"author-wrap"},[a("img",{staticClass:"avatar",attrs:{src:t.avatarUrl,alt:""}}),a("span",{staticClass:"name"},[t._v(t._s(t.nickname))]),a("span",{staticClass:"time"},[t._v(t._s(t.createTime)+" 创建")])]),a("div",{staticClass:"tag-wrap"},[a("span",{staticClass:"title"},[t._v("标签:")]),a("ul",t._l(t.tags,(function(s){return a("li",{key:s},[t._v(t._s(s))])})),0)]),a("div",{staticClass:"desc-wrap"},[a("span",{staticClass:"title"},[t._v("简介:")]),a("span",{staticClass:"desc"},[t._v(t._s(t.signature))])])])]),a("el-tabs",{model:{value:t.activeIndex,callback:function(s){t.activeIndex=s},expression:"activeIndex"}},[a("el-tab-pane",{attrs:{label:"歌曲列表",name:"1"}},[a("table",{staticClass:"el-table playlit-table"},[a("thead",[a("th"),a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.tableData,(function(s,e){return a("tr",{key:s.id,staticClass:"el-table__row"},[a("td",[t._v(t._s(e+1))]),a("td",[a("div",{staticClass:"img-wrap",on:{click:function(a){return t.playMusic(s.id)}}},[a("img",{attrs:{src:s.al.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})])]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(s.name))]),0!=s.mv?a("span",{staticClass:"iconfont icon-mv",on:{click:function(a){return t.toMV(s.mv)}}}):t._e()]),a("span",[t._v(t._s(s.subTitle))])])]),a("td",[t._v(t._s(s.ar[0].name))]),a("td",[t._v(" "+t._s(s.al.name)+" ")]),a("td",[t._v(t._s(t._f("formatDuration")(s.dt)))])])})),0)])]),a("el-tab-pane",{attrs:{label:"评论("+(t.total+t.hotComments.length)+")",name:"2"}},[0!=t.hotComments.length?a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 热门评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.hotComments.length)+")")])]),t._l(t.hotComments,(function(s){return a("div",{key:s.commentId,staticClass:"comments-wrap"},[a("div",{staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("formatTime")(s.time)))])])])])}))],2):t._e(),a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),0!=t.comments.length?a("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(s){return a("div",{key:s.commentId,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("formatTime")(s.time)))])])])})),0):t._e()]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},ht=[];function _t(t){var s=t.id;return X({url:"/playlist/detail",method:"get",params:{id:s}})}function bt(t){var s=t.id;return X({url:"/comment/hot",method:"get",params:{type:2,id:s}})}function gt(t){var s=t.id,a=t.offset;return X({url:"/comment/playlist",method:"get",params:{id:s,limit:5,offset:a}})}var yt=a("c1df"),jt=a.n(yt),kt={name:"playlist",data:function(){return{activeIndex:"1",tableData:[],title:"",avatarUrl:"",coverImgUrl:"",signature:"",nickname:"",tags:[],createTime:"",hotComments:[],comments:[],limit:20,page:1,total:0}},filters:{},created:function(){var t=this,s=this.$route.query.id;_t({id:s}).then((function(s){t.tableData=s.playlist.tracks,t.title=s.playlist.name,t.avatarUrl=s.playlist.creator.avatarUrl,t.coverImgUrl=s.playlist.coverImgUrl,t.signature=s.playlist.creator.signature,t.nickname=s.playlist.creator.nickname,t.tags=s.playlist.tags,t.createTime=jt()(s.playlist.createTime).format("YYYY-MM-DD")})),bt({id:s}).then((function(s){t.hotComments=s.hotComments})),this.getComments()},methods:{toMV:function(t){this.$router.push("/mv?id=".concat(t))},getComments:function(){var t=this,s=this.$route.query.id;gt({id:s,offset:5*(this.page-1)}).then((function(s){t.total=s.total,t.comments=s.comments}))},handleCurrentChange:function(t){this.page=t,this.getComments()},playMusic:function(t){var s=this;et({id:t}).then((function(t){s.$parent.url=t.data[0].url}))}}},wt=kt,xt=Object(m["a"])(wt,Ct,ht,!1,null,null,null),$t=xt.exports,Dt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"songs-container"},[a("div",{staticClass:"tab-bar"},[a("span",{staticClass:"item",class:{active:0==t.type},on:{click:function(s){t.type=0}}},[t._v("全部")]),a("span",{staticClass:"item",class:{active:7==t.type},on:{click:function(s){t.type=7}}},[t._v("华语")]),a("span",{staticClass:"item",class:{active:96==t.type},on:{click:function(s){t.type=96}}},[t._v("欧美")]),a("span",{staticClass:"item",class:{active:8==t.type},on:{click:function(s){t.type=8}}},[t._v("日本")]),a("span",{staticClass:"item",class:{active:16==t.type},on:{click:function(s){t.type=16}}},[t._v("韩国")])]),a("table",{staticClass:"el-table playlit-table"},[t._m(0),a("tbody",t._l(t.tableData,(function(s,e){return a("tr",{key:s.id,staticClass:"el-table__row"},[a("td",[t._v(t._s(e+1))]),a("td",[a("div",{staticClass:"img-wrap",on:{click:function(a){return t.playMusic(s.id)}}},[a("img",{attrs:{src:s.album.picUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})])]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",[t._v(t._s(s.name))]),0!=s.mvid?a("span",{staticClass:"iconfont icon-mv",on:{click:function(a){return t.toMV(s.mvid)}}}):t._e()]),a("span",[t._v(t._s(s.subTitle))])])]),a("td",[t._v(t._s(s.artists[0].name))]),a("td",[t._v(" "+t._s(s.album.name)+" ")]),a("td",[t._v(t._s(t._f("formatDuration")(s.duration)))])])})),0)])])},Mt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("th"),a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])])}];function zt(t){var s=t.type;return X({url:"/top/song",method:"get",params:{type:s}})}var Ut={name:"songs",data:function(){return{type:0,tableData:[]}},methods:{toMV:function(t){this.$router.push("/mv?id=".concat(t))},getData:function(){var t=this;zt({type:this.type}).then((function(s){t.tableData=s.data}))},playMusic:function(t){var s=this;et({id:t}).then((function(t){s.$parent.url=t.data[0].url}))}},watch:{type:function(){this.getData()}},created:function(){this.getData()}},Ot=Ut,Lt=Object(m["a"])(Ot,Dt,Mt,!1,null,null,null),It=Lt.exports,Rt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mvs-container"},[a("div",{staticClass:"filter-wrap"},[a("div",{staticClass:"seciton-wrap"},[a("span",{staticClass:"section-type"},[t._v("地区:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"全部"==t.area},on:{click:function(s){t.area="全部"}}},[t._v("全部")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"内地"==t.area},on:{click:function(s){t.area="内地"}}},[t._v("内地")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"港台"==t.area},on:{click:function(s){t.area="港台"}}},[t._v("港台")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"欧美"==t.area},on:{click:function(s){t.area="欧美"}}},[t._v("欧美")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"日本"==t.area},on:{click:function(s){t.area="日本"}}},[t._v("日本")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"韩国"==t.area},on:{click:function(s){t.area="韩国"}}},[t._v("韩国")])])])]),a("div",{staticClass:"type-wrap"},[a("span",{staticClass:"type-type"},[t._v("类型:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"全部"==t.type},on:{click:function(s){t.type="全部"}}},[t._v("全部")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"官方版"==t.type},on:{click:function(s){t.type="官方版"}}},[t._v("官方版")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"原声"==t.type},on:{click:function(s){t.type="原声"}}},[t._v("原声")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"现场版"==t.type},on:{click:function(s){t.type="现场版"}}},[t._v("现场版")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"网易出品"==t.type},on:{click:function(s){t.type="网易出品"}}},[t._v("网易出品")])])])]),a("div",{staticClass:"order-wrap"},[a("span",{staticClass:"order-type"},[t._v("排序:")]),a("ul",{staticClass:"tabs-wrap"},[a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"上升最快"==t.order},on:{click:function(s){t.order="上升最快"}}},[t._v("上升最快")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"最热"==t.order},on:{click:function(s){t.order="最热"}}},[t._v("最热")])]),a("li",{staticClass:"tab"},[a("span",{staticClass:"title",class:{active:"最新"==t.order},on:{click:function(s){t.order="最新"}}},[t._v("最新")])])])])]),a("div",{staticClass:"mvs"},[a("div",{staticClass:"items"},t._l(t.mvList,(function(s){return a("div",{key:s.id,staticClass:"item",on:{click:function(a){return t.toMv(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(t._f("formatCount")(s.playCount)))])])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artisetName))])])])})),0),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1)])},Tt=[];function qt(t){var s=t.area,a=t.order,e=t.type,i=t.offset;return X({url:"/mv/all",method:"get",params:{limit:12,area:s,order:a,type:e,offset:i}})}var Nt={name:"mvs",data:function(){return{area:"全部",type:"全部",order:"上升最快",limit:12,page:1,total:0,mvList:[]}},created:function(){this.getData()},watch:{area:[function(){this.page=1},"getData"],type:[function(){this.page=1},"getData"],order:[function(){this.page=1},"getData"]},methods:{handleCurrentChange:function(t){this.page=t,this.getData()},getData:function(){var t=this,s=this.area,a=this.type,e=this.order;qt({area:s,type:a,order:e,offset:(this.page-1)*this.limit}).then((function(s){t.mvList=s.data,s.count&&(t.total=s.count)}))},toMv:function(t){this.$router.push("/mv?id=".concat(t))}}},Vt=Nt,Pt=Object(m["a"])(Vt,Rt,Tt,!1,null,null,null),Et=Pt.exports,Yt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mv-container"},[a("div",{staticClass:"mv-wrap"},[a("h3",{staticClass:"title"},[t._v("mv详情")]),a("div",{staticClass:"video-wrap"},[a("video",{attrs:{controls:"",src:t.mvUrl}})]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"singer-info"},[a("div",{staticClass:"avatar-wrap"},[a("img",{attrs:{src:t.artistCover,alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(t.artistName))])]),a("div",{staticClass:"mv-info"},[a("h2",{staticClass:"title"},[t._v(t._s(t.mvName))]),a("span",{staticClass:"date"},[t._v("发布："+t._s(t.publishTime))]),a("span",{staticClass:"number"},[t._v("播放："+t._s(t._f("formatCount")(t.playCount))+"次")]),a("p",{staticClass:"desc"},[t._v(t._s(t.desc))])])]),0!=t.hotComments.length?a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 热门评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.hotComments.length)+")")])]),t._l(t.hotComments,(function(s){return a("div",{key:s.commentId,staticClass:"comments-wrap"},[a("div",{staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("formatTime")(s.time)))])])])])}))],2):t._e(),0!=t.comments.length?a("div",{staticClass:"comment-wrap"},[a("p",{staticClass:"title"},[t._v(" 最新评论"),a("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),a("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(s){return a("div",{key:s.commentId,staticClass:"item"},[a("div",{staticClass:"icon-wrap"},[a("img",{attrs:{src:s.user.avatarUrl,alt:""}})]),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("span",{staticClass:"name"},[t._v(t._s(s.user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.content))])]),0!=s.beReplied.length?a("div",{staticClass:"re-content"},[a("span",{staticClass:"name"},[t._v(t._s(s.beReplied[0].user.nickname)+"：")]),a("span",{staticClass:"comment"},[t._v(t._s(s.beReplied[0].content))])]):t._e(),a("div",{staticClass:"date"},[t._v(t._s(t._f("formatTime")(s.time)))])])])})),0)]):t._e(),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"mv-recommend"},[a("h3",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"mvs"},t._l(t.simiMV,(function(s){return a("div",{key:s.id,staticClass:"items"},[a("div",{staticClass:"item",on:{click:function(a){return t.toMV(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(t._f("formatCount")(s.playCount)))])]),a("span",{staticClass:"time"},[t._v(t._s(t._f("formatDuration")(s.duration)))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])])})),0)])])},St=[];function At(t){var s=t.id;return X({url:"/mv/url",method:"get",params:{id:s}})}function Gt(t){var s=t.mvid;return X({url:"/simi/mv",method:"get",params:{mvid:s}})}function Jt(t){var s=t.id,a=t.offset;return X({url:"/comment/mv",method:"get",params:{id:s,limit:5,offset:a}})}function Ft(t){var s=t.mvid;return X({url:"/mv/detail",method:"get",params:{mvid:s}})}function Bt(t){var s=t.artistId;return X({url:"/artists",method:"get",params:{id:s}})}var Ht={name:"mv",data:function(){return{mvUrl:"",simiMV:[],hotComments:[],comments:[],limit:20,page:1,total:0,mvName:"",playCount:"",publishTime:"",desc:"",artistName:"",artistCover:""}},methods:{handleCurrentChange:function(t){this.page=t,this.getComments()},getComments:function(){var t=this,s=this.$route.query.id;Jt({id:s,offset:5*(this.page-1)}).then((function(s){s.hotComments&&(t.hotComments=s.hotComments),t.comments=s.comments,t.total=s.total}))},getInfo:function(){var t=this,s=this.$route.query.id;At({id:s}).then((function(s){t.mvUrl=s.data.url})),Gt({mvid:s}).then((function(s){t.simiMV=s.mvs})),this.getComments(),Ft({mvid:s}).then((function(s){t.mvName=s.data.name,t.playCount=s.data.playCount,t.publishTime=s.data.publishTime,t.desc=s.data.desc,Bt({artistId:s.data.artistId}).then((function(s){t.artistName=s.artist.name,t.artistCover=s.artist.picUrl}))}))},toMV:function(t){this.$router.push("/mv?id=".concat(t))}},watch:{"$route.query.id":function(){this.page=1,this.getInfo()}},created:function(){this.getInfo()}},Kt=Ht,Qt=Object(m["a"])(Kt,Yt,St,!1,null,null,null),Wt=Qt.exports,Xt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"container",staticClass:"result-container"},[a("div",{staticClass:"title-wrap"},[a("h2",{staticClass:"title"},[t._v(t._s(t.$route.query.keywords))]),a("span",{staticClass:"sub-title"},[t._v("找到"+t._s(t.total)+"个结果")])]),a("el-tabs",{model:{value:t.type,callback:function(s){t.type=s},expression:"type"}},[a("el-tab-pane",{attrs:{label:"歌曲",name:"1"}},[a("table",{staticClass:"el-table"},[a("thead",[a("th"),a("th",[t._v("音乐标题")]),a("th",[t._v("歌手")]),a("th",[t._v("专辑")]),a("th",[t._v("时长")])]),a("tbody",t._l(t.songList,(function(s,e){return a("tr",{key:s.id,staticClass:"el-table__row",on:{dblclick:function(a){return t.rowDbclick(s.id)}}},[a("td",[t._v(t._s(e+1))]),a("td",[a("div",{staticClass:"song-wrap"},[a("div",{staticClass:"name-wrap"},[a("span",{staticClass:"name"},[t._v(t._s(s.name))]),0!=s.mvid?a("span",{staticClass:"iconfont icon-mv",on:{click:function(a){return t.toMV(s.mvid)}}}):t._e()]),0!=s.alias.length?a("span",{staticClass:"sub-name"},[t._v(t._s(s.alias[0]))]):t._e()])]),a("td",[t._v(t._s(s.artists[0].name))]),a("td",[t._v(t._s(s.album.name))]),a("td",[t._v(t._s(t._f("formatDuration")(s.duration)))])])})),0)])]),a("el-tab-pane",{attrs:{label:"歌单",name:"1000"}},[a("div",{staticClass:"items"},t._l(t.playList,(function(s){return a("div",{key:s.id,staticClass:"item",on:{click:function(a){return t.toPlaylist(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),a("span",{staticClass:"num"},[t._v(t._s(t._f("formatCount")(s.playCount)))])]),a("img",{attrs:{src:s.coverImgUrl,alt:""}}),a("span",{staticClass:"iconfont icon-play"})]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)]),a("el-tab-pane",{attrs:{label:"MV",name:"1004"}},[a("div",{staticClass:"items mv"},t._l(t.mvList,(function(s){return a("div",{key:s.id,staticClass:"item",on:{click:function(a){return t.toMV(s.id)}}},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:s.cover,alt:""}}),a("span",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num-wrap"},[a("div",{staticClass:"iconfont icon-play"}),a("div",{staticClass:"num"},[t._v(t._s(t._f("formatCount")(s.playCount)))])]),a("span",{staticClass:"time"},[t._v(t._s(t._f("formatDuration")(s.duration)))])]),a("div",{staticClass:"info-wrap"},[a("div",{staticClass:"name"},[t._v(t._s(s.name))]),a("div",{staticClass:"singer"},[t._v(t._s(s.artistName))])])])})),0)])],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":t.limit},on:{"current-change":t.handleCurrentChange}})],1)},Zt=[];function ts(t){var s=t.keywords,a=t.limit,e=t.offset,i=t.type;return X({url:"/search",method:"get",params:{keywords:s,limit:a,offset:e,type:i}})}var ss={name:"result",data:function(){return{type:"1",limit:15,page:1,total:0,songList:[],playList:[],mvList:[]}},watch:{type:[function(){this.limit="1004"==this.type?12:15},"searchResult"],"$route.query.keywords":"searchResult"},created:function(){this.searchResult()},methods:{toPlaylist:function(t){this.$router.push("/playlist?id=".concat(t))},rowDbclick:function(t){var s=this;et({id:t}).then((function(t){s.$parent.url=t.data[0].url}))},toMV:function(t){this.$router.push("/mv?id=".concat(t))},handleCurrentChange:function(t){this.page=t,this.searchResult()},searchResult:function(){var t=this,s=this.limit,a=this.type,e=this.$route.query.keywords;ts({limit:s,type:a,keywords:e,offset:(this.page-1)*s}).then((function(s){switch(t.type){case"1":t.songList=s.result.songs,t.total=s.result.songCount;break;case"1000":t.playList=s.result.playlists,t.total=s.result.playlistCount;break;default:t.mvList=s.result.mvs,t.total=s.result.mvCount;break}}))}}},as=ss,es=Object(m["a"])(as,Xt,Zt,!1,null,null,null),is=es.exports;i.a.use(G),i.a.use(F.a);var ns=new F.a({routes:[{path:"/",redirect:"/discovery"},{path:"/discovery",component:lt},{path:"/playlists",component:ft},{path:"/playlist",component:$t},{path:"/songs",component:It},{path:"/mvs",component:Et},{path:"/mv",component:Wt},{path:"/result",component:is}]});i.a.filter("formatDuration",(function(t){var s=Math.ceil(t/1e3/60);s=s<10?"0"+s:s;var a=Math.ceil(t/1e3%60);return a=a<10?"0"+a:a,s+":"+a})),i.a.filter("formatTime",(function(t){return jt()(t).format("YYYY-MM-DD hh:mm:ss")})),i.a.filter("formatCount",(function(t){return t/1e4>10?parseInt(t/1e4)+"万":t})),i.a.config.productionTip=!1,new i.a({render:function(t){return t(k)},router:ns}).$mount("#app")},6389:function(t,s){t.exports=VueRouter},"8bbf":function(t,s){t.exports=Vue},cebe:function(t,s){t.exports=axios}});