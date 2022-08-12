import { useState } from 'react';
import HomeNavigation from '../components/navigations/HomeNavigation';
import homePic from "../assets/home_pic.png"




function Home(){
    return(
        <div>

       
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
          <section className=' h-94 mt-14 bg-pp_light py-10 px-36 opacity-80' id='about'>
          <div>
             <h1 className='text-center  text-xl font-bold '>About Us</h1>
             <p className='text-center mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil incidunt
                  tempore impedit debitis consequuntur dignissimos itaque perspiciatis molestiae
                   porro culpa. Atque mollitia recusandae, sequi cum doloribus, perferendis suscipit 
                   nulla asperiores, cumque delectus odit aliquam architecto ut eligendi veniam 
                   dolorum a eum saepe accusantium itaque tenetur labore dolores repudiandae!
                    Vel doloribus, nulla molestiae sequi eaque nostrum commodi voluptate. 
                    Facere, quia magni iusto reiciendis velit debitis sapiente ipsa fugit
                     molestias molestiae magnam assumenda atque, modi omnis temporibus 
                     consequatur mollitia voluptates ex qui necessitatibus repellendus 
                     soluta cumque itaque! Soluta quod fuga magnam aspernatur, veniam rem 
                     maxime nam similique rerum ad fugiat sequi quia ullam corporis assumenda 
                     ea error praesentium illo sit vel voluptatum corrupti velit? Ut rerum 
                     temporibus dolorem incidunt delectus quia enim consequatur repellat labore,
                      veniam eius quasi quo dolores non omnis dolore eaque consectetur cum. 
                      Debitis nisi sint dolorum libero dolor mollitia iusto nam, alias, et, 
                      distinctio itaque.</p>
          </div>
             </section>

             <section id='contact ' className='flex pb-10 pt-4'>

                <div className='w-1/2 pt-24 pl-32'>

                    <p className='font-bold pb-4 text-2xl text-pp_dark'>
                        Contact Us
                    </p>

                    <p className='mt-8s text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, 
                    eos? Et voluptates quidem distinctio laborum aliquam totam ut, 
                    incidunt error dolorum laboriosam. Nemo dolores adipisci quis vel 
                    repudiandae veritatis, expedita minima pariatur at aliquam magni
                     corrupti reprehenderit corporis fugit nesciunt earum laboriosam
                      doloribus quae? Sapiente eum asperiores a modi
                    </p>

                </div>

                <div className="w-1/2 pl-28 pt-4">

<div className='mt-4 '>
    <p>Name</p>
    <input spellCheck="false" className='w-96 focus:outline-none border-2 px-4 rounded-lg py-2 ' type="text" placeholder='user name' />
</div>
<div className='mt-4'>
    <p>Email</p>
    <input spellCheck="false" className=' w-96 focus:outline-none border-2 px-4 rounded-lg py-2 ' type="text" placeholder='user name' />
</div>
<div className='mt-4'>
    <p>Message</p>
    <textarea spellCheck="false" className=' py-4 w-96 h-32 focus:outline-none border-2 px-4 rounded-lg  ' placeholder='user name' />
</div>
<div className='mt-4'>
    <button className='text-white bg-pp_light w-96 py-2 rounded-lg'>
submit
    </button>
</div>
                </div>

             </section>

            <section className=' footer bg-pp_light py-4 '>
<p className='text-center text-white'>copyright  @ 2022 </p>
            </section>
             </div>
    )
}

export default Home;