import React from "react";
import { AppContext } from "./store/AppContext";
import Navigation from "./navigation/";

export default function App() {
  return (
    <AppContext>
      <Navigation />
    </AppContext>
  );
}
