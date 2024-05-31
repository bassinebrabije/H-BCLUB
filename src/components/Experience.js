import React from 'react';
import Bg from '../image/ex.png';
import Eximg from '../image/eximg.png';
function Experience() {
    return (
        <div style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div class=" py-6 sm:py-8 ">
                <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="md:pt-8">
                            <h1 className="text-white font-bold text-4xl md:text-7xl tracking-wider mb-6 uppercase">
                                we have a lot of<br className='pt-20' />
                                <span className="text-[#FF0000]">experience</span>
                            </h1>
                            <p className="text-white sm:text-[#9A9A9A] text-sm font-light mb-3 sm:w-[30rem]">
                                In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at lacus consequat justo odio condimentum dui. Faucibus id blandit feugiat mi tellus sit etiam donec aliquam.
                            </p>
                            <p className="text-white sm:text-[#9A9A9A] text-sm font-light mb-12 sm:w-[30rem]">
                                Dictumst egestas ut facilisi vel. Sem consequat fermentum pellentesque risus purus quis gravida. Nulla porttitor ultrices facilisis non commodo diam morbi cursus eu. Semper ut in mauris gravida id cursus urna. Magnis vulputate orci risus felis eget lectus morbi.
                            </p>
                            <a href="/"
                                className="text-[#FF0000] border border-[#FF0000] hover:bg-[#FF0000] hover:text-[#FFF] py-2 px-8 transition duration-200">
                                Started now
                            </a>
                        </div>


                        <div>
                            <div class=" overflow-hidden pl-10 rounded-lg  shadow-lg md:h-auto">
                                <img src={Eximg} alt="img" class=" object-cover object-center" loading="lazy" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
