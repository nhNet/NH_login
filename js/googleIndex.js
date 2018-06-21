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
   var profileName = profile.getName();
   var profileEmail = profile.getEmail();
   var names = profileName.split(" ");
   var firstName = names[0];
   var surName = names[1];
   
   document.querySelector('.submit').onclick= function(){
      var inputEmail = document.querySelector('.myInputEmail').value;
      var inputPassword = document.querySelector('.myInputPassword').value;
       if(inputEmail == profileEmail){
          if(inputPassword.length>=8 && inputPassword.length<=16){
               document.body.innerHTML='<div style="height:64.9vh;" class="borderBox">'+
                                           '<div class="loginBox"><br><br>'+
                                           '<h1 style="color:#555555;font-size:50px;">Matching Data...</h1><br><br>'+
                                           '<h1 style="color:#555555;font-size:30px;">Fullname: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+profileName+'</span><br><br>'+
                                           '<h1 style="color:#555555;font-size:30px;">Email: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+inputEmail+'</span><br><br>'+
                                           '<h1 style="color:#555555;font-size:30px;">Password: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+inputPassword+'</span><br><br><br><br><br>'+
                                           '<h1 style="color:#555555;text-align:right;font-size:30px;">All correct!</h1>'+
                                           '<h1 style="color:#555555;text-align:right;font-size:40px;">Loading Content...</h1>'+
                                           '</div>'+
                                       '</div>';
                setTimeout(function(){window.location='https://nhnet.github.io/pro/';},2000);
         }else{
            document.querySelector('.myInputPassword').value='';
            $(function(){$("head").append("<style>::placeholder {color: red;opacity: 1;</style>");});
            document.querySelector('.myInputPassword').placeholder="Your password was incorrect!";
         }
       }else{
           document.querySelector('.myInputEmail').value='';
          $(function(){$("head").append("<style>::placeholder {color: red;opacity: 1;</style>");});
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
