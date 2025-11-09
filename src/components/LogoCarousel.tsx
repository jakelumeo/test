'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import upennLogo from '@/assets/logos/upenn.webp'
import mitLogo from '@/assets/logos/mit.webp'
import columbiaLogo from '@/assets/logos/columbia.webp'
import buLogo from '@/assets/logos/bostonUniversity.webp'
import moneyLionLogo from '@/assets/logos/moneyLion.webp'
import huaweiLogo from '@/assets/logos/huawei.webp'
import googleLogo from '@/assets/logos/google.webp'

const LogoCarousel = () => {
  const logos = [
    { name: 'MIT', src: mitLogo },
    { name: 'UPenn', src: upennLogo },
    { name: 'Columbia', src: columbiaLogo },
    { name: 'BU', src: buLogo },
    { name: 'Money Lion', src: moneyLionLogo },
    { name: 'Huawei', src: huaweiLogo },
    { name: 'Google', src: googleLogo },
  ]

  const repeated = [...logos, ...logos, ...logos]

  return (
    <section className='w-full bg-gray-150 py-12 overflow-hidden'>
      <h2 className='text-m md:text-m font-semibold text-center text-gray-700 mb-8 px-4'>
        Backed by experience from the world's leading companies and universities
      </h2>

      <div className='relative overflow-hidden'>
        <div
          className='flex gap-8 animate-scroll'
          style={{
            animationPlayState: 'running',
          }}
        >
          {repeated.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className='flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white' // rounded-lg border border-gray-200 hover:border-gray-300 transition-all hover:shadow-md'
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className='object-contain'
                priority
              />
            </div>
          ))}
        </div>

        {/* Edge gradients */}
        <div className='absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none' />
        <div className='absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none' />
      </div>
    </section>
  )
}

export default LogoCarousel
