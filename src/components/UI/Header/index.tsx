import React, { useState, useRef, useEffect } from "react";
import {
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonTitle,
  IonButtons
} from "@ionic/react";
import { search, save, eye } from "ionicons/icons";
/* Custom hooks */
import { useFirestore } from "../../../hooks/firebase";

export interface HeaderProps {
  title: string;
  withSearchBar?: boolean;
  searchBarPlaceholder?: string;
  onSearch?: (event: CustomEvent<KeyboardEvent>) => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  withSearchBar,
  searchBarPlaceholder,
  onSearch
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchBarRef = useRef(null);
  const {
    saveTestDocument,
    seeTestDocument,
    seeRealTimeTestDocument
  } = useFirestore();

  useEffect(() => {
    seeRealTimeTestDocument();
  }, []);

  useEffect(() => {
    const searchBarInput = searchBarRef && searchBarRef.current;
    if (withSearchBar && searchBarInput) {
      searchBarInput.setFocus();
    }
  }, [{ ...searchBarRef }, withSearchBar]);

  return (
    <IonHeader>
      <IonToolbar>
        {withSearchBar && showSearchBar ? (
          <IonSearchbar
            ref={searchBarRef}
            animated
            spellcheck
            autocomplete="on"
            showCancelButton="focus"
            placeholder={searchBarPlaceholder}
            onIonInput={onSearch}
            onIonCancel={() => setShowSearchBar(false)}
          />
        ) : (
          <React.Fragment>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="primary">
              {withSearchBar && (
                <IonButton fill="clear" onClick={() => setShowSearchBar(true)}>
                  <IonIcon icon={search} slot="icon-only" />
                </IonButton>
              )}
              <IonButton
                fill="clear"
                onClick={() => saveTestDocument({ status: "Another text!" })}
              >
                <IonIcon icon={save} slot="icon-only" />
              </IonButton>
              <IonButton fill="clear" onClick={() => seeTestDocument()}>
                <IonIcon icon={eye} slot="icon-only" />
              </IonButton>
            </IonButtons>
          </React.Fragment>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
