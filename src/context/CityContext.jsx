import { createContext, useContext, useState } from "react";
import forecasts from "../data/forecasts.json";

export const CityContext = createContext(null);

export function CityProvider({ children }) {
  const [cityId, setCityId] = useState("seattle");

  const city = forecasts.find((forecast) => forecast.id === cityId);

  return (
    <CityContext.Provider value={{ city, setCityId }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);

  if (context === null) {
    throw new Error("useCity must be used within CityProvider");
  }

  return context;
}