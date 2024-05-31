import React, { useState, useEffect } from 'react';
import Hero from './hero';
import Service from './Services';
import Experience from './Experience';
import Trainers from './Trainers';
import Testimonial from './Testimonial';
import Footer from './footer';
import Contact from './Contact';
import MessageContainer from './MessageContainer';
import logo from '../image/logo.png';



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [loading, setLoading] = useState(true); // New state for loading

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth <= 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Simulate loading for 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
            document.body.classList.remove('hide-scroll'); // Remove hide-scroll class
        }, 1500);

        // Add hide-scroll class to body
        document.body.classList.add('hide-scroll');

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
            document.body.classList.remove('hide-scroll'); // Ensure removal of hide-scroll class on unmount
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            {loading && ( // Conditionally render loading animation
                <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[#000]">
                    <div className="animate-pulse">
                        <img src={logo} alt="Logo" className="w-[15rem] h-[10rem] text-white" />
                    </div>
                </div>
            )}

            <div
                className={`w-full fixed z-40 transition-colors duration-300 border-b border-[#fff] border-opacity-30 ${isMobileOrTablet ? 'bg-[#000] bg-opacity-30 backdrop-blur-lg' : scroll ? 'bg-[#000] bg-opacity-30 backdrop-blur-lg' : 'bg-transparent'
                    }`}
                id="home"
            >
                <div className="flex flex-col  max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="p-4 flex flex-row items-center justify-between">
                        <a href="/"><img src={logo} className='h-10' alt="logo" loading="lazy" /></a>
                        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                            <svg fill="#FFF" viewBox="0 0 20 20" className="w-6 h-6">
                                <path className={`${!open ? 'block' : 'hidden'}`} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                <path className={`${open ? 'block' : 'hidden'}`} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className={`flex-col flex-grow pb-4  md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
                        <a className="px-4 py-2 mt-2 tracking-wider  text-sm  cursor-pointer	 text-white rounded-lg md:mt-0 hover:text-[#FF0000]" href='/'>Home</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" onClick={() => scrollToSection('Services')}>Service</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" onClick={() => scrollToSection('Trainers')}>Trainers</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer	  text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" onClick={() => scrollToSection('Testimonial')}>Testimonial</a>
                        <a className="px-4 py-2 mt-2 tracking-wider text-sm  cursor-pointer	 text-white rounded-lg md:mt-0 md:ml-4 hover:text-[#FF0000]" onClick={() => scrollToSection('Contact')}>Contact us</a>
                        <a className="px-4 py-2  tracking-wider text-sm  cursor-pointer bg-[#FF0000]	 text-white rounded-lg md:mt-0 md:ml-4 " href='/' >Started now</a>
                    </nav>
                </div>
            </div>
            <Hero />
            <Service id="Services" />
            <Experience />
            <Trainers id="Trainers" />
            <Testimonial id="Testimonial" />
            <Contact id="Contact" />
            <Footer />
            <MessageContainer />


        </>
    );
};

export default Navbar;

