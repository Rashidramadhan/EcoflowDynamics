import React from 'react'


const ContactUs = () => {
  return (
    <section id='contact-us' className='max-container bg-gray-10 mt-6 p-4'>
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h3 className="bold-32 sm:bold-32 leading-normal tracking-tight items-center text-gray-800">
            Our Contact Information
            </h3>
            <div className='flex flex-1 flex-row gap-10 py-3'>
            <h6 className="bold-14 lg:bold-18 mt-6"><span className='text-blue-600'>Admin Office :</span>  +254708567809</h6>
            <h6 className="bold-14 lg:bold-18 mt-6"><span className='text-blue-600'>Email Us :</span> ecoflowdynamics@gmail.com</h6>
            </div>
            <div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="flex-shrink mx-4 text-gray-400">Subscribe To Our NewsLetter</span>
    <div className="flex-grow border-t border-gray-400"></div>
</div>
        </div>
      <div className='flex justify-between items-center max-lg:flex-col gap-2 mb-10'>
      <h3 className='leading-[68px] lg:max-w-md font-palanquin bold-20'>Sign Up for
      <span className='text-green-400'> Updates </span> & Newsletter
      </h3>
      <div className='rounded-full'>
      <form className="w-full max-w-sm flex flex-col md:flex-row">
  <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
    <label className="block text-gray-700 text-sm bold-16 mb-2 md:mr-4">
      Your Email
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
      type="email"
      placeholder="Enter your email"
    />
  </div>
  <div className="md:ml-4">   

    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Subscribe
    </button>
  </div>
</form>
      </div>
      </div>
      
    </section>
  )
}

export default ContactUs