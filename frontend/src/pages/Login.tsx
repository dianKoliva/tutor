import React from 'react'
import kk from "../assets/login.svg";
import HomeNavigation from '../components/navigations/HomeNavigation';
export const Login = () => {
  return (
    <div>
        <HomeNavigation></HomeNavigation>
        <div className='flex'>
        <div className='w-1/2 pt-28 pl-32'>
            <img src={kk} className="w-4/5" alt="" />
        </div>

        <div className='w-1/2'>

            <div className='shadow-xl ml-10 rounded-lg px-10 pl-14 py-10 mt-20 w-4/5'>
                <h1 className='pb-6 text-pp_dark font-bold text-lg'>Login to continue</h1>
            <div className=' '>
    <p>Email</p>
    <input spellCheck="false" className=' w-96 focus:outline-none border-2 px-4 rounded-lg py-2 ' type="email" placeholder='your email' />
</div>
<div className='mt-4'>
    <p>Password</p>
    <input spellCheck="false" className=' w-96 focus:outline-none border-2 px-4 rounded-lg py-2 ' type="password" placeholder='your password' />
</div>

<div className='mt-4'>
    <button className='text-white bg-pp_light w-96 py-2 rounded-lg'>
login
    </button>
    <div className='flex pt-6 ml-24'>
    <p className='text-center'>Have no account yet?</p>
    <p className='hover:underline cursor-pointer text-center  text-pp_light ml-2'>Sinup</p>
    </div>
   
</div>
            </div>  
      
        </div>
        </div>
       
    </div>
  )
}
