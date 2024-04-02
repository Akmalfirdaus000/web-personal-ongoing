import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <header className='py-5 px-16 z-30'>
          
            <div className='flex items-center justify-between '>
                <div>
                    <Link href={'/'}>
                        <button>
                            <Image src="/img/A.F.png" alt="Logo" width={100} height={50} />
                        </button>
                    </Link>
                </div>
                <div className=''>
                    <ul className='flex font-bold text-white items-center flex-col md:flex-row'>
                        <li className='pl-5'>
                            <Link href={''}>
                                <button>Halaman Utama</button>
                            </Link>
                        </li>
                        <li className='pl-5'>
                            <Link href={''}>
                                <button>Tentang Saya</button>
                            </Link>
                        </li>
                        <li className='pl-5'>
                            <Link href={''}>
                                <button>Pedidikan</button>
                            </Link>
                        </li>
                        <li className='pl-5'>
                            <Link href={''}>
                                <button>Pengalaman</button>
                            </Link>
                        </li>
                        <li className='pl-5'>
                            <Link href={''}>
                                <button>Sertifikasi</button>
                            </Link>
                        </li>
                        <li className='pl-5'>
                            <Link href={''}>
                                <button>Portofolio</button>
                            </Link>
                        </li>
                        <li className='ml-5 bg-[#EC5453] h-24 w-24 flex justify-center items-center rounded-full border'>
                            <Link href={''}>
                                <button>Kontak</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
