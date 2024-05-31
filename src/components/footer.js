import React from 'react'
import logo from '../image/logo.png'

function footer() {
    return (
        <footer class="pb-7 pt-5 bg-[#000]">
            <footer class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
                <div class="border-t border-white/40 py-10 flex flex-col items-center">

                    <img src={logo} className='w-20' />
                    <div class="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white">
                        <a className="px-4 py-2 mt-2 tracking-wider  text-sm  text-white rounded-lg md:mt-0 hover:text-[#FF0000]" href="/">Home</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm  text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href="#Services">Service</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm  text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href="#Trainers">Trainers</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm  text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href="#Testimonial">Testimonial</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm  text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" href="#Testimonial">Contact us</a>
                    </div>


                </div>
                <div class=" flex flex-col-reverse min-[520px]:flex-row items-center justify-between gap-6">
                    <span class="text-sm font-normal text-white focus-within:outline-0">© HB GYM  2024, All
                        rights
                        reserved. Made it by
                        Brabije and Hamere
                    </span>
                    <ul class="flex items-center gap-9 mr-3">
                        <li><a class="text-sm font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF0000]  focus-within:outline-0">Terms</a>
                        </li>
                        <li><a class="text-sm font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF0000]  focus-within:outline-0">Privacy</a>
                        </li>

                    </ul>
                </div>
            </footer>
        </footer>


    )
}

export default footer