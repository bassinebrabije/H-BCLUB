import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contactbg from '../image/contact.png';
import villesData from './Villes.json';



function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [ville, setville] = useState('');
    const [villes, setvilles] = useState([]);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [showAlert, setShowAlert] = useState(false);



    useEffect(() => {
        setvilles(villesData);
    }, []);

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(number);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        setIsPhoneNumberValid(validatePhoneNumber(value));
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailData = {
            email,
            fullName,
        };
        if (!isPhoneNumberValid || !isEmailValid) {
            return;
        }

        try {
            // First axios post request to /inscriptions
            await axios.post('http://localhost:8000/api/inscriptions', {
                full_name: fullName,
                email: email,
                phone_number: phoneNumber,
                ville: ville,
            });
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                window.location.href = '/';
            }, 4000);
            // Second axios post request to /send-email
            const response = await axios.post('http://localhost:8000/api/send-email', emailData);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="sm:pt-6 my-auto bg-[#000]" id='Contact'>
                <section className="mx-auto max-w-screen-xl md:rounded-md md:shadow-lg">
                    <div className="grid grid-cols-4 lg:grid-cols-3">
                        <div className="col-span-4 px-8 py-10 md:col-span-2 md:px-10 md:py-12 lg:col-span-1">
                            <img src={Contactbg} className="w-full h-auto mb-6" alt="img" loading="lazy" />
                        </div>
                        <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
                            <h1 className="text-4xl font-semibold leading-10 text-white tracking-wider sm:text-4xl xl:text-6xl text-left">
                                Let’s start gym <br /> <span className="text-[#FF0000]">training now</span>
                            </h1>
                            <p className="mt-2 mb-4 text-[#9A9A9A] text-base font-light">
                                Get 50% off the first three classes you sign up for this month with any GYM membership
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="md:col-gap-4 mb-5 grid md:grid-cols-2 gap-x-5">
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="bg-[#000] border border-gray-300 text-white text-sm rounded-lg block w-full p-4 focus:border-red-500"
                                        placeholder="Enter Your Name..."
                                        required
                                    />
                                    <div className='pt-6 sm:pt-0'>
                                        <input
                                            type="tel"
                                            value={phoneNumber}

                                            onChange={handlePhoneNumberChange}
                                            className={`bg-[#000] border ${isPhoneNumberValid ? 'border-gray-300' : 'border-red-500'} text-white text-sm rounded-lg block w-full p-4`}
                                            placeholder="Phone Number..."
                                            required
                                        />

                                    </div>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={`bg-[#000] mb-5 border ${isEmailValid ? 'border-gray-300' : 'border-red-500'} text-white text-sm rounded-lg block w-full p-4 focus:border-red-500`}
                                    placeholder="Your Email Address..."
                                    required
                                />

                                <div className="mb-5">
                                    <select
                                        value={ville}
                                        onChange={(e) => setville(e.target.value)}
                                        className="bg-[#000] border border-gray-300 text-white text-sm p-4 rounded-lg block w-full "
                                        required
                                    >
                                        <option value="">Select Ville </option>
                                        {villes.map((ville) => (
                                            <option key={ville.id} value={ville.ville} className='text-[#fff]' >{ville.ville}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="text-[#FF0000] border border-[#FF0000] hover:bg-[#FF0000] hover:text-[#FFF] py-2 px-8  tracking-wider transition duration-200">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            {showAlert && (
                <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg">
                        <div className="mt-3 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white border border-[#FF0000] ">
                                <svg className="h-6 w-6 " fill="none" stroke="#FF0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-3">Successfull</h3>
                            <div className=" px-7 py-3">
                                <p className="text-sm font-medium text-[#000] tracking-wides">Your inscription has been successfully .</p>
                            </div>
                            <div className="items-center px-4 py-3 ">

                                <a href="/" onClick={() => setShowAlert(false)} className="px-4 py-2 bg-[#FF0000] text-white text-base font-medium rounded-md w-96 shadow-sm  ">
                                    OK
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Contact;
