  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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

//   sign up function

  let signUpButton = document.getElementById("signup");
  signUpButton.addEventListener("click", (e) =>{
    // prevent deafault form submission behaviour
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        location.reload();
        alert("signed in sucessfully")
        // signed in

        var user = userCredential.user;
        console.log("user, user.email");
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error Message", errorMessage);
        alert(errorMessgae)
    });
  });

//   signin function
let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("sign in clicked");

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
    var user = userCredential.user;
    console.log("user", user.email);
    window.location = "home.html";
    })

    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error message", errorMessage);
        console.log("error code", errorCode);
        alert("errorMessage");
    });
});





auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;

    var users = document.getElementById("user");
    var text = document.createTextNode(email);

    users.appendChild(text);

    console.log(users);

  } else{

  }
});
