import React from 'react';
import Heroo from '../image/Hero.png'; // Adjust the path as needed

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
            <div className="container mx-auto px-4 mt-20 md:px-8 text-left">
                <h1 className="text-white font-bold text-4xl md:text-7xl   tracking-wider	 mb-6 uppercase">
                    Ready TO TRAIN<br className='pt-20' />
                    <span className="text-[#FF0000]">YOUR BODY </span>
                </h1>
                <p className="text-[#9A9A9A] text-base font-light	 mb-12 w-[30rem]">
                    Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement.
                </p>
                <a href="#"
                    className=" text-[#FF0000] border border-[#FF0000]   hover:bg-[#FF0000] hover:text-[#FFF] py-2 px-8   tracking-wider  transition duration-200">
                    Shop Now
                </a>
                {/* Added grid here */}
                <div className="grid  grid-cols-1   text-center  sm:text-left md:grid-cols-3 w-[30rem]">
                    <div className="   py-10 text-left     ">
                        <p className="	 font-black text-[#FF0000] sm:text-xl">20+</p>
                        <p className="mt-2  text-xs font-bold text-[#9A9A9A]">Years of Experience</p>
                    </div>
                    <div className="    py-10 text-left   ">
                        <p className="	 font-black text-[#FF0000] sm:text-xl">15k+</p>
                        <p className="mt-2  text-xs font-bold text-[#9A9A9A]">Members Join</p>
                    </div>
                    <div className="   py-10 text-left  ">
                        <p className="	 font-black text-[#FF0000] sm:text-xl">14k+</p>
                        <p className="mt-2 text-xs font-bold text-[#9A9A9A]">Happy members</p>
                    </div>



                </div>
            </div>
        </section >
    );
}

export default Hero;
