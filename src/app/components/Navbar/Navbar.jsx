import Image from "next/image";
import Link from "next/link";
import logo from '../../../../public/Logo.png';


const Navbar = () => {
    const navItems = <>
        <li className="hover:bg-red-700 hover:text-black"><Link href="/">Home</Link></li>
        <li className="hover:bg-red-700 hover:text-black"><Link href="/about">About Us</Link></li>
        <li className="hover:bg-red-700 hover:text-black" tabIndex={0}>
            <details>
                <summary>Services</summary>
                <ul className="p-2 menu z-10 bg-white w-30 lg:w-52 rounded-box">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li className="hover:bg-red-700 hover:text-black" tabIndex={0}>
            <details>
                <summary>Blog</summary>
                <ul className="p-2 menu z-10 bg-white w-30 lg:w-52 rounded-box">
                    <li><a>Construction</a></li>
                    <li><a>Design 2</a></li>
                </ul>
            </details>
        </li>
        <li className="hover:bg-red-700 hover:text-black"><Link href="/projects">Projects</Link></li>
        <li className="hover:bg-red-700 hover:text-black"><Link href="/contact">Contact Us</Link></li>
    </>

    return (
        <div className="navbar bg-white">
            <div className="container mx-auto ">
                <div className="navbar-start">
                    <Link href="/" className="">
                        <Image src={logo} alt="logo" width={186} height={40} />
                    </Link>
                </div>
                <div className="">
                    <div className="dropdown navbar-end ml-24">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 -ml-20 shadow bg-base-100 rounded-box text-sm font-bold text-black uppercase">
                            {navItems}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 z-10 text-sm font-bold text-black uppercase">
                        {navItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
            </div>
        </div>
    );
};

export default Navbar;