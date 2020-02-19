import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Orders: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Orders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default Orders;
