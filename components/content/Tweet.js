import React from 'react'
import {
Location
,Emoji
,Poll
,Schedule
,EmptyPic
,Gif
,Addition
,Elipsis
} from '../../icons/Icons'

const Tweet = ({isActivated}) => {
  return (
    <div className='mb-5 flex items-center justify-between'>
     <div className='flex items-center'>
         <button title='Media'>
            <div className='w-[40px] h-[40px] p-2 rounded-full hover:bg-sky-100'>
                <EmptyPic />
            </div>
         </button>

         <button title='Gif'>
            <div className='w-[40px] h-[40px] p-2 rounded-full hover:bg-sky-100'>
                <Gif />
            </div>
         </button>

         <button className='hidden md:block' title='Poll'>
            <div className='w-[40px] h-[40px] p-2 rounded-full hover:bg-sky-100'>
                <Poll />
            </div>
         </button>

         <button title='Emoji'>
            <div className='w-[40px] h-[40px] p-2 rounded-full hover:bg-sky-100'>
                <Emoji />
            </div>
         </button>

         <button className='hidden md:block' title='Schedule'>
            <div className='w-[40px] h-[40px] p-2 rounded-full hover:bg-sky-100'>
                <Schedule />
            </div>
         </button>

         <button title='Media' disabled={true}>
            <div className='w-[40px] h-[40px] p-2'>
                <Location />
            </div>
         </button>
     </div>
     <div className='flex items-center ml-3'>
        {isActivated &&
        <>
        <div>
            <Elipsis />
        </div>
        <div className='w-[1.5px] h-[30px] bg-slate-400 mx-2'></div>
        <button className='hover:opacity-70'>
            <Addition />
        </button>
        </>
        }
        <button className='text-white bg-blue-800 px-5 font-semibold py-2 rounded-[50px] ml-2 duration-250 transition-all hover:opacity-90'>
            Tweet
        </button>
     </div>
    </div>
  )
}

export default Tweet