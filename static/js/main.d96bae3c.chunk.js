(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{18:function(e,n){},19:function(e,n){},20:function(e,n){},21:function(e,n){},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var i=t(22),a=t.n(i),o=t(0),r=t(2),s=t(3),c=t(4),d=t(7),l=t.n(d),p=t(17),u=t(8),j=function(e){Object(s.a)(t,e);var n=Object(c.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)(p.BrowserView,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(M,{})]}),Object(u.jsx)(p.MobileView,{})]})}}]),t}(l.a.Component),b=function(e){Object(s.a)(t,e);var n=Object(c.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("div",{className:"header-name",children:"AP"})})}}]),t}(l.a.Component),v=t(14),h=t(1);t(33);t.p;var w=t(23),f=t(24),m=t.p+"static/media/mountainrange2.d86e1c55.glb",O=t.p+"static/media/train1.e4620fed.glb",x=t.p+"static/media/traincarriage1.35cd8273.glb";var y=function(e,n,t){var i=new h.ib(30,50,50),a=new h.ib(.3,4,4),o=new h.U(1e3,1e3,300,300),r=new h.H({color:329491}),s=new h.G(o,r);s.position.set(0,0,-220),e.add(s);for(var c=new h.H({color:16777215}),d=[],l=0;l<800;l++){var p=new h.G(a,c),u=h.E.randFloatSpread(500),j=h.E.randFloatSpread(200)+100,b=h.E.randFloatSpread(100)-100;p.position.set(u,j,b),d.push(p),e.add(p)}var v=new h.V(16777215,1,0,2);v.position.set(80,80,-80),e.add(v);var y=new h.V(16777215,.2,0,2);y.position.set(80,80,-10),e.add(y);var g=new h.H({color:16777215,transparent:!0}),M=new h.G(i,g);M.scale.set(.8,.8,.8),M.position.set(110,80,-100),e.add(M);var N=new f.a;N.load(m,(function(n){var t=n.scene;t.position.set(0,-25,-60),t.rotation.set(0,-Math.PI/2,0),t.scale.set(8,10,13),e.add(t)}));var C=new w.a(o,{sunColor:16777215,waterColor:13,distortionScale:3.7});C.position.set(0,-10,0),C.rotation.set(-Math.PI/2,0,0),e.add(C);var P=-250,S=!1,k=0;N.load(O,(function(n){(k=n.scene).position.set(P,26,-38),k.rotation.set(0,Math.PI/2,0),k.scale.set(1,1,1),e.add(k),S=!0}));var E=!1,H=[];N.load(x,(function(n){for(var t=n.scene,i=0;i<6;i++)H[i]=t.clone(),H[i].position.set(-255-8*i,26,-38),H[i].rotation.set(0,Math.PI/2,0),H[i].scale.set(1,1,2),e.add(H[i]);E=!0})),function i(){requestAnimationFrame(i);var a=.001*performance.now();if(M.position.y=5*-Math.sin(.35*a)+80,C.position.y=2*Math.sin(.25*a)-10,S&E){k.position.x+=1;for(var o=0;o<6;o++)H[o].position.x+=1;if(k.position.x>250){k.position.x=P;for(var r=0;r<6;r++)H[r].position.x=-255-8*r}}t.render(e,n)}()},g=t(54),M=function(e){Object(s.a)(t,e);var n=Object(c.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=function(e){var n=new h.db,t=new h.S(75,window.innerWidth/window.innerHeight,.1,Math.pow(10,10));t.position.copy(e);var i=new h.yb;return i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),i.shadowMap.enabled=!0,i.shadowMap.type=h.R,[n,t,i]}(new h.ub(0,0,75)),n=Object(v.a)(e,3),t=n[0],i=n[1],a=n[2];this.mount.appendChild(a.domElement),i.position.y+=15,y(t,i,a)}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"introduction",children:[Object(u.jsx)("div",{className:"introduction-hi",children:"Hi, I'm"}),Object(u.jsx)("div",{className:"introduction-name",children:"Abhijit Pandit"}),Object(u.jsx)("div",{className:"introduction-tagline",children:"An Aspiring Space Engineer and Creative"}),Object(u.jsx)("div",{className:"introduction-animation",ref:function(n){return e.mount=n}}),Object(u.jsx)("div",{className:"introduction-darkeningfilter"}),Object(u.jsxs)("div",{className:"introduction-expandcontainer",children:[Object(u.jsx)("div",{children:"Coming Soon"}),Object(u.jsx)(g.a,{className:"introduction-expand"})]})]})}}]),t}(l.a.Component);t(18),t(19),t(20),t(21),t(39);a.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d96bae3c.chunk.js.map