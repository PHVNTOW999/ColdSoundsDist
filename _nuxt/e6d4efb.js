(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{302:function(t,e,o){"use strict";o.r(e);o(42);var r={name:"Header",data:function(){return{isLogActive:!1,isRegActive:!1,logForm:{email:"test@gmail.com",password:"admin999"},regForm:{email:null,password:null,password2:null},links:[{id:0,name:"Home",path:"/"},{id:1,name:"News",path:"/News"},{id:2,name:"single page",path:"/Single"}]}},methods:{closeModalWins:function(){this.isLogActive=!1,this.isRegActive=!1},sendLogin:function(){this.$store.dispatch("user/LOGIN",this.logForm),this.isLogActive=!1},sendReg:function(){this.$store.dispatch("user/REG",this.regForm),this.isRegActive=!1}},computed:{isAuth:function(){return this.$store.getters["user/IS_AUTH"]},user:function(){return this.$store.getters["user/USER"]}}},l=(o(304),o(48)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header flex justify-between"},[e("nav",[t._l(t.links,(function(link){return e("router-link",{key:link.id,staticClass:"underline hover:text-indigo-600",attrs:{to:link.path}},[t._v("\n      "+t._s(link.name)+"\n    ")])})),t._v(" "),e("router-link",{staticClass:"underline hover:text-indigo-600",attrs:{to:"/News"}},[t._v("Random\n    ")])],2),t._v(" "),t.isAuth?e("div",{staticClass:"user"},[e("b-menu",[e("b-menu-list",[e("b-menu-item",{attrs:{icon:"account",label:t.user.email}},[e("b-menu-item",{attrs:{label:"Reg date: ".concat(t.user.reg_date)}}),t._v(" "),e("b-menu-item",{attrs:{label:"Change password"}}),t._v(" "),e("b-menu-item",{attrs:{label:"Exit"}})],1)],1)],1)],1):e("div",{staticClass:"auth"},[e("div",{staticClass:"login"},[e("b-button",{staticClass:"login__btn",attrs:{label:"Login",type:"is-primary",size:"is-small"},on:{click:function(e){t.isLogActive=!0}}}),t._v(" "),e("b-modal",{attrs:{width:640},model:{value:t.isLogActive,callback:function(e){t.isLogActive=e},expression:"isLogActive"}},[e("div",{staticClass:"login_form"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("Login")]),t._v(" "),e("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.closeModalWins()}}})]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Email"}},[e("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:t.logForm.email,callback:function(e){t.$set(t.logForm,"email",e)},expression:"logForm.email"}})],1),t._v(" "),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:t.logForm.password,callback:function(e){t.$set(t.logForm,"password",e)},expression:"logForm.password"}})],1)],1),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("b-button",{attrs:{label:"Close"},on:{click:function(e){return t.closeModalWins()}}}),t._v(" "),e("b-button",{attrs:{label:"Login",type:"is-primary"},on:{click:function(e){return t.sendLogin()}}})],1)])])])])],1),t._v(" "),e("div",{staticClass:"reg"},[e("b-button",{staticClass:"reg__btn",attrs:{label:"Registration",type:"is-primary",size:"is-small"},on:{click:function(e){t.isRegActive=!0}}}),t._v(" "),e("b-modal",{attrs:{width:640},model:{value:t.isRegActive,callback:function(e){t.isRegActive=e},expression:"isRegActive"}},[e("div",{staticClass:"reg_form"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("Registration")]),t._v(" "),e("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.closeModalWins()}}})]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Email"}},[e("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:t.regForm.email,callback:function(e){t.$set(t.regForm,"email",e)},expression:"regForm.email"}})],1),t._v(" "),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:t.regForm.password,callback:function(e){t.$set(t.regForm,"password",e)},expression:"regForm.password"}})],1),t._v(" "),e("b-field",{attrs:{label:"Repeat Password"}},[e("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Repeat your password",required:""},model:{value:t.regForm.password2,callback:function(e){t.$set(t.regForm,"password2",e)},expression:"regForm.password2"}})],1)],1),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("b-button",{attrs:{label:"Close"},on:{click:function(e){return t.closeModalWins()}}}),t._v(" "),e("b-button",{attrs:{label:"Registration",type:"is-primary"},on:{click:function(e){return t.sendReg()}}})],1)])])])])],1)])])}),[],!1,null,"06bbbbb2",null);e.default=component.exports;installComponents(component,{Header:o(302).default})},303:function(t,e,o){var content=o(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(86).default)("4f5e9a8e",content,!0,{sourceMap:!1})},304:function(t,e,o){"use strict";o(303)},305:function(t,e,o){var r=o(85)((function(i){return i[1]}));r.push([t.i,".header[data-v-06bbbbb2]{background-color:#000;color:#fff}",""]),r.locals={},t.exports=r},306:function(t,e,o){"use strict";o.r(e);var r={name:"single",computed:{id:function(){return this.$route.params.id},single:function(){return this.$store.state.user.singles[this.id]}}},l=o(48),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("Header"),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"singlePage"},[e("div",{staticClass:"singlePage__cover"}),t._v(" "),e("div",{staticClass:"singlePage__name"}),t._v(" "),e("div",{staticClass:"singlePage__stats"}),t._v(" "),e("div",{staticClass:"singlePage__singerCart"},[t._v("\n        ghhg\n      ")]),t._v(" "),e("div",{staticClass:"singlePage__featCart"})])}],!1,null,"115e60e4",null);e.default=component.exports;installComponents(component,{Header:o(302).default})}}]);