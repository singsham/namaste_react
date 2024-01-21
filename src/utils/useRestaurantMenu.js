import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (props) => {
  [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const res = await fetch(MENU_URL + props);
    result = await res.json();
    setResMenu(result?.data?.cards || []);
  };

  return resMenu;
};

export default useRestaurantMenu;
