import "./App.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, login, logout} from "./features/userSlice";
import Login from "./components/Login/Login";
import {auth} from "./config/firebase.config";
import Talkbuzz from "./components/Talkbuzz/Talkbuzz";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div>{user ? <Talkbuzz /> : <Login />}</div>
  );
}

export default App;
