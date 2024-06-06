import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Button } from "@mui/material";

function CartItem() {
  return (
  
      <div className="lg:mt-12 mr-5 shadow-md border rounded-md">
        <div className="flex items-center m-3">
          <div className="w-[6rem] h-[7rem] lg:w-[9rem] lg:h-[10rem]">
            <img
              className="h-full w-full object-cover object-top rounded-lg"
              src="https://clothsvilla.com/cdn/shop/products/Exclusive_Designer_Navy_Blue_Traditional_Ethnic_Wear_Lehenga_Choli_153.2_1024x1024.jpg?v=1694846200"
              alt=""
            />
          </div>
          <div className="ml-5 space-y-1.5">
            <p className="font-semibold">Ethinic Wear Lahenga</p>
            <p className="opacity-70">Size: L , white</p>
            <p className="opacity-70">Seller: Nayaka</p>

            <div className="flex space-x-4 items-center text-gray-900 pt-5">
              <p className="font-semibold ">₹ 3999</p>
              <p className="opacity-60 ">₹ 5000</p>
              <p className="text-green-500 line-through font-semibold ">
                20% off
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center lg:space-x-8 ml-7 mb-2 ">
            <div className="flex items-center space-x-2">
              <iconButton>
                  <RemoveCircleOutlineIcon sx={{ fontSize: { xs: 16, md: 20, xl: 24 }, color:"gray" }}/>
              </iconButton>
              <span className="py-0.9 px-5 border rounded-sm">2</span>
              <iconButton>
                <ControlPointIcon sx={{ fontSize: { xs: 16, md: 20, xl: 24 }, color:"RGB(145 85 253) " }}/>
              </iconButton>
            </div>
            <div>
                <Button className="font-bold">Remove</Button>
            </div>
          </div>
    </div>
  );
}

export default CartItem;
