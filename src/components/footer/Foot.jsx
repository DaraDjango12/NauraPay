import React from 'react'
import {logo}from '../../assets/images/logo.png'

const Foot = () => {
  return (
    <div>
        <div className="text-sm my-20">
          <p>
            1. Available in English (Australia, Canada, United Kingdom, U.S.).
            This feature is not available on AirPods with the H1 headphone chip
            and Intel-based Mac computers. Devices must support and have the
            latest operating system.
          </p>
          <p>
            2.Available in English (Australia, Canada, United Kingdom, U.S.) on
            iPhone 11 and later, iPad Pro 12.9-inch (3rd generation and later),
            iPad Pro 11-inch (1st generation and later), iPad Air (3rd
            generation and later), iPad mini (5th generation and later), iPad
            (8th generation and later), AirPods, and CarPlay. Devices must
            support and have the latest operating system.
          </p>
          <p>
            3. CarPlay support is either standard or available as an option on
            many new 2016 cars and later, with some manufacturers offering
            software updates for earlier models. Some models may support CarPlay
            only in certain configurations, and not all models are available in
            all areas. CarPlay support is subject to change. See your dealer for
            details. “Hey Siri” and “Siri” support requires a compatible
            vehicle.
          </p>
        </div>
        <div className='flex justify-between'>
        <img src={logo} alt='NauraLogo'/>
        <p className='text-sm'>Copyright © 2023 NauraFinance Inc. All rights reserved.</p>

        </div>
    </div>
  )
}

export default Foot