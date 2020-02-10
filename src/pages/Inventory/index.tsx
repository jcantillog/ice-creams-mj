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
  IonBadge
} from "@ionic/react";
import { book, build, colorFill, grid } from "ionicons/icons";
import getInventory from "../../data/inventory";
import React from "react";
import "./styles.css";

const Inventory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inventario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {getInventory().map(item => (
          <IonCard className="welcome-card">
            <IonItem>
              <IonThumbnail slot="start">
                <img src={`/assets/${item.ice_cream.flavor}.png`} alt="" />
              </IonThumbnail>
              <IonCardHeader>
                <IonCardSubtitle>Paleta de</IonCardSubtitle>
                <IonCardTitle>{item.ice_cream.flavor}</IonCardTitle>
              </IonCardHeader>
              {item.stock <= 5 ? (
                <IonBadge slot="end" color="danger">
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
                {/* <IonBadge slot="start">5</IonBadge> */}
                <IonLabel>Stock</IonLabel>
                <IonBadge slot="end" color="light">
                  $ {item.stock * 1000}
                </IonBadge>
              </IonItem>
              <IonItem>
                {/* <IonBadge slot="start">10</IonBadge> */}
                <IonLabel>Vendidas</IonLabel>
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
