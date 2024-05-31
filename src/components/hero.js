import React from 'react';
import Heroo from '../image/Hero.png';
function Hero() {
    const sectionStyle = {
        backgroundImage: `url(${Heroo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <section
            className="xl:min-h-screen  flex items-center justify-center"
            style={sectionStyle}
        >
            <div className="container mx-auto px-4 mt-28 md:px-8 text-left">
                <h1 className="text-white font-bold text-4xl md:text-7xl   tracking-wider	 mb-6 uppercase">
                    Ready TO TRAIN<br className='pt-20' />
                    <span className="text-[#FF0000]">YOUR BODY </span>
                </h1>
                <p className="text-white text-base font-light sm:text-[#9A9A9A]	 mb-12 sm:w-[30rem]">
                    Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement.
                </p>
                <a href="/"
                    className=" text-[#FF0000] border border-[#FF0000]   hover:bg-[#FF0000] hover:text-[#FFF] py-2 px-8   tracking-wider  transition duration-200">
                    Started now
                </a>
                {/* Added grid here */}
                <div className="grid grid-cols-1 mt-10 text-center sm:text-left md:grid-cols-3 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:py-10 text-left">
                        <p className="font-black text-[#FF0000] text-2xl sm:text-3xl">20+</p>
                        <p className="mt-2 text-xs font-bold text-[#9A9A9A] sm:text-base">Years of Experience</p>
                    </div>
                    <div className="sm:py-10 text-left">
                        <p className="font-black text-[#FF0000] text-2xl sm:text-3xl">14k+</p>
                        <p className="mt-2 text-xs font-bold text-[#9A9A9A] sm:text-base">Happy members</p>
                    </div>
                    <div className="sm:py-10 text-left">
                        <p className="font-black text-[#FF0000] text-2xl sm:text-3xl">15k+</p>
                        <p className="mt-2 text-xs font-bold text-[#9A9A9A] sm:text-base">Members Join</p>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default Hero;
