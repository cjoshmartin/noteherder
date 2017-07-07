import rebase   from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA9TYrxPjKHZgslWU-gyt9ozPN7-kXz21k",
    authDomain: "notes-d89b1.firebaseapp.com",
    databaseURL: "https://notes-d89b1.firebaseio.com",
    projectId: "notes-d89b1",
    storageBucket: "",
    messagingSenderId: "1092924299636"
  })

 const db = database(app)

 export default rebase.createClass(db)