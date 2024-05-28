import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../app/features/cart/cartSlice";

export default function ItemList({ item }) {
  let dispatch = useDispatch()
const handleItemCard = (items)=>{
  dispatch(addItem(items))


}
  return (
    <div>
      {item.map((items) => (
        <>
          <div
            key={items.card.info.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between items-center"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{items.card.info.name}</span>
                <span>
                  {" "}
                  ₹{" "}
                  {items.card.info.price || items.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{items.card.info.description}</p>
            </div>
            <div className="img w-3/12 p-2">
            <div className="absolute">
                <button className="p-2 bg-black text-white shadow-lg  rounded-lg mx-24" onClick={()=>handleItemCard(items)}>
                  Add +{" "}
                </button>
              </div>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${items?.card?.info.imageId}`}
                className="w-full h-auto  "
                alt=""
              />
              
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
