(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);a(12);var s=a(10),i=a.n(s),n=(a(23),a(15));n.a.initializeApp({apiKey:"AIzaSyBAisx3QLHCbt1DfzPQvuc2TkS9poYZNkk",authDomain:"linas-chat-app.firebaseapp.com",databaseURL:"https://linas-chat-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"linas-chat-app",storageBucket:"linas-chat-app.appspot.com",messagingSenderId:"1070536175710",appId:"1:1070536175710:web:d272ca8860a4cb0f0a44cf"});n.a;var o=a(11);function c(){var e;return(e=new Date).getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+e.getDate()}function r(){var e,t,a,s,i,n,r,l,u;i="",l=0,e=document.getElementById("email").value,t=document.getElementById("username").value,a=document.getElementById("password").value,""!==e&&""!==t&&""!==a?t.length>=8?a.length>=8?o.a.database().ref("users").once("value",(function(d){if(d.forEach((function(e){r=e.key,e.forEach((function(e){n=e.val(),console.log(n),n.username===t&&(l=1)}))})),0===l){if(void 0===n)i="00001",u="user1";else{s=""+(parseInt(n.uuid)+1);for(var m=i.length+s.length;m<5;m++)i+="0";i+=s,u="user"+(parseInt(r.slice(4))+1)}o.a.database().ref("users/"+u+"/data").set({email:e,username:t,password:a,uuid:i,date:c(),status:"unconfirmed"}),function(e,t,a){window.Email.send({Host:"smtp.gmail.com",Username:"linas.semiotas.test@gmail.com",Password:"mailertest",To:e,From:"linas.semiotas.test@gmail.com",FromName:"Lino Chat",Subject:t,Body:a})}(e,"Registracija","S\u0117kmingai prisiregistravote, norint naudotis paskyra prisijunkite ir \u012fveskite registracijos kod\u0105.<br/><br/> Registracijos kodas: ")}else console.log("Vartotojas tokiu vardu jau yra")})):console.log("Slapta\u017eodis turi bent 8 simboli\u0173 ilgio"):console.log("Vardas turi bent 8 simboli\u0173 ilgio"):console.log("Ne\u012fvesti visi duomenys")}a(18);var l=a(6);var u=function(){return Object(l.jsx)("div",{className:"register-page",children:Object(l.jsx)("div",{className:"window-centering",children:Object(l.jsxs)("div",{className:"auth-window",children:[Object(l.jsx)("div",{className:"auth-title",children:"Registracija"}),Object(l.jsx)("input",{id:"email",className:"auth-input",placeholder:"Elektroninis pa\u0161tas",maxLength:"20"}),Object(l.jsx)("input",{id:"username",className:"auth-input",placeholder:"Prisijungimo vardas",maxLength:"20"}),Object(l.jsx)("input",{id:"password",type:"password",className:"auth-input",placeholder:"Slapta\u017eodis",maxLength:"20"}),Object(l.jsx)("button",{className:"auth-button",onClick:function(){return r()},children:"Registruotis"}),Object(l.jsx)("button",{className:"side-button",onClick:function(){return i.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))},children:"\u2190 gr\u012f\u017eti atgal"})]})})})};var d=function(){return Object(l.jsx)("div",{className:"login-page",children:Object(l.jsx)("div",{className:"window-centering",children:Object(l.jsxs)("div",{className:"auth-window",children:[Object(l.jsx)("div",{className:"auth-title",children:"Prisijungimas"}),Object(l.jsx)("input",{id:"username",className:"auth-input",placeholder:"Prisijungimo vardas",maxLength:"20"}),Object(l.jsx)("input",{id:"password",type:"password",className:"auth-input",placeholder:"Slapta\u017eodis",maxLength:"20"}),Object(l.jsx)("button",{className:"auth-button",children:"Prisijungti"}),Object(l.jsxs)("div",{className:"row-buttons",children:[Object(l.jsx)("button",{className:"side-button",children:"Pamir\u0161ote slapta\u017eod\u012f?"}),Object(l.jsx)("button",{className:"side-button",onClick:function(){return i.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))},children:"Registruotis"})]})]})})})};console.clear(),i.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.290b4f33.chunk.js.map