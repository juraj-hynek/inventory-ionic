import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonPage,
} from '@ionic/react';

const FormCategory = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Category:', category);
    console.log('Description:', description);
    console.log('Note:', note);
  };

  return (
    <IonPage>
      <IonContent>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Category</IonLabel>
            <IonInput
              value={category}
              onIonChange={(e) => setCategory(e.target.value)}
              required
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea
              rows={3}
              value={description}
              onIonChange={(e) => setDescription(e.target.value)}
              required
            ></IonTextarea>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Note</IonLabel>
            <IonTextarea
              rows={5}
              value={note}
              onIonChange={(e) => setNote(e.target.value)}
            ></IonTextarea>
          </IonItem>

          <IonButton type="submit" expand="full">
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default FormCategory;
