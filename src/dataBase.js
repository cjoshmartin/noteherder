import rebase   from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA9TYrxPjKHZgslWU-gyt9ozPN7-kXz21k",
    authDomain: "notes-d89b1.firebaseapp.com",
    databaseURL: "https://notes-d89b1.firebaseio.com",
    projectId: "notes-d89b1",
    storageBucket: "",
    messagingSenderId: "1092924299636"
  })

 const db = database(app)
 export const auth = app.auth()
 export const googleProvider = new firebase.auth.GoogleAuthProvider()
 export const githubProvider = new firebase.auth.GithubAuthProvider()
 export const twitterProvider = new firebase.auth.TwitterAuthProvider(); 
 export default rebase.createClass(db)
