/* Change the configuration */

var firebaseConfig = {
  apiKey: 'AIzaSyCwtNB0A-KP8LwvEtJ-Df7Cj9BwufaLmKg',
  authDomain: 'grocerylist-e0d24.firebaseapp.com',
  projectId: 'grocerylist-e0d24',
  storageBucket: 'grocerylist-e0d24.appspot.com',
  messagingSenderId: '455097292055',
  appId: '1:455097292055:web:ee3426b9043152594c1352',
  measurementId: 'G-XX0EPYZTCS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputData = $('form').serializeArray();
  var data = {};
  console.log(inputData);
  //for (var i = 0; i < inputData.length; i++) console.log(inputData[i]);
  /* save the data to database */
  inputData.forEach((entry) => {
    data[entry.name] = entry.value;
  });

  firebase.firestore().collection('hotel').add(data);

  console.log(data);

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('hotel')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().name);
      console.log(doc.data().checkin);
      console.log(doc.data().checkout);
      console.log(doc.data().num);
      console.log(doc.data().room);
    });
  });
