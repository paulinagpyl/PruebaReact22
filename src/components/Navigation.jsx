import React, { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context} from "../store/PizzaContext";

const Navigation = () => {
  const validateRoot = ({ isActive }) => (isActive ? "activo" : "noActivo");
  const {totalCart} = useContext(Context);

  return (
    <Container>
      <Nav className="navbar">
        <NavLink to="/" className={validateRoot}>
          🍕¡Pizzería Mamma Mia!
        </NavLink>
        <NavLink to="/carrito" className={validateRoot}>
          <span>🛒Carrito {totalCart ?' '+totalCart:null}</span>
        </NavLink>
      </Nav>
    </Container>
  );
};

export default Navigation;
