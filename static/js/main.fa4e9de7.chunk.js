(this.webpackJsonpcontactsapp=this.webpackJsonpcontactsapp||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":1,"letter":"Dog A","clicked":false,"image":"assets/dogImg/dogpic_1.jpg"},{"id":2,"letter":"Dog C","clicked":false,"image":"assets/dogImg/dogpic_3.jpg"},{"id":3,"letter":"Dog D","clicked":false,"image":"assets/dogImg/dogpic_4.jpg"},{"id":4,"letter":"Dog F","clicked":false,"image":"assets/dogImg/dogpic_6.jpg"},{"id":5,"letter":"Dog G","clicked":false,"image":"assets/dogImg/dogpic_7.jpg"},{"id":7,"letter":"Dog K","clicked":false,"image":"assets/dogImg/dogpic_11.jpg"},{"id":8,"letter":"Dog L","clicked":false,"image":"assets/dogImg/dogpic_12.jpg"},{"id":9,"letter":"Dog M","clicked":false,"image":"assets/dogImg/dogpic_13.jpg"},{"id":10,"letter":"Dog N","clicked":false,"image":"assets/dogImg/dogpic_14.jpg"},{"id":11,"letter":"Dog O","clicked":false,"image":"assets/dogImg/dogpic_15.jpg"}]')},14:function(e){e.exports=JSON.parse('[{"id":1,"letter":"Bird A","clicked":false,"image":"assets/birdImg/birdpic_1.jpg"},{"id":2,"letter":"Bird C","clicked":false,"image":"assets/birdImg/birdpic_3.jpg"},{"id":3,"letter":"Bird D","clicked":false,"image":"assets/birdImg/birdpic_4.jpg"},{"id":4,"letter":"Bird F","clicked":false,"image":"assets/birdImg/birdpic_6.jpg"},{"id":5,"letter":"Bird G","clicked":false,"image":"assets/birdImg/birdpic_7.jpg"},{"id":7,"letter":"Bird K","clicked":false,"image":"assets/birdImg/birdpic_11.jpg"},{"id":8,"letter":"Bird L","clicked":false,"image":"assets/birdImg/birdpic_12.jpg"},{"id":9,"letter":"Bird M","clicked":false,"image":"assets/birdImg/birdpic_13.jpg"},{"id":10,"letter":"Bird N","clicked":false,"image":"assets/birdImg/birdpic_14.jpg"},{"id":11,"letter":"Bird O","clicked":false,"image":"assets/birdImg/birdpic_15.jpg"}]')},21:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),i=s.n(c),r=s(13),l=s.n(r),d=s(4),g=s(5),n=s(9),o=s(8),j=s(12),m=s(11),p=s(6),b=s(14),f=Object(c.createContext)(),u=function(e){Object(n.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={images:[m,p,b],displayedImages:m,count:0,clicked:null},e.shuffleCards=function(){for(var t=e.state.displayedImages,s=t.length-1;s>0;s--){var a=Math.floor(Math.random()*(s+1)),c=[t[a],t[s]];t[s]=c[0],t[a]=c[1]}e.setState({dogImages:t})},e.shuffleImages=function(){var t=Math.floor(Math.random()*e.state.images.length);e.setState({displayedImages:e.state.images[t]})},e}return Object(g.a)(s,[{key:"componentDidMount",value:function(){this.shuffleImages()}},{key:"render",value:function(){return Object(a.jsx)(f.Provider,{value:Object(j.a)(Object(j.a)({},this.state),{},{shuffleCards:this.shuffleCards,shuffleImages:this.shuffleImages}),children:this.props.children})}}]),s}(c.Component),h=s(15),O=s(2);var k=function(e){var t=Object(c.useContext)(f).displayedImages;return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("div",{className:"images",children:t.map((function(t){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:t.image,alt:t.letter,onClick:function(){return e.handleClick(t.id)}})},t.id)}))})})};var I=function(e){return Object(a.jsxs)("div",{className:"Jumbotron",children:[Object(a.jsx)("h1",{children:"Memory Game!"}),Object(a.jsxs)("p",{className:"jumboHeading",children:["To get started, click on any ",e.handleTitle()," picture. Don't click the same ",e.handleTitle()," twice or it's game over!"]}),Object(a.jsxs)("nav",{className:"container-fluid progressBar",children:[Object(a.jsxs)("h3",{children:["Score: ",e.score]}),Object(a.jsxs)("h3",{children:["High Score: ",e.highScore]}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:e.progressMessage})]})]})};var x=function(){var e=Object(c.useContext)(f),t=e.displayedImages,s=e.shuffleCards,r=e.shuffleImages,l=Object(c.useState)([]),d=Object(O.a)(l,2),g=d[0],n=d[1],o=Object(c.useState)(0),j=Object(O.a)(o,2),m=j[0],p=j[1],b=Object(c.useState)(0),u=Object(O.a)(b,2),x=u[0],_=u[1],v=Object(c.useState)([]),C=Object(O.a)(v,2),y=C[0],D=C[1],S=Object(c.useState)(!1),B=Object(O.a)(S,2),N=B[0],M=B[1],w=Object(c.useState)(0),G=Object(O.a)(w,2),F=G[0],J=G[1],A=Object(c.useState)(!0),T=Object(O.a)(A,2),K=T[0],H=T[1],L=Object(c.useState)({transform:"scale(0,0)",transition:"0.5s"}),Y=Object(O.a)(L,2),P=Y[0],E=Y[1];function W(){return t[0].letter.includes("Bird")?"Bird":t[0].letter.includes("Dog")?"Dog":"Cat"}function q(){p(0),n([]),D("")}function z(e){switch(e){case"toggleModel":M(!0),E({transition:"0.5s",transform:"scale(1,1)"}),H(!0);break;case"startGame":H(!0),setTimeout((function(){M(!1)}),250),s(),r(),E({transition:"0.5s",transform:"scale(0,0)"});break;case"you win!":M(!0),H(!1),E({transition:"0.5s",transform:"scale(1,1)"})}}return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(I,{score:m,highScore:x,progressMessage:y,handleTitle:W}),N&&Object(a.jsx)("div",{className:"model-backdrop",children:Object(a.jsxs)("div",{className:"model",style:P,children:[K&&Object(a.jsxs)("h3",{children:["Oh No!,You Clicked that ",W()," 'Before.",Object(a.jsx)("br",{}),"Game Over"]}),!K&&Object(a.jsx)("h3",{className:"youwin",children:"You Won "}),Object(a.jsxs)("h3",{children:["Your score:",F]}),Object(a.jsxs)("h3",{children:["High score:",x]}),Object(a.jsx)("button",{className:"btn btn-success",onClick:function(){return z("startGame")},children:"Play Again"})]})}),Object(a.jsx)(k,{handleClick:function(e){-1===g.indexOf(e)?(n([].concat(Object(h.a)(g),[e])),s(),function(){var e=m+1;if(m>=x)return p(e),J(e),_(e);J(e),p(e),D("Great job! Keep going!"),s()}()):10===x?(z("you win!"),q()):(z("toggleModel"),q())}})]})},_=(s(21),function(e){Object(n.a)(s,e);var t=Object(o.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(g.a)(s,[{key:"render",value:function(){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(u,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:p[0].image,alt:""})}),Object(a.jsx)(x,{})]})})}}]),s}(c.Component));s(22);l.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"letter":"Cat A","clicked":false,"image":"assets/catImg/catpic_1.jpg"},{"id":2,"letter":"Cat C","clicked":false,"image":"assets/catImg/catpic_3.jpg"},{"id":3,"letter":"Cat D","clicked":false,"image":"assets/catImg/catpic_4.jpg"},{"id":4,"letter":"Cat F","clicked":false,"image":"assets/catImg/catpic_6.jpg"},{"id":5,"letter":"Cat G","clicked":false,"image":"assets/catImg/catpic_7.jpg"},{"id":7,"letter":"Cat K","clicked":false,"image":"assets/catImg/catpic_11.jpg"},{"id":8,"letter":"Cat L","clicked":false,"image":"assets/catImg/catpic_12.jpg"},{"id":9,"letter":"Cat M","clicked":false,"image":"assets/catImg/catpic_13.jpg"},{"id":10,"letter":"Cat N","clicked":false,"image":"assets/catImg/catpic_14.jpg"},{"id":11,"letter":"Cat O","clicked":false,"image":"assets/catImg/catpic_15.jpg"}]')}},[[23,1,2]]]);
//# sourceMappingURL=main.fa4e9de7.chunk.js.map