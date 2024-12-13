import { Link } from "react-router-dom";
import "./Home.css";
import Img from "./Img.png";

function Home() {
  return (
    <div>
      <div className="NavBar">
        <div>Home Page</div>
        <div>
          <Link to="cart" className="link">Shopping Page</Link>
        </div>
      </div>
      <div className="main">
        <div>Welcome to our Shopping Website</div>
        <div className="flexRow">
          <img className="img" src={Img} alt="Loading..." />
          <div>
            <div className="x1">
              Our Collection <br />
              Ready to Wear
            </div>
            <div className="x2">
              Inspired by the elegant glamor of yesteryear.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
