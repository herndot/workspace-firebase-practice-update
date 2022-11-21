var firebaseConfig = {
  apiKey: 'AIzaSyCwtNB0A-KP8LwvEtJ-Df7Cj9BwufaLmKg',
  authDomain: 'grocerylist-e0d24.firebaseapp.com',
  projectId: 'grocerylist-e0d24',
  storageBucket: 'grocerylist-e0d24.appspot.com',
  messagingSenderId: '455097292055',
  appId: '1:455097292055:web:ee3426b9043152594c1352',
  measurementId: 'G-XX0EPYZTCS'
};

/*apiKey: 'AIzaSyAzcwgZuLA7dO9g4sQhXQVTUgCo0M8m2qM',
  authDomain: 'grocerylist-91956.firebaseapp.com',
  databaseURL: 'https://grocerylist-91956.firebaseio.com',
  projectId: 'grocerylist-91956',
  storageBucket: 'grocerylist-91956.appspot.com',
  messagingSenderId: '813812426276',
  appId: '1:813812426276:web:93e5897af12892ff78dab1',
  measurementId: 'G-VZ83BTR72T',*/

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  var data = {};
  $('form').serializeArray().forEach((entry) => (data[entry.name] = entry.value));

  console.log(data);

  firebase
    .auth()
    .signInWithEmailAndPassword(data['login'], data['pwd'])
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;
      window.location.href = "Surveyresult.html";

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message);
    });//*/
});


$('#googleSignIn').click(function (e) {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    console.log("Google User " + user.email + " logged in.");
  })
  .catch(error => {
    console.log(error.code);
    console.log(error.message);
  });
})//*/


/*$('#googleSignIn').click(function (e) {
  //import {getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

  const auth = getAuth();
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});//*/
