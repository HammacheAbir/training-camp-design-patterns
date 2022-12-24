import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Factory from "./patterns/creational/Factory/Factory";
import Facade from "./patterns/structural/Facade/Facade";
import Observer from "./patterns/behavioral/Observer/Observer"
import Strategy from "./patterns/behavioral/Strategy/Strategy";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<>Home</>} />
          <Route path="/factory" element={<Factory/>} />
          <Route path="/facade" element={<Facade/>} />
          <Route path="/observer" element={<Observer/>} />
          <Route path="/strategy" element={<Strategy/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

