import React from 'react'
import Logo from '../../picture/amazon-white.png'
import Flag from '../../picture/Flag.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';

function NavbarBanner() {

  const cartItems = useSelector((state) => state.cart.items)

  return (
    <div className='h-[8vh] w-full flex bg-gray-800 sticky top-0 z-50'>

        {/* // logo section  */}
      <div className='h-full w-[15vw]  flex'>

        <Link to={'/'} className='h-full w-[50%] pl-2 flex items-center cursor-pointer'>
            <img src={Logo} alt="logo"  />
        </Link>

        <div className=' h-full w-[50%] px-2 flex cursor-pointer'>
            <div className='h-full w-[30%] flex items-end justify-center pb-2'>
               <LocationOnOutlinedIcon style={{ fontSize: 30, color: 'white' }} />
            </div>
            <div className='h-full w-[70%] pt-2 pb-4 flex flex-col'>
                <div className='h-[50%] w-full text-smtext-white text-white'>Deliver to</div>
                <div className='text-white'>Nepal</div>
            </div>
        </div>
      </div>

    {/* // search section */}
      <div className='h-full w-[58vw] flex items-center'>
        <div className='h-[6vh] w-[6%] bg-gray-600 flex justify-center items-center cursor-pointer'>
            <div className='text-sm flex items-center pl-2 text-white'>All</div>
            <div className=' flex items-center' >
                <ArrowDropDownOutlinedIcon style={{fontSize: 20, color: 'white'}} />
            </div>
        </div>

        <div className='h-full w-[88%] flex items-center'>
            <input type="text" placeholder='Search Amazon' className='h-[6vh] w-full pl-3 text-white bg-gray-800'/>
        </div>
        <div className='h-full w-[6%] flex justify-center items-center'>
          <div className='h-[6vh] w-full flex justify-center items-center bg-orange-500 cursor-pointer'>
            <SearchOutlinedIcon style={{fontSize: 30, color: 'white'}} />
          </div>
        </div>
      </div>

        {/* // cart */}
      <div className='h-full w-[27vw] flex'>

        <div className='h-full w-[18%] flex justify-center items-end pl-2 cursor-pointer'>
          <div className='h-full w-[40%] pl-2 pt-7 '>
            <img src={Flag} alt="Language"  />
          </div>
          <div className=' h-full w-[60%] font-bold pt-5 pl-1 text-white '>EN</div>
        </div>

        <div className='h-full w-[35%] flex flex-col pl-1 cursor-pointer'>
          <div className='h-[40%] w-full text-sm flex justify-start pt-2 text-white'>Hello, sign in</div>
          <div className='h-[40%] w-full font-bold text-white'>Account & Lists</div>
        </div>

        <div className='h-full w-[20%] flex flex-col pl-2 cursor-pointer'>
          <div className='h-[40%] w-full text-sm flex justify-start pt-2 text-white'>Return</div>
          <div className='h-[40%] w-full font-bold text-white'>& Orders</div>
        </div>

        <Link to={'/cart'} className='h-full w-[28%]  flex justify-center items-center pl-6'>
          <div className='h-full w-[40%] cursor-pointer'>
            <div className='h-[20%] w-full font-bold text-orange-600 flex justify-center '>{cartItems.length}</div>
            <div className='h-[80%] w-full '>
            <ShoppingCartOutlinedIcon style={{fontSize: 35, color: 'white'}} />
            </div>
          </div>

          <p className='font-bold pt-5 h-full w-[60%] text-white'>Cart</p>
        </Link>

      </div>
      
    </div>
  )
}

export default NavbarBanner
