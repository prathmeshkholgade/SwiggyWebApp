import { useState } from "react";
import ItemList from "./ItemList";

export default function RestaurantCategory({
  data,
  showItems,
  setshowIdex,
  handleAccordianClick,
}) {
  // const [show, setshow] = useState(false);
  // console.log(data);
  const handleClick = () => {
    setshowIdex() 
  };
  return (
    <div>
      <div className="bg-gray-100 shadow-lg p-2 w-6/12 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
          // onClick={}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList item={data.itemCards} />}
      </div>
    </div>
  );
}
// ||||
//c.card?.card?.["@type"] ===
//"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
//         c.card?.card?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
