import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Banner from '../../picture/banit.jpg'
import { Link } from 'react-router-dom';

const items = [
  {name: 'Fresh'}, {name: 'MX Player'}, {name: 'Sell'}, {name: 'Best Seller'}, {name: "Today's Deals"}, {name: 'Mobile'}, {name: 'Electronics'}, {name: 'Home & Kitchen'}, {name: 'Prime'}, {name: 'Fashion'}, 
]

function NavbarItem() {
  return (    
    <div className='h-[5vh] w-full flex'>

      <div className='py-1 h-full w-[73%]  flex items-center bg-gray-800'>
        <div className='h-full w-[6%] flex items-center pl-1 cursor-pointer'>
          <div className='h-full w-[60%] flex items-center pl-1'>
            <MenuIcon style={{fontSize: 30, color: 'white'}} />
          </div>
          <div className=' text-sm font-bold h-full w-[40%] pr-3 text-white pt-1'>All</div>
        </div>

        {items.map((item, index) => (
          <Link to={'/product'} key = {index} className=' h-full flex items-center flex-none w-auto hover:border-2 border-black cursor-pointer pt-1'>
            <div className='text-sm font-bold h-full px-3 text-white'>{item.name}</div>
          </Link>
        ))}
      </div>

      <div className='h-full w-[27%] flex justify-end bg-gray-700'>
        <div className='h-full w-[50%]'>
          <img src={Banner} alt="Offer" className='h-full w-full ' />
        </div>
      </div>
    </div>
  )
}

export default NavbarItem

