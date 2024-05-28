import { useState,useEffect } from "react";

export default function useResMenu(id){
const [resInfo,setresInfo] = useState(null)
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        let data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.05650&lng=73.06560&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
        );
        let res = await data.json();
        setresInfo(res.data);
      };

    return resInfo

}