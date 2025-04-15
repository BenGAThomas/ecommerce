import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/*Left side Hero */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-gray-700'>
                        <div className='flex items-center gap-2'>
                            <p className='w-8 md:w-11 h-[2px] bg-gray-800'></p>
                            <p className='font-medium text-sm md:text-base'>Our BestSellers</p>
                        </div>
                        <h1 className='faculty-glyphic-regular test-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrival</h1>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base'>Shop Now</p>
                            <p className='w-8 md:w-11 h-[1px] bg-gray-800'></p>
                        </div>
                </div>
            </div>
            {/*Right side Hero */}
            <img className='w-full sm:w-1/2' src={assets.dog_collar} alt='hero_img'></img>
        </div>
  )
}

export default Hero