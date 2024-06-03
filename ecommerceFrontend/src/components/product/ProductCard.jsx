// import React from "react";
// import { mens_kurta } from "../../assets/mens_kurta";

const ProductCard=({product}) =>{
  
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer rounded-xl">
      <div className="h-[20rem] rounded-xl">
        <img
          className="h-full w-full object-cover object-left-top rounded-xl"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-80">{product.brand}</p>
          <p>{product.title}</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-500 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
