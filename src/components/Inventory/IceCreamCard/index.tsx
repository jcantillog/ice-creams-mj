import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonBadge,
  IonButton,
  IonIcon
} from "@ionic/react";
import { wallet } from "ionicons/icons";
import React from "react";
import { InventoryInterface } from "../../../data/inventory";

export interface IceCreamCardProps {
  iceCreamItem: InventoryInterface;
}

const IceCreamCard: React.FC<IceCreamCardProps> = ({ iceCreamItem }) => {
  return (
    <IonCard>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={`/assets/${iceCreamItem.ice_cream.flavor}.png`} alt="" />
        </IonThumbnail>
        <IonCardHeader>
          <IonCardSubtitle>Paleta de</IonCardSubtitle>
          <IonCardTitle>{iceCreamItem.ice_cream.flavor}</IonCardTitle>
        </IonCardHeader>
        {iceCreamItem.stock <= 5 ? (
          <IonBadge slot="end" color="warning">
            Por agotar
          </IonBadge>
        ) : (
          iceCreamItem.stock === 0 && (
            <IonBadge slot="end" color="danger">
              Agotado
            </IonBadge>
          )
        )}
      </IonItem>

      <IonCardContent>
        <p>
          Deliciosa paleta
          {iceCreamItem.ice_cream.type === "leche" && " cremosa"}, a base de{" "}
          {iceCreamItem.ice_cream.type}, con sabor a{" "}
          {iceCreamItem.ice_cream.flavor.toLocaleLowerCase()}.
        </p>
        <IonItem>
          <IonBadge slot="start" color="dark">
            {iceCreamItem.stock < 10
              ? `0${iceCreamItem.stock}`
              : iceCreamItem.stock}
          </IonBadge>
          <IonLabel>Stock</IonLabel>
          <IonBadge slot="end" color="light">
            $ {iceCreamItem.stock * 1000}
          </IonBadge>
        </IonItem>
        <IonItem>
          <IonBadge slot="start" color="dark">
            {iceCreamItem.sold < 10
              ? `0${iceCreamItem.sold}`
              : iceCreamItem.sold}
          </IonBadge>
          <IonLabel>Vendidas</IonLabel>
          <IonButton size="small" shape="round" fill="clear" color="medium">
            <IonIcon icon={wallet} slot="icon-only" />
          </IonButton>
          <IonBadge slot="end" color="success">
            $ {iceCreamItem.sold * 1000}
          </IonBadge>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};

export default IceCreamCard;
