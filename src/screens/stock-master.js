import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ListStockItems from '../components/list-stock-items';

const MasterPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Master</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListStockItems />
      </IonContent>
    </IonPage>
  );
};

export default MasterPage;
