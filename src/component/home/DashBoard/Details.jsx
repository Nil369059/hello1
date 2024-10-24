import React from "react";
import trandingDeals from "../../../../trandingDeals.json";
import bluckbasterDeals from "../../../../bluckbasterDeals.json";

function Details() {
  return (
    <div className="w-full object-contain">
      <div className="h-full w-full bg-gray-300 flex flex-col gap-5">

        <div className="h-[50vh] w-auto bg-white mt-5 ml-7 mr-5 ">
          <div className="h-full w-auto px-5">
            <div className="font-bold text-xl py-5">
              Trending deals under ₹499
            </div>

            <div className="flex gap-5 h-full overflow-x-auto">
              {trandingDeals.Tranding.map((item, index) => {
                return (
                  <div className="h-[40vh] min-w-[15vw] bg-gray-100">
                    <div key={index} className="h-[70%] w-full object-cover">
                      <div className="p-2">
                        <img
                          src={item.Image}
                          alt="product"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="pl-2 h-[30%] w-full">
                      <div className="flex h-[25%] w-full">
                        <div className="bg-orange-500 text-sm p-2 flex items-center">
                          {item.DiscountPercent}
                        </div>
                        <div className="text-sm p-2 flex items-center text-orange-500">
                          {item.EventsDeal}
                        </div>
                      </div>

                      <div className="flex h-[34%] w-full items-center">
                        <div className="font-bold">
                          {item.DiscountPrice}
                        </div>
                        <div className="p-2 text-gray-600 text-sm">
                          {item.Market}
                        </div>
                        <div className=" text-gray-600 text-sm line-through">
                          {item.CostPrice}
                        </div>
                      </div>

                      <div className="h-[34%] w-full flex items-center">
                        <div className="line-clamp-1 pb-2">
                          {item.ProductDescription}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-[50vh] w-auto bg-white mt-5 ml-7 mr-5 ">
          <div className="h-full w-auto px-5">
            <div className="font-bold text-xl py-5">
            Bluckbaster deals
            </div>

            <div className="flex gap-5 h-full overflow-x-hidden">
              {bluckbasterDeals.Bluckbaster.map((item, index) => {
                return (
                  <div className="h-[40vh] min-w-[15vw] bg-gray-100">
                    <div key={index} className="h-[70%] w-full object-cover">
                      <div className="p-2">
                        <img
                          src={item.Image}
                          alt="product"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="pl-2 h-[30%] w-full">
                      <div className="flex h-[25%] w-full">
                        <div className="bg-orange-500 text-sm p-2 flex items-center">
                          {item.DiscountPercent}
                        </div>
                        <div className="text-sm p-2 flex items-center text-orange-500">
                          {item.EventsDeal}
                        </div>
                      </div>

                      <div className="flex h-[34%] w-full items-center">
                        <div className="font-bold">
                          {item.DiscountPrice}
                        </div>
                        <div className="p-2 text-gray-600 text-sm">
                          {item.Market}
                        </div>
                        <div className=" text-gray-600 text-sm line-through">
                          {item.CostPrice}
                        </div>
                      </div>

                      <div className="h-[34%] w-full flex items-center">
                        <div className="line-clamp-1 pb-2">
                          {item.ProductDescription}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Details;
