// Nicholas Huaman 2018
// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope", "profile email");
makeMeta("google-signin-client_id", "398993796104-lq9k21a411mnehe5p94brocp3rs72dr5.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");
loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
loadScript("https://nhnet.github.io/overrideShutdownCode/overrideCode.js");

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
    // Refer to Google using this variable. This is the base for the useful variables for code users.
    var profile = googleUser.getBasicProfile();
    // Name  Google User Variables for future use!
    var profileImg = profile.getImageUrl();
    var profileFullName = profile.getName();
    var profileEmail = profile.getEmail();
    var names = profileFullName.split(" ");
    var firstName = names[0];
    var firstinputEmail = document.querySelector('.myInputEmail').value;
    var firstinputPassword = document.querySelector('.myInputPassword').value;

    if(firstinputEmail != "" && firstinputPassword != ""){
        document.querySelector('.submit').click();
    }

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
                            document.body.style.background = 'black';
                            document.body.style.backgroundImage = 'none';
                            document.body.style.color = 'white';
                            document.body.style.paddingTop = '20%';
                            document.body.innerHTML = '<h1 style="font-size:100px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome,</h1>' +
                                '<img style="margin-top:-13%;margin-left:42%;border-radius:100%" height="200px" width="200px" src="' + profileImg + '">' +
                                '<h1 style="font-size:100px;margin-top:-16%;margin-left:60%;">' + firstName + '</h1>' +
                                '<img style="margin-left:46.6%;margin-top:-50px" width="80px" src="img/load.gif"><br><br>' +
                                '<h1 style="margin-top:-20px;text-align:center">Loading <span style="color:#FC4F01;">PRO</span> Dashboard...</h1>';
                            setTimeout(function() {
                                window.location = 'https://nhnet.github.io/pro/1/';
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
