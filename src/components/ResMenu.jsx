import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

export default function ResMenu() {
  const [showIdex, setshowIdex] = useState(null);

  const handleAccordianClick = (idx) => {
    setshowIdex((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const { id } = useParams();
  const resInfo = useResMenu(id);
  if (resInfo === null) return <h1>loading</h1>;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categorys =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("this is cotegory data");
  console.log(categorys);
  return (
    <>
      <div className="ml-8 text-center mt-14">
        <h1 className="font-bold my-4 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines} - {costForTwoMessage}
        </p>
        <h3 className="mt-4 text-lg font-bold">Menu</h3>
        <ul>
          {categorys.map((category, idx) => (
            // controlled components
            <RestaurantCategory
              data={category?.card?.card}
              key={idx}
              showItems={idx === showIdex ? true : false}
              setshowIdex={() =>
                setshowIdex((prevIdx) => (prevIdx === idx ? null : idx))
              }
              // handleAccordianClick={() => handleAccordianClick(idx)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
