import React from 'react';
import bannerImg from "../../assets/banner.png";

const Banner =() =>{

    

    return (
        <div className="flex flex-col-reverse md:flex-row  py-16 justify-between items-center gap-12">

            <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-2xl font-medium  mb-7"> New Releases this week</h1>
                <p class="mb-10">
                    Update your reading with the latest books of this season, from action packed to thrillers,
                    history, children's books etc.
                </p>
                <button className='bg-primary'>Subscribe</button>
            </div> 

            <div className="md:w-1/2 w-full flex items-center md:justify-end">
            <img src={bannerImg} alt="Banner" />
            </div>
      
        </div>
    );
};


export default Banner;