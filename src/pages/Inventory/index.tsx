import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
/* Custom components */
import IceCreamCard from "../../components/Inventory/IceCreamCard";
import Header from "../../components/UI/Header";
/* Extra data */
import getInventory from "../../data/inventory";
/* Custom hooks */
import { useFirebaseUI } from "../../hooks/firebase";

const Inventory: React.FC = () => {
  const inventory = getInventory();
  const [filteredInventory, setFilteredInventory] = useState(inventory);

  const { firebaseAuth, firebaseuiConfig, isSignedIn } = useFirebaseUI();

  return (
    <IonPage>
      <Header
        title="Inventario"
        withSearchBar
        searchBarPlaceholder="Paleta de..."
        onSearch={handleInventorySearch}
      />
      <IonContent>
        {isSignedIn ? (
          <React.Fragment>
            <p>
              Welcome {firebaseAuth.currentUser.email} ! You are now signed-in!
            </p>
            <a onClick={() => firebaseAuth.signOut()}>Sign-out</a>
            {filteredInventory.map((item, index) => (
              <IceCreamCard key={index} iceCreamItem={item} />
            ))}
          </React.Fragment>
        ) : (
          <StyledFirebaseAuth
            uiConfig={firebaseuiConfig}
            firebaseAuth={firebaseAuth}
          />
        )}
      </IonContent>
    </IonPage>
  );

  function handleInventorySearch(event: any): void {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      setFilteredInventory(
        inventory.filter(
          item => item.ice_cream.flavor.toLowerCase().indexOf(query) > -1
        )
      );
    });
  }
};

export default Inventory;
