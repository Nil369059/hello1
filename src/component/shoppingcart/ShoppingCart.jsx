import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from '../redux/action/Action';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ShoppingCart() {
  const [cartItem, setCardItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveCart = (id) => {
    toast.error("Item Remove from Cart",{
        position: "bottom-right"
      })
    dispatch(removeCart(id))
  }

    let total = cartItems.reduce((acc, item) => acc + item.price, 0);
    let formattedAmount = total.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR'
  });

  useEffect(() => {
    setCardItem(cartItems);
  }, [cartItems]);

  return (
    <div className="h-full w-full bg-gray-300 flex p-5">
      <div className="h-auto w-[75vw] border-2 border-green-500 p-5 bg-white">
        <div className="flex items-center justify-between ">
          <div className="font-bold text-2xl ">Shopping Cart</div>
          <div className="font-bold text-xl pr-5 ">Price</div>
        </div>

        {cartItems.map((item, index) => {

          const price = item.price.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
          })

          return (
            <div key = {index} className="flex pt-5">
              <div className="h-[25vh] w-[12vw] bg-blue-500">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col w-[45vw] pl-5">
                <div className="text-xl cursor-pointer">{item.description}</div>
                <div className="text-green-500 text-sm mt-1 cursor-pointer">In stock</div>
                <div className="h-[2vh] w-auto mt-1 cursor-pointer">
                  <img
                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                    alt=""
                  />
                </div>
                <div className="flex mt-1">
                  <div className="h-[2vh] pl-1">
                    <input type="checkbox" />
                  </div>
                  <div className="text-sm pl-1">This will be a gift</div>
                  <div className="text-sm text-orange-500 hover:text-orange-600 pl-1 cursor-pointer">
                    Learn more
                  </div>
                </div>
                <div className="font-bold text-sm py-1 px-2 mt-2 text-white bg-orange-500 rounded-lg cursor-pointer flex-none w-[11vw] flex justify-center items-center hover:bg-orange-600" onClick = {() => {handleRemoveCart(item.id)}} >
                  Remove From Basket
                </div>
              </div>

              <div className=" h-auto w-[18vw] flex flex-col items-end pr-2">
                <div className="flex items-center">
                  <div className="bg-orange-500 font-bold p-1 text-sm w-[3vw] flex justify-center items-center text-white">
                    {item.discount}
                  </div>
                  <div className="text-orange-500 text-sm pl-2">
                    Great Indian Festival
                  </div>
                </div>
                <div className="font-bold text-xl">{price}</div>
                <div className="flex items-center">
                  <div className="text-gray-600 pr-1 text-sm">M.R.P.:</div>
                  <div className="line-through text-gray-600">
                    {item.mprice}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="min-h-[20vh] w-[25vw] bg-white ml-5 flex flex-col pt-5 pl-6 gap-2">
        <div className="flex">
          <div className="pr-1 font-bold">Subtotal</div>
          <div className="pr-1 font-bold">({cartItem.length} items):</div>
          <div className="font-bold">{formattedAmount}</div>
        </div>
        <div className="flex">
          <div className="h-[1vh]">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="text-sm pl-2">This will be a gift</div>
        </div>
        <div className="font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-2 py-1 flex justify-center cursor-pointer items-center mr-5">
          Procced to buy
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ShoppingCart;
