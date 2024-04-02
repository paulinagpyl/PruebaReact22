import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="App">
         <img className="pizzaIni" src="https://s1.eestatic.com/2020/11/03/ciencia/nutricion/seguridad_alimentaria-pizza-nutricion_533208863_164247374_1706x960.jpg" alt="" />
      <h1>¡Pizzería Mamma Mia!</h1>
      <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
      <Gallery />
    </div>
  );
};

export default Home;
