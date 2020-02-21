import React, { useState, useRef, useEffect } from "react";
import {
  IonIcon,
  IonMenu,
  IonContent,
  IonList,
  IonLabel,
  IonItem
} from "@ionic/react";
import { exit } from "ionicons/icons";
/* Custom Components */
import Header from "../Header";

export interface MenuProps {
  menuId: string;
}

const Menu: React.FC<MenuProps> = ({ menuId }) => {
  return (
    <IonMenu side={"start"} contentId={menuId}>
      <Header isMenu={false} title="Menu" />
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={exit} slot="start" />
            <IonLabel>Cerrar sesión</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
