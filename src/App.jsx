import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pizza from "./views/Pizza"; // Importa el componente Pizza correctamente
import Carrito from "./views/Carrito";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Navigation from "./components/Navigation"; // Asumiendo que has renombrado Navegation a Navigation
import PizzaProvider from "./store/PizzaContext";

const App = () => {
  return (
    <PizzaProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pizza/:idPizza" element={<Pizza />}></Route> 
          <Route path="/carrito" element={<Carrito />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </PizzaProvider>
  );
};

export default App;
