import React from 'react'
import logo from '../image/logo.png'

function footer() {
    return (
        <footer className="pb-7 pt-5 bg-[#000]">
            <div className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
                <div className="border-t border-white/40 py-10 flex flex-col items-center">
                    <img src={logo} className="w-20" alt="logo" loading="lazy" />
                    <div className="mt-8 flex flex-wrap items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white">
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm text-white rounded-lg hover:text-[#FF0000]" href="/">Home</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm text-white rounded-lg hover:text-[#FF0000]" href="#Services">Service</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm text-white rounded-lg hover:text-[#FF0000]" href="#Trainers">Trainers</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm text-white rounded-lg hover:text-[#FF0000]" href="#Testimonial">Testimonial</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm text-white rounded-lg hover:text-[#FF0000]" href="#Contact">Contact us</a>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
                    <span className="text-sm font-normal text-white">© HB GYM 2024, All rights reserved. Made by Brabije and Hamere</span>
                    <ul className="flex items-center gap-9 mr-3">
                        <li><a className="text-sm font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF0000]">Terms</a></li>
                        <li><a className="text-sm font-normal cursor-pointer text-white transition-all duration-300 hover:text-[#FF0000]">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </footer>



    )
}

export default footer