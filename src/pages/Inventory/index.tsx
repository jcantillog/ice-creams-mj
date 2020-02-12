import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonThumbnail,
  IonBadge,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonButtons
} from "@ionic/react";
import { wallet, search } from "ionicons/icons";
import getInventory from "../../data/inventory";
import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const Inventory: React.FC = () => {
  const [inventory, setInventory] = useState(getInventory());
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const searchBarInput = searchBarRef && searchBarRef.current;
    if (searchBarInput) {
      searchBarInput.setFocus();
    }
  }, [{...searchBarRef}]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {showSearchBar ? (
            <IonSearchbar
              ref={searchBarRef}
              animated
              spellcheck
              autocomplete="on"
              showCancelButton="focus"
              placeholder="Buscar paletas"
              onIonCancel={() => setShowSearchBar(false)}
            />
          ) : (
            <React.Fragment>
              <IonTitle>Inventario</IonTitle>
              <IonButtons slot="primary">
                <IonButton
                  fill="clear"
                  onClick={() => {
                    setShowSearchBar(true);
                  }}
                >
                  <IonIcon icon={search} slot="icon-only" />
                </IonButton>
              </IonButtons>
            </React.Fragment>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {inventory.map((item, index) => (
          <IonCard key={index} className="welcome-card">
            <IonItem>
              <IonThumbnail slot="start">
                <img src={`/assets/${item.ice_cream.flavor}.png`} alt="" />
              </IonThumbnail>
              <IonCardHeader>
                <IonCardSubtitle>Paleta de</IonCardSubtitle>
                <IonCardTitle>{item.ice_cream.flavor}</IonCardTitle>
              </IonCardHeader>
              {item.stock <= 5 ? (
                <IonBadge slot="end" color="warning">
                  Por agotar
                </IonBadge>
              ) : (
                item.stock === 0 && (
                  <IonBadge slot="end" color="danger">
                    Agotado
                  </IonBadge>
                )
              )}
            </IonItem>

            <IonCardContent>
              <p>
                Deliciosa paleta{item.ice_cream.type === "leche" && " cremosa"},
                a base de {item.ice_cream.type}, con sabor a{" "}
                {item.ice_cream.flavor.toLocaleLowerCase()}.
              </p>
              <IonItem>
                <IonBadge slot="start" color="dark">
                  {item.stock < 10 ? `0${item.stock}` : item.stock}
                </IonBadge>
                <IonLabel>Stock</IonLabel>
                <IonBadge slot="end" color="light">
                  $ {item.stock * 1000}
                </IonBadge>
              </IonItem>
              <IonItem>
                <IonBadge slot="start" color="dark">
                  {item.sold < 10 ? `0${item.sold}` : item.sold}
                </IonBadge>
                <IonLabel>Vendidas</IonLabel>
                <IonButton
                  size="small"
                  shape="round"
                  fill="clear"
                  color="medium"
                >
                  <IonIcon icon={wallet} slot="icon-only" />
                </IonButton>
                <IonBadge slot="end" color="success">
                  $ {item.sold * 1000}
                </IonBadge>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Inventory;
