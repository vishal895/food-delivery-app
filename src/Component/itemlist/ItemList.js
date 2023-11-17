import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/CartSlice";


const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handelAddItem = (item) =>{
  dispatch(addItems(item))
  }
  
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> -Rs.{item.card.info.price / 100}</span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="3/12">
              <div className="">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    item.card.info.imageId
                  }
                  className="w-28 h-28"
                />
                <button  className="w-full py-1 rounded-lg bg-black text-white shadow-lg relative bottom-10" onClick={() =>handelAddItem(item)}>
                  ADD +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
