// App.jsx
import React from 'react';
import { IonApp, IonMenu, IonSplitPane, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import MasterPage from './stock-master';
import DetailPage from './stock-detail';

const App = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          <Route path="/master" component={MasterPage} exact={true} />
          <Route path="/detail/:id" component={DetailPage} />
          <Redirect from="/" to="/master" exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default App;
