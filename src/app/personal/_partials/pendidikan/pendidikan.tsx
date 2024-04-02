import Image from 'next/image'
import React from 'react'
import { LogoKampus } from '../../../../../public/img/file'
const Pendidikan = () => {
  return (<section className='  p-5'>
    <div className=' rounded-xl'>

    <div className='text- text-center font-extrabold text-3xl pt-5'>
      <span>Pendidikan</span>
      <p className='text-5xl text-red-500'>......</p>
    </div>
    <Image
      src={LogoKampus}
      alt='Universitas Metameedia'
      className='w-56 h-56 mt-10 mx-auto'
      />
    <div className='text-center text- pt-8'>
      <span className=' font-extrabold text-4xl'>Universitas Metamedia</span>
      <p className='font-extralight text-black'>September 2021-2025 <br />
Sistem Informasi</p>
    </div>
      </div>
  </section>
  )
}

export default Pendidikan