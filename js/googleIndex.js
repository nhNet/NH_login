// Nicholas Huaman 2018

// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope","profile email");
makeMeta("google-signin-client_id","398993796104-lq9k21a411mnehe5p94brocp3rs72dr5.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");
// Here is what happens when Google Signs u in correctly.
function onSignIn(googleUser) {
   document.body.innerHTML='OK';
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
