import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
/* Custom hooks */
import { useFirebaseUI } from "../../hooks/firebase";

const Login: React.FC = () => {
  const { firebaseAuth, firebaseuiConfig } = useFirebaseUI();

  return (
    <IonPage>
      <IonContent>
        <StyledFirebaseAuth
          uiConfig={firebaseuiConfig}
          firebaseAuth={firebaseAuth}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
