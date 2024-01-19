import React, { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import FoodCard from "../card/FoodCard";

const Product = () => {
  

  const [data, setData] = useState([]);
  const [search, setSearch] = useState(" ");
  const [filter, setFilter] = useState(data);

  const fetchdata = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
    setData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilter(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(()=>{
    fetchdata()
  },[])

  // return data.lenght === 0 ? (
  //   <h1>looding.......</h1>
  // ) : (
    return (
    <div className="p-50">
      <input
        type="text"
        placeholder="enter search"
        className="search_bar "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="px-4 py-2 bg-blue-200 rounded-lg ml-1"
        onClick={() => {
          const searchfilter = data.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())
          );
          setFilter(searchfilter);
        }}
      >
        search
      </button>
      <button
      className="px-4 py-2 bg-blue-200 rounded-lg ml-1"
        onClick={() => {
          const filterlist = data.filter((res) => res.info.avgRating > 4);
          console.log("hello");
          setFilter(filterlist);
        }}
      >
        filter rating more than 4
      </button>
      <div className="card_grid ">
        
         {filter.length > 0 &&  
         filter.map((restaurants) => { 
          
            return (
              <>
              <NavLink key={restaurants.info.id} to={`/details/${restaurants.info.id}`}  style={{ textDecoration: 'none' }}>
                <FoodCard resdata={restaurants} />
              </NavLink>
              </>
            );
          })} 
            
          
      </div>
    </div>
  );
};

export default Product;
