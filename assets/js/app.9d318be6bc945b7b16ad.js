webpackJsonp([2],{"+df7":function(t,e){},"/Ug9":function(t,e){},FhoZ:function(t,e,n){"use strict";(function(e){const r=n("z0pV");t.exports={build:{env:n("rBKV"),index:r.resolve(e,"../index.html"),assetsRoot:r.resolve(e,"../"),assetsSubDirectory:"assets",assetsPublicPath:"/gitstars/",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report},dev:{env:n("dhIU"),port:Object({NODE_ENV:"production"}).PORT||7909,autoOpenBrowser:!0,assetsSubDirectory:"assets",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1}}}).call(e,"/")},KXyA:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3cXf"),s=n.n(r),o=n("lC5x"),a=n.n(o),i=n("J0Oq"),c=n.n(i),u=n("rVsN"),l=n.n(u),p=n("WI2Y"),d=(n.n(p),n("UE+h")),f=n.n(d),g=n("+df7"),w=(n.n(g),n("NozZ")),h=n.n(w),b=n("phLq"),m=(n.n(b),n("UiYZ")),v=n.n(m),_=n("KXyA"),x=(n.n(_),n("NRF6")),y=n.n(x),N=n("XYun"),O=(n.n(N),n("dWv6")),S=n.n(O),k=n("wul6"),I=(n.n(k),n("/Ug9")),E=(n.n(I),n("sFR4")),j=n.n(E),V=n("lRwf"),U=n.n(V),R=n("rQBB"),B=n("n5Qe"),z=n("QmSG"),T=this;U.a.config.productionTip=!1,U.a.use(j.a),U.a.use(S.a),U.a.use(y.a),U.a.use(v.a),U.a.use(h.a),U.a.prototype.$notify=f.a;var Y=z.a.clientId,D=z.a.clientSecret;new l.a(function(){var t=c()(a.a.mark(function t(e,n){var r,s,o,i,c,u,l,p;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=window.localStorage.getItem("gitstars_access_token"))){t.next=3;break}return t.abrupt("return",e(r));case 3:if(s=window.localStorage.getItem("gitstars_code"),o=Object(R.a)(),i=o.code,!(c=s||i)){t.next=17;break}return s||window.localStorage.setItem("gitstars_code",c),i&&(u=window.location.href.replace(/code=[^&]+/,""),"?"===u[u.length-1]&&(u=u.slice(0,-1)),window.history.replaceState({},null,""+u)),t.next=11,Object(B.b)({code:c,client_id:Y,client_secret:D});case 11:l=t.sent,p=l.access_token,window.localStorage.setItem("gitstars_access_token",p),e(p),t.next=18;break;case 17:window.location.href="https://github.com/login/oauth/authorize?client_id="+Y+"&scope=gist";case 18:case"end":return t.stop()}},t,T)}));return function(e,n){return t.apply(this,arguments)}}()).then(function(){var t=c()(a.a.mark(function t(e){var r,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(window._gitstars={accessToken:e},!(r=window.localStorage.getItem("gitstars_user"))){t.next=6;break}t.t0=JSON.parse(r),t.next=9;break;case 6:return t.next=8,Object(B.h)();case 8:t.t0=t.sent;case 9:window._gitstars.user=t.t0,r||window.localStorage.setItem("gitstars_user",s()(window._gitstars.user)),o=function(){return n.e(0).then(n.bind(null,"M93x"))},new U.a({el:"#app",template:"<App/>",components:{App:o}});case 13:case"end":return t.stop()}},t,T)}));return function(e){return t.apply(this,arguments)}}())},OMN4:function(t,e){t.exports=axios},QmSG:function(t,e,n){"use strict";e.a={clientId:"75cf00b02deb33e63424",clientSecret:"6fa564cbd46f6bdfa1fb81ddce5503dcbe4ab4c4",filename:"gitstars.json",description:"github stars manager for production"}},WI2Y:function(t,e){},XYun:function(t,e){},dhIU:function(t,e,n){"use strict";const r=n("/mjE"),s=n("rBKV");t.exports=r(s,{NODE_ENV:'"development"'})},lRwf:function(t,e){t.exports=Vue},n5Qe:function(t,e,n){"use strict";function r(t){return N.a.post("https://gh-oauth.imsun.net",t)}function s(){return N.a.get("/user")}function o(){return N.a.post("/gists",{description:I,public:!0,files:f()({},k,{content:w()([])})})}function a(t){return N.a.get("/gists/"+t)}function i(){return N.a.get("/users/"+window._gitstars.user.login+"/gists")}function c(t){return N.a.get("/users/"+window._gitstars.user.login+"/starred?&page="+t+"&per_page=100")}function u(t,e){return N.a.get("/repos/"+t+"/"+e+"/readme")}function l(t){return N()({data:t,url:"/markdown/raw",method:"post",headers:{"Content-Type":"text/plain"}})}function p(t,e){return N.a.patch("/gists/"+t,{files:f()({},k,{content:w()(e)})})}e.b=r,e.h=s,e.a=o,e.c=a,e.g=i,e.f=c,e.e=u,e.d=l,e.i=p;var d=n("a3Yh"),f=n.n(d),g=n("3cXf"),w=n.n(g),h=n("WI2Y"),b=(n.n(h),n("/Ug9")),m=(n.n(b),n("UE+h")),v=n.n(m),_=n("rVsN"),x=n.n(_),y=n("OMN4"),N=n.n(y),O=n("FhoZ"),S=n.n(O);N.a.defaults.baseURL="https://api.github.com",N.a.interceptors.request.use(function(t){return t.url.includes("http")?t:(t.url+=t.url.includes("?")?"&":"?",t.url+="access_token="+window._gitstars.accessToken,t)},function(t){return x.a.reject(t)}),N.a.interceptors.response.use(function(t){return t.data},function(t){var e=t.message,n=t.response,r=void 0===n?{}:n,s=r.status,o=r.statusText,a=r.data;return a&&(e=a.message),v.a.error({message:e,title:s+" "+o,showClose:!1}),x.a.reject(t)});var k=S.a.filename,I=S.a.description},phLq:function(t,e){},rBKV:function(t,e,n){"use strict";t.exports={NODE_ENV:'"production"'}},rQBB:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.search,e={};if(!t.length)return e;"?"===t[0]&&(t=t.slice(1));var n=t.split("&"),r=!0,s=!1,a=void 0;try{for(var i,c=o()(n);!(r=(i=c.next()).done);r=!0){var u=i.value,l=u.split("=");e[l[0]]=decodeURIComponent(l[1])}}catch(t){s=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(s)throw a}}return e}e.a=r;var s=n("HzJ8"),o=n.n(s)},wul6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9d318be6bc945b7b16ad.js.map