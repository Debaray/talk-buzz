import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../config/firebase.config";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <div className='loginLogo'>
        <img src='https://i.ibb.co/pfWgGt4/talkbuzz.png' alt='' />
        <h1>Talkbuzz</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
