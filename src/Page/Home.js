import React from "react";
import Navbar from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";
import Product from "../Component/product/Product";

const Home = () => {
  return (
    <div>
      
      <div className="card">
        <img src="https://wallpapercave.com/wp/mGD11sD.jpg" className="card-img  h-96" alt="..." />
        <div className="card-img-overlay text-center ">
          <h5 className="card-title head">KNIFE CAFE</h5>
          <p className="card-text para">
          Find the best dish, cafés and bars in India
          </p>
          
        </div>
      </div>
      <Product/>
      
    </div>
  );
};

export default Home;
