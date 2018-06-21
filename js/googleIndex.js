// Nicholas Huaman 2018

// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope","profile email");
makeMeta("google-signin-client_id","398993796104-lq9k21a411mnehe5p94brocp3rs72dr5.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");

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
       if(inputEmail == profileEmail && inputPassword.length>=8){
           document.body.innerHTML='<div style="height:64.9vh;" class="borderBox">'+
                                     '<div class="loginBox"><br><br>'+
                                     '<h1 style="color:#555555;font-size:50px;">Matching Data...</h1><br><br>'+
                                     '<h1 style="color:#555555;font-size:30px;">Firstname: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+firstName+'</span><br><br>'+
                                     '<h1 style="color:#555555;font-size:30px;">Surname: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+surName+'</span><br><br>'+
                                     '<h1 style="color:#555555;font-size:30px;">Email: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+inputEmail+'</span><br><br>'+
                                     '<h1 style="color:#555555;font-size:30px;">Password: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">'+inputPassword+'</span><br><br>'+
                                     '<h1 style="color:#555555;text-align:right;font-size:30px;">All correct!</h1>'+
                                     '<h1 style="color:#555555;text-align:right;font-size:40px;">Loading Content...</h1>'+
                                     '</div>'+
                                 '</div>'+
                                 '<span style="margin-top:-26px;" class="lang">English (United Kingdom)</span>';
       }else{
           document.body.innerHTML="Oops";
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
