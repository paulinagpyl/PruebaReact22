import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams desde react-router-dom
import { Context } from "../store/PizzaContext";
import { Button, Card } from "react-bootstrap";

const Pizza = () => {
  const { pizzas, addCart } = useContext(Context);
  const { idPizza } = useParams(); // Obteniendo el parámetro idPizza de la URL
  const [pizzaData, setPizzaData] = useState(null);

  useEffect(() => {
    // Buscando la pizza específica por su id
    const foundPizza = pizzas.find((pizza) => pizza.id === idPizza);
    setPizzaData(foundPizza);
  }, [idPizza, pizzas]); // Agregando idPizza y pizzas como dependencias para que se ejecute cuando cambien

  if (!pizzaData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      <Card className="card" style={{ width: "18rem" }} key={pizzaData.id}>
        <Card.Img className="photo" variant="top" src={pizzaData.img} />
        <Card.Body className="Card">
          <Card.Title>
            {pizzaData.name.charAt(0).toUpperCase() + pizzaData.name.slice(1)}
          </Card.Title>
          <Card.Text>Ingredientes:</Card.Text>
          <ul style={{ listStyleType: "none" }}>
            {pizzaData.ingredients.map((ingredient) => (
              <li key={ingredient}>🍕{ingredient}</li>
            ))}
          </ul>

          <Card.Text>Precio: {pizzaData.price}</Card.Text>
          <Button variant="primary" onClick={() => addCart(pizzaData)}>
            Añadir
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pizza;
