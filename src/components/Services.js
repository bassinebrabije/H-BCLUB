import React from 'react'

function Services() {
    return (
        <div id='Services' >
            <section className="relative bg-[#000] overflow-hidden  py-12 sm:py-16 lg:py-20">

                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:text-center">
                        <h1 className="text-4xl font-semibold leading-7 tracking-wider text-white sm:text-4xl xl:text-6xl text-center">
                            Why <span className="text-[#FF0000]"> Choose Us </span>
                        </h1>
                        <p className='text-[#9A9A9A] text-sm font-light tracking-widest' >Gym workouts offer a versatile and customizable experience,<br /> allowing everyone to set specific fitness goals.</p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-4 text-center sm:text-left md:grid-cols-2">
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">01</p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">Personal Training</h1>
                            <p className="text-[#9A9A9A] font-light">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                        </div>
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">02</p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">Equipment and facilities</h1>
                            <p className="text-[#9A9A9A] font-light">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                        </div>
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">03</p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">nutrition counseling</h1>
                            <p className="text-[#9A9A9A] font-light">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                        </div>
                        <div className="backdrop-blur-lg relative mb-3  border   border-[#FF0000]  px-12 py-8 text-left shadow lg:px-12">
                            <p className="relative text-3xl font-black tracking-wider text-white">04 </p>
                            <h1 className="relative text-xl font-normal tracking-wider text-[#FF0000] uppercase">speciality programs</h1>
                            <p className="text-[#9A9A9A] font-light">Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
                        </div>
                    </div>
                </div>
            </section>



        </div >
    )
}

export default Services