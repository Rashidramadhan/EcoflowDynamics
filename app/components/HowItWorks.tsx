import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="flex-col flexCenter overflow-hidden bg-feature-bg
    bg-center bg-no-repeat py-20 shadow-inner">

<div className="text-center">
    <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
        How it <span className="text-indigo-600">Works?</span>
    </h3>

</div>

<div className="mt-20">
    <ul className="">
        <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
            <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        1
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">Data Collection</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                    Sensors and IoT devices gather data from various points in the drilling
                    operation.
                    </p>
                </div>
            </div>
        </li>
        <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
            <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        2
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">Data Analysis</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                    Our software processes this data using advanced algorithms and machine
                    learning models.
                    </p>
                </div>
            </div>
        </li>
        <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
            <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        3
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">Actionable Insights</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                    Real-time dashboards provide actionable insights and
                    recommendations for operational improvements.
                    </p>
                </div>
            </div>
        </li>
        <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
            <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        4
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">Optimization</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                    Continuous feedback loops ensure ongoing refinement of processes.
                    </p>
                </div>
            </div>
        </li>

    </ul>
</div>

{/* </div> */}
    </section>
  )
}

export default HowItWorks