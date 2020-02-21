import { useEffect } from "react";
import { useSelector } from "react-redux";
/* Custom Hooks */
import { useActions } from "./common";
/* Redux Actions */
import allActions from "../redux/actions";
/* Firebase */
import firebase from "firebase";
import * as firebaseui from "firebaseui";
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
  const isSignedIn = useSelector(state => state.user.authenticated);
  const loginAction = useActions(allActions.userActions.login);

  const firebaseAuth = firebase.auth();
  const firebaseuiConfig = {
    ...configs.firebaseuiConfig,
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ]
  };

  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth.onAuthStateChanged(user => {
      loginAction(user);
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
  useFirestore,
  useFirebaseUI
};
