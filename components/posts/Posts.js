import Image from 'next/image'
import React from 'react'
import vercel from '../../public/assests/vercel-logo.png'
import lightBulb from '../../public/assests/lightbulb.png'
import vercelImage from '../../public/assests/vercel_image.png'
import fullStack from '../../public/assests/fullStack.png'
import jetBrains from '../../public/assests/jetBrains.jpg';
import adele from '../../public/assests/adele.jpg'
import adele_smallDimension from '../../public/assests/adele_smallDimension.jpg'
import foxNews from '../../public/assests/foxNews.jpg';
import someMen from '../../public/assests/some_men.jpg'

import 
{ 
Tic,
Heart,
Reply,
Retweet,
Share
} from '../../icons/Icons'

const Posts = () => {
  return (
    <div className='border-b'>
        {/* Post 1 */}
        <div className='p-3 flex cursor-pointer hover:bg-slate-100'>
            <div className='min-w-[60px]'>
                <Image src={vercel} width={"60px"} height={'60px'} />
            </div>
            <div className='ml-3'>
                <div className='flex items-center'>
                    <span className='font-semibold hover:underline'>Vercel</span>
                    <div className='mx-1 w-[20px] h-[20px]'><Tic /></div>
                    <span>@vercel</span>
                </div>
              <div className='flex items-start mt-1 mb-4'>
                <div>
                    <Image src={lightBulb} width={20} height={20} />
                </div>
                <span className='font-md ml-1'>Monorepos should make your life easier, not harder.</span>
              </div>

              <div>
                <p className='mb-4'>Overcome the four most common monorepo challenges to collaborate <br /> better, improve build performance, and ship faster.</p>
                <div className='bg-white border rounded-lg'>
                    <Image className='rounded-lg w-full h-full' src={vercelImage} />
                 <div className='py-2 px-4'>
                    <p className='text-sm'>vercel.com</p>
                    <p className='text-md'>eBook:How to start benefinting from monorepos today</p>
                 </div>
                </div>
              </div>

              <div className='mt-2 flex justify-between'>
                 <div title='Reply' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Reply />
                    </div>
                    <span className='ml-2'>7</span>
                 </div>

                 <div title='Retweet' className='flex items-center hover:text-green-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-green-200'>
                    <Retweet />
                    </div>
                    <span className='ml-2'>14</span>
                 </div>

                 <div title='Like' className='flex items-center hover:text-red-300'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-red-300'>
                    <Heart />
                    </div>
                    <span className='ml-2'>14</span>
                 </div>

                 <div title='Share' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Share />
                    </div>
                 </div>
              </div>
            </div>
        </div>
        {/* Post 2 */}
        <div className='p-3 flex cursor-pointer hover:bg-slate-100'>
            <div className='min-w-[60px]'>
                <Image className='rounded-full' src={jetBrains} width={"60px"} height={'60px'} />
            </div>
            <div className='ml-3'>
                <div className='flex items-center'>
                    <span className='font-semibold hover:underline'>JetBrains</span>
                    <div className='mx-1 w-[20px] h-[20px]'><Tic /></div>
                    <span>@jetbrains</span>
                </div>
              
              <div>
                <p className='mb-4'>GoLand is a clever Go IDE with extended support for JavaScript, TypeScript, and databases. Take your projects one step further, whether you’re  a newbie or an experienced professional.Start your free 30-day trial today!</p>
                <div className='bg-white border rounded-lg'>
                    <Image className='rounded-lg w-full h-full' src={fullStack} />
                 <div className='py-2 px-4'>
                    <p className='text-sm'>jetbrains.com</p>
                    <p className='text-md'>Go Full Stack With GoLand</p>
                 </div>
                </div>
              </div>

              <div className='mt-2 flex justify-between'>
                 <div title='Reply' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Reply />
                    </div>
                    <span className='ml-2'>15</span>
                 </div>

                 <div title='Retweet' className='flex items-center hover:text-green-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-green-200'>
                    <Retweet />
                    </div>
                    <span className='ml-2'>27</span>
                 </div>

                 <div title='Like' className='flex items-center hover:text-red-300'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-red-300'>
                    <Heart />
                    </div>
                    <span className='ml-2'>174</span>
                 </div>

                 <div title='Share' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Share />
                    </div>
                 </div>
              </div>
            </div>
        </div>
      {/* Post 3 */}
      <div className='p-3 flex cursor-pointer hover:bg-slate-100'>
            <div className='min-w-[60px]'>
                <Image className='rounded-full' src={adele_smallDimension} width={"60px"} height={'60px'} />
            </div>
            <div className='ml-3'>
                <div className='flex items-center'>
                    <span className='font-semibold hover:underline'>JetBrains</span>
                    <div className='mx-1 w-[20px] h-[20px]'><Tic /></div>
                    <span>@jetbrains</span>
                </div>
              
              <div>
                <p className='mb-4'>Words can’t explain how ecstatic I am to finally be able to announce these rescheduled shows. I truly was heartbroken to have to cancel them.</p>
                <div className='rounded-lg'>
                    <Image className='rounded-lg w-full h-full' src={adele} />
                </div>
              </div>

              <div className='mt-2 flex justify-between'>
                 <div title='Reply' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Reply />
                    </div>
                    <span className='ml-2'>929</span>
                 </div>

                 <div title='Retweet' className='flex items-center hover:text-green-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-green-200'>
                    <Retweet />
                    </div>
                    <span className='ml-2'>5,195</span>
                 </div>

                 <div title='Like' className='flex items-center hover:text-red-300'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-red-300'>
                    <Heart />
                    </div>
                    <span className='ml-2'>41.95k</span>
                 </div>

                 <div title='Share' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Share />
                    </div>
                 </div>
              </div>
            </div>
        </div>
        {/* Post 4 */}
        <div className='p-3 flex cursor-pointer hover:bg-slate-100'>
            <div className='min-w-[60px]'>
                <Image className='rounded-full' src={foxNews} width={"60px"} height={'60px'} />
            </div>
            <div className='ml-3'>
                <div className='flex items-center'>
                    <span className='font-semibold hover:underline'>JetBrains</span>
                    <div className='mx-1 w-[20px] h-[20px]'><Tic /></div>
                    <span>@FoxNews</span>
                    <span className='ml-2'>19m</span>
                </div>
              
              <div>
                <p className='mb-4'>Hollywood Motion Picture Academy member Jeffrey Cooper sentenced to prison for child molestation</p>
                <div className='bg-white border rounded-lg'>
                    <Image className='rounded-lg w-full h-full' src={someMen} />
                 <div className='py-2 px-4'>
                    <p className='text-sm'>jetbrains.com</p>
                    <p className='text-md'>Hollywood Academy of Motion Picture Arts and Sciences member Jeffery Cooper 70, received an eight-year prison sentence Monday for child molestation in his home.</p>
                 </div>
                </div>
              </div>

              <div className='mt-2 flex justify-between'>
                 <div title='Reply' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Reply />
                    </div>
                    <span className='ml-2'></span>
                 </div>

                 <div title='Retweet' className='flex items-center hover:text-green-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-green-200'>
                    <Retweet />
                    </div>
                    <span className='ml-2'></span>
                 </div>

                 <div title='Like' className='flex items-center hover:text-red-300'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-red-300'>
                    <Heart />
                    </div>
                    <span className='ml-2'></span>
                 </div>

                 <div title='Share' className='flex items-center hover:text-sky-400'>
                    <div className='w-[35px] h-[35px] p-2 rounded-full hover:bg-sky-100'>
                    <Share />
                    </div>
                 </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Posts