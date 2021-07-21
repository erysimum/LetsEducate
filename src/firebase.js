import * as firebase from 'firebase';
// import "firebase/auth"
// import "firebase/database"
// import "firebase/storage"

const config = {
  //Your web app's Firebase configuration
  apiKey: 'AIzaSyBo-UmnHPlsJWEbtLnkPCPH859-7UgEvdY',
  authDomain: 'letzeducate-3311d.firebaseapp.com',
  databaseURL: 'https://letzeducate-3311d-default-rtdb.firebaseio.com',
  projectId: 'letzeducate-3311d',
  storageBucket: 'letzeducate-3311d.appspot.com',
  messagingSenderId: '111852224382',
  appId: '1:111852224382:web:a33a89abec1e15c536fd2f'
};
// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

//firebase.initializeApp(config);

export default firebase;
