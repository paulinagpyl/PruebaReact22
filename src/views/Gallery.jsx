import { useContext } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import { Context } from "../store/PizzaContext";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Gallery = () => {
  const { pizzas, addCart } = useContext(Context);
  const navigate = useNavigate();

  if (!pizzas) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      {pizzas.map((pizza) => (
        <Card className="card" style={{ width: "18rem" }} key={pizza.id}>
          <Card.Img className="photo" variant="top" src={pizza.img} />
          <Card.Body className="Card">
            <Card.Title>
              {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
            </Card.Title>
            <Card.Text>Ingredientes:</Card.Text>
            <ul style={{ listStyleType: "none" }}>
              {pizza.ingredients.map((ingredient) => (
                <li key={ingredient}>🍕{ingredient}</li>
              ))}
            </ul>

            <Card.Text>Precio: {pizza.price}</Card.Text>
            {/* En lugar de <Button>, utiliza <Link> para la navegación */}
            <Button
              variant="primary"
              onClick={() => navigate(`/pizza/${pizza.id}`)}
            >
              Ver más{" "}
            </Button>
            <Button variant="primary" onClick={() => addCart(pizza)}>
              Añadir
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
