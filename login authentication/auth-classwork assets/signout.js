  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAsmH4xnvZ_QDaYho7HF8w-WSpdzcohO9s",
    authDomain: "new-authentication-6fe39.firebaseapp.com",
    projectId: "new-authentication-6fe39",
    storageBucket: "new-authentication-6fe39.appspot.com",
    messagingSenderId: "724038609408",
    appId: "1:724038609408:web:025810e689d7b07f8486e5"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
    if (user){ 
        var email = user.email;
        var users = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);
        // is signed in
    }   else {
        alert("user not authenticated kindly login or signup");
        window.location = "index.html";
    }
  });

// log out function

let signOutButton = document .getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  // prevent default from submission?\
  e.preventDefault();
  console.log("clicked");

  auth.signOut();
  alert("Signed Out");
  window.location = "index.html";
});