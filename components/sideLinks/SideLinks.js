import React from 'react';
import {
More,
Message,
Profile,
Notification,
Bookmark,
Explore,
List,
Dots,
Home,
MobileTwitter
} from '../../icons/Icons'
import Image from 'next/image';
import twitter from '../../public/assests/twitter.png'
import personalPhoto from '../../public/assests/personal-photo.jpg'
import useWindowSize from '../../hooks/windowSize'


const SideLinks = () => {
const width = useWindowSize();
let isMobile = false;

if(width < 768){
isMobile = true;
}else {
isMobile = false;
}


  return (
    <aside className='border-r-[1px] py-2 flex flex-col justify-between sticky top-0 h-screen'>
        <div>
            <div className='p-2 w-[50px] h-[50px] transition-all duration-250 cursor-pointer mx-auto rounded-full hover:bg-slate-200 md:mx-0'>
               <Image src={twitter} width={"100%"} height={"100%"} />
            </div>
            <nav className='flex flex-col'> 
              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <Home />
                    </div>
                    {!isMobile &&
                    <div className='ml-2'>
                        <span className='text-black text-[1.2rem] font-semibold'>Home</span>
                    </div>
                    }
                </div>
                </div>

              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <Explore />
                    </div>
                    {!isMobile &&
                    <div className='ml-2'>
                        <span className='text-black  text-[1.2rem]'>Explore</span>
                    </div>
                    }
                </div>
                </div>
          
              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <Notification />
                    </div>
                    {!isMobile && 
                    <div className='ml-2'>
                        <span className='text-black  text-[1.2rem]'>Notifications</span>
                    </div>
                    }
                </div>
                </div>
          
              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <Message />
                    </div>
                    {!isMobile &&
                    <div className='ml-2'>
                        <span className='text-black  text-[1.2rem]'>Messages</span>
                    </div>
                    }
                </div>
                </div>
          
              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <Bookmark />
                    </div>
                    {!isMobile &&
                    <div className='ml-2'>
                        <span className='text-black  text-[1.2rem]'>Bookmarks</span>
                    </div>
                    }
                </div>
                </div>
          
              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <List />
                    </div>
                    {!isMobile && 
                    <div className='ml-2'>
                        <span className='text-black  text-[1.2rem]'>Lists</span>
                    </div>
                    }
                </div>
                </div>

              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <Profile />
                    </div>
                    {!isMobile &&
                    <div className='ml-2'>
                        <span className='text-black  text-[1.2rem]'>Profile</span>
                    </div>
                    }
                </div>
                </div>

              <div className='flex items-center cursor-pointer mt-2 mx-auto md:mx-0'>
                <div className='flex items-center p-2 transition-all duration-250 hover:bg-slate-200 hover:rounded-[50px]'>
                  <div className='w-8 h-8 flex items-center justify-center md:justify-start'>
                    <More />
                    </div>
                    {!isMobile &&
                    <div className='ml-2'>
                        <span className='text-black  text-[1.2rem]'>More</span>
                    </div>
                    }
                </div>
                </div>
            </nav>
            {!isMobile ?
            <div className='mt-5 mr-8'>
            <button className='bg-sky-500 w-full rounded-[50px] font-semibold text-white py-3 duration-250 transition-all hover:bg-opacity-90'>Tweet</button>
            </div>
            :
            <div className='mt-2 mx-auto bg-blue-800 rounded-full cursor-pointer w-[50px] h-[50px] flex justify-center items-center hover:opacity-90'>
              <MobileTwitter />
            </div>
            }
        </div>

           <div className='mt-4 mr-4 flex items-center justify-center p-2 rounded-[50px] cursor-pointer transition-all duration-250 hover:bg-slate-200'>
            <div className='w-12 h-12'>
            <Image src={personalPhoto} width="100%" height="100%" objectFit='cover' className='rounded-full'/>
            </div>
            {!isMobile &&
            <>
            <div className='ml-2'>
                <span className='block font-semibold text-sm'>saman</span>
                <span className='text-sm'>@saman_karashi</span>
            </div>
            <div className='w-6 h-6 ml-5'>
                <Dots />
            </div>
            </>
            }
           </div>
    </aside>
  )
}

export default SideLinks