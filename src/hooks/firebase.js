import { useEffect, useState } from "react";
/* Firebase */
import firebase from "firebase";
/* Config */
import configs from "../config/app";

const initFirebase = firebase.initializeApp(configs.firebaseConfig);

export function useFirestore() {
  const fireStore = firebase.firestore();
  const docRef = fireStore.doc("samples/test");

  function saveTestDocument({ status = "This is default status text!" } = {}) {
    docRef
      .set({
        status
      })
      .then(() => console.log("Saved successfully!"))
      .catch(error => console.error("Error adding document: ", error));
  }

  function seeTestDocument() {
    docRef
      .get()
      .then(doc => doc && doc.exists && console.log(doc.data()))
      .catch(error => console.error("Error getting document: ", error));
  }

  function seeRealTimeTestDocument() {
    docRef.onSnapshot(doc => doc && doc.exists && console.log(doc.data()));
  }

  return {
    saveTestDocument,
    seeTestDocument,
    seeRealTimeTestDocument
  };
}

export function useFirebaseUI() {
  const firebaseAuth = firebase.auth();
  const firebaseuiConfig = {
    ...configs.firebaseuiConfig,
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ]
  };

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth.onAuthStateChanged(user => {
      console.log(user);
      setIsSignedIn(!!user);
    });

    return () => unregisterAuthObserver();
  }, []);

  return {
    firebaseuiConfig,
    firebaseAuth,
    isSignedIn
  };
}

export default {
  initFirebase,
  useFirestore
};
