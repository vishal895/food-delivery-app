import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Accordian from "../Component/Accordian";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setProduct(json.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  // const {itemCards} = ;

  if (product === null) {
    return <h1>loading...</h1>;
  }
  
  const category =
    product?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(category)

  return (
    <>
      <div className="container p-4">
        <NavLink to="/" type="button" className="btn btn-primary mb-5">
          Back
        </NavLink>

        <div className="card_box">
          <h1>{product?.cards[0]?.card?.card?.info?.name}</h1>
          <h1>
            {product?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -
            {product?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </h1>

          <h2>menu</h2>
          {category.map((category)=>{
            return(
              <Accordian data={category?.card?.card} />
            )
          })}

          
        </div>
      </div>
    </>
  );
};

export default Detail;
