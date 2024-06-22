import React from "react";

function HomeSectionCard({product}) {
  return (
    <div className="curser-pointer flex flex-col items-center justify-center rounded-2xl shadow-md  overflow-hidden w-[15rem] m-3 ">
      <div className="h-[16rem] w-[13rem]">
        <img
          className="object-cover object-top w-full h-full item rounded-2xl"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-center mt-2 text-gray-900">{product.brand}</h3>
        <p className="m-1 text-sm text-center items-center text-gray-900 w-10/12 ">
          {product.title}
        </p>  
      </div>

      {/* <div className="h-[16rem] w-[13rem] mt-5  ">
      <img
          className="object-cover object-top w-full h-full item rounded-2xl"
          src="https://static.zara.net/assets/public/8c98/ce34/3d75476cbd85/f5c2db8cbd39/06917420712-a1/06917420712-a1.jpg?ts=1706098659363&w=824"
          alt=""
        />
      </div> */}
      
    </div>
  );
}

export default HomeSectionCard;
