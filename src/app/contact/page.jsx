"use client"

// import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { LiaPhoneAltSolid } from 'react-icons/lia';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { LiaYoutube, LiaFacebookF } from 'react-icons/lia';
import Link from 'next/link';

const ContactPage = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='container mx-auto my-14 flex lg:flex-row flex-col gap-10'>
            <div className="shadow-2xl p-10 lg:w-1/3 w-full rounded-lg">
                <h1 className='text-3xl font-bold mb-8'>Contact Us</h1>
                <div className="flex items-start gap-4 mb-5">
                    <div className="border border-red-500 rounded-full p-4 text-red-500">
                        <AiOutlineHome />
                    </div>
                    <div className="">
                        <h3 className='text-xl font-bold'>Address:</h3>
                        <p>House# 65, Road# 6, Block# B, Monsurabad Housing Society, Adabor, Dhaka-1207</p>
                    </div>
                </div>
                <hr />
                <div className="flex gap-4 my-5">
                    <div className="border border-red-500 rounded-full p-4 text-red-500">
                        <LiaPhoneAltSolid />
                    </div>
                    <div className="">
                        <h3 className='text-xl font-bold'>Call us</h3>
                        <p>01313854600</p>
                    </div>
                </div>
                <hr />
                <div className="flex gap-4 my-5">
                    <div className="border border-red-500 rounded-full p-4 text-red-500">
                        <AiOutlineMail />
                    </div>
                    <div className="">
                        <h3 className='text-xl font-bold'>Email Us</h3>
                        <p>Info@Pdcbd.Net</p>
                    </div>
                </div>
                <hr />
                <div className="flex items-center gap-3 justify-start mt-5">
                    <Link href="#" className='w-10 h-10 text-red-500 bg-[#ddd] flex items-center justify-center'>
                        <LiaYoutube className='' />
                    </Link>
                    <Link href="#" className='w-10 h-10 text-red-500 bg-[#ddd] flex items-center justify-center'>
                        <LiaFacebookF />
                    </Link>
                    <Link href="#" className='w-10 h-10 text-red-500 bg-[#ddd] flex items-center justify-center'>
                        <AiOutlineTwitter />
                    </Link>
                    <Link href="#" className='w-10 h-10 text-red-500 bg-[#ddd] flex items-center justify-center'>
                        <AiOutlineInstagram />
                    </Link>
                    <Link href="#" className='w-10 h-10 text-red-500 bg-[#ddd] flex items-center justify-center transition'>
                        <AiOutlineWhatsApp />
                    </Link>
                </div>
            </div>
            <div className="shadow-2xl p-10 lg:w-3/4 w-full rounded-lg">
                <h1 className='text-3xl font-bold mb-8'>Write to us </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" className="input input-bordered input-info w-full mb-5" />
                    <div className="flex lg:flex-row flex-col gap-5 mb-5">
                        <input type="email" placeholder="Email" className="input input-bordered input-info w-full " />
                        <input type="number" placeholder="Phone Number" className="input input-bordered input-info w-full " />
                    </div>
                    <input type="text" placeholder="Subject" className="input input-bordered input-info w-full mb-5 " />
                    <textarea className="textarea textarea-info w-full mb-5" placeholder="Message"></textarea>
                    <button className='btn btn-neutral'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;