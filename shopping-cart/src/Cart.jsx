import { Link } from "react-router-dom";
import { useState } from "react";
import { useData } from "./DataContext"; // Access context
import "./Cart.css";

function ShoppingCart() {
  const { data, error, loading, addToCart } = useData();

  // State to manage quantities
  const [quantities, setQuantities] = useState({});

  // Handle quantity increment
  const incrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Handle quantity decrement
  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0), // Ensure quantity doesn't go below 0
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="NavBar">
        <div>
          <Link to="/" className="link">Home Page</Link>
        </div>
        <div>Shopping Page</div>
        <div>
            <Link to="/actual-cart" className="link">Shopping Cart</Link>
        </div>
      </div>
      <div className="container">
        {data.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} className="image" />
            <h2 className="name">{product.title}</h2>
            <h3 className="price">${product.price}</h3>
            <div className="quantity-controls">
              <div>Quantity: {quantities[product.id] || 0}</div>
              <div>
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
            </div>
            <button className="btn" onClick={()=>addToCart(product,quantities[product.id])}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShoppingCart;
