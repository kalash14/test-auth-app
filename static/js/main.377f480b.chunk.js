(this["webpackJsonptest-auth-app"]=this["webpackJsonptest-auth-app"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(2),c=t.n(i),l=(t(13),t(3)),r=t(4),u=t(6),s=t(5),g=t(7),m=function(e){var n=e.name,t=e.imgUrl;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",n,"!"),o.a.createElement("img",{src:t,alt:"profle"}))},p=(t(14),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(o)))).state={name:null,imgUrl:null},t.signIn=function(){window.gapi.auth2.getAuthInstance().signIn().then((function(e){var n=e.getBasicProfile();t.setState({name:n.getName(),imgUrl:n.getImageUrl()})}))},t.signOut=function(){window.gapi.auth2.getAuthInstance().signOut().then((function(){t.setState({name:null,imgUrl:null})}))},t}return Object(g.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=function(e){console.log("init OK",e)},n=function(e){console.log("error",e)};console.log("env","48939718331-dqciluvu2263csr33q9edvl11vo8eplo.apps.googleusercontent.com"),window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"48939718331-dqciluvu2263csr33q9edvl11vo8eplo.apps.googleusercontent.com"}).then(e,n)}))}},{key:"render",value:function(){var e=this.state,n=e.name,t=e.imgUrl;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},!n&&o.a.createElement("button",{onClick:this.signIn},"Log in"),!!n&&o.a.createElement("button",{onClick:this.signOut},"Log out"),!!n&&o.a.createElement(m,{name:n,imgUrl:t})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.377f480b.chunk.js.map