import React from "react";

function HomeSectionCard() {
  return (
    <div className="curser-pointer flex flex-col items-center justify-center rounded-2xl shadow-lg overflow-hidden w-[15rem] mx-3 mt-3">
      <div className="h-[16rem] w-[13rem]">
        <img
          className="object-cover object-top w-full h-full item rounded-2xl"
          src="https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67024450_50.jpg?ts=1703689384071&imwidth=360&imdensity=2"
          alt=""
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-center mt-2 text-gray-900">Mango Man</h3>
        <p className="mx-1 text-sm text-center text-gray-900 w-10/12 ">
          Coolmax® cotton shirt - Man | Mango Man India
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
