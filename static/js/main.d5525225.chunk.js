(this.webpackJsonpvidly_react=this.webpackJsonpvidly_react||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=(a(32),a(1)),i=a(12),s=a(20),m=a(7),u=a(8),d=a(10),b=a(9),f=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var h=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var v=a(11),p=a.n(v);var g=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,c=Math.ceil(t/a);if(console.log("current page is ".concat(n)),1===c)return null;var l=p.a.range(1,c+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},l.map((function(t){return r.a.createElement("li",{key:t,className:t===n?"page-item active":"page-item",onClick:function(){return e.onPageChange(t)}},r.a.createElement("a",{className:"page-link"},t))}))))};function E(e,t,a){var n=(t-1)*a;return p()(e).slice(n).take(a).value()}function y(e){var t=e.items,a=e.textProperty,n=e.valueProperty,c=e.onItemSelect,l=e.selectedItem;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e[n],onClick:function(){return c(e)},className:l[n]===e[n]?"list-group-item active":"list-group-item"},e[a])})))}y.defaultProps={textProperty:"name",valueProperty:"_id"};var k=y,C=a(26);function S(e){var t=Object(n.useState)("fa fa-heart".concat(e.liked?"":"-o")),a=Object(C.a)(t,1)[0];return r.a.createElement("i",{className:a,style:{cursor:"pointer"},onClick:e.onClick,"aria-hidden":"true"})}var N=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).raiseSort=function(t){var a=Object(i.a)({},e.props.sortColumn);t===a.path?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label,e.renderSortIcon(t))}))))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):p.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(r.a.Component);function _(e){var t=e.columns,a=e.data,n=e.onSort,c=e.sortColumn;return r.a.createElement("table",{className:"table"},r.a.createElement(N,{columns:t,sortColumn:c,onSort:n}),r.a.createElement(w,{data:a,columns:t}))}var O=a(5);var j=function(e){var t=e.onLike,a=e.onDelete,n=e.movies,c=e.sortColumn,l=e.onSort,o=[{path:"title",label:"Title",content:function(e){return r.a.createElement(O.b,{to:"/movies/".concat(e._id)},e.title," ")}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(e){return r.a.createElement(S,{key:e._id,liked:e.liked,onClick:function(){return t(e)}})}},{key:"delete",content:function(e){return r.a.createElement("button",{onClick:function(){return a(e)},className:"btn btn-danger btn-sm"},"Delete")}}];return r.a.createElement(_,{columns:o,onSort:l,data:n,sortColumn:c})},P=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],pageSize:4,currentPage:1,genres:[],selectedGenre:"",sortColumn:{path:"",order:""}},e.handleDelete=function(t){var a=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:a})},e.handleLike=function(t){console.log("liked event occurred");var a=Object(s.a)(e.state.movies),n=a.indexOf(t);console.log(t),console.log(n),console.log(a[n].liked),a[n]=Object(i.a)({},a[n]),a[n].liked=!a[n].liked,console.log(a[n].liked),e.setState({movies:a})},e.handlePageChange=function(t){console.log("page no is"+t),e.setState({currentPage:t})},e.handleGenreChange=function(t){console.log("selected genre is "+t),e.setState({selectedGenre:t,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPageData=function(){var t=e.state,a=t.pageSize,n=t.currentPage,r=t.movies,c=t.selectedGenre,l=t.sortColumn,o=c&&c._id?r.filter((function(e){return e.genre._id===c._id})):r,i=E(p.a.orderBy(o,[l.path],[l.order]),n,a);return{totalCount:o.length,data:i}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=[{name:"All Genres",_id:""}].concat(Object(s.a)(f.filter((function(e){return e}))));this.setState({movies:h,genres:e})}},{key:"render",value:function(){if(0===this.state.movies.length)return r.a.createElement("p",null,"There are no Movies in the database");var e=this.state,t=e.pageSize,a=e.currentPage,n=e.sortColumn,c=this.getPageData(),l=c.totalCount,o=c.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(k,{items:this.state.genres,onItemSelect:this.handleGenreChange,selectedItem:this.state.selectedGenre})),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Showing ",l," movies in the database"),r.a.createElement(j,{movies:o,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort,sortColumn:n}),r.a.createElement(g,{onPageChange:this.handlePageChange,itemsCount:l,pageSize:t,currentPage:a})))}}]),a}(n.Component);function R(e){return r.a.createElement("h1",null,"Customers")}function A(e){return r.a.createElement("h1",null,"Customers")}function I(e){return r.a.createElement("h1",null,"Not Found")}function T(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(O.b,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.c,{className:"nav-link",to:"/movies"},"Movies ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.c,{className:"nav-link",to:"/customers"},"Customers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.c,{className:"nav-link",to:"/rentals"},"Rentals")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.c,{className:"nav-link",to:"/login"},"LogIn")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.c,{className:"nav-link",to:"/signup"},"SignUp")))))}function D(e){var t=e.match,a=e.history;return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Id: ",t.params.id),r.a.createElement("button",{onClick:function(){return a.push("/movies")},className:"btn btn-primary"},"Save"))}function G(e){var t=e.name,a=e.label,n=e.value,c=e.onChange,l=e.autoFocus,o=e.type,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{autoFocus:l,name:t,id:t,value:n,onChange:c,type:o,className:"form-control"}),i&&r.a.createElement("div",{className:"alert alert-danger"},i))}var x=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={account:{username:"",password:""},errors:{}},e.username=r.a.createRef(),e.validate=function(){var t={},a=e.state.account;return""===a.username.trim()&&(t.username="username is required"),""===a.password&&(t.password="password is required"),0===Object.keys(t).length?null:t},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||console.log("submitted form")},e.handleAccountChange=function(t){var a=t.currentTarget,n=Object(i.a)({},e.state.account);n[a.name]=a.value,e.setState({account:n})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.account,a=e.errors;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(G,{name:"username",value:t.username,label:"Username",onChange:this.handleAccountChange,type:"text",error:a.username}),r.a.createElement(G,{name:"password",value:t.password,label:"Password",onChange:this.handleAccountChange,type:"password",error:a.password}),r.a.createElement("button",{className:"btn btn-primary"},"Login")))}}]),a}(r.a.Component),L=(a(38),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={newAccount:{username:"",password:"",confirmPassword:""}},e.handleSubmit=function(e){e.preventDefault(),console.log("submitted form")},e.handleAccountChange=function(t){var a=t.currentTarget,n=Object(i.a)({},e.state.account);n[a.name]=a.value,e.setState({newAccount:n})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.newAccount;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(G,{name:"username",value:e.username,label:"Username",onChange:this.handleAccountChange,type:"text"}),r.a.createElement(G,{name:"password",value:e.password,label:"Password",onChange:this.handleAccountChange,type:"password"}),r.a.createElement(G,{name:"confirmPassword",value:e.confirmPassword,label:"ConfirmPassword",onChange:this.handleAccountChange,type:"password"}),r.a.createElement("button",{className:"btn btn-primary"},"Login"))}}]),a}(r.a.Component));var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("main",{className:"container"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/movies/:id",component:D}),r.a.createElement(o.b,{path:"/login",component:x}),r.a.createElement(o.b,{path:"/signup",component:L}),r.a.createElement(o.b,{path:"/movies",component:P}),r.a.createElement(o.b,{path:"/customers",component:R}),r.a.createElement(o.b,{path:"/rentals",component:A}),r.a.createElement(o.b,{path:"/not-found",component:I}),r.a.createElement(o.a,{exact:!0,from:"/",to:"/movies"}),r.a.createElement(o.a,{to:"/not-found"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39),a(40);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d5525225.chunk.js.map