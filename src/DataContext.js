import React, { createContext, useContext, useState } from 'react';

// Create a new context
const DataContext = createContext();

// Create a provider component
export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
}

// Create a custom hook to access the context
export function useData() {
  return useContext(DataContext);
}
