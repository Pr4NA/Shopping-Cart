import { useData } from "./DataContext"; // Access context
import "./ActualCart.css"
import { Link } from "react-router-dom";

function ActualCart() {
  const { cart } = useData(); // Access cart data
  const total = cart.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);


  return (
    <>
        <div className="NavBar">
        <div>
          <Link to="/" className="link">Home Page</Link>
        </div>
        <div>
            <Link to="/cart" className="link">Shopping Page</Link>
        </div>
        <div>Shopping Cart</div>
      </div>
    <div className="container1">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(({ product, quantity }, index) => (
          <div key={index} className="cart-item">
            <div>
                <h2>{product.title}</h2>
                <h3>Price: ${product.price}         Quantity: {quantity}</h3>
                <h2>Total: ${(product.price * quantity).toFixed(2)}</h2>
            </div>
            <div>
                <img className="img1" src={product.image} alt={product.title} />
            </div>
          </div>
        ))
      )}
      <div className="total">
            Total: ${total.toFixed(2)}
      </div>
    </div>
    </>
    
  );
}

export default ActualCart;
