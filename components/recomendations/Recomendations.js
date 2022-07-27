import React from 'react'
import Image from 'next/image';
import appWrite from '../../public/assests/appWrite.jpg' 
import playStation from '../../public/assests/playstation.jpg'
import ubsisoft from '../../public/assests/ubisoft.jpg'
import { Tic } from '../../icons/Icons';

const Recomendations = () => {
  return (
    <div className='bg-gray-100/60 rounded-lg mt-5 sticky top-[52px]' >
    <div className='px-4 py-2'>
       <h1 className='font-bold text-[1.2rem]'>Who to follow</h1>
    </div>
    {/* Appwrite */}
    <div>
        <div className='flex justify-between flex-row-reverse items-center cursor-pointer transition-all duration-250 hover:bg-gray-200/80'>
           <div className='pr-4'>
              <button className='bg-black rounded-full text-white font-semibold text-sm py-2 px-5 hover:opacity-90'>
                 Follow
              </button>
           </div>
           <div className='flex items-center px-4 py-2'>
               <div className='order-2 ml-2'>
                 <div className='flex'>
                   <h4 className='font-semibold'>Appwrite</h4>
                   <div className='ml-1 w-[20px] h-[20px]'>
                       <Tic />
                   </div>
                 </div>
                  <span>@appwrite</span>
               </div> 
               <div className='order-1 min-w-[50px] min-h-[50px]'>
                   <Image className='rounded-full' width={'50px'} height={'50px'} src={appWrite} objectFit={'cover'} />
               </div>
           </div>
        </div>
    </div>
    {/* PlayStation */}
    <div className='my-2'>
        <div className='flex justify-between flex-row-reverse items-center cursor-pointer transition-all duration-250 hover:bg-gray-200/80'>
           <div className='pr-4'>
              <button className='bg-black rounded-full text-white font-semibold text-sm py-2 px-5 hover:opacity-90'>
                 Follow
              </button>
           </div>
           <div className='flex items-center px-4 py-2'>
               <div className='order-2 ml-3'>
                 <div className='flex'>
                   <h4 className='font-semibold'>Playstation</h4>
                   <div className='ml-1 w-[20px] h-[20px]'>
                       <Tic />
                   </div>
                 </div>
                  <span>@Playstation</span>
               </div> 
               <div className='order-1 min-w-[50px] min-h-[50px]'>
                   <Image className='rounded-full' src={playStation} width={'50px'} height={'50px'} objectFit={'cover'} />
               </div>
           </div>
        </div>
    </div>
    {/* Ubisoft */}
    <div>
        <div className='flex justify-between flex-row-reverse items-center cursor-pointer transition-all duration-250 hover:bg-gray-200/80'>
           <div className='pr-4'>
              <button className='bg-black rounded-full text-white font-semibold text-sm py-2 px-5 hover:opacity-90'>
                 Follow
              </button>
           </div>
           <div className='flex items-center px-4 py-2'>
               <div className='order-2 ml-3'>
                 <div className='flex'>
                   <h4 className='font-semibold'>Ubisoft</h4>
                   <div className='ml-1 w-[20px] h-[20px]'>
                       <Tic />
                   </div>
                 </div>
                  <span>@Ubisoft</span>
               </div> 
               <div className='order-1 min-w-[50px] min-h-[50px]'>
                   <Image className='rounded-full' src={ubsisoft} width={'50px'} height={'50px'} objectFit={'cover'} />
               </div>
           </div>
        </div>
    </div>
    <div className='rounded-b-lg cursor-pointer p-4 flex justify-between hover:bg-gray-200/80'>
         <div>
            <button className='text-blue-800'>
               Show more
            </button>
         </div>
       </div>
</div>
  )
}

export default Recomendations