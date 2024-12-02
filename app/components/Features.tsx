import Image from 'next/image'
import React from 'react'
import { FEATURES } from '../constants'


const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg
    bg-center bg-no-repeat py-20 bg-gray-10'>
    <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[800px]'>
        <Image src='/phone.png' alt='phone' width={340} height={800} className='feature-phone' />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
            <div className='relative'>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
        Our <span className="text-indigo-600">Features</span>
            </h3>
             </div>
            <ul className='mt-6 grid gap-8 md:grid-cols-2 lg:mg-20 lg:gap-16'>
                {FEATURES.map((feature) =>(
                    <FeatureItem
                    key={feature.title} icon={feature.icon} title={feature.title} 
                 description={feature.description} benefits={feature.benefits} />
                ))}
            </ul>
        </div>
    </div>
    </section>
  )
}

type FeatureItem = {
    title: string;
    description: string;
    icon: string;
    benefits: string[];
}
const FeatureItem = ({title, description, icon, benefits}: FeatureItem) => {
    return (
        <li className='flex w-full flex-1 flex-col items-start'>
        <div className='rounded-full p-4 lg:p-7 bg-blue-600'>
            <Image src={icon} alt='map' width={28} height={28} />
        </div>
        <h2 className='bold-20 lg:bold-32 mt-5 capitalize text-indigo-400'>{title}</h2>
        <p className='bold-16 mt-5 lg:mt-[30px] lg:bg-none'>{description}</p>
        <ul>
            {benefits.map((benefit) =>(
                <li key={benefit} className='regular-16 text-gray-50 mt-4'>{benefit}</li>
            ))}
            
        </ul>
    </li>
    )
    
}

export default Features