import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section id="home" className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
          <div className="hero-map" />
    
          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <h1 className="bold-32 lg:bold-40 text-blue-400">Intelligent Solutions for a Greener Tomorrow</h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
              EcoFlow Dynamics is at the forefront of energy innovation. We develop cutting-edge software solutions that optimize petroleum extraction processes and enhance energy efficiency. By leveraging advanced technologies like AI and machine learning, we empower businesses to reduce their environmental impact, minimize operational costs, and contribute to a more sustainable future.
            </p>
    
            <div className="my-11 flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                {Array(5).fill(1).map((_, index) => (
                  <Image 
                    src="/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
    
              <p className="bold-16 lg:bold-20 text-blue-70">
                198k
                <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
              </p>
            </div>
    
            <div className="flex flex-col w-full gap-3 sm:flex-row">
              
              <Link href='#about-us'>
              <Button 
                type="button" 
                title="Learn More" 
                variant="btn_green" 
              />
              </Link>
              <Link href='#how-it-works'>
              <Button 
                type="button" 
                title="How it works" 
                variant="btn_white" 
              />
              </Link>
            </div>
          </div>
    
          <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full'>
          <div className='flex-1 flex justify-center items-center'>
        <Image src='/bluenergy.jpeg' alt='blue energy' width={570} height={522} className='object-contain rounded-xl'/>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <Image src='/energysaver.jpeg' alt='energy saver' width={570} height={522} className='object-contain rounded-xl'/>
      </div>
          </div>
        </section>
      )
}

export default Hero