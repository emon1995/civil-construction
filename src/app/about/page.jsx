import React from 'react';

const AboutPage = () => {
    return (
        <div className='container mx-auto shadow-2xl mt-14 p-10 mb-14'>
            <div className="">
                <h1 className='text-3xl uppercase font-bold'>ABOUT OUR COMPANY</h1>
                <p className='text-gray-500 text-lg'>Paragon Design Construction was established in 2018 in Dhaka. We are engaged in providing various types of civil construction services including all types of building designs.</p>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-10">
                <div className=''>
                    <h1 className="text-2xl text-gray-500 uppercase font-bold mb-2">WHO WE ARE</h1>
                    <p className='text-lg font-semibold'>The engineering department of Paragon Design Construction utilizes the standard code of practice and is equipped with analysis and design software such as STADD PRO, ETABS, AutoCad and other in-house developed software. Qualified structural engineers with experience in designing complex structures work with this software, enabling Paragon Design Construction to come up with the best possible design for any project of any complexity. Through the use of advanced software-controlled engineering and manufacturing, quality improves along with efficiency and optimization. The engineering team is always ready to answer any technical questions coming from the client at any time.</p>
                </div>
                <div className="">
                    <div className="">
                        <h1 className="text-2xl text-gray-500 uppercase font-bold mb-2">OUR MISSION</h1>
                        <p className='text-lg font-semibold'>Since the inception of the organization, we have been committed to design realistically and deliver timely work as per the client&apos;s needs.</p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl text-gray-500 uppercase font-bold mb-2">OUR VISION</h1>
                        <p className='text-lg font-semibold'>We want our company to rank among the established companies of our country. We always want to move forward by respecting experience and due diligence. The reputation of our company is constantly growing and its scope is expanding.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;