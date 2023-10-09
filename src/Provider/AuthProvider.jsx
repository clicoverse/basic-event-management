import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Config/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Google Login Process:
  const googelLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Email-Password sign up
  const createSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Email-Password Sign-in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //email login update profile
  const handleUpdateProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  //Sign-Out Process:
  const logOut = () => {
    return signOut(auth);
  };

  //Manage Users

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
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
    loading,
    handleUpdateProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
