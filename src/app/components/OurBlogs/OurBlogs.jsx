import React from 'react';
import blogsData from "@/data/blogsData";
import Image from 'next/image';

const OurServices = () => {
    return (
        <div className='bg-[#eee] pt-6'>
            <h1 className='font-bold text-3xl uppercase mb-3 mt-5 text-center'>Our Blogs</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
                {
                    blogsData.map(service => <div key={service.id} className=" w-full bg-white shadow-xl ">
                        <figure className="px-2 pt-2 relative">
                            <Image src={service.img} alt="Shoes" className="" sizes="100vw" width={340}
                                height={240}
                                // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: '240px',
                                }} />
                            <span className='bg-neutral text-white p-1 absolute bottom-0 left-2'>{service.category}</span>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-black">{service.title}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurServices;