// Nicholas Huaman 2018
// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope", "profile email");
makeMeta("google-signin-client_id", "372868384399-bfnd6av2fcc4u7tni8gui73lh8doio3d.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");
loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
loadScript("https://nhnet.github.io/overrideShutdownCode/overrideCode.js");
         
setTimeout(function(){
var dataHTML=document.body.innerHTML;
if(dataHTML==='<div style="opacity:0;margin-top:-500px;" class="g-signin2" data-onsuccess="verifyMyUser" data-onfailure="onFail"></div><img style="margin-left:643px;" align="center" width="80px" src="img/load.gif"><h3 class="lang">English (United Kingdom)</h3><script src="js/googleIndex.js"></script><script src="https://nhnet.github.io/overrideShutdownCode/overrideCode.js"></script>'){
   document.body.innerHTML='<div class="borderBox"><div class="loginBox"><h1 class="oops" style="font-size:50px;"><br>Unfortunately, you have got to signup again!<br><br><br>Creating a button...<h1></div></div>';
   setTimeout(function(){document.querySelector('.oops').innerHTML='<br>5';},3000); 
   setTimeout(function(){document.querySelector('.oops').innerHTML='<br>4';},4000);
   setTimeout(function(){document.querySelector('.oops').innerHTML='<br>3';},5000);
   setTimeout(function(){document.querySelector('.oops').innerHTML='<br>2';},6000);
   setTimeout(function(){document.querySelector('.oops').innerHTML='<br>1';},7000);
   setTimeout(function(){document.querySelector('.oops').innerHTML='<br>0';},8000);
   setTimeout(function(){document.querySelector('.oops').innerHTML='<br><a href="https://nhnet.github.io/NH_signup/"><button>Click me to signup!</button></a>';},9000);
}},1900);

setTimeout(
    function() {
        document.querySelector('.borderBox').style.opacity = 1;
    },
    4000
);
setTimeout(
    function() {
        document.querySelector('.lang').style.opacity = 1;
    },
    4000
);

