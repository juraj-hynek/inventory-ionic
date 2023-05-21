import React, { useContext, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  setupIonicReact,
  IonApp,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
} from '@ionic/react';
import { useParams } from 'react-router';
import { AppContext } from '../state-global/state';

const FormStockItem = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.detail.value);
  };

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Stock Item</IonLabel>
      </IonListHeader>
      <IonItem lines="none">
        {/* <IonLabel position="floating">Description</IonLabel> */}
        <IonInput fill="outline" label="Description" type="text" />
      </IonItem>
      <IonItem lines="none">
        {/* <IonLabel position="floating">SKU</IonLabel> */}
        <IonInput label="SKU" type="text" />
      </IonItem>
      <IonItem lines="none">
        {/* <IonLabel position="floating">Barcode</IonLabel> */}
        <IonInput label="Barcode" type="text" />
      </IonItem>

      <IonItem lines="none">
        <IonLabel>Category</IonLabel>
        <IonSelect>
          <IonSelectOption value="red">Red</IonSelectOption>
          <IonSelectOption value="green">Green</IonSelectOption>
          <IonSelectOption value="blue">Blue</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem lines="none">
        <IonLabel>Supplier</IonLabel>
        <IonSelect>
          <IonSelectOption value="red">Red</IonSelectOption>
          <IonSelectOption value="green">Green</IonSelectOption>
          <IonSelectOption value="blue">Blue</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>Date</IonLabel>
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

        <IonModal keepContentsMounted={true}>
          <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
      </IonItem>
    </IonList>
  );
};

const DetailPage = () => {
  const { sharedData, setSharedData } = useContext(AppContext);
  const { id } = useParams();

  const item = sharedData.find((item) => item.id == id);
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
        <FormStockItem />
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
