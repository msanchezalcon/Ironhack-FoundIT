(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{165:function(e,t){},220:function(e,t,a){},221:function(e,t,a){},236:function(e,t,a){e.exports=a.p+"static/media/lupa.384152e1.svg"},237:function(e,t,a){e.exports=a.p+"static/media/chat.7859fe34.svg"},238:function(e,t,a){e.exports=a.p+"static/media/app.a55222a6.svg"},241:function(e,t,a){e.exports=a.p+"static/media/chat.7859fe34.svg"},242:function(e,t,a){e.exports=a.p+"static/media/edit.fe3ad0b8.svg"},243:function(e,t,a){e.exports=a.p+"static/media/trash.eec78223.svg"},244:function(e,t,a){e.exports=a.p+"static/media/inbox.bbbaa41e.svg"},246:function(e,t,a){e.exports=a.p+"static/media/exit.d87809f3.svg"},250:function(e,t,a){e.exports=a(515)},256:function(e,t,a){},273:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},480:function(e,t,a){},481:function(e,t,a){e.exports=a.p+"static/media/lupa.384152e1.svg"},511:function(e,t){},514:function(e,t,a){},515:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),s=a.n(l),i=a(77),o=a(7),c=a(8),m=a(10),u=a(9),p=(a(255),a(256),a(53)),d=a.n(p),h=function e(){var t=this;Object(o.a)(this,e),this.login=function(e){return t.service.post("/login",e)},this.signup=function(e){return t.service.post("/signup",e)},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.service=d.a.create({baseURL:"".concat("https://found-it-app.herokuapp.com/api"),withCredentials:!0})},g=a(12),f=a(85),b=a(56),E=(a(273),a(11)),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logout=function(){n.AuthService.logout().then((function(){n.props.setTheUser(!1),n.props.handleToast(!0,"User has been disconnected")})).catch((function(e){return console.log(e)}))},n.AuthService=new h,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{bg:"light",variant:"light",expand:"lg",sticky:"top",className:"details"},r.a.createElement(f.a.Brand,null,r.a.createElement(E.b,{to:"/",style:{color:"lightseagreen"}},r.a.createElement("img",{className:"imgLogo",src:"./../../../../../wedding.svg",alt:"main logo"})," Found IT")),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"ml-auto"},r.a.createElement(b.a.Link,{as:"span"},r.a.createElement(E.c,{to:"/",exact:!0,activeStyle:{color:"lightseagreen"}},"Home")),r.a.createElement(b.a.Link,{as:"span"},r.a.createElement(E.c,{to:"/items/all",activeStyle:{color:"lightseagreen"}},"Find items")),this.props.loggedInUser?r.a.createElement(b.a.Link,{as:"span"},r.a.createElement("span",{onClick:this.logout},"Log out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Link,{as:"span"},r.a.createElement(E.c,{to:"/signup",activeStyle:{color:"lightseagreen"}},"Sign up")),r.a.createElement(b.a.Link,{as:"span"},r.a.createElement(E.c,{to:"/login",activeStyle:{color:"lightseagreen"}},"Log in"))),r.a.createElement(b.a.Link,{as:"span"},r.a.createElement(E.c,{to:"/user",activeStyle:{color:"lightseagreen"}},"Hi, ",this.props.loggedInUser?this.props.loggedInUser.username:"guest")))))}}]),a}(n.Component),y=a(120),I=function(e){var t=e.visible,a=e.text,n=e.handleToast;return r.a.createElement(y.a,{style:{position:"fixed",right:"10px",bottom:"10px",width:"300px"},show:t,onClose:function(){return n(!1)},delay:3e3,autohide:!0},r.a.createElement(y.a.Header,null," ",r.a.createElement("strong",{className:"mr-auto"},"Found IT")," "),r.a.createElement(y.a.Body,null,a))},w=a(27),j=a(25),T=a(6),C=a(30),S=a(26),O=a(24),x=(a(279),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.authService.signup(n.state).then((function(e){n.props.setTheUser(e.data),n.props.handleToast(!0,"Signed up successfully"),n.props.history.push("/items/all")})).catch((function(e){return console.log(e.response.data.message)}))},n.state={name:"",username:"",password:""},n.authService=new h,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{as:"main"},r.a.createElement(S.a,null,r.a.createElement(O.a,{md:{offset:3,span:6}},r.a.createElement("h3",{style:{color:"lightseagreen"}},"Sign up"),r.a.createElement("hr",null),r.a.createElement(T.a,{onSubmit:this.handleFormSubmit},r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Name"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.name,name:"name",type:"text"})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Username"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text"})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Password"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password"}),r.a.createElement(T.a.Text,{className:"text-muted"},"At least two characters")),r.a.createElement(j.a,{type:"submit",className:"btn btn-light btn-block btn-sm details auth"},"Sign up")))))}}]),a}(n.Component)),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.authService.login(n.state).then((function(e){n.props.setTheUser(e.data),n.props.handleToast(!0,"You are logged in"),n.props.history.push("/items/all")})).catch((function(e){return console.log(e)}))},n.state={username:"",password:""},n.authService=new h,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{as:"main"},r.a.createElement(S.a,null,r.a.createElement(O.a,{md:{offset:3,span:6}},r.a.createElement("h3",{style:{color:"lightseagreen"}},"Log in"),r.a.createElement("hr",null),r.a.createElement(T.a,{onSubmit:this.handleFormSubmit},r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Username"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text"})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Password"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.password,name:"password",type:"password"}),r.a.createElement(T.a.Text,{className:"text-muted"},"At least two characters")),r.a.createElement(j.a,{type:"submit",className:"btn btn-light btn-block btn-sm details auth"},"Log in")))))}}]),a}(n.Component),A=(a(165),a(280),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container homePage"},r.a.createElement("img",{className:"imgPag",src:"./../../../../../logo_transparent.png",alt:"company logo"})),r.a.createElement("div",{className:"container registerBtns"},r.a.createElement(j.a,{className:"btn btn-light btn-block btn-sm details authIndex bt"},r.a.createElement(E.b,{to:"/signup",activeStyle:{color:"lightseagreen"}},"Sign up")),r.a.createElement(j.a,{className:"btn btn-light btn-block btn-sm details authIndex bt"},r.a.createElement(E.b,{to:"/login",activeStyle:{color:"lightseagreen"}},"Log in"))))}),k=function e(){var t=this;Object(o.a)(this,e),this.getAllItems=function(){return t.service.get("/items/all")},this.newItem=function(e){return t.service.post("/items/new",e)},this.getOneItem=function(e){return t.service.get("/items/".concat(e))},this.editItem=function(e,a){return t.service.post("/items/".concat(e,"/edit"),a)},this.deleteItem=function(e){return t.service.get("/items/".concat(e,"/delete"))},this.service=d.a.create({baseURL:"".concat("https://found-it-app.herokuapp.com/api"),withCredentials:!0})},B=a(34),L=(a(281),a(236)),M=a.n(L),N=a(237),D=a.n(N),F=function(e){var t=e._id,a=e.name,n=e.imageUrl,l=e.foundBy;return console.log("ID DE LA CARTA",t),r.a.createElement(O.a,{md:4},r.a.createElement(B.a,{className:"item-card"},r.a.createElement(B.a.Img,{variant:"top",src:n||"https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg"}),"                ",r.a.createElement(B.a.Body,{className:"imgCardContainer"},r.a.createElement(B.a.Title,null,a),r.a.createElement("div",null,r.a.createElement(E.b,{to:"/chat/".concat(t)},r.a.createElement("p",null,"Found by ",r.a.createElement("b",null,l.username)),r.a.createElement("img",{className:"imgCards",src:D.a,alt:"chat"})),r.a.createElement(E.b,{to:"/items/".concat(t)},r.a.createElement("img",{className:"imgCards",src:M.a,alt:"see more"}))))))},_=function e(){var t=this;Object(o.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e)},this.service=d.a.create({baseURL:"".concat("https://found-it-app.herokuapp.com/api","/files"),withCredentials:!0})},G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){if(n.state.itemEdit){var t="file"===e.target.type?e.target.files[0]:e.target.value;n.setState(Object(w.a)({},e.target.name,t))}else{var a,r="file"===e.target.type?e.target.files[0]:e.target.value;n.setState((a={},Object(w.a)(a,e.target.name,r),Object(w.a)(a,"foundBy",n.props.loggedInUser._id),a))}},n.handleFormSubmit=function(e){e.preventDefault();var t=new FormData;Object.keys(n.state).forEach((function(e){t.append(e,n.state[e])})),n.state.itemEdit?n.appService.editItem(n.state.itemEdit,t).then((function(){return n.props.handleEditSubmit()})).catch((function(e){return console.log(e)})):n.appService.newItem(t).then((function(){return n.props.handleItemSubmit()})).catch((function(e){return console.log(e)}))};var r=n.props.itemEdit;return n.state={itemEdit:r?r._id:"",name:r?r.name:"",description:r?r.description:"",category:r?r.category:"",imageUrl:r?r.imageUrl:""},n.appService=new k,n.filesService=new _,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{color:"lightseagreen"}},"Item info"),r.a.createElement("hr",null),r.a.createElement(T.a,{className:"newForm",onSubmit:this.handleFormSubmit},r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Name"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.name,name:"name",type:"text"}),r.a.createElement(T.a.Text,{className:"text-muted"},"Item name and brand")),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Description"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.description,name:"description",type:"text"}),r.a.createElement(T.a.Text,{className:"text-muted"},"Color, size, condition... be specific!")),r.a.createElement(T.a.Group,{controlId:"exampleForm.ControlSelect2"},r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Category"),r.a.createElement(T.a.Control,{as:"select",multiple:!0,onChange:this.handleInputChange,value:this.state.category,name:"category",type:"text"},r.a.createElement("option",null,"books"),r.a.createElement("option",null,"clothes"),r.a.createElement("option",null,"electronics"),r.a.createElement("option",null,"accessories"),r.a.createElement("option",null,"other"))),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,null,"Image"),r.a.createElement(T.a.Control,{name:"imageUrl",type:"file",onChange:this.handleInputChange})),r.a.createElement(j.a,{className:"btn btn-light btn-block btn-sm details auth",type:"submit"},"Submit")))}}]),a}(n.Component),H=(a(282),function(){return r.a.createElement("div",{className:"spinner"})}),Q=(a(283),function(){return r.a.createElement("footer",{className:"page-footer font-small mdb-color darken-3 pt-4 footInfo"},r.a.createElement("hr",null),r.a.createElement("div",{class:"footer-copyright text-center py-3"},r.a.createElement("p",null,"Can't find what you are looking for?"),r.a.createElement("a",{href:"https://www.google.com/search?safe=strict&sxsrf=ALeKk02siRSTZWnqrzTKGA8Wb3Y_ms_NNg%3A1595711569861&source=hp&ei=UaAcX5LwMcOZkwWWlJHwCA&q=lost+and+found+near+me&oq=lost+and+found+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECc6BAguECc6BQgAEJECOggILhDHARCjAjoCCC46CgguEMcBEK8BECc6CAguEMcBEK8BOg0ILhDHARCvARAnEJMCOgsILhDHARCvARCTAjoFCC4QkwJQmQdY3B5gjiBoAHAAeAKAAaYDiAG7JJIBCjAuMTEuOC4xLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjS3KHqqOnqAhXDzKQKHRZKBI4Q4dUDCAc&uact=5",className:"btn btn-light  btn-ml details footButton",variant:"light"}," Browse the web")))}),R=(a(284),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleInputChange=function(t){e.props.filterItem(t.target.value),e.setState(Object(w.a)({},t.target.name,t.target.value))},e.state={name:""},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"active-cyan-3 active-cyan-4 mb-4 searchBox"},r.a.createElement("input",{class:"form-control",name:"name",type:"text",value:this.state.name,onChange:this.handleInputChange,placeholder:"Search lost item...","aria-label":"Search"})))}}]),a}(n.Component)),z=a(46),Y=a(238),K=a.n(Y),W=a(84),q=[{featureType:"all",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{color:"#cee9de"},{saturation:"2"},{weight:"0.80"}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#f5d6d6"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{hue:"#ff0000"},{visibility:"on"}]},{featureType:"road.highway.controlled_access",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"road.highway.controlled_access",elementType:"labels.icon",stylers:[{visibility:"on"},{hue:"#0064ff"},{gamma:"1.44"},{lightness:"-3"},{weight:"1.69"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"simplified"},{weight:"0.31"},{gamma:"1.43"},{lightness:"-5"},{saturation:"-22"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"all",stylers:[{visibility:"on"},{hue:"#ff0000"}]},{featureType:"transit.station.airport",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#ff0045"}]},{featureType:"transit.station.bus",elementType:"all",stylers:[{visibility:"on"},{hue:"#00d1ff"}]},{featureType:"transit.station.bus",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"transit.station.rail",elementType:"all",stylers:[{visibility:"simplified"},{hue:"#00cbff"}]},{featureType:"transit.station.rail",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{weight:"1.61"},{color:"#cde2e5"},{visibility:"on"}]}],J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={points:e.props.markers,items:e.props.items,selectedItem:null,setSelectedItem:null},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.GoogleMap,{defaultZoom:12,defaultCenter:{lat:57.7089,lng:11.9746},defaultOptions:{styles:q}},this.state.items.map((function(e){return r.a.createElement(W.Marker,{id:e._id,onClick:function(){console.log("marker clickado!",e.name)},name:e.name,description:e.description,position:{lat:e.location.coordinates[0],lng:e.location.coordinates[1]},icon:{url:"/wedding.svg",scaledSize:new window.google.maps.Size(30,30)}})}))))}}]),a}(r.a.Component);function Z(e){var t=Object(W.withScriptjs)(Object(W.withGoogleMap)(J)),a=e.loadingElement,n=e.containerElement,l=e.mapElement,s=e.defaultCenter,i=e.defaultZoom,o=e.markers,c=e.items;console.log("items info map",o);var m=(o?o.map((function(e){return e.location.coordinates})):[]).map((function(e){return{lat:parseFloat(e[0]),lng:parseFloat(e[1])}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"100vw",height:"40vh"}},r.a.createElement(t,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA8O--GDLv_W7ar5KhqUzBsDayxtffbZso&v=3.exp&libraries=geometry,drawing,places",loadingElement:a||r.a.createElement("div",{style:{height:"100%"}}),containerElement:n||r.a.createElement("div",{style:{height:"100%"}}),mapElement:l||r.a.createElement("div",{style:{height:"100%"}}),defaultCenter:s||{lat:40.4167754,lng:-3.7037901999999576},defaultZoom:i||20,markers:m,items:c})))}var V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return n.updateItemList()},n.updateItemList=function(){n.appService.getAllItems().then((function(e){console.log("all items from DB",e.data),n.setState({items:e.data})})).catch((function(e){return console.log(e)}))},n.handleModal=function(e){return n.setState({showModal:e})},n.handleItemSubmit=function(){n.handleModal(!1),n.updateItemList()},n.filterItem=function(e){console.log(e);var t=n.state.items.filter((function(t){return t.name.toLowerCase().includes(e)}));n.setState({filteredItems:t,nameSearched:e})},n.state={items:[],showModal:!1,selectedId:null,filteredItems:[]},n.appService=new k,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log("main page this state items",this.state.items),r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:"searchMap"},r.a.createElement(R,{filterItem:this.filterItem})),r.a.createElement(C.a,{className:"mapMain"},r.a.createElement(Z,{items:this.state.items,markers:this.state.items})),r.a.createElement(C.a,{as:"main",className:"items-page"},this.props.loggedInUser&&r.a.createElement("div",{className:"container"}," ",r.a.createElement(j.a,{variant:"link",onClick:function(){return e.handleModal(!0)}},r.a.createElement("img",{className:"addBtn",src:K.a,alt:"add"}))),this.state.items.length?r.a.createElement(S.a,null,!this.state.nameSearched&&this.state.items.map((function(t){return r.a.createElement(F,Object.assign({editItem:e.editItem,key:t._id},t))})),this.state.nameSearched&&this.state.filteredItems.map((function(t){return r.a.createElement(F,Object.assign({editItem:e.editItem,key:t._id},t))}))):r.a.createElement(H,null)),r.a.createElement(z.a,{size:"lg",show:this.state.showModal,onHide:function(){return e.handleModal(!1)}},r.a.createElement(z.a.Body,null,r.a.createElement(G,Object.assign({},this.props,{handleItemSubmit:this.handleItemSubmit})))),r.a.createElement(Q,null))}}]),a}(n.Component),P=a(241),X=a.n(P),$=(a(480),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).componentDidMount=function(){var t=e.props.match.params.item_id;e.appService.getOneItem(t).then((function(t){return e.setState({itemDetails:t.data,itemView:[t.data]})})).catch((function(e){return console.log(e)}))},e.state={itemDetails:void 0,itemView:[]},e.appService=new k,e}return Object(c.a)(a,[{key:"render",value:function(){return console.log("DETAIL VIEW items",this.state.itemView),console.log("DETAIL ITEMS items",this.state.itemDetails),r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{as:"main"},this.state.itemDetails?r.a.createElement(S.a,null,r.a.createElement(O.a,{md:{span:5,offset:1}},r.a.createElement("h1",null,this.state.itemDetails.name),r.a.createElement("hr",null),r.a.createElement("h4",null," ",this.state.itemDetails.description),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Category: ")," ",this.state.itemDetails.category),r.a.createElement(E.b,{to:"/chat/".concat(this.state.itemDetails._id)},r.a.createElement("p",null,r.a.createElement("b",null,"Found by: ")," ",this.state.itemDetails.foundBy.username," ",r.a.createElement("img",{className:"imgCards",src:X.a,alt:"chat"}))),r.a.createElement("hr",null),r.a.createElement(E.b,{className:"btn btn-light btn-block btn-sm details authDetail",to:"/items/all"},"Back to search")),r.a.createElement(O.a,{md:{span:4,offset:1}},r.a.createElement("img",{src:this.state.itemDetails.imageUrl,alt:this.state.itemDetails.name}))):r.a.createElement(H,null)),r.a.createElement(C.a,{className:"mapMain"},r.a.createElement(Z,{items:this.state.itemView,markers:this.state.itemView})))}}]),a}(n.Component)),ee=function e(){var t=this;Object(o.a)(this,e),this.getAllUsers=function(){return t.service.get("/users")},this.getUserItems=function(e){return t.service.get("/items/users/".concat(e))},this.editUser=function(e,a){return t.service.post("/users/".concat(e),a)},this.service=d.a.create({baseURL:"".concat("https://found-it-app.herokuapp.com/api"),withCredentials:!0})},te=(a(220),a(221),a(242)),ae=a.n(te),ne=a(243),re=a.n(ne),le=(a(481),function(e){var t=e._id,a=e.name,n=e.imageUrl,l=e.deleteItem,s=e.handleModal;return r.a.createElement(O.a,{md:4},r.a.createElement(B.a,{className:"item-card"},r.a.createElement(B.a.Img,{variant:"top",src:n||"https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg"}),"                ",r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,a),r.a.createElement("div",{className:"imgCardContainerUser"},r.a.createElement("div",{onClick:function(){return s(!0,t)}}," ",r.a.createElement("img",{className:"imgCards",src:ae.a,alt:"edit"})),r.a.createElement("div",{onClick:function(){return l(t)}},r.a.createElement("img",{className:"imgCards",src:re.a,alt:"delete"}))))))}),se=a(83),ie=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t="file"===e.target.type?e.target.files[0]:e.target.value;n.setState(Object(w.a)({},e.target.name,t))},n.handleFormSubmit=function(e){e.preventDefault();var t=new FormData;Object.keys(n.state).forEach((function(e){t.append(e,n.state[e])})),n.userService.editUser(n.props.id,t).then((function(e){n.props.setTheUser(e.data),n.props.closeModal()})).catch((function(e){return console.log(e)}))},n.receiveMessages=function(e){var t=Object(se.a)(n.props.loggedInUser.messages);t.push(e);var a=Object(se.a)(t),r=Object(i.a)(Object(i.a)({},n.props.loggedInUser),{},{messages:a});n.userService.editUser(n.props.loggedInUser._id,r).then((function(e){n.props.setTheUser(e.data)})).catch((function(e){return console.log(e)}))},n.state={name:n.props.name,username:n.props.username,avatar:n.props.avatar,password:n.props.password,message:n.props.messages},n.userService=new ee,n.filesService=new _,n}return Object(c.a)(a,[{key:"render",value:function(){return console.log("set the user in profile form",this.props.setTheUser),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{md:{offset:3,span:6}},r.a.createElement("h3",{style:{color:"lightseagreen"}},"Edit profile"),r.a.createElement("hr",null),r.a.createElement(T.a,{onSubmit:this.handleFormSubmit},r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Name"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.name,name:"name",type:"text"})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Username"),r.a.createElement(T.a.Control,{onChange:this.handleInputChange,value:this.state.username,name:"username",type:"text"})),r.a.createElement(T.a.Group,null,r.a.createElement(T.a.Label,{style:{color:"SlateBlue"}},"Avatar"),r.a.createElement(T.a.Control,{name:"avatar",type:"file",onChange:this.handleInputChange})),r.a.createElement(j.a,{type:"submit",className:"btn btn-light btn-block btn-sm details auth"},"Submit"))))}}]),a}(n.Component),oe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.props.loggedInUser&&n.updateItemList()},n.updateItemList=function(){n.userService.getUserItems(n.state.id).then((function(e){console.log("all items user in profile",e.data),n.setState({items:e.data})})).catch((function(e){return console.log(e)}))},n.deleteItem=function(e){n.appService.deleteItem(e).then((function(t){var a=n.state.items.filter((function(t){return t._id!==e}));n.setState({items:a})})).catch((function(e){return console.log(e)}))},n.handleModal=function(e,t){n.setState({showModal:e,id_item:t})},n.handleItemSubmit=function(){n.handleModal(!1),n.updateItemList()},n.state={items:[],showModal:!1,id:e.loggedInUser.loggedInUser._id,id_item:null},n.appService=new k,n.userService=new ee,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.id_item?this.state.items.filter((function(t){return t._id===e.state.id_item}))[0]:{};return r.a.createElement(r.a.Fragment,null,this.state.items?r.a.createElement(S.a,null,this.state.items.map((function(t){return r.a.createElement(le,Object.assign({handleModal:e.handleModal,editItem:e.editItem,deleteItem:e.deleteItem,key:t._id},t))}))):r.a.createElement(H,null),r.a.createElement(z.a,{size:"lg",show:this.state.showModal,onHide:function(){return e.handleModal(!1)}},r.a.createElement(z.a.Body,null,r.a.createElement(G,Object.assign({itemEdit:t},this.props,{handleEditSubmit:this.handleItemSubmit})))))}}]),a}(n.Component),ce=a(244),me=a.n(ce),ue=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.props.loggedInUser&&n.updateItemList()},n.componentDidUpdate=function(e){!e.loggedInUser&&n.props.loggedInUser&&n.updateItemList()},n.updateItemList=function(){n.userService.getUserItems(n.state.id).then((function(e){console.log("all items from this user",e.data),n.setState({items:e.data})})).catch((function(e){return console.log(e)}))},n.deleteItem=function(e){n.appService.deleteItem(e).then((function(t){var a=n.state.items.filter((function(t){return t._id!==e}));n.setState({items:a})})).catch((function(e){return console.log(e)}))},n.handleModal=function(){return n.setState({showModal:!0})},n.onHide=function(){return n.setState({showModal:!1})},n.handleItemSubmit=function(){n.handleModal(!1),n.updateItemList()},n.state={items:[],showModal:!1,id:n.props.loggedInUser?n.props.loggedInUser._id:""},n.appService=new k,n.userService=new ee,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.loggedInUser?this.props.loggedInUser._id:"",a=this.props.loggedInUser?this.props.loggedInUser.name:"",n=this.props.loggedInUser?this.props.loggedInUser.username:"",l=this.props.loggedInUser?this.props.loggedInUser.avatar:"",s=this.props.loggedInUser?this.props.loggedInUser.password:"";return r.a.createElement(r.a.Fragment,null,this.props.loggedInUser&&r.a.createElement("div",{className:"container"},r.a.createElement(B.a,{className:"card border-0"},r.a.createElement("h2",null," Hi, ",this.props.loggedInUser.name,"!"),r.a.createElement("p",null,r.a.createElement("img",{className:"avatarUser",src:this.props.loggedInUser.avatar,alt:"user avatar"})),r.a.createElement(E.b,{to:"/message"},r.a.createElement("img",{className:"inboxIcon",src:me.a,alt:"inbox"})),r.a.createElement(j.a,{className:"btn btn-light btn-block btn-sm details auth profileBtn",onClick:function(){return e.handleModal(!0)}},"Edit profile")),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("h4",null,"These are your listed items:"),r.a.createElement("br",null),r.a.createElement(oe,{loggedInUser:this.props})),r.a.createElement(z.a,{size:"lg",show:this.state.showModal,onHide:this.onHide},r.a.createElement(z.a.Body,null,r.a.createElement(S.a,null,this.state.showModal?r.a.createElement(ie,{id:t,name:a,username:n,password:s,avatar:l,closeModal:this.onHide,setTheUser:this.props.setTheUser}):null))))}}]),a}(n.Component),pe=a(121),de=a(42),he=a(43),ge=a(245),fe=a.n(ge),be=(a(514),a(246)),Ee=a.n(be);function ve(){var e=Object(de.a)(["\n  width: 45%;\n  background-color: transparent;\n  color: #705F88;\n  border: 1px solid white;\n  padding: 10px;\n  margin-left: 5px;\n  text-align: center;\n  border-top-left-radius: 10%;\n  border-bottom-left-radius: 10%;\n"]);return ve=function(){return e},e}function ye(){var e=Object(de.a)(["\n  justify-content: flex-start;\n"]);return ye=function(){return e},e}function Ie(){var e=Object(de.a)(["\n  width: 45%;\n  background-color: #A89EB6;\n  color: white;\n  padding: 10px;\n  margin-right: 5px;\n  text-align: center;\n  border-top-right-radius: 10%;\n  border-bottom-right-radius: 10%;\n"]);return Ie=function(){return e},e}function we(){var e=Object(de.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n"]);return we=function(){return e},e}function je(){var e=Object(de.a)(["\n  width: 400px;\n"]);return je=function(){return e},e}function Te(){var e=Object(de.a)(["\n  background-color: 56837E;\n  width: 100%;\n  border: none;\n  height: 50px;\n  border-radius: 10px;\n  color: #703F83;\n  font-size: 17px;\n"]);return Te=function(){return e},e}function Ce(){var e=Object(de.a)(["\n  width: 98%;\n  height: 100px;\n  border-radius: 10px;\n  margin-top: 10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-size: 17px;\n  background-color: transparent;\n  border: 1px solid #867D93;\n  outline: none;\n  color: #F0E5F3;\n  letter-spacing: 1px;\n  line-height: 20px;\n  ::placeholder {\n    color: #B1A9B4;\n  }\n"]);return Ce=function(){return e},e}function Se(){var e=Object(de.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  max-height: 500px;\n  overflow: auto;\n  width: 400px;\n  border: 1px solid #867D93;\n  border-radius: 10px;\n  padding-bottom: 10px;\n  margin-top: 25px;\n"]);return Se=function(){return e},e}function Oe(){var e=Object(de.a)(["\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  align-items: center;\n  background-color: #A1CAC5;\n  flex-direction: column;\n"]);return Oe=function(){return e},e}var xe=he.a.div(Oe()),Ue=he.a.div(Se()),Ae=he.a.textarea(Ce()),ke=he.a.button(Te()),Be=he.a.form(je()),Le=he.a.div(we()),Me=he.a.div(Ie()),Ne=Object(he.a)(Le)(ye()),De=he.a.div(ve()),Fe=function(e){var t=Object(n.useState)(),a=Object(pe.a)(t,2),l=a[0],s=a[1],i=Object(n.useState)([]),o=Object(pe.a)(i,2),c=o[0],m=o[1],u=Object(n.useState)(""),p=Object(pe.a)(u,2),d=p[0],h=p[1];console.log("props id chat hijo",e.chat);var g=e.chat?"":e.match.params.item_id,f=e.chat?"":e.items.filter((function(e){return g.includes(e._id)})),b=Object(n.useRef)();return Object(n.useEffect)((function(){b.current=fe.a.connect("http://localhost:5000"),b.current.on("your id",(function(e){s(e)})),b.current.on("message",(function(e){console.log("here"),function(e){m((function(t){return[].concat(Object(se.a)(t),[e])}))}(e)}))}),[]),r.a.createElement(xe,null,r.a.createElement("h3",null,"Chat room for ",r.a.createElement("b",null,r.a.createElement("i",null,e.chat?"your listed item":f[0].name))," "),r.a.createElement(Ue,null,c.map((function(t,a){return t.id===l?r.a.createElement(Le,{key:a},r.a.createElement(Me,null,r.a.createElement("p",null,r.a.createElement("small",null,e.loggedInUser.username)),t.body)):r.a.createElement(Ne,{key:a},r.a.createElement(De,null,r.a.createElement("p",null,r.a.createElement("small",null,e.chat?"claimer: ":f[0].foundBy.username," ")),t.body))}))),r.a.createElement(Be,{onSubmit:function(e){e.preventDefault();var t={body:d,id:l};h(""),b.current.emit("send message",t)}},r.a.createElement(Ae,{value:d,onChange:function(e){h(e.target.value)},placeholder:"Type here..."}),r.a.createElement(ke,null,"Send")),r.a.createElement(E.b,{to:"/items/all"},r.a.createElement("img",{className:"exitIcon",src:Ee.a,alt:"exit"})))},_e=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return n.updateItemList()},n.functionOwner=function(){var e=n.props.match.params.item_id,t=n.state.items.filter((function(t){return e.includes(t._id)}));n.setState({ownerItem:t})},n.updateItemList=function(){n.appService.getAllItems().then((function(e){console.log("all items from DB",e.data),n.setState({items:e.data}),n.functionOwner()})).catch((function(e){return console.log(e)}))},n.state={items:[],ownerItem:[]},n.appService=new k,n}return Object(c.a)(a,[{key:"render",value:function(){console.log("chat father items",this.state.items),console.log("OwnerItem",this.state.ownerItem);var e=this.props.match.params.item_id,t=this.state.items.filter((function(t){return e.includes(t._id)}));return console.log("person who found",t),r.a.createElement(C.a,{as:"main",className:"chat-page"},this.state.items.length?r.a.createElement(S.a,null,r.a.createElement(Fe,Object.assign({},this.props,{items:this.state.items}))):r.a.createElement(H,null))}}]),a}(n.Component),Ge=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return console.log("El estado de App ha cambiado:",e.state)}))},e.fetchUser=function(){e.AuthService.isLoggedIn().then((function(t){return null===e.state.loggedInUser&&e.setState({loggedInUser:t.data})})).catch((function(e){return console.log({err:e})}))},e.handleToast=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(i.a)({},e.state.toast);n={visible:t,text:a},e.setState({toast:n})},e.state={loggedInUser:null,chat:!0,toast:{visible:!1,text:""}},e.AuthService=new h,e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser,handleToast:this.handleToast}),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(g.b,{exact:!0,path:"/chat/:item_id",render:function(t){return r.a.createElement(_e,Object.assign({},t,{loggedInUser:e.state.loggedInUser,setTheUser:e.setTheUser}))}}),r.a.createElement(g.b,{exact:!0,path:"/message",render:function(t){return r.a.createElement(Fe,Object.assign({},t,{loggedInUser:e.state.loggedInUser,setTheUser:e.setTheUser,chat:e.state.chat}))}}),r.a.createElement(g.b,{exact:!0,path:"/items/all",render:function(){return e.state.loggedInUser?r.a.createElement(V,{loggedInUser:e.state.loggedInUser}):r.a.createElement(g.a,{to:"/signup"})}}),r.a.createElement(g.b,{exact:!0,path:"/items/:item_id",render:function(e){return r.a.createElement($,e)}}),r.a.createElement(g.b,{exact:!0,path:"/user",render:function(t){return r.a.createElement(ue,Object.assign({},t,{setTheUser:e.setTheUser,loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(g.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(x,Object.assign({},t,{setTheUser:e.setTheUser,handleToast:e.handleToast}))}}),r.a.createElement(g.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(U,Object.assign({},t,{setTheUser:e.setTheUser,handleToast:e.handleToast}))}})),r.a.createElement(I,Object.assign({},this.state.toast,{handleToast:this.handleToast})))}}]),a}(n.Component);s.a.render(r.a.createElement(E.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null))),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.954f6bf4.chunk.js.map