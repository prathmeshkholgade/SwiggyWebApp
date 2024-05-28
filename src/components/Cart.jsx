import React, { useEffect, useState } from "react";
import ResCart from "./ResCart";
import Navbar from "./Navbar";
import ResMenu from "./ResMenu";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import TopRaretedRes from "./TopRaretedRes";

export default function Cart() {
  const [resData, setresData] = useState([]);
  const [Search, setSearch] = useState("");
  const [filteredRes, setfilteredRes] = useState([]);
  let url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.05650&lng=73.06560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let res = await fetch(url);
    let jsonRes = await res.json();
    console.log(jsonRes);
    let resOfRes =
      jsonRes.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    let cards = resOfRes.map((Res) => {
      let data = Res.info;
      let {
        id,
        name,
        cloudinaryImageId,
        areaName,
        avgRating,
        cuisines,
        sla,
        costForTwo,
      } = data;
      return {
        id: id,
        name: name,
        cloudinaryImageId: cloudinaryImageId,
        areaName: areaName,
        avgRating: avgRating,
        cuisines: cuisines,
        deliveryTime: sla.deliveryTime,
        cost: costForTwo,
      };
    });
    setresData(cards);
    setfilteredRes(cards);
  }
  let toprattedRes = () => {
    console.log("clicked");

    let topResData = resData.filter((res) => res.avgRating > 4.1);
    console.log(topResData);
    setfilteredRes(topResData);
    setresData(topResData);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline !! please check your internet connetions
      </h1>
    );
  return (
    <>
      <h1>Top restaurant chains in Mumbai</h1>
      <button
        onClick={toprattedRes}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Top Rareted Resaurant
      </button>
      <input
        type="text"
        value={Search}
        className="bg-gray-200 rounded-lg"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => {
          const filterRes = resData.filter((res) =>
            res.name.toLowerCase().includes(Search.toLowerCase())
          );
          setfilteredRes(filterRes);
          console.log(filterRes);
        }}
        className="bg-green-400 rounded-lg ml-4"
      >
        Search
      </button>
      <div className="flex flex-wrap">
        {filteredRes.length === 0 ? (
          <>loading...</>
        ) : (
          filteredRes.map((data) => (
            <NavLink key={data.id} to={"/restaurants/" + data.id}>
              {" "}
              <ResCart data={data} />
            </NavLink>
          ))
        )}
      </div>
    </>
  );
}
