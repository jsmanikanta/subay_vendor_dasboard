import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VendorLogin from "../components/forms/VendorLogin";
import VendorRegistration from "../components/forms/VendorRegistration";
import AddFrim from "../components/forms/AddFrim";
import AddProduct from "../components/forms/AddProduct";
import Welcome from "../components/Welcome";
import Allproducts from "../components/Allproducts";
import { useState } from "react";

function LandingPage() {
  // for login page
  const [showLogin, setShowLogin] = useState(false);
  // for register page
  const [showRegister, setShowRegister] = useState(false);
  // for add firm
  const [showAddFirm, setShowAddFirm] = useState(false);
  // for add product
  const [showAddProducts, setShowAddProducts] = useState(false);
  //for showing all products
  const [showAllProducts,setShowAllProducts]=useState(false);
  // for welcome page
  const [showwelcome, setShowWelcome] = useState(false);

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProducts(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProducts(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showAddFirmHandler = () => {
    setShowAddFirm(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddProducts(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showAddProductHandler = () => {
    setShowAddProducts(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showWelcomeHandler = () => {
    setShowWelcome(true);
    setShowAddProducts(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAllProducts(false);
  };

  const showAllProductsHandler = () => {
  setShowAllProducts(true);
  setShowWelcome(false);
  setShowAddProducts(false);
  setShowLogin(false);
  setShowRegister(false);
  setShowAddFirm(false);
};


  return (
    <section className="landingSection">
      <div>
        <Navbar
          showLoginHandler={showLoginHandler}
          showRegisterHandler={showRegisterHandler}
        />
        <div className="collectionSection">
          <Sidebar
            showAddFirmHandler={showAddFirmHandler}
            showAddProductHandler={showAddProductHandler}
            showAllProductsHandler={showAllProductsHandler}
          />
          {showLogin && <VendorLogin showWelcome={showWelcomeHandler} />}
          {showRegister && (
            <VendorRegistration showLoginHandler={showLoginHandler} />
          )}
          {showAddFirm && <AddFrim />}
          {showAddProducts && <AddProduct />}
          {showwelcome && <Welcome />}
          {showAllProducts && <Allproducts />}
        </div>
      </div>
    </section>
  );
}

export default LandingPage;