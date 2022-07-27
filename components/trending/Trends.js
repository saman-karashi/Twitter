import {Dots} from '../../icons/Icons'
import Recomendations from '../recomendations/Recomendations';
import SearchBar from '../searchBar/SearchBar';


const Trends = () => {
  return (
    <section className='px-5 py-2 basis-full'>
      <SearchBar />
        <div className='bg-gray-100/60 rounded-lg mt-5'>
            <header>
                <div className='px-4 py-3'>
                <h1 className='font-bold text-[1.2rem]'>Trends for you</h1>
                </div>
               <div className='flex justify-between cursor-pointer hover:bg-gray-200/80 py-2 px-4'>
               <div className='order-2'>
                    <Dots />
                </div>
                <div className='flex flex-col order-1'>
                    <span className='text-sm'>Politics Trending</span>
                    <span className='font-semibold'>Steuern</span>
                    <span className='text-sm'>
                        3,557
                        <span className='ml-1'>Tweets</span>
                    </span>
                </div>
               </div>
               <div className='px-4 mt-2 py-3 cursor-pointer hover:bg-gray-200/80'>
                    <h4 className='font-semibold text-md'>#DieRingeDerMacht</h4>
                    <p className='text-sm'>
                        Der Herr der Ringe: Die Ringe der Macht erscheint am 2. September.
                    </p>
               </div>
            </header>
            <div className='mb-2'>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Trending in Germany</span>
                        <h4 className='font-semibold'>Herr Todenhöfer</h4>
                    </div>
                    <div>
                        <Dots />
                    </div>
                </div>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Trending in Germany</span>
                        <h4 className='font-semibold'>#hartzrotgold</h4>
                        <span className='text-sm'>
                            1,043
                            <span className='ml-1'>Tweets</span>
                        </span>
                    </div>
                    <div>
                        <Dots />
                    </div>
                </div>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Trending in Germany</span>
                        <h4 className='font-semibold'>#Kiew</h4>
                        <span className='text-sm'>
                            1,005
                            <span className='ml-1'>Tweets</span>
                        </span>
                    </div>
                    <div>
                        <Dots />
                    </div>
                </div>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Trending in Germany</span>
                        <h4 className='font-semibold'>Stuttgarter Erklärung</h4>
                    </div>
                    <div>
                        <Dots />
                    </div>
                </div>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Trending in Germany</span>
                        <h4 className='font-semibold'>#DFBPokal</h4>
                    </div>
                    <div>
                        <Dots />
                    </div>
                </div>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Trending in Germany</span>
                        <h4 className='font-semibold'>#SexoderWerkstatt</h4>
                    </div>
                    <div>
                        <Dots />
                    </div>
                </div>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Trending in Germany</span>
                        <h4 className='font-semibold'>#KartoffelVirus</h4>
                    </div>
                    <div>
                        <Dots />
                    </div>
                </div>
                <div className='cursor-pointer py-2 px-4 flex justify-between hover:bg-gray-200/80'>
                    <div>
                        <span className='text-sm'>Politics · Trending</span>
                        <h4 className='font-semibold'>#Ukraine️</h4>
                    </div>
                    <div>
                        <Dots />
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
        </div>
       <Recomendations />
    </section>
  )
}

export default Trends