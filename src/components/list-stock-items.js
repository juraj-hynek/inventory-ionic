import React from 'react';
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonThumbnail,
  IonSearchbar,
} from '@ionic/react';

const restaurantStockItems = [];

for (let i = 0; i < 100; i++) {
  const stockItem = {
    description: `Stock Item ${i + 1}`,
    purchasePrice: '$' + Math.floor(Math.random() * 100),
    sellPrice: '$' + Math.floor(Math.random() * 200),
    barCode: Math.random().toString(36).substr(2, 10),
    sku: 'SKU' + Math.floor(Math.random() * 1000),
    category: 'Category ' + ((i % 3) + 1),
    storage: 'Storage ' + (i % 2 === 0 ? 'A' : 'B'),
    supplier: 'Supplier ' + ((i % 5) + 1),
    unit: 'Unit ' + ((i % 4) + 1),
    minPackQty: Math.floor(Math.random() * 10),
    expirationDate: '2023-12-31',
    caseQty: Math.floor(Math.random() * 10),
    packQty: Math.floor(Math.random() * 10),
    innerPackQty: Math.floor(Math.random() * 10),
    note: 'Note for Stock Item ' + (i + 1),
    id: i,
  };

  restaurantStockItems.push(stockItem);
}

function ListStockItems() {
  return (
    <IonList>
      <IonListHeader>
        <ion-label>Stock Items</ion-label>
        <ion-button>+ Item</ion-button>
      </IonListHeader>
      <IonSearchbar debounce={1000} onIonInput={(ev) => {}}></IonSearchbar>
      {restaurantStockItems.map(({ description, id }, index) => {
        return (
          <IonItem routerLink={'/detail/' + id}>
            <IonThumbnail slot="start">
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <IonLabel>{description}</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
}
export default ListStockItems;
