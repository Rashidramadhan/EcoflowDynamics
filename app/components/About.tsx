import React from 'react'
import Button from './Button'
import Link from 'next/link'

const About = () => {
  return (
    <section id="about-us" className=" flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-gray-10">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className='text-center mt-2'>
        <h3 className="text-3xl sm:text-5xl font-montserrat leading-normal font-extrabold tracking-tight text-gray-900">
        About <span className="text-indigo-600">EcoFlow Dynamics</span>
            </h3>
            <h6 className="bold-14 lg:bold-18 font-montserrat text-blue-600 mt-6">At EcoFlow Dynamics, we are committed to shaping the future of energy. We develop cutting-edge 
                software solutions designed to optimize petroleum extraction processes and boost energy efficiency.</h6>
        </div>
          
            <div className='text-center mt-2'>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
        Our <span className="text-indigo-600">Mission</span>
            </h3>
            <h6 className="bold-14 lg:bold-18 text-blue-600 mt-6">Our mission is to drive innovation in the energy sector by:</h6>
            <ul className="regular-18 mt-3 text-gray-30">
              <li className="regular-18 mt-6 text-gray-30"><strong>Reducing Environmental Impact:</strong> Minimizing carbon emissions and preserving natural resources through intelligent software solutions.
              </li>
              <li className="regular-18 mt-6 text-gray-30">
              <strong>Improving Operational Efficiency: </strong>Maximizing productivity and reducing costs by automating workflows and optimizing resource allocation.
              </li>
              <li className="regular-18 mt-6 text-gray-30">
              <strong>Driving Sustainable Energy: </strong> Promoting the adoption of clean and renewable energy sources by providing efficient tools and insights.
              </li>
            </ul>
            </div>
            <div className='text-center shadow-inner mt-6'>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            How We  <span className="text-indigo-600">Do it</span>
            </h3>
            <ul className="regular-18 mt-3 text-gray-30">
              <li className="regular-18 mt-6 text-gray-30"><strong>Leveraging Advanced Technologies:</strong> Employing state-of-the-art technologies like AI, machine learning, and data analytics to provide actionable insights.</li>
              <li className="regular-18 mt-6 text-gray-30">
              <strong>Collaborating with Industry Experts: </strong>Partnering with industry leaders to understand their challenges and develop tailored solutions.
              </li>
              <li className="regular-18 mt-6 text-gray-30">
              <strong>Continuous Innovation: </strong> Staying at the forefront of technological advancements to deliver cutting-edge solutions.
              </li>
            </ul>
            </div>
            <div className="flex flex-col w-full gap-3 sm:flex-row mt-6 items-center justify-center">
              <Link href='#contact-us'>
              <Button 
                type="button" 
                title="Join Us in Shaping The Future in Tech" 
                variant="btn_white" 
              />
              </Link>
            </div>
            
            
        </div>
    </section>
  )
}

export default About