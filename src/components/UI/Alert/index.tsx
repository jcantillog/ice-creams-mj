import { IonAlert } from "@ionic/react";
import React from "react";

export interface AlertProps {
  isOpen: boolean;
  header: string;
  message: string;
  onOk: () => void;
  onCancel: () => void;
}

const Alert: React.FC<AlertProps> = ({
  isOpen,
  header,
  message,
  onOk,
  onCancel
}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onCancel}
      header={header}
      message={message}
      inputs={[
        {
          name: 'radio1',
          type: 'radio',
          label: 'Vender paletas',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Retornar paletas',
          value: 'value2'
        },
        {
          name: "name6",
          type: "number",
          min: -5,
          max: 10
        }
      ]}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: () => {
            onOk && onOk();
            console.log("Confirm Ok");
          }
        }
      ]}
    />
  );
};

export default Alert;
