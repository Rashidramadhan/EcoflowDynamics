import React from 'react'
import Image from 'next/image'
import { reviews } from '../constants'


const CustomerReviews = () => {
  return (
    <section  id='customer-feedback' className='flex-col flexCenter overflow-hidden bg-feature-bg
    bg-center bg-no-repeat py-0'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our <span className='text-indigo-600'> Customers </span> Says
      </h3>
      <p className='bold-16 text-gray-50 m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied 
        customers about their exceptional experiences with us</p>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews.map((review) =>(
            <ReviewCard 
            key={review.customerName} imgURL={review.imgURL} customerName={review.customerName}
              rating={review.rating} feedback={review.feedback}
            />
          ))}
        </div>
       </section>
  )
}
type ReviewItems = {
  imgURL: string ;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({imgURL, customerName, rating, feedback}: ReviewItems) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <Image src={imgURL} alt='customer' width={120} height={120} className='rounded-full object-cover'/>
        <p className='mt-6 max-w-sm text-center regular-16 text-gray-50'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <Image src='/star.svg' alt='star' width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center bold-18'>{customerName}</h3>
    </div>

  )
}

export default CustomerReviews