import React from 'react'
import Bg from '../image/Testimonial.png';
function Testimonial() {
    return (
        <div className=' bg-[#000]'>
            <div style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} id="Testimonial">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="mb-10 space-y-4 px-6 md:px-0">
                        <h1 className="text-4xl font-semibold leading-7 text-white tracking-wider sm:text-4xl xl:text-6xl text-center">
                            What <span className="text-[#FF0000] "> clients say </span>   with us
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
                        <div className="border border-[#FF0000] rounded-lg p-8 text-center md:w-1/3">
                            <p className="font-bold uppercase text-white ">Brabiej Yassine</p>
                            <p className="text-xl font-light italic text-white">"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels."</p>
                            <div className="flex items-center justify-center space-x-2 mt-4">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                        <div className="border border-[#FF0000] rounded-lg p-8 text-center md:w-1/3">
                            <p className="font-bold uppercase text-white">Nisirine Hamere</p>
                            <p className="text-xl font-light italic text-white">"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels."</p>
                            <div className="flex items-center justify-center space-x-2 mt-4">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                        <div className="border border-[#FF0000] rounded-lg p-8 text-center md:w-1/3">
                            <p className="font-bold uppercase text-white">MR. Ahmed zellou</p>
                            <p className="text-xl font-light italic text-white">"I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels."</p>
                            <div className="flex items-center justify-center space-x-2 mt-4">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial