var storage=firebase.storage();
//    function test(){
// var use = firebase.auth().currentUser;

// if (use != null) {
//   use.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
// }

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("logoutbtn").style.display="block";
    document.getElementById("userhead").innerHTML = user.displayName;
   
     // var photo =document.getElementById("ttt");
     // var upload=document.createElement("img");
     // upload.src=user.photoURL;
     // photo.appendChild(upload);


  } else {
    document.getElementById("logoutbtn").style.display="none";

  }
});
function logout(){
  firebase.auth().signOut();

}

function login(){
document.body.style.backgroundColor = "white";
    
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
        
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'main.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'main.html'
};   var user = firebase.auth().currentUser;
    console.log(user);// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
    }

    