import {useState} from 'react'
import 
{ 
Sparkles
,Earth} 
from '../../icons/Icons';
import Image from 'next/image';
import personalPhoto from '../../public/assests/personal-photo.jpg'
import Tweet from './Tweet';
import Posts from '../posts/Posts';


const Content = () => {
const [isActivated,setIsActivated] = useState(false)

const textareaChangeHandler = (e)=>{
if(e.target.value){
    setIsActivated(true)
}else{
    setIsActivated(false)
}
}

  return (
    <div className='border border-l-0 col-span-2'>
        <header className=' p-2 sticky top-0 bg-white opacity-90 z-10'>
            <div className='cursor-pointer flex justify-between items-center'>
            <h1 className='font-semibold text-lg'>Home</h1>
            <div className='p-2 rounded-full cursor-pointer transition-all duration-250 hover:bg-slate-200'>
                <Sparkles />
            </div>
            </div>
         </header>
           <div className='p-2 flex mt-5 border-b'>
                <div className='flex items-start cursor-pointer hover:opacity-90 w-[50px] h-[50px] rounded-full overflow-hidden'>
                    <Image src={personalPhoto} width={'100%'} height={"100%"} objectFit='cover'/>
                </div>

                <div className='ml-2 flex-1'>
                    <div className='border-b'>
                        <div className='p-2'>
                            <textarea onChange={textareaChangeHandler} className='height-auto resize-none overflow-hidden border-none placeholder:text-lg placeholder:text-slate-700 focus:outline-none w-full' placeholder="What's happening?" type="text" />
                        </div>
                        <div>
                            <button className='mb-2 p-1 rounded-full hover:bg-sky-100'>  
                                <div className='flex items-center'>
                                <Earth />
                                <span className='text-sm ml-2 text-blue-800'>Everyone can reply</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Tweet isActivated={isActivated} />
                    </div>
                </div>
           </div>
           <Posts />
    </div>
  )
}

export default Content