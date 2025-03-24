import React, { useState } from 'react';
import { API_PATH } from "../../data/apiPath";

function AddFirm() {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]); // Ensure category is an array
  const [region, setRegion] = useState([]); // Ensure region is an array
  const [offer, setOffer] = useState("");
  const [image, setImage] = useState(null); // Ensure image is initially null

  // Handle category selection (allows multiple)
  const handleCategoryChange = (event) => {
    const value = event.target.value;
        if(category.includes(value)){
          setCategory(category.filter.call((item)=>item!==value))
        } else{
          setCategory([...category,value])
        }
  };

  // Handle region selection (allows multiple)
  const handleRegionChange = (event)=>{
      const value = event.target.value;
        if(region.includes(value)){
          setRegion(region.filter((item)=> item !== value));
        }else{
          setRegion([...region, value])
        }
  }

  // Handle image upload
  const handleImageUpload = async (event) => {
    const selectedImage = event.target.files[0]; // Fix: Use files[0]
    setImage(selectedImage);
  };

  // Handle form submission
  const handleFirmSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const loginToken = localStorage.getItem('token');
      if (!loginToken) {
        console.error("User not found");
      }

      const formData = new FormData();
      formData.append('firmName', firmName);
      formData.append('area', area);
      formData.append('offer', offer);
      category.forEach((value) => formData.append("category[]", value));
      region.forEach((value) => formData.append("region[]",value));
      formData.append('image', image);

      const response = await fetch(`${API_PATH}/firm/addfirm`, {
        method: "POST",
        headers: { 
          'token': loginToken 
          },
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Firm added successfully", data);
         setFirmName("");
          setArea("")
          setCategory([]);
          setRegion([]);
          setOffer("");
          setImage(null);
        alert("Firm added");

      } else if(data.message === "vendor can have only one firm"){
              alert("Firm Exists. Only 1 firm can be added  ")
          } else{
              alert('Failed to add Firm')
          }
          // adding firm id to local storage so that we can use this in our add product
        console.log("Firmid",data.firmId);
        localStorage.setItem("firmId",data.firmId);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="firmsection">
      <form className='tableForm' onSubmit={handleFirmSubmit}>
        <label>Resturant Name</label>
        <input
          type="text"
          name='firmName'
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
        />

        <label>Area</label>
        <input
          type="text"
          name='area'
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <div className="check-inp">
          <label>Category</label>
        </div>
        <div className="inputsContainer">
          <div className="checkboxContainer">
            <label>Veg</label>
            <input
              type="checkbox"
              value="veg"
              checked={category.includes('veg')}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="checkboxContainer">
            <label>Non-Veg</label>
            <input
              type="checkbox"
              value="non-veg"
              checked={category.includes('non-veg')}
              onChange={handleCategoryChange}
            />
          </div>
        </div>

        <label>Region</label>
        <div className="inputsContainer">
          <div className="checkboxContainer">
            <label>Bakery</label>
            <input
              type="checkbox"
              value="bakery"
              checked={region.includes('bakery')}
              onChange={handleRegionChange}
            />
          </div>
          <div className="checkboxContainer">
            <label>Chinese</label>
            <input
              type="checkbox"
              value="chinese"
              checked={region.includes('chinese')}
              onChange={handleRegionChange}
            />
          </div>
          <div className="checkboxContainer">
            <label>South-Indian</label>
            <input
              type="checkbox"
              value="south-indian"
              checked={region.includes('south-indian')}
              onChange={handleRegionChange}
            />
          </div>
          <div className="checkboxContainer">
            <label>North-Indian</label>
            <input
              type="checkbox"
              value="north-indian"
              checked={region.includes('north-indian')}
              onChange={handleRegionChange}
            />
          </div>
        </div>

        <label>Offer</label>
        <input
          type="text"
          name='offer'
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />

        <label>Firm Image</label>
        <input type="file" onChange={handleImageUpload} />

        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddFirm;