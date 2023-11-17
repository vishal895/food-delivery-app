import React from "react";

const FoodCard = (props) => {
  const { resdata } = props;
  return (
    <div className="card_box w-80 h-96">
      <div className="h-52 ">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resdata?.info?.cloudinaryImageId
          }
          className="card-img-top h-full w-full object-cover"
          alt="..."
        />
      </div>

      <div className="card-body text-black">
        <h5 className="card-title text-lg">{resdata?.info?.name}</h5>
        <h6>{resdata?.info?.avgRating}</h6>
        <p className="card-text">{resdata?.info?.cuisines.join(", ")}</p>
        <h4 className="text-lg text-blue-600">{resdata?.info?.areaName}</h4>
      </div>
    </div>
  );
};

export default FoodCard;
