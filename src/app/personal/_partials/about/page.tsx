import Image from 'next/image'
import React from 'react'


const Page = () => {
  return (<>
    <section className='mt-60 px-16 text-black  m-10 rounded-full '>
        <div className='flex-col text-center font-extrabold text-black text-3xl pt-5'>
            <span className=''>Tentang Saya</span>
            <p className='text-red-500 text-5xl'>......</p>
        </div>
        <div className=' grid grid-cols-2'>
            <div>
                <Image src='/img/hero.png' alt='as' width={700} height={600} />
            </div>
        <div className='pt-16'>
            <p className=' font-semibold text-slate-900'><b className=' text-2xl text-red-500 font-serif'>Lorem </b>, ipsum dolor sit amet consectetur adipisicing elit. Vel rem iure veniam quas quasi quaerat, beatae amet magnam molestias possimus soluta doloribus harum sapiente eius nostrum perspiciatis unde asperiores quia,<i className=' font-bold text-red-500'> laborum accusantium itaque deleniti debitis! Impedit eaque perferendis optio ea numquam? </i> Repudiandae dolorum tenetur hic dolore facilis sint magnam, assumenda saepe quis vel repellendus iusto sit, consequatur ipsum eos voluptas repellat! Non reiciendis laborum cumque quod aliquid a error fa.</p>
        </div>
        </div>

    </section>
  </>
  )
}

export default Page