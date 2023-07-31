import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { LiaYoutube, LiaFacebookF } from 'react-icons/lia';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="bg-neutral text-white h-[40.5px] flex items-center">
            <div className="container mx-auto flex items-center md:justify-between justify-center">
                <div className="md:flex items-center gap-1 hidden">
                    <p className="normal-case flex items-center gap-1 ">
                        <BsTelephone /> +88 01313854600
                    </p>
                    <div className="divider divider-horizontal"></div>
                    <p className="flex items-center gap-1">
                        <AiOutlineMail />
                        info@pdcbd.net
                    </p>
                </div>
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
        </div>
    );
};

export default Header;