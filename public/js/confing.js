const firebaseConfig = {
  apiKey: "AIzaSyBSW2U-njXz_vxJmFXdBhb7kMlvHTt7rvI",
  authDomain: "dona-hotels.firebaseapp.com",
  projectId: "dona-hotels",
  storageBucket: "dona-hotels.appspot.com",
  messagingSenderId: "965837288049",
  appId: "1:965837288049:web:9a590b48a351edd36421d0",
  measurementId: "G-TMTFMTD8EE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({
  cacheSizeBytes: 1048576,
});
