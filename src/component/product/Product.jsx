import React from 'react'
import { Rating } from '@mui/material';
import productitemlist from '../../../productitemlist.json'
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/action/Action';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const productlist = ['Mobile & Accessories', 'Laptop & Accessories', 'TV & Home Entertainment', 'Audio', 'Camera', 'Computer Peripherals', 'Smart Technology', 'Music Instrument']

const catagory = [
  {
    productname: 'MacBook',
    review: 'Average Customer Rating',
    rrating: 4,
    text: '& up'
  },
  {
    productname: 'Asus',
    review: 'Average Customer Rating',
    rrating: 4,
    text: '& up'
  },
  {
    productname: 'Dell',
    review: 'Average Customer Rating',
    rrating: 3,
    text: '& up'
  },
  {
    productname: 'Surface',
    review: 'Average Customer Rating',
    rrating: 2,
    text: '& up'
  },
  {
    productname: 'Hp',
    review: 'Average Customer Rating',
    rrating: 4,
    text: '& up'
  },
  {
    productname: 'Samsung',
    review: 'Average Customer Rating',
    rrating: 3,
    text: '& up'
  },
]


function Product() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)
  const handleAddCart = (item) => {
    toast.success("Successfully Added to Cart",{
      position: "bottom-right"
    })
    dispatch(addCart(item));
  }

  return (
    <div className='h-full w-full bg-gray-300'>

      <div className='h-[6vh] w-full flex items-center px-7 border-2 border-black'>
        <div className='h-full flex items-center w-auto flex-none font-bold mr-3'>Electronic</div>

        {productlist.map((item, index) => {
          return (
            <div key={index} className='h-full flex items-center w-auto flex-none px-3 text-sm' >{item}</div>
          );
        })}
      </div> 

      <div className='flex pt-5'>
        <div className='h-auto w-[15vw] flex flex-col gap-2 pl-4 flex-none justify-start'>
          <div className='font-bold'>Catagory</div>
          <div>Computer & Appliances</div>

          {catagory.map((item, index) => {
            return (
            <div key={index} className='flex flex-col justify-start'>
              <div className='font-bold'>{item.productname}</div>
              <div className='font-bold'>{item.review}</div>
              <div className='flex gap-1 items-center'>
                <div className='to-yellow-400 text-sm'>
                <Rating
                  value={item.rrating}
                  precision={0.5}
                  readOnly
                />
                </div>
                <div className='text-sm'>{item.text}</div>
              </div>
            </div>
            );
          })}


        </div>

        <div className='h-auto w-[85vw] flex flex-col gap-5' >

          <div className='flex border-2 border-black items-center font-bold p-2'>
            <div className='pl-5'>1 out of 6 result for</div>
            <div className='text-orange-500 px-2'>Macbook</div>
          </div>

          <div className='grid grid-cols-4 gap-12 mx-8'>

            {productitemlist.itemlist.map((item, index) => {

              const formattedPrice = item.price.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
              })
              return (
                <div key={index} className='w-[18vw] h-[60vh] bg-gray-100 py-1 px-3'>
                  <div className='w-auto h-[30vh] bg-red-400 my-3'>
                    <img src={item.img} alt="img" className='h-full w-auto object-cover'/>
                  </div>
                  <div className='text-sm line-clamp-3'>{item.description}</div>
                  <div className='text-sm pt-2'>
                    <Rating
                      value={item.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div className='flex px-1'> 
                    <div className='font-bold'>{formattedPrice}</div>
                    <div className='text-gray-400 text-sm font-bold pl-2 flex items-center'>{item.discount}</div>
                    <div className='text-gray-400 flex items-center line-through pl-2'>{item.mprice}</div>
                  </div>
                  <button className='bg-orange-500 text-white font-bold flex justify-center items-center my-2 px-2 py-1 rounded-lg hover:bg-orange-600' onClick={() => {handleAddCart(item)}}>{item.button}</button>
                  <div className='text-sm'>{item.delivery}</div>
                </div>
              );
            })}


          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Product
