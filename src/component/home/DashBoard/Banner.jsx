import React from 'react'
import HomeBanner from '../../../picture/a-banner.jpg'
import ProductDetails from '../../../../productDetails.json'

function Banner() {
    return (
        <div className=' w-full'>
            <div className=' w-full relative object-contain'>
                <img src={HomeBanner} alt="Banner" className='h-[80vh] w-full' />
                <div className='h-[80vh] w-full  bg-gray-300'></div>

                <div className='absolute top-[21%] ml-7 grid grid-cols-4 gap-5 z-10'>

                    {ProductDetails.product.map((item, index) => {
                        return (

                            <div key={index} className='w-[23vw] pt-5 bg-gray-100'>
                                <div className='px-5 pb-3 text-xl font-bold'>{item.Title}</div>
                                <div className='grid grid-cols-2 w-full gap-4 px-4'>

                                    {item.Details.map((item, index) => {
                                        return (

                                            <div key={index} className='h-[20vh] w-auto '>
                                                <div className='h-[80%] w-full'>
                                                    <img src={item.Image} alt="items" className='h-full w-full' />
                                                </div>
                                                <div className='text-sm'>{item.Name}</div>
                                            </div>
                                        );
                                    })}
                                </div>


                                <div className='text-blue-600 py-4 pl-5 text-sm'>See all offers</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Banner
