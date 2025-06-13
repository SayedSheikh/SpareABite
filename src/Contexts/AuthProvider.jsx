import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  const signUp = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (UpdatedObj) => {
    setLoading(true);
    return updateProfile(auth.currentUser, UpdatedObj);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      let newToken = null;
      if (currentUser) {
        try {
          newToken = await currentUser.getIdToken(true);
          setToken(newToken);
        } catch (err) {
          console.log(err);
        }
      } else {
        setToken(null);
      }

      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);
  const userInfo = {
    user,
    token,
    setToken,
    loading,
    signUp,
    logIn,
    googleSignIn,
    githubSignIn,
    updateUser,
    logout,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
