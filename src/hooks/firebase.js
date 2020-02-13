/* Firebase */
import firebase from "firebase";
/* Config */
import configs from "../config/app";

const initializedFirebase = firebase.initializeApp(configs.firebaseConfig);

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

export default {
  initializedFirebase,
  useFirestore
};
