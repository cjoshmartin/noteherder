import React from 'react'
import './signin.css'
import quill from './quill.svg'
import googleLogo from './google.svg'
import githublogo from './GitHub-Mark-32px.png'
import twitterlogo from './TwitterLogo.png'
import {auth, googleProvider, githubProvider, twitterProvider } from './dataBase'

const SignIn = ({handleAuth}) => {

  const GoogleAuthenticate = () => {
    auth.signInWithPopup(googleProvider)
  }
  const TwitterAuthenticate = () => {
    auth.signInWithPopup(twitterProvider)
  }
  const GithubAuthenticate = () => {
    auth.signInWithPopup(githubProvider)
  }
  return (
  <div className="SignIn">
    <header className="Header">
      <img src={quill} alt="" />
      <span className="title">Noteherder</span>
    </header>
    <main>
      <h3>Hey, Nerd! You Like Notes?</h3>
      <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>

      <button
        className="google"
        onClick={GoogleAuthenticate}
      >
        <img src={googleLogo} alt="" />
        &nbsp;Sign in with Google
      </button>
      <button
        className="github"
        onClick={GithubAuthenticate}
      >
        <img src={githublogo} alt="" />
        &nbsp;Sign in with Github
      </button>
      <button
        className="twitter"
        onClick={TwitterAuthenticate}
      >
        <img src={twitterlogo} width="32px" alt="" />
        &nbsp;Sign in with Twitter
      </button>
    </main>
  </div>
)
}

export default SignIn
