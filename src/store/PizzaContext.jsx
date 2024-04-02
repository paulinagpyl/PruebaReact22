import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart,setCart] =useState([])

  useEffect(()=>{
    const getPizzas = async()=>{
      try {
        const response = await fetch("/pizzas.json")
        const data =await response.json()
        setPizzas(data)
      } catch (error){
        console.error ('error en fetch de pizzas:', error)
      }
    } 
    getPizzas()
  },[])

  const addCart=(pizza)=>{
    const foundPizza =cart.findIndex((cartPizza)=>cartPizza.id === pizza.id)
    if (foundPizza<0){
      pizza.count=1;
      setCart([...cart,pizza])
    }else {
      cart[foundPizza].count++
      setCart([...cart])
    }
  }

  const increaseCount =(index)=>{
    cart[index].count++
    setCart([...cart])
  }

  const decreaseCount =(index)=>{
    if (cart[index].count ===1){
      cart.splice(index,1);
    }else {
      cart[index].count--
    }
    setCart([...cart])
  }

  const totalCart = cart.reduce(
    (acumulador, {price, count})=> acumulador + price*count,0
  )

  
  const globalState = { pizzas,cart,setCart,addCart,decreaseCount, increaseCount, totalCart};

  return (
    <Context.Provider value={globalState}>
      {children}
    </Context.Provider>
  );
};

export default PizzaProvider;
