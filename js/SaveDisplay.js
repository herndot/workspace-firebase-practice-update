// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method

  var data = {};

  $('form')
    .serializeArray()
    .forEach((entry) => (data[entry.name] = entry.value));

  firebase.firestore().collection('surveyData').add(data);
});

firebase
  .firestore()
  .collection('surveyData')
  .onSnapshot((querySnapshot) => {
    var ans = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    querySnapshot.forEach((doc) => {
      switch (doc.data().choice) {
        case 'A':
          return $('#ans1').text((ans['A'] += 1));
        case 'B':
          return $('#ans2').text((ans['B'] += 1));
        case 'C':
          return $('#ans3').text((ans['C'] += 1));
        case 'D':
          return $('#ans4').text((ans['D'] += 1));
        case 'E':
          return $('#ans5').text((ans['E'] += 1));
      }
    });
  });
