(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[1],{288:function(t,e,n){"use strict";n.r(e);var r=n(29),a=n.n(r),i=n(12),c=n(0),o=n(64),u=n.n(o),p=n(2),s={direction:"ltr",responsiveFontSizes:!0,theme:"light"},x=Object(c.createContext)({settings:s,saveSettings:function(){}}),b=function(t){var e=t.settings,n=t.children,r=Object(c.useState)(e||s),a=Object(i.a)(r,2),o=a[0],b=a[1],l=function(t){window.localStorage.setItem("settings",JSON.stringify(t))};return Object(c.useEffect)((function(){var t=function(){var t=null;try{var e=window.localStorage.getItem("settings");e&&(t=JSON.parse(e))}catch(n){console.error(n)}return t}();t&&b(t)}),[]),Object(c.useEffect)((function(){document.dir=o.direction}),[o]),Object(p.jsx)(x.Provider,{value:{settings:o,saveSettings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=u.a.merge({},o,t);b(e),l(e)}},children:n})},l=n(336),g=n(55),d=n(65),h=n(36),j=n(237),f=n(332),v={direction:"ltr",typography:{h1:{fontWeight:10,fontSize:80,letterSpacing:"-0.24px"},h2:{fontWeight:10,fontSize:30,letterSpacing:"-0.24px"},h3:{fontWeight:10,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:24,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}}},O=[{palette:{background:{default:h.a.common.white,paper:"#EEF6FB"},primary:{main:"#5FB0E8"},secondary:{main:"#0b4b78"},text:{primary:h.a.blueGrey[900],secondary:h.a.blueGrey[600]}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"]}],m=n(18),y=n(15),w=n(11),S=n(86),k=n.n(S),W=n(333),z=n(334),E=function(){return Object(c.useEffect)((function(){return k.a.start(),function(){k.a.done()}}),[]),Object(p.jsx)(W.a,{sx:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",minHeight:"100%",padding:function(t){return t.spacing(3)}},children:Object(p.jsx)(W.a,{width:400,children:Object(p.jsx)(z.a,{})})})},F=n(330),C=n(329),P=n(335),L=n(326),M=n(47),I=n(45),J={path:function(){return"/public/montreal"},component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,343))})),providers:[function(t){var e=Object.assign({},(Object(M.a)(t),t));return Object(I.a)(Object(m.a)({city:"montreal"},e))}]},B={path:function(){return"/public/toronto"},component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,344))})),providers:[function(t){var e=Object.assign({},(Object(M.a)(t),t));return Object(I.a)(Object(m.a)({city:"toronto"},e))}]},D={path:function(){return"/public/ottawa"},component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,345))})),providers:[function(t){var e=Object.assign({},(Object(M.a)(t),t));return Object(I.a)(Object(m.a)({city:"ottawa"},e))}]},N=Object(L.a)((function(t){return{activeMenu:{color:t.palette.primary.main}}})),T=function(){var t=N(),e=[{title:"Montreal",link:J.path()},{title:"Toronto",link:B.path()},{title:"Ottawa",link:D.path()}];return Object(p.jsx)(W.a,{display:"flex",children:e.map((function(e){return Object(p.jsx)(W.a,{p:2,children:Object(p.jsx)(C.a,{sx:{color:function(t){return t.palette.text.secondary},padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:function(t){return t.typography.fontWeightLight}},component:g.b,activeClassName:t.activeMenu,to:e.link,children:Object(p.jsx)(P.a,{variant:"h2",children:e.title})})},e.link)}))})},q={path:function(){return"/public"},guards:[],layout:function(t){var e=t.children;return Object(p.jsx)(W.a,{sx:{width:"100vw",height:"100vh",backgroundColor:function(t){return t.palette.grey[100]}},children:Object(p.jsxs)(F.a,{maxWidth:"xl",sx:{minHeight:"100vh"},children:[Object(p.jsx)(T,{}),e]})})},routes:[J,D,B],redirect:J.path()},A={path:function(){return"/"},guards:[],providers:[],routes:[q],redirect:q.path()},G=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=Object(y.a)(e),a=r.shift();return a?Object(p.jsx)(a,{children:t(r,n)}):n({})},H=function t(e){return Object(p.jsx)(c.Suspense,{fallback:Object(p.jsx)(E,{}),children:Object(p.jsx)(w.d,{children:e.map((function(e,n){var r=e.layout||c.Fragment,a=e.component,i=e.path,o=e.guards,u=e.providers,s=e.redirect,x=e.routes,b=void 0===x?[]:x;return s&&b.push({component:function(){return Object(p.jsx)(w.a,{to:s})},path:function(){return"*"},guards:[]}),Object(p.jsx)(w.b,{path:i(),exact:!!a,render:function(e){return G(o,(function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=Object(y.a)(t),r=n.shift();return r?Object(p.jsx)(r,{children:G(n,e)}):e({})}(u,(function(){return Object(p.jsx)(r,{children:a?Object(p.jsx)(a,Object(m.a)({},e)):t(b)})}))}))}},n)}))})})}([A]),U=n(325),_=function(){return Object(p.jsx)(U.a,{})},K=function(){var t=Object(c.useContext)(x).settings,e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=O[0];e||(console.warn(new Error("The theme ".concat(t.theme," is not valid"))),e=O[0]);var n=Object(j.a)(u.a.merge({},v,e,{direction:t.direction}));return t.responsiveFontSizes&&(n=Object(f.a)(n)),n}({direction:t.direction,responsiveFontSizes:t.responsiveFontSizes,theme:t.theme});return Object(p.jsx)(l.a,{theme:e,children:Object(p.jsx)(d.a,{dense:!0,maxSnack:3,children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(_,{}),H]})})})};a.a.render(Object(p.jsx)(b,{children:Object(p.jsx)(K,{})}),document.getElementById("root"))},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return k}));var r=n(35),a=n(48),i=n(12),c=n(0),o=n.n(c),u=n(18),p=n(65);var s=n(232),x=n.n(s),b=n(233),l=n(52),g=n(234),d=n.n(g).a.create({timeout:15e3});d.interceptors.response.use((function(t){return t}),(function(t){var e,n,r,a,i=(null===(e=t.response)||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.errors)||void 0===r||null===(a=r[0])||void 0===a?void 0:a.message)||t.message;return Promise.reject(new Error(i))}));var h=n(235),j=n.n(h),f={ottawa:{lat:45.4215,lon:-75.6972},toronto:{lat:43.6532,lon:-79.3832},montreal:{lat:45.5017,lon:-73.5673}},v="https://www.7timer.info/bin/api.pl",O=function(){function t(){Object(b.a)(this,t)}return Object(l.a)(t,[{key:"getWeather",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a,i,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(u.a)(Object(u.a)({},f[e.city]),{},{product:"civillight",output:"json"}),a=j.a.stringifyUrl({url:v,query:Object(u.a)({},n)}),t.next=4,d.get(a);case 4:return i=t.sent,c=i.data,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),m=new O,y=n(2),w=Object(c.createContext)({weatherDays:[],isLoadingWeather:!1,getWeather:function(){return Promise.resolve([])}}),S=function(t){var e=t.children,n=t.city,s=Object(c.useState)([]),b=Object(i.a)(s,2),l=b[0],g=b[1],d=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){var n,a,i,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.city,t.next=3,m.getWeather({city:n});case 3:return a=t.sent,i=a.dataseries,c=i.map((function(t){return{image:"/weather_icons/"+t.weather+".svg",temperature:(t.temp2m.max+t.temp2m.min)/2,description:t.weather,dateFormated:x()("".concat(t.date)).format("ddd")}})),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=o.a.useState(""),n=Object(i.a)(e,2),c=n[0],s=n[1],x=o.a.useState(),b=Object(i.a)(x,2),l=b[0],g=b[1],d=o.a.useState(!1),h=Object(i.a)(d,2),j=h[0],f=h[1],v=Object(p.b)().enqueueSnackbar,O=t.asyncFunction,m=t.executeOnMount,y=void 0===m||m,w=t.onSuccess,S=t.onError,k=t.params,W=void 0===k?{}:k;o.a.useEffect((function(){y&&z()}),[]);var z=function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,n,a,i=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{},t.prev=1,f(!0),s(""),g(void 0),t.next=7,O(Object(u.a)(Object(u.a)({},W),e));case 7:return n=t.sent,null===w||void 0===w||w(n),g(n),f(!1),t.abrupt("return",n);case 14:t.prev=14,t.t0=t.catch(1),a=(null===t.t0||void 0===t.t0?void 0:t.t0.message)||"Something failed!",s(a),null===S||void 0===S||S(a),g(void 0),f(!1),v(a,{variant:"error"});case 22:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(){return t.apply(this,arguments)}}();return{doAsync:z,data:l,error:c,isLoading:j}}({asyncFunction:d,params:{city:n},executeOnMount:!0,onSuccess:function(t){g(t)}}),j=h.isLoading,f=h.doAsync;return Object(y.jsx)(w.Provider,{value:{weatherDays:l,isLoadingWeather:j,getWeather:f},children:e})},k=function(){return Object(c.useContext)(w)}}},[[288,2,3]]]);
//# sourceMappingURL=main.a888d43a.chunk.js.map