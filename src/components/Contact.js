import React from 'react'
import Contactbg from '../image/contact.png';
function Contact() {
    return (
        <div>
            <div class="sm:pt-6 my-auto bg-[#000]" id='Contact'>
                <section class="mx-auto max-w-screen-xl md:rounded-md  md:shadow-lg">
                    <div class="grid grid-cols-4  lg:grid-cols-3">
                        <div class="col-span-4  px-8 py-10  md:col-span-2  md:px-10 md:py-12 lg:col-span-1">
                            <img src={Contactbg} alt="Contact image" class="w-full h-auto mb-6" />
                        </div>
                        <div class="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">

                            <h1 className="text-4xl font-semibold leading-10  text-white tracking-wider sm:text-4xl xl:text-6xl text-left">
                                Let’s start gym <br /> <span className="text-[#FF0000] "> training now </span>
                            </h1>

                            <p class="mt-2 mb-4 text-[#9A9A9A] text-base font-light">get 50% off the first three classes you sign up for this month any GYM membership</p>
                            <form action="">
                                <div class="md:col-gap-4 mb-5 grid md:grid-cols-2 gap-x-5">
                                    <input type="text" id="first_name" class="bg-[#000]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none focus:border-red-500" placeholder="Enter You Name..." required />
                                    <div className='pt-6 sm:pt-0'>
                                        <input type="text" id="first_name" class="bg-[#000]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none focus:border-red-500" placeholder="Numbers Phone..." required />
                                    </div>
                                </div>
                                <input type="email" id="first_name" class="bg-[#000] mb-10  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 focus:outline-none focus:border-red-500" placeholder="Your Email Address..." required />
                                <button type="submit" className=" text-[#FF0000] border border-[#FF0000]   hover:bg-[#FF0000] hover:text-[#FFF] py-2 px-8   tracking-wider  transition duration-200">
                                    Send

                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Contact