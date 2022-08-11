import { useState } from 'react';
import "../../App.css"

function HomeNavigation(){
    return(
        <section>
            <div>
                <div className=' pt-1  pb-4'>

                    

                    <div className='flex '>
                    <span className='flex pl-8 pt-2 logo'><p className='text-4xl font-bold'>T</p> <p className='mt-4 font-bold'>utor</p></span>
                    <div className='right-0 absolute pt-4 flex '>
                    <p className=' mr-8 pt-2'> Home </p>
                        <p className=' mr-8 pt-2'>About</p>
                        <p className=' mr-8 pt-2'>Contact</p>
                        <div className='mr-8 pt-2 px-8 py-1 rounded-md    log-b'>Login</div>
                       
                    </div>
                       
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default HomeNavigation;