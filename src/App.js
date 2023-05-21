import React, { useContext, useState } from 'react';
import {
  setupIonicReact,
  IonApp,
  IonContent,
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

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import StockNavigation from './screens/stock-nav';
import { AppProvider } from './state-global/state';
import FormCategory from './components/form-category';
import FormSupplier from './components/form-supplier';

setupIonicReact({ mode: 'ios' });

export default function App() {
  return (
    <IonApp>
      {/* <FormStockItem /> */}
      <FormSupplier />
      {/* <AppProvider>
        <IonContent className="ion-padding">
          <StockNavigation />
        </IonContent>
      </AppProvider> */}
    </IonApp>
  );
}
