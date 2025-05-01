import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-black'>
        
            <div >
                <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt='quality icon' />
                <p className='font-semibold'>14 Day Return Policy</p>
                <p className='text-gray-800'> We offer 14 day free return policy on all pet collars and leashes.</p>
            </div>

            <div >
                <img className='w-12 m-auto mb-5' src={assets.support_img} alt='support icon' />
                <p className='font-semibold'>Contact Us</p>
                <p className='text-gray-800'>Email us at Bensleathers@gmail.com</p>
            </div>
        </div>
    
    </div>
  )
}

export default Policy