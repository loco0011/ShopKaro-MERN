import React, { use, useEffect } from "react";
import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b text-center bg-gray-50">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounderd-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <img className="w-4 mr-2" src={assets.search_icon} alt="" />
        <img
          onClick={() => setShowSearch(false)}
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
