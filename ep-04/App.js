import ReactDom from "react-dom/client";
import "./index.css";
/** AppLayout
 * Header
 *  - Logo
 *  - Nav Items
 *
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Image
 *      - Name, Ratings, Cuisine, delivery time
 *
 * Footer
 *  - Copyright
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fbszivm1nftvp4bzss1x" />
      <h3>Meghana Foods</h3>
      <h4>Chinese, North Indian, Asian</h4>
      <h4>4 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
