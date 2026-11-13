import { createContext, useContext, useState } from "react";

export const UnitsContext = createContext(null);

export function UnitsProvider({ children }) {
  const [units, setUnits] = useState("F");

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
}

export function useUnits() {
  const context = useContext(UnitsContext);

  if (context === null) {
    throw new Error("useUnits must be used within UnitsProvider");
  }

  return context;
}