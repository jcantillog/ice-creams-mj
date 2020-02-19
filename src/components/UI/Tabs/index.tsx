import React from "react";
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";

export interface SingleTabInterface {
  label: string;
  icon: any;
  name: string;
}

export interface TabsProps {
  slot: "bottom" | "top";
  tabs: SingleTabInterface[];
}

const Tabs: React.FC<TabsProps> = ({ slot, tabs, children }) => {
  return (
    <IonTabs>
      {children}
      <IonTabBar slot={slot}>
        {tabs.map(tab => (
          <IonTabButton key={tab.name} tab={tab.name} href={`/${tab.name}`}>
            <IonIcon icon={tab.icon} />
            <IonLabel>{tab.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
