import React from 'react'
import Logo from '../../picture/amazon-white.png'

function Footer() {
  return (
    <div className=' w-full bg-gray-300 px-3 pt-6'>
      <div className='h-[50vh] w-full bg-slate-800'>

        <div className='h-[38vh] w-full flex px-64 pt-10 justify-between text-white'>

            <div className='flex flex-col items-start gap-2'>
                <div className='font-bold'>Get to Know Us</div>
                <div className='text-sm'>About Amazon</div>
                <div className='text-sm'>Careers</div>
                <div className='text-sm'>Press Releases</div>
                <div className='text-sm'>Amazon Science</div>
            </div>

            <div className='flex flex-col items-start gap-2'>
                <div className='font-bold'>Connect with Us</div>
                <div className='text-sm'>Facebook</div>
                <div className='text-sm'>Twitter</div>
                <div className='text-sm'>Instagram</div>
            </div>

            <div className='flex flex-col items-start gap-2'>
                <div className='font-bold'>Make Money with Us</div>
                <div className='text-sm'>Sell on Amazon</div>
                <div className='text-sm'>Supply to Amazon</div>
                <div className='text-sm'>Become an Affiliate</div>
                <div className='text-sm'>Fulfilment by Amazon</div>
                <div className='text-sm'>Advertise Your Products</div>
                <div className='text-sm'>Amazon Pay on Merchants</div>
            </div>

            <div className='flex flex-col items-start gap-2'>
                <div className='font-bold'>Let Us Help You</div>
                <div className='text-sm'>Your Account</div>
                <div className='text-sm'>Returns Centre</div>
                <div className='text-sm'>100% Purchase Protection</div>
                <div className='text-sm'>Amazon App Download</div>
                <div className='text-sm'>Help</div>
            </div>

        </div>

        <div className='h-[12vh] w-full flex justify-center pb-20'>
            <div className='h-[9vh] w-[10vw] flex justify-center'>
            <img src={Logo} alt="logo" className='h-full w-full object-cover' />

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
