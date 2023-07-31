import Image from 'next/image';
import logo from '../../../../public/Logo.png';
import Link from 'next/link';
import { LiaMapMarkerSolid } from 'react-icons/lia';
// import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { LiaYoutube, LiaFacebookF } from 'react-icons/lia';

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content pt-0 lg:pt-16 pl-0 lg:pl-16 pr-0 lg:pr-16 pb-0 lg:pb-16 '>
            <footer className="footer container mx-auto p-16">
                <div>
                    <Image src={logo} alt='logo' width={186} height={40} />
                    <p>Paragon Design Construction was established in 2018 in <br /> Dhaka. We are engaged in providing various types of civil <br /> construction services including all types of building <br /> designs.</p>
                </div>
                <div>
                    <span className="footer-title text-white">Links</span>
                    <Link href="/about" className="link link-hover mb-1">About us</Link>
                    <Link href="/" className="link link-hover mb-1">All Services</Link>
                    <Link href="/projects" className="link link-hover mb-1">All Projects</Link>
                    <Link href="/blog" className="link link-hover mb-1">Blog</Link>
                    <Link href="/" className="link link-hover mb-1">Get Quote</Link>
                </div>
                <div>
                    <span className="footer-title text-white">Contact Us</span>
                    <div className="link link-hover flex items-center gap-2 ">
                        <p className='border border-black rounded-full p-2'><LiaMapMarkerSolid /></p>
                        <span>House# 65, Road# 6, Block# B, Monsurabad Housing <br /> Society, Adabor, Dhaka-1207</span>
                    </div>
                    <div className="link link-hover flex items-center gap-2 ">
                        <p className='border border-black rounded-full p-2'><AiOutlineMail /></p>
                        <span>info@pdcbd.net</span>
                    </div>
                    <div className="link link-hover flex items-center gap-2 ">
                        <p className='border border-black rounded-full p-2'>
                            <AiOutlineWhatsApp />
                        </p>
                        <span>+88 01313854600</span>
                    </div>
                    <div className="link link-hover flex items-center gap-2 ">
                        <p className='border border-black rounded-full p-2'>
                            <SlCalender />
                        </p>
                        <span>Sat - Thu : 10am - 9pm</span>
                    </div>

                </div>
            </footer>
            <footer className="footer lg:container mt-10 mx-auto items-center p-10  bg-[#1d232a] text-white rounded ">
                <div className="items-center grid-flow-col">
                    <p>Copyright © {new Date().getFullYear()} -  PDC-Paragon Design Construction </p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <div className="flex items-center gap-3 justify-center">
                        <Link href="#" className='w-8 h-8 bg-slate-800 hover:bg-red-700 rounded-full flex items-center justify-center'>
                            <LiaYoutube className='' />
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-slate-800 hover:bg-red-700 rounded-full flex items-center justify-center'>
                            <LiaFacebookF />
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-slate-800 hover:bg-red-700 rounded-full flex items-center justify-center'>
                            <AiOutlineTwitter />
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-slate-800 hover:bg-red-700 rounded-full flex items-center justify-center'>
                            <AiOutlineInstagram />
                        </Link>
                        <Link href="#" className='w-8 h-8 bg-slate-800 hover:bg-red-700 rounded-full flex items-center justify-center transition'>
                            <AiOutlineWhatsApp />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;