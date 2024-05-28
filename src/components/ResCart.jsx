import React from "react";

export default function ResCart({ data , id }) {
  return (
    
    <div className="card w-44 bg-gray-200 mr-4 mt-4">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
        className="p-2"
        alt=""
      />
      <p>{data.name}</p>
      <span>{data.avgRating}</span> <span className="ml-4">{data.deliveryTime} mins</span>
      <p>{data.areaName}</p>
      <p>
        {data.cuisines.join(",").length > 18
          ? data.cuisines.join(",").slice(0,18)+"...."
          : data.cuisines.join(",")}
      </p>
      {/* <p>{data.cuisines.join(",")}</p> */}
    </div>
  );
}
