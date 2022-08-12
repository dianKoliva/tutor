import { useState } from 'react';
import HomeNavigation from '../components/navigations/HomeNavigation';
import homePic from "../assets/home_pic.png"



function Home(){
    return(
        <section className='h-94'>
       <HomeNavigation></HomeNavigation>
       <div className='flex'>
        <div className='w-1/2 mt-6 pl-14 pt-20'>
            <p className='text-5xl font-bold text-pp_dark'>
            Find the best tutor in town
            </p>

<p className='pt-10 w-4/5'>
We are ready and able to help you find the best tutor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ducimus facere cum est perferendis excepturi modi culpa eligendi soluta, dolorum quam alias hic deleniti repellat 
</p>
<div className='mr-8 pt-2 px-4 py-3 rounded-md mt-14 w-44  text-center items-center content-center log-b'>Get Started </div>
        </div>

        <div className='w-1/2'>

            <img src={homePic} className='pt-10' alt="not" />

        </div>
       </div>
        </section>
    )
}

export default Home;