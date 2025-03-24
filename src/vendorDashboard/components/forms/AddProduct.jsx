import React from "react";
import { useState } from "react";
import { API_PATH } from "../../data/apiPath";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState(null);
  const [bestSeller, setBestSeller] = useState(false);
  const [description, setDescription] = useState("");

  // Handle image upload
  const handleImageUpload = async (event) => {
    const selectedImage = event.target.files[0]; // Fix: Use files[0]
    setImage(selectedImage);
  };

  // handle bestseller
  const handleBestSeller = (event) => {
    const value = event.target.value === 'true';
    setBestSeller(value);
  };

  // handle  category
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      // getting login token,firmid
      const loginToken = localStorage.getItem("token");
      const firmId = localStorage.getItem("firmId");
      if (!loginToken || !firmId) {
        console.error("user not found");
      }
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      category.forEach((value) => formData.append("category[]", value));
      formData.append("image", image);
      formData.append("bestseller", bestSeller);
      formData.append("description", description);

      const response = await fetch(`${API_PATH}/product/addproduct/${firmId}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        alert("product added");
        setProductName("");
        setPrice("");
        setImage(null);
        setDescription("");
        setCategory([]);
        setBestSeller(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="productSection">
      <form className="tableForm" onSubmit={handleAddProduct}>
        <label>Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Category</label>
        <div className="inputsContainer">
          <div className="checkboxContainer">
            <label>Veg</label>
            <input
              type="checkbox"
              value="veg"
              checked={category.includes('veg')}
              onChange={handleCategoryChange}
            />
            <label>Non-Veg</label>
            <input
              type="checkbox"
              value="non-veg"
              checked={category.includes('non-veg')}
              onChange={handleCategoryChange}
            />
          </div>
        </div>
        <label>Bestseller</label>
        <div className="inputsContainer">
          <div className="checkboxContainer">
            <label>Yes</label>
            <input 
            type="radio" 
            value="true" 
            checked={bestSeller===true}
            onChange={handleBestSeller} />
            <label>No</label>
            <input 
            type="radio" 
            value="false" 
            checked={bestSeller===false}
            onChange={handleBestSeller} />
          </div>
        </div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>product Image</label>
        <input type="file" onChange={handleImageUpload} />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
