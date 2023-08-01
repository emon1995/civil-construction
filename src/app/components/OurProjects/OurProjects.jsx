import React from 'react';
import servicesData from "@/data/projectsData";
import Image from 'next/image';

const OurProjects = () => {
    return (
        <div className='bg-white pt-6'>
            <h1 className='font-bold text-3xl uppercase mb-3 mt-5 text-center'>Our Projects</h1>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
                {
                    servicesData.slice(0, 8).map(service => <div key={service.id} className="mt-10 max-w-sm">
                        <div className="relative group">
                            <Image
                                src={service.img}
                                alt="Photo by Sébastien Goldberg on Unsplash"
                                width={329}
                                height={300}
                                // Make the image display full width
                                style={{
                                    width: '100%',
                                    height: '300px',
                                }}
                                className="w-full rounded shadow-xl hover:shadow-2xl" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <div className="flex-row text-center">
                                    <h1 className="text-gray-50 font-bold text-3xl">{service.title}</h1>
                                    {/* <p class="text-gray-200 font-medium text-sm">Tulus</p>
                                    <small class="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small> */}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurProjects;