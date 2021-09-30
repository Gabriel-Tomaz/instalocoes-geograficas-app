import React, { createContext, useState } from "react";

const Context = createContext();

const RoutesProvider = ({ children }) => {
  const [routeIndex, setRouteIndex] = useState({
    index: 0,
    switch: false,
  });

  return (
    <Context.Provider value={{ routeIndex, setRouteIndex }}>
      {children}
    </Context.Provider>
  );
};

export { Context, RoutesProvider };