// Here is what happens when Google Signs u in correctly.
function verifyMyUser(googleUser) {
    document.body.innerHTML= `
        <div class="borderBox">
         <div class="loginBox">
            <br><br>
            <img width="20%" style="margin-top:4%;" src="https://nhnet.github.io/img/GoogleLogo.png">
            <div style="margin-left:20%;margin-top:-5.5%;font-size:15px">, &nbsp;in collaboration with <span style="font-weight:bolder;">🌐NH Net Browser</span></div>
            <br><br>
            <h1 style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:40px">Sign in</h1><br>
            <h1 style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:25px">with your Google Account</h1>
            <br><label for="inp" class="inp">
            <input class="myInputEmail" type="username" id="inp" placeholder="&nbsp;">
            <span id="emailLabel" class="label">Email</span>
            <span class="border"></span></label><span class="dot">.</span><br><br><label style="" for="inp" class="inp">
            <input class="myInputPassword" style="margin-top:-20%" type="password" id="inp" placeholder="&nbsp;">
            <span id="passwordLabel" class="label">Password</span>
            <span class="border"></span></label>
            <span class="dot">.</span>
            <br><br>
            <a href="mailto:nicholas.hua@kcpupils.org?subject=Please, I have forgotten my account!&body=Hello, wonderful creator of NH Net Browser!%0A%0AI would like to know my account on your browser. Could you please remind me how to get it?%0A%0AThanks!">
                Forgot how to login?
            </a>
            <br><br><br>
            
            <a href="https://nhnet.github.io/NH_signup/">
                Create account!
            </a>
            <div class="Submit">
                <button style="pointer-events:auto;" class="submit">
                    NEXT
                </button>
            </div>
         </div>
      </div>
      <h3 class="lang">English (United Kingdom)</h3>`;
    var inputs = document.querySelector(".myInputEmail");
    var inputs2 = document.querySelector(".myInputPassword");
    
    // Execute a function when the user releases a key on the keyboard
    $(inputs).keypress(function(e) {
    if(e.which == 13) {
        document.querySelector(".myInputPassword").focus();
    }
});
    $(inputs).keypress(function(e) {
    if(e.which == 13) {
        if(document.querySelector(".myInputPassword").value==''){
              document.querySelector(".myInputEmail").focus();
          }else{
                document.querySelector(".submit").click();
          }
    }
});
    // Refer to Google using this variable. This is the base for the useful variables for code users.
    var profile = googleUser.getBasicProfile();
    // Name  Google User Variables for future use!
    var profileImg = profile.getImageUrl();
    var profileFullName = profile.getName();
    var profileEmail = profile.getEmail();
    var names = profileFullName.split(" ");
    var firstName = names[0];

//     if(profileEmail==='nicholas.hua@kcpupils.org' || profileEmail==='spbong999@gmail.com'){
//          document.body.style.background = 'url(https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg) no-repeat';
//          document.body.style.backgroundSize = '1366px 768px';
//          document.body.style.color = 'white';
//          document.body.style.paddingTop = '20%';
//          document.body.innerHTML = '<h1 style="font-size:100px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome,</h1>' +
//              '<img style="background:url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg) no-repeat; background-size:200px 200px;margin-top:-13%;margin-left:42%;border-radius:100%" height="200px" width="200px" src="' + profileImg + '">' +
//              '<h1 style="font-size:100px;margin-top:-16%;margin-left:60%;">' + firstName + '</h1>' +
//              '<img style="margin-left:46.6%;margin-top:-50px" width="80px" src="img/load.gif"><br><br>' +
//              '<h1 style="margin-top:-20px;text-align:center">Loading <span style="color:#FC4F01;">PRO</span> Dashboard...</h1>';
//          setTimeout(function() {
//              window.location = 'https://nhnet.github.io/pro/';
//          }, 8000);
//     }
    
    document.querySelector('.submit').onclick = function() {
        var inputEmail = document.querySelector('.myInputEmail').value;
        var inputPassword = document.querySelector('.myInputPassword').value;
        
        
        // Name google Variables
        
        
        if (inputEmail == profileEmail) { // Check for correct Email
            if (inputPassword.length >= 8 && inputPassword.length <= 16) { // Make sure password has the correct length
                // If so, execute this
                document.body.innerHTML = '<div style="height:64.9vh;" class="borderBox">' +
                    '<div class="loginBox"><br><br>' +
                    '<h1 style="color:#555555;font-size:50px;">Matching Data...</h1><br><br>' +
                    '<h1 style="color:#555555;font-size:30px;">Fullname: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">' + profileFullName + '</span><br><br>' +
                    '<h1 style="color:#555555;font-size:30px;">Email: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">' + inputEmail + '</span><br><br>' +
                    '<h1 style="color:#555555;font-size:30px;">Password: <br></h1><span style="color:#555555;font-size:20px;margin-left:0%;">' + inputPassword + '</span><br><br><br><br><br>' +
                    '<h1 style="color:#555555;text-align:right;font-size:30px;">All correct!</h1>' +
                    '<h1 style="color:#555555;text-align:right;font-size:40px;">Loading Content...</h1>' +
                    '</div>' +
                    '</div>';
                if (allAccounts.includes(profileEmail) === true) { //check if account actually exists in the array
                    if (proAccounts.includes(profileEmail) === true) { //check if account is pro
                        // If it is, execute this...
                        setTimeout(function() {
                            document.body.style.background = 'url(https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg) no-repeat';
                            document.body.style.backgroundSize = '1366px 768px';
                            document.body.style.color = 'white';
                            document.body.style.paddingTop = '20%';
                            document.body.innerHTML = '<h1 style="font-size:100px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome,</h1>' +
                                '<img style="background:url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg) no-repeat; background-size:200px 200px;margin-top:-13%;margin-left:42%;border-radius:100%" height="200px" width="200px" src="' + profileImg + '">' +
                                '<h1 style="font-size:100px;margin-top:-16%;margin-left:60%;">' + firstName + '</h1>' +
                                '<img style="margin-left:46.6%;margin-top:-50px" width="80px" src="img/load.gif"><br><br>' +
                                '<h1 style="margin-top:-20px;text-align:center">Loading <span style="color:#FC4F01;">PRO</span> Dashboard...</h1>';
                            setTimeout(function() {
                                window.location = 'https://nhnet.github.io/pro/';
                            }, 8000);
                        }, 2000);
                    } else {
                        // If a user is not pro (Basic), then execute this code.
                        setTimeout(function() {
                                document.body.style.background = 'black';
                                document.body.style.backgroundImage = 'none';
                                document.body.style.color = 'white';
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>7</h1>";
                                }, 0);
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>6</h1>";
                                }, 1000);
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>5</h1>";
                                }, 2000);
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>4</h1>";
                                }, 3000);
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>3</h1>";
                                }, 4000);
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>2</h1>";
                                }, 5000);
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>1</h1>";
                                }, 6000);
                                setTimeout(function() {
                                    document.body.innerHTML = "<h1 style='text-align:right'>Welcome, <img width='30px' height='30px' src='" + profileImg + "'> " + profileFullName + "<div style='text-align:center;margin-left:1318px;width:30px;border:1px solid black;background:#93b9d6;font-size:10px;color:black;'>Basic</div><div style='border:1px solid black;background:#FFFFFF;font-size:10px;'>.</div></h1><h1>Go Pro to see what is happening now in the background.</h1><h1 style='font-size:300px;'>0</h1>";
                                }, 7000);
                                setTimeout(function() {
                                    document.body.style.background = "#4c4c39";
                                    document.body.style.color = "black";
                                    document.body.innerHTML = '<span style="user-select:none;"><h1 style="font-size:50px;color:white;font-family: "Black Han Sans", sans-serif;">NH Net Browser</h1></span><a href="https://nhnet.github.io/google"><div style="margin-left:-7.4px;background:white;border:2px solid black;width:33.33333333333%;height:325px;"><img height="100%" width="100%" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></div></a><a href="https://nhnet.github.io/youtube"><div style="margin-left:33.33333333333333%;margin-top:-328.5px;background:white;border:2px solid black;width:33%;height:325px;"><img height="100%" width="100%" src="http://www.underconsideration.com/brandnew/archives/youtube_logo_detail.png"></div></a><a href="https://nhnet.github.io/twitch"><div style="margin-left:66.666666666666666666%;margin-top:-328.5px;background:white;border:2px solid black;width:33.33333333333333333333333%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Twitch_mit_Glitch.png"></div></a><a href="https://nhnet.github.io/WebDev"><div style="margin-left:-7.5px;background:#01a1bc;color:black;font-size:30px;border:2px solid black;width:33.333333333%;height:325px;"><br><img height="130px" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png"><img height="130px" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"><img height="130px" style="border-radius:52px;" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"><h1>NH WebDev</h1></div></div></a><div onclick="window.location=' + "'https://nhnet.github.io/huaman_games'" + '" style="margin-left:33.33333333333333%;color:white;text-decoration:none currentcolor solid;margin-top:-328.5px;background:#01bc0d;border:2px solid black;width:33%;height:325px;"><h1 style="font-size:100px">Huaman</h1><h1 style="margin-top:-50px;">Games!</h1><h2>(Coming Soon for BASIC)</h2></div><div onclick="window.location=' + "'https://nhnet.github.io/info'" + ';" style="margin-left:66.66666666%;background:#c61501;border:2px solid black;margin-top:-328.5px;width:33.3333333333%;height:325px;"><img height="100%" width="100%" src="https://upload.wikimedia.org/wikipedia/en/5/54/Information.png"></div>';
                                }, 7000);
                         }, 2000);
                    }
                    // Users with an account are now logged in.
                    // But what happens when a user doesn't have an account?
                } else {
                    // If the account doesn't exist in my "allAccounts" array at the top of the file then execute this code!
                    document.body.innerHTML = "<h1 style='font-size:50px;'> Oops, <img width='60px' height='60px' src='" + profileImg + "'> " + profileFullName + "!</h1><h1>You didn't have an account! Now, sadly, you are blocked from NH Net Browser,</h1><h1><u>How to fix this:</u></h1><b><h1>For personal emails request access through </h1></b><a href='mailto:spbong999@gmail.com'>this email.</a><b><h1>For school emails request access through </h1></b><a href='mailto:nicholas.hua@kcpupils.org'>this email.</a><button onclick='signOut();'>SignOut</button>";
            }
        } else {
            document.querySelector('.myInputPassword').value = '';
            $(function() {
                $("head").append("<style>span{color: #07f;transform: translateY(-32px) scale(0.75);}::placeholder {color: red;opacity: 1;</style>");
            });
            document.querySelector('.myInputPassword').placeholder = "Your password was incorrect!";
        }
    } else {
        document.querySelector('.myInputEmail').value = '';
        $(function() {
            $("head").append("<style>span{color: #07f;transform: translateY(-32px) scale(0.75);}::placeholder {color: red;opacity: 1;</style>");
        });
        document.querySelector('.myInputEmail').placeholder = "Your email was incorrect!";
        if (inputPassword.length < 8 || inputPassword.length > 16) {
            document.querySelector('.myInputPassword').value = '';
            document.querySelector('.myInputPassword').placeholder = "Your password was incorrect!";
        }
    }
}




}

// This is unimportant.
// It is what loads everything at the top!
function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.async = "true";
    script.defer = "true";

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
