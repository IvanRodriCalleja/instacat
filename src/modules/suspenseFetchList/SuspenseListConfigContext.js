import React, { useContext } from "react";

const SuspenseListConfigContext = React.createContext();

export const SuspenseListConfigProvider = ({ revealOrder, tail, children }) => (
  <SuspenseListConfigContext.Provider value={{ revealOrder, tail }}>
    {children}
  </SuspenseListConfigContext.Provider>
);

export const useSuspenseListConfig = () =>
  useContext(SuspenseListConfigContext);
