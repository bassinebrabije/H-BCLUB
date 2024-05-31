import React from 'react'
import Tri from '../image/per1.png';
import Tri2 from '../image/per2.png';
import Tri3 from '../image/per3.png';
import Tri4 from '../image/per4.png';
import Tri5 from '../image/per5.png';
import Tri6 from '../image/per6.png';
function Trainers() {
    return (
        <div>
            <section className="relative bg-[#000] overflow-hidden py-12 sm:py-16 lg:py-20" id="Trainers">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold leading-10 text-white 	 tracking-wider sm:text-4xl xl:text-6xl text-center">
                            Our professional <br /> <span className="text-[#FF0000] ">trainers</span>
                        </h1>
                        <p className="text-[#9A9A9A]  text-sm font-light tracking-widest">
                            Whether you're looking to set up a home gym or enhance your <br className="hidden sm:block" />current workout routine
                        </p>
                    </div>
                    <div className="grid pt-8 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        <div className="group relative m-auto h-96 w-full max-w-xs bg-[#FF0000] cursor-pointer overflow-hidden rounded-lg shadow-md">
                            <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                                <img className="h-4/6 w-full object-cover" src={Tri} alt="Brabije Yassine" />
                                <h1 className="mt-4 px-4 text-center text-xl tracking-wider font-semibold text-white">Brabije Yassine</h1>
                                <h1 className="text-center font-serif text-white">Rate Trainer <br />⭐⭐⭐⭐⭐</h1>
                                <p className="mt-1 px-4 text-center text-sm text-white font-light">Lorem ipsum, dolor sit amet consectetur. . .</p>
                            </div>
                            <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-white">Brabije Yassine</h1>
                                <p className="px-8 text-center text-white text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt quisquam aperiam, voluptas esse minima. Tenetur odit rem ducimus incidunt quas, voluptates obcaecati, sint amet sit provident quis nam repellat, odio repellendus recusandae. Error, repudiandae?</p>
                            </div>
                        </div>
                        <div className="group relative m-auto h-96 w-full max-w-xs bg-[#FF0000] cursor-pointer overflow-hidden rounded-lg shadow-md">
                            <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                                <img className="h-4/6 w-full object-cover" src={Tri2} alt="Nisrine Hamere" />
                                <h1 className="mt-4 px-4 text-center text-xl tracking-wider font-semibold text-white">Nisrine Hamere</h1>
                                <h1 className="text-center font-serif text-white">Rate Trainer <br />⭐⭐⭐⭐⭐</h1>
                                <p className="mt-1 px-4 text-center text-sm text-white font-light">Lorem ipsum, dolor sit amet consectetur. . .</p>
                            </div>
                            <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-white">Nisrine Hamere</h1>
                                <p className="px-8 text-center text-white text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt quisquam aperiam, voluptas esse minima. Tenetur odit rem ducimus incidunt quas, voluptates obcaecati, sint amet sit provident quis nam repellat, odio repellendus recusandae. Error, repudiandae?</p>
                            </div>
                        </div>
                        <div className="group relative m-auto h-96 w-full max-w-xs bg-[#FF0000] cursor-pointer overflow-hidden rounded-lg shadow-md">
                            <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                                <img className="h-4/6 w-full object-cover" src={Tri5} alt="Borney Exiteid" />
                                <h1 className="mt-4 px-4 text-center text-xl tracking-wider font-semibold text-white">Borney Exiteid</h1>
                                <h1 className="text-center font-serif text-white">Rate Trainer <br />⭐⭐⭐⭐⭐</h1>
                                <p className="mt-1 px-4 text-center text-sm text-white font-light">Lorem ipsum, dolor sit amet consectetur. . .</p>
                            </div>
                            <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-white">Borney Exiteid</h1>
                                <p className="px-8 text-center text-white text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt quisquam aperiam, voluptas esse minima. Tenetur odit rem ducimus incidunt quas, voluptates obcaecati, sint amet sit provident quis nam repellat, odio repellendus recusandae. Error, repudiandae?</p>
                            </div>
                        </div>
                        <div className="group relative m-auto h-96 w-full max-w-xs bg-[#FF0000] cursor-pointer overflow-hidden rounded-lg shadow-md">
                            <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                                <img className="h-4/6 w-full object-cover" src={Tri4} alt="Elsa Windia" />
                                <h1 className="mt-4 px-4 text-center text-xl tracking-wider font-semibold text-white">Elsa Windia</h1>
                                <h1 className="text-center font-serif text-white">Rate Trainer <br />⭐⭐⭐⭐⭐</h1>
                                <p className="mt-1 px-4 text-center text-sm text-white font-light">Lorem ipsum, dolor sit amet consectetur. . .</p>
                            </div>
                            <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-white">Elsa Windia</h1>
                                <p className="px-8 text-center text-white text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt quisquam aperiam, voluptas esse minima. Tenetur odit rem ducimus incidunt quas, voluptates obcaecati, sint amet sit provident quis nam repellat, odio repellendus recusandae. Error, repudiandae?</p>
                            </div>
                        </div>
                        <div className="group relative m-auto h-96 w-full max-w-xs bg-[#FF0000] cursor-pointer overflow-hidden rounded-lg shadow-md">
                            <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                                <img className="h-4/6 w-full object-cover" src={Tri3} alt="Geourge Aryo" />
                                <h1 className="mt-4 px-4 text-center text-xl tracking-wider font-semibold text-white">Geourge Aryo</h1>
                                <h1 className="text-center font-serif text-white">Rate Trainer <br />⭐⭐⭐⭐⭐</h1>
                                <p className="mt-1 px-4 text-center text-sm text-white font-light">Lorem ipsum, dolor sit amet consectetur. . .</p>
                            </div>
                            <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-white">Geourge Aryo</h1>
                                <p className="px-8 text-center text-white text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt quisquam aperiam, voluptas esse minima. Tenetur odit rem ducimus incidunt quas, voluptates obcaecati, sint amet sit provident quis nam repellat, odio repellendus recusandae. Error, repudiandae?</p>
                            </div>
                        </div>
                        <div className="group relative m-auto h-96 w-full max-w-xs bg-[#FF0000] cursor-pointer overflow-hidden rounded-lg shadow-md">
                            <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                                <img className="h-4/6 w-full object-cover" src={Tri6} alt="Amara Bond" />
                                <h1 className="mt-4 px-4 text-center text-xl tracking-wider font-semibold text-white">Amara Bond</h1>
                                <h1 className="text-center font-serif text-white">Rate Trainer <br />⭐⭐⭐⭐⭐</h1>
                                <p className="mt-1 px-4 text-center text-sm text-white font-light">Lorem ipsum, dolor sit amet consectetur. . .</p>
                            </div>
                            <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-white">Amara Bond</h1>
                                <p className="px-8 text-center text-white text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deserunt quisquam aperiam, voluptas esse minima. Tenetur odit rem ducimus incidunt quas, voluptates obcaecati, sint amet sit provident quis nam repellat, odio repellendus recusandae. Error, repudiandae?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Trainers