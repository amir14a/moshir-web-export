importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: 'AIzaSyBapAdMKZeljVD8uPOUSJWePUq6yo4yNqg',
  authDomain: 'moshir-8d56d.firebaseapp.com',
  projectId: 'moshir-8d56d',
  storageBucket: 'moshir-8d56d.appspot.com',
  messagingSenderId: '547513464118',
  appId: '1:547513464118:web:081c7eba41d93c39d5ef97',
  measurementId: 'G-VPPQEJS20D',
})

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
//  console.log("onBackgroundMessage", message);
});