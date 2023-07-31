import React from 'react';
import servicesData from "@/data/servicesData";
import Image from 'next/image';

const OurServices = () => {
    return (
        <div className='bg-white'>
            <h1 className='font-bold text-3xl uppercase mb-3 mt-5 text-center'>Our Services</h1>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
                {
                    servicesData.map(service => <div key={service.id} className=" w-full bg-white shadow-xl ">
                        <figure className="px-4 pt-4">
                            <Image src={service.img} alt="Shoes" className="rounded-xl" sizes="100vw" width={231}
                                height={135}
                                // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: '135px',
                                }} />
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