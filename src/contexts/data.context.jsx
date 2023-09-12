import { databaseDataFetching } from "../var/var";
import { createContext, useContext, useEffect, useState } from "react";


const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    databaseDataFetching()
      .then((fetchedData) => {
        setData(fetchedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData(){
    return useContext(DataContext);
}