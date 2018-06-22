// Nicholas Huaman 2018

// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope","profile email");
makeMeta("google-signin-client_id","398993796104-lq9k21a411mnehe5p94brocp3rs72dr5.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");
loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");

setTimeout(
   function(){
      document.querySelector('.borderBox').style.opacity=1;
   },
   4000
);
setTimeout(
   function(){
      document.querySelector('.lang').style.opacity=1;
   },
   4000
);
// Here is what happens when Google Signs u in correctly.
function verifyMyUser(googleUser) {
   // Refer to Google using this variable. This is the base for the useful variables for code users.
   var profile = googleUser.getBasicProfile();
   // Name  Google User Variables for future use!
   var profileImg = profile.getImageUrl();
   var profileFullName = profile.getName();
   var profileEmail = profile.getEmail();
   var names = profileFullName.split(" ");
   var firstName = names[0];
   
   
   setTimeout(function(){
                     document.body.style.background='black';
                     document.body.style.backgroundImage='none';
                     document.body.style.color='white';
                     document.body.style.paddingTop='20%';
                     document.body.innerHTML='<h1 style="font-size:100px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome,</h1>'+
                         '<img style="margin-top:-16%;margin-left:42%;border-radius:100%" height="200px" width="200px" src="https://nhnet.github.io/img/backGoogle.jpg">'+
                         '<h1 style="font-size:100px;margin-top:-18.7%;margin-left:60%;">'+firstName+'</h1>'+
                         '<img style="margin-left:46.6%;margin-top:-150px" width="80px" src="img/load.gif"><br><br>'+
                         '<h1 style="text-align:center">Loading <span style="color:#FC4F01;">PRO</span> Dashboard...</h1>';
                     setTimeout(function(){window.location='https://nhnet.github.io/pro/1/';},5000);
                },2000);
   
   document.querySelector('.submit').onclick= function(){
      var inputEmail = document.querySelector('.myInputEmail').value;
      var inputPassword = document.querySelector('.myInputPassword').value;
       if(inputEmail == profileEmail){
          if(inputPassword.length>=8 && inputPassword.length<=16){
               document.body.innerHTML='<div style="height:64.9vh;" class="borderBox">'+
                                           '<div class="loginBox"><br><br>'+
                                           '<h1 style="color:#555555;font-size:50px;">Matching Data...</h1><br><br>'+
                                           '<h1 style="color:#555555;font-size:30px;">Fullname: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+profileFullName+'</span><br><br>'+
                                           '<h1 style="color:#555555;font-size:30px;">Email: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+inputEmail+'</span><br><br>'+
                                           '<h1 style="color:#555555;font-size:30px;">Password: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+inputPassword+'</span><br><br><br><br><br>'+
                                           '<h1 style="color:#555555;text-align:right;font-size:30px;">All correct!</h1>'+
                                           '<h1 style="color:#555555;text-align:right;font-size:40px;">Loading Content...</h1>'+
                                           '</div>'+
                                       '</div>';
               //Welcome HERE
         }else{
            document.querySelector('.myInputPassword').value='';
            $(function(){$("head").append("<style>span{color: #07f;transform: translateY(-32px) scale(0.75);}::placeholder {color: red;opacity: 1;</style>");});
            document.querySelector('.myInputPassword').placeholder="Your password was incorrect!";
         }
       }else{
           document.querySelector('.myInputEmail').value='';
          $(function(){$("head").append("<style>span{color: #07f;transform: translateY(-32px) scale(0.75);}::placeholder {color: red;opacity: 1;</style>");});
           document.querySelector('.myInputEmail').placeholder="Your email was incorrect!";
           if(inputPassword.length<8 || inputPassword.length>16){
               document.querySelector('.myInputPassword').value='';
               document.querySelector('.myInputPassword').placeholder="Your password was incorrect!";
         }
       }
   }
}

// This is unimportant.
// It is what loads everything at the top!
function loadScript(url) {
   var script = document.createElement("script");
   script.src = url;
   script.async="true";
   script.defer="true";

   document.head.appendChild(script);
}
function makeMeta(name, content) {
   var meta = document.createElement("meta");
   meta.name = name;
   meta.content = content;

   document.head.appendChild(meta);
}

// That's all folks!
// Thank you for looking at my code.
// It might even be of some use to you!
// Nicholas Huaman 2018
