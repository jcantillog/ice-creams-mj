import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
/* Custom components */
import IceCreamCard from "../../../components/Inventory/IceCreamCard";
import Header from "../../../components/UI/Header";
/* Extra data */
import getInventory from "../../../data/inventory";
/* Custom hooks */
import { useFirebaseUI } from "../../../hooks/firebase";

const Inventory: React.FC = () => {
  const inventory = getInventory();
  const [filteredInventory, setFilteredInventory] = useState(inventory);

  const { firebaseAuth } = useFirebaseUI();

  return (
    <IonPage>
      <Header
        title="Inventario"
        withSearchBar
        searchBarPlaceholder="Paleta de..."
        onSearch={handleInventorySearch}
      />
      <IonContent>
        <p>Welcome! You are now signed-in!</p>
        <a
          onClick={() => {
            window.location.href = "/";
            firebaseAuth.signOut();
          }}
        >
          Sign-out
        </a>
        {filteredInventory.map((item, index) => (
          <IceCreamCard key={index} iceCreamItem={item} />
        ))}
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
