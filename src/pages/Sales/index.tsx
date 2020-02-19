import { IonPage, IonRouterOutlet } from "@ionic/react";
import { Route, Redirect, RouteComponentProps } from "react-router";
import React from "react";
import { basket, gitPullRequest } from "ionicons/icons";

/* Custom components */
import Tabs, { SingleTabInterface } from "../../components/UI/Tabs";
import Inventory from "./Inventory";
import Orders from "./Orders";

const Sales: React.FC<RouteComponentProps> = ({ match }) => {
  const salesTabs: SingleTabInterface[] = [
    {
      name: `inventory`,
      label: "Inventario",
      icon: basket
    },
    {
      name: `orders`,
      label: "Órdenes",
      icon: gitPullRequest
    }
  ];

  return (
    <Tabs slot="bottom" tabs={salesTabs}>
      <IonRouterOutlet>
        <Route exact path={`/:tab(inventory)`} component={Inventory} />
        <Route exact path={`/:tab(orders)`} component={Orders} />
      </IonRouterOutlet>
    </Tabs>
  );
};

export default Sales;
