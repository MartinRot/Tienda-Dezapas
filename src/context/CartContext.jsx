import { useContext } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agrega items de a 1 desde Item List
  const addItem = (item, cantidad) => {

    if (cart.some((p) => p.id === item.id)) {
      let newCart = [...cart];
      let repetido = newCart.find((p) => p.id === item.id);

      console.log("repetido.cantidad " + repetido.cantidad);
      console.log("repetido.stock " + repetido.stock);
      console.log("cantidad " + cantidad);

      if (repetido.cantidad >= repetido.stock) {
        alert("No hay stock disponible");
      } else {
        repetido.cantidad += cantidad;
        repetido.precio = repetido.precio * cantidad;
        setCart(newCart);
      }

    } else {
      item.cantidad = cantidad;
      setCart([...cart, item]);
    }
    
  };

  // suma el precio total de productos en el carrito
  function precioTotal() {
    let total = 0;
    cart.forEach((p) => (total += p.price * p.cantidad));

    return total;
  }

  //Remover Item
  const removeItem = (id) => {
    let newCart = cart.filter((p) => p.id !== id);
    setCart(newCart);
    console.log("Se ha eliminado del carrito");
  };

  //Vaciar carrito
  const clearCart = () => {
    setCart([]);
    console.log("Carrito vaciado");
  };

  //Suma productos desde Cart
  const suma = (id, cantidad) => {
    if (cart.some((p) => p.id === id)) {
      let newCart = [...cart];
      let repetido = newCart.find((p) => p.id === id);

      if (cantidad >= repetido.stock) {
        alert("No hay stock disponible");
      } else {
        repetido.cantidad++;
        setCart(newCart);
      }
    }
  };

  //Resta productos desde Cart
  const resta = (id, cantidad) => {
    if (cantidad > 0) {
      if (cart.some((p) => p.id === id)) {
        let newCart = [...cart];
        let repetido = newCart.find((p) => p.id === id);

        repetido.cantidad--;

        setCart(newCart);
      }
    }
  };

  // suma la cantidad total de productos en el carrito
  function productosEnCarrito() {
    let total = 0;
    cart.forEach((p) => (total += p.cantidad));

    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clearCart,
        suma,
        resta,
        precioTotal,
        productosEnCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
