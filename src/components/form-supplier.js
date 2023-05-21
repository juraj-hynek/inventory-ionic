import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonPage,
  IonListHeader,
} from '@ionic/react';

const FormSupplier = () => {
  const [businessName, setBusinessName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [state, setState] = useState('');
  const [postCode, setPostCode] = useState('');
  const [taxtId, setTaxid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Business Name:', businessName);
    console.log('Contact Person:', contactPerson);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('House Number:', houseNumber);
    console.log('Street Name:', streetName);
    console.log('State:', state);
    console.log('Post Code:', postCode);
  };

  return (
    <IonPage>
      <IonContent>
        <IonListHeader>
          <IonLabel>Video Games</IonLabel>
        </IonListHeader>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Business Name</IonLabel>
            <IonInput
              value={businessName}
              onIonChange={(e) => setBusinessName(e.target.value)}
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Tax ID</IonLabel>
            <IonInput
              value={taxtId}
              onIonChange={(e) => setTaxid(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Contact Person</IonLabel>
            <IonInput
              value={contactPerson}
              onIonChange={(e) => setContactPerson(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Phone</IonLabel>
            <IonInput
              type="tel"
              value={phone}
              onIonChange={(e) => setPhone(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">House Number</IonLabel>
            <IonInput
              value={houseNumber}
              onIonChange={(e) => setHouseNumber(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Street Name</IonLabel>
            <IonInput
              value={streetName}
              onIonChange={(e) => setStreetName(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">State</IonLabel>
            <IonInput
              value={state}
              onIonChange={(e) => setState(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Post Code</IonLabel>
            <IonInput
              value={postCode}
              onIonChange={(e) => setPostCode(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonButton type="submit" expand="full">
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default FormSupplier;
