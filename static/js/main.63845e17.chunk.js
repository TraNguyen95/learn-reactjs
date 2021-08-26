(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{176:function(e,t,r){},300:function(e,t,r){},301:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(11),s=r.n(c),o=(r(176),r(21)),i=r(341),l=r(156),u=r(355),j=r(347),d=r(344),b=r(343),p=r(350),m=r(346),h=r(337),f=r(345),O=r(304),g=r(154),x=r.n(g),v=r(155),S=r.n(v),w=r(153),y=r.n(w),k=r(7),N=r.n(k),P=r(15),C=r(42),E=r(59),T=r(143),I=r.n(T).a.create({baseURL:"https://api.ezfrontend.com/",headers:{"Content-Type":"application/json"}});I.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),I.interceptors.response.use((function(e){return e.data}),(function(e){console.log(e.response);var t=e.response,r=t.config,n=t.status,a=t.data;if(["/auth/local/register","/auth/local"].includes(r.url)&&400===n){var c=a.data||[],s=(c.length>0?c[0]:{}).messages||[],o=s.length>0?s[0]:{};throw new Error(o.message)}return Promise.reject(e)}));var F,R=I,A={register:function(e){return R.post("/auth/local/register",e)},login:function(e){return R.post("/auth/local",e)}},q={USER:"user",TOKEN:"access_token"},D=Object(E.createAsyncThunk)("users/register",function(){var e=Object(P.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.register(t);case 2:return r=e.sent,localStorage.setItem(q.TOKEN,r.jwt),localStorage.setItem(q.USER,JSON.stringify(r.user)),e.abrupt("return",r.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(E.createAsyncThunk)("users/login",function(){var e=Object(P.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.login(t);case 2:return r=e.sent,localStorage.setItem(q.TOKEN,r.jwt),localStorage.setItem(q.USER,JSON.stringify(r.user)),e.abrupt("return",r.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(E.createSlice)({name:"user",initialState:{current:JSON.parse(localStorage.getItem(q.USER))||{},setting:{}},reducers:{logout:function(e){localStorage.removeItem(q.USER),localStorage.removeItem(q.TOKEN),e.current={}}},extraReducers:(F={},Object(C.a)(F,D.fulfilled,(function(e,t){e.current=t.payload})),Object(C.a)(F,B.fulfilled,(function(e,t){e.current=t.payload})),F)}),z=L.actions,U=L.reducer,J=z.logout,K=U,W=r(51),M=r(29),G=r(27),V=r(93),_=r(35),H=r(69),Q=r(348),X=r(3);var Y=function(e){var t=e.form,r=e.name,n=e.label,a=t.formState.errors,c=a[r];return Object(X.jsx)(G.a,{name:r,control:t.control,render:function(e){var t,s=e.field;return Object(X.jsx)(Q.a,Object(H.a)(Object(H.a)({variant:"outlined",margin:"normal"},s),{},{fullWidth:!0,label:n,error:!!c,helperText:null===(t=a[r])||void 0===t?void 0:t.message}))}})},Z=r(342),$=r(354),ee=r(92),te=r.n(ee),re=r(338),ne=r(340),ae=r(353),ce=r(352),se=r(151),oe=r.n(se),ie=r(152),le=r.n(ie),ue=r(339);var je=function(e){var t,r=e.form,a=e.name,c=e.label,s=r.formState,l=r.formState.errors,u=s.touchedFields[a]&&l[a],j=Object(n.useState)(!1),d=Object(o.a)(j,2),b=d[0],p=d[1],m=function(){p((function(e){return!e}))};return Object(X.jsxs)(re.a,{fullWidth:!0,variant:"outlined",margin:"normal",error:!!u,children:[Object(X.jsx)(ae.a,{htmlFor:a,children:c}),Object(X.jsx)(G.a,{name:a,control:r.control,render:function(e){var t,r=e.field;return Object(X.jsx)(ce.a,Object(H.a)(Object(H.a)({},r),{},{id:a,type:b?"text":"password",label:c,endAdornment:Object(X.jsx)(ne.a,{position:"end",children:Object(X.jsx)(i.a,{"aria-label":"toggle password visibility",onClick:m,edge:"end",children:b?Object(X.jsx)(oe.a,{}):Object(X.jsx)(le.a,{})})}),helperText:null===(t=l[a])||void 0===t?void 0:t.message}))}}),Object(X.jsx)(ue.a,{children:null===(t=l[a])||void 0===t?void 0:t.message})]})},de=Object(h.a)((function(e){return{root:{paddingTop:e.spacing(3),position:"relative"},avatar:{margin:"0 auto",backgroundColor:e.palette.secondary.main},title:{textAlign:"center",margin:e.spacing(2,0,3,0)},submit:{margin:e.spacing(3,0,2)},progress:{position:"absolute",top:e.spacing(1),left:0,right:0}}}));var be=function(e){var t=de(),r=_.a().shape({identifier:_.c().required("Please enter your email").email("Please enter valid email adress"),password:_.c().required("Please enter your password")}),n=Object(G.e)({defaultValues:{identifier:"",password:""},resolver:Object(V.a)(r)}),a=function(){var t=Object(P.a)(N.a.mark((function t(r){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=e.onSubmit)){t.next=4;break}return t.next=4,a(r);case 4:n.reset();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=n.formState.isSubmitting;return Object(X.jsxs)("div",{className:t.root,children:[c&&Object(X.jsx)(Z.a,{className:t.progress}),Object(X.jsx)($.a,{className:t.avatar,children:Object(X.jsx)(te.a,{})}),Object(X.jsx)(O.a,{component:"h3",variant:"h5",className:t.title,children:"Sign In"}),Object(X.jsxs)("form",{onSubmit:n.handleSubmit(a),children:[Object(X.jsx)(Y,{name:"identifier",label:"Email",form:n}),Object(X.jsx)(je,{name:"password",label:"Password",form:n}),Object(X.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,fullWidth:!0,disabled:c,size:"large",children:"Sign In"})]})]})};var pe=function(e){var t=Object(M.b)(),r=Object(W.b)().enqueueSnackbar,n=function(){var n=Object(P.a)(N.a.mark((function n(a){var c,s;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=B(a),n.next=4,t(c).unwrap();case 4:n.sent,(s=e.closeDialog)&&s(),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("fail to Login",n.t0),r(n.t0.message,{variant:"error"});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(X.jsx)("div",{children:Object(X.jsx)(be,{onSubmit:n})})},me=Object(h.a)((function(e){return{root:{paddingTop:e.spacing(3),position:"relative"},avatar:{margin:"0 auto",backgroundColor:e.palette.secondary.main},title:{textAlign:"center",margin:e.spacing(2,0,3,0)},submit:{margin:e.spacing(3,0,2)},progress:{position:"absolute",top:e.spacing(1),left:0,right:0}}}));var he=function(e){var t=me(),r=_.a().shape({fullName:_.c().required("Please enter your full name").test("Should has at least two word","Please enter two word",(function(e){return e.split(" ").length>=2})),email:_.c().required("Please enter your email").email("Please enter valid email adress"),password:_.c().required("Please enter your password").min(6,"Please enter at least 6 characters"),retypePassword:_.c().required("Please enter retype your password").min(6,"Please enter at least 6 characters").oneOf([_.b("password")],"Password doe not match")}),n=Object(G.e)({defaultValues:{fullName:"",email:"",password:"",retypePassword:""},resolver:Object(V.a)(r)}),a=function(){var t=Object(P.a)(N.a.mark((function t(r){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=e.onSubmit)){t.next=4;break}return t.next=4,a(r);case 4:n.reset();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=n.formState.isSubmitting;return Object(X.jsxs)("div",{className:t.root,children:[c&&Object(X.jsx)(Z.a,{className:t.progress}),Object(X.jsx)($.a,{className:t.avatar,children:Object(X.jsx)(te.a,{})}),Object(X.jsx)(O.a,{component:"h3",variant:"h5",className:t.title,children:"Create an account"}),Object(X.jsxs)("form",{onSubmit:n.handleSubmit(a),children:[Object(X.jsx)(Y,{name:"fullName",label:"Full Name",form:n}),Object(X.jsx)(Y,{name:"email",label:"Email",form:n}),Object(X.jsx)(je,{name:"password",label:"Password",form:n}),Object(X.jsx)(je,{name:"retypePassword",label:"Retype Password",form:n}),Object(X.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,fullWidth:!0,disabled:c,size:"large",children:"Create an account"})]})]})};var fe=function(e){var t=Object(M.b)(),r=Object(W.b)().enqueueSnackbar,n=function(){var n=Object(P.a)(N.a.mark((function n(a){var c,s;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a.username=a.email,c=D(a),n.next=5,t(c).unwrap();case 5:n.sent,r("Resgister Successfully!!!",{variant:"success"}),(s=e.closeDialog)&&s(),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("fail to register",n.t0),r(n.t0.message,{variant:"error"});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}();return Object(X.jsx)("div",{children:Object(X.jsx)(he,{onSubmit:n})})},Oe=r(56),ge=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{color:"#fff",textDecoration:"none"},closeIcon:{position:"absolute",top:e.spacing(1),right:e.spacing(1),color:e.palette.grey[500],zIndex:1}}})),xe="login",ve="register";function Se(){var e=Object(M.c)((function(e){return e.user.current})).id,t=Object(M.b)(),r=Object(n.useState)(!1),a=Object(o.a)(r,2),c=a[0],s=a[1],h=Object(n.useState)(xe),g=Object(o.a)(h,2),v=g[0],w=g[1],k=Object(n.useState)(null),N=Object(o.a)(k,2),P=N[0],C=N[1],E=function(){s(!1)},T=function(e){C(null)},I=ge();return Object(X.jsxs)("div",{className:I.root,children:[Object(X.jsx)(d.a,{position:"static",children:Object(X.jsxs)(f.a,{children:[Object(X.jsx)(y.a,{className:I.menuButton}),Object(X.jsx)(O.a,{variant:"h6",className:I.title,children:Object(X.jsx)(Oe.b,{className:I.link,to:"/",children:"Tea Shop"})}),Object(X.jsx)(Oe.c,{to:"/todo",children:Object(X.jsx)(b.a,{className:I.link,children:"Todo"})}),!e&&Object(X.jsx)(b.a,{className:I.link,onClick:function(){s(!0)},color:"inherit",children:"Login"}),e&&Object(X.jsx)(i.a,{color:"inherit",onClick:function(e){C(e.currentTarget)},children:Object(X.jsx)(x.a,{})})]})}),Object(X.jsxs)(l.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},anchorEl:P,keepMounted:!0,open:Boolean(P),onClose:T,getContentAnchorEl:null,children:[Object(X.jsx)(u.a,{onClick:T,children:"My account"}),Object(X.jsx)(u.a,{onClick:function(){var e=J();t(e)},children:"Logout"})]}),Object(X.jsxs)(p.a,{open:c,onClose:E,disableBackdropClick:!0,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,children:[Object(X.jsx)(i.a,{className:I.closeIcon,onClick:E,children:Object(X.jsx)(S.a,{})}),Object(X.jsxs)(m.a,{children:[v===ve&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(fe,{closeDialog:E}),Object(X.jsx)(j.a,{textAlign:"center",children:Object(X.jsx)(b.a,{color:"primary",onClick:function(){w(xe)},children:"Already have an account. Login here"})})]}),v===xe&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(pe,{closeDialog:E}),Object(X.jsx)(j.a,{textAlign:"center",children:Object(X.jsx)(b.a,{color:"primary",onClick:function(){w(ve)},children:"Dont have an account. Register here"})})]})]})]})]})}var we=r(18),ye=(r(300),(0,r(59).createSlice)({name:"counter",initialState:0,reducers:{increase:function(e){return e+1},decrease:function(e,t){return e-1}}})),ke=ye.actions,Ne=ye.reducer,Pe=ke.increase,Ce=ke.decrease,Ee=Ne,Te=Object(h.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:32,padding:"0 30px"}});var Ie=function(e){var t=Te(),r=Object(M.b)(),n=Object(M.c)((function(e){return e.counter}));return Object(X.jsxs)("div",{children:["Counter: ",n,Object(X.jsxs)("div",{children:[Object(X.jsx)(b.a,{className:t.root,onClick:function(){var e=Pe();r(e)},children:"Increase"}),Object(X.jsx)(b.a,{className:t.root,onClick:function(){var e=Ce();r(e)},children:"Decrease"})]})]})};var Fe=function(e){return Object(X.jsx)("div",{children:"Product Listing Page"})};var Re=function(e){var t=Object(we.f)();return Object(X.jsxs)("div",{children:["Product Feature",Object(X.jsx)(we.c,{children:Object(X.jsx)(we.a,{path:t.url,exact:!0,component:Fe})})]})};var Ae=function(){var e=Object(W.b)().enqueueSnackbar;return Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)(Se,{}),Object(X.jsx)(b.a,{onClick:function(){e("Register Successfully",{variant:"error"})},children:"Show noti"}),Object(X.jsx)("header",{className:"App-header",children:Object(X.jsxs)(we.c,{children:[Object(X.jsx)(we.a,{path:"/todo",component:Ie}),Object(X.jsx)(we.a,{path:"/products",component:Re})]})})]})},qe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,358)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},De={counter:Ee,user:K},Be=Object(E.configureStore)({reducer:De});s.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(M.a,{store:Be,children:Object(X.jsx)(Oe.a,{children:Object(X.jsx)(W.a,{anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(X.jsx)(Ae,{})})})})}),document.getElementById("root")),qe()}},[[301,1,2]]]);
//# sourceMappingURL=main.63845e17.chunk.js.map