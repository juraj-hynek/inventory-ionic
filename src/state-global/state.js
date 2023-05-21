import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext([]);

const restaurantStockItems = [];

for (let i = 0; i < 100; i++) {
  const stockItem = {
    description: `Stock Item ${i + 1}`,
    purchasePrice: Math.floor(Math.random() * 100),
    sellPrice: '$' + Math.floor(Math.random() * 200),
    barCode: Math.random().toString(36).substr(2, 10),
    sku: Math.floor(Math.random() * 1000),
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

// Create a provider component
export const AppProvider = ({ children }) => {
  // Define the shared state and its update function
  const [sharedData, setSharedData] = useState(restaurantStockItems);

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
};
