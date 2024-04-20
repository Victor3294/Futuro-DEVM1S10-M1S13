import { useState, useEffect, createContext } from "react";

import useFetch from "../hooks/useFetch";
export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
  const [listaDeTrilhas, isLoading] = useFetch("/listaTrilhas.json");

  const [trilhas, setTrilhas] = useState([]);
  useEffect(() => {
    if (!!listaDeTrilhas && !isLoading) {
      setTrilhas(listaDeTrilhas.trilhas);
    }
  }, [listaDeTrilhas]);

  return(
    <TrilhasContext.Provider value={{trilhas, isLoading, setTrilhas}}> 
        {children}
    </TrilhasContext.Provider>
  )
};
