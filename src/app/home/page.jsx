import Image from 'next/image';
import React from 'react';


const HomeCard = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2  gap-9 grid grid-cols-1 p-5 container mx-auto my-11'>

            
             <div className="card card-side bg-base-100 shadow-lg container mx-auto ">
                <figure>
                    <Image
                        src="https://i.ibb.co/XZDrhYYQ/download-1.jpg" width={300} height={300}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New Book is released!</h2>
                    <p className='text-gray-400'>Click the button to Read on EverBooks.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-pink-900 text-white">Read</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-lg container mx-auto">
                <figure>
                    <Image
                        src="https://i.ibb.co/mVm4pfTj/shopping-1.webp" width={300} height={300}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New Book is released!</h2>
                    <p className='text-gray-400'>Click the button to Read on EverBooks.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-pink-900 text-white">Read</button>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default HomeCard;