import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Config/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //Google Login Process:
  const googelLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Email-Password sign up
  const createSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Email-Password Sign-in
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Sign-Out Process:
  const logOut = () => {
    return signOut(auth);
  };

  //Manage Users

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(user);

  const authentications = {
    googelLogin,
    createSignUp,
    signInUser,
    user,
    logOut,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
