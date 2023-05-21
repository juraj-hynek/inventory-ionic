import React, { useContext, useState } from 'react';
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  setupIonicReact,
  IonApp,
  IonInput,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonTextarea,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonCard,
} from '@ionic/react';
import { useParams } from 'react-router';
import { AppContext } from '../state-global/state';

const DetailPage = () => {
  const { sharedData, setSharedData } = useContext(AppContext);
  const { id } = useParams();

  const item = sharedData.find((item) => item.id == id);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/master" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonItem>
                <IonLabel position="floating">Description</IonLabel>
                <IonInput></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Purchase Price</IonLabel>
                <IonInput type="number"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Sell Price</IonLabel>
                <IonInput type="number"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Barcode</IonLabel>
                <IonInput></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">SKU</IonLabel>
                <IonInput></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Category</IonLabel>
                <IonSelect>
                  <IonSelectOption value="demo">Demo</IonSelectOption>
                  <IonSelectOption value="demo">Demo</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Storage</IonLabel>
                <IonSelect>
                  <IonSelectOption value="storage-room-1">
                    Storage Room 1
                  </IonSelectOption>
                  <IonSelectOption value="storage-room-2">
                    Storage Room 2
                  </IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Supplier</IonLabel>
                <IonSelect>
                  <IonSelectOption value="demo">Demo</IonSelectOption>
                  <IonSelectOption value="demo">Demo</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Units</IonLabel>
                <IonSelect>
                  <IonSelectOption value="demo">Demo</IonSelectOption>
                  <IonSelectOption value="demo">Demo</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Min Pack Qty</IonLabel>
                <IonInput type="number"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Expiration date</IonLabel>
                <IonInput type="date"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Case Qty</IonLabel>
                <IonInput type="number"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Pack Qty</IonLabel>
                <IonInput type="number"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Inner Pack Qty</IonLabel>
                <IonInput type="number"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Notes</IonLabel>
                <IonTextarea rows={4}></IonTextarea>
              </IonItem>

              <IonButton expand="full" type="submit">
                Save
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
