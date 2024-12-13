import { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Add cart state

  // Fetch data from API
  useEffect(() => {
    if (!data) {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.status >= 400) throw new Error("Server error");
          return response.json();
        })
        .then((response) => setData(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [data]);

  // Add item to the cart
  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      setCart((prev) => {
        const existingProduct = prev.find((item) => item.product.id === product.id);
        if (existingProduct) {
          return prev.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prev, { product, quantity }];
        }
      });
    }
  };

  return (
    <DataContext.Provider value={{ data, error, loading, cart, addToCart }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
