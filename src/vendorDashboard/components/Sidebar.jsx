import React from "react";

function Sidebar({ showAddFirmHandler, showAddProductHandler ,showAllProductsHandler }) {
  return (
    <div className="sideBarSection">
      <ul>
        <li onClick={showAddFirmHandler}>Add Resturant</li>
        <li onClick={showAddProductHandler}>Add Product</li>
        <li onClick={showAllProductsHandler}>All Products</li>
      </ul>
    </div>
  );
}

export default Sidebar;