import React from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";

const List = ({ token }) => {
  const [list, setList] = React.useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/product/delete", { data: { id } });
      if (response.data.success) {
        fetchList();
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  React.useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">Product List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item, index) => (
         <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" key={index} >
          <img className="w-12" src={item.image[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{currency}{item.price}</p>
          <p onClick={() => removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg">X</p>
         </div>
        ))}
      </div>
    </>
  );
};

export default List;
