import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <>
            <main className='px-16 p-10 bg-transparent border-2 border-red-500 m-3  h-auto w-[800px] rounded-full'>
                <div className=' pl-20 flex flex-col'>
                    <span className='text-white text-2xl font-bold'>
                        Hello, I am Akmal Firdaus | <b className='text-red-600 animate-bounce'>Web Developer</b>
                    </span>
                    <p className='text-slate-900 pt-5 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,<br /> eius aut illo quo similique repellendus quos dignissimos nisi quisquam <br /> neque, aperiam natus! Odio eum accusantium aliquid, reiciendis <br /> necessitatibus accusamus cum!</p>
                </div>
                <div className='absolute left-[750px] top-28 animate-bounce -z-10'>
                    <Image src='/img/hero1.png' alt='Description of the image' width={500} height={300} />
                </div>
                <div className='mt-3 ml-20 text-white bg-[#EC5453] w-40 h-10 flex justify-center items-center rounded-lg border'>
                    <Link href={''}>
                        <button className='font-bold'>Download CV</button>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default Hero;
