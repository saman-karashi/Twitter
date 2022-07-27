import {useState} from 'react'
import { Times,Search } from '../../icons/Icons';


const SearchBar = () => {
const [isDisplayed , setIsDisplayed] = useState(false);
const [isFocused,setIsFocused] =useState(false);

const searchChangeHandler = (e)=>{
if(e.target.value){
    setIsDisplayed(true)
}else{
    setIsDisplayed(false)
}
}

const onFocusHandler = ()=>{
setIsFocused(true)
}

const onBlurHandler = ()=>{
setIsFocused(false)
}


return (
<div className='search-wrapper sticky z-10 top-0 bg-white'>  
    <input onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={searchChangeHandler} className="w-full rounded-full p-3 bg-gray-100 focus:outline-blue-800 focus:bg-transparent pl-12" placeholder='Search Twitter' />
    <label className='cursor-pointer absolute left-[15px] top-[12px] text-slate-500 '>
       <Search />
    </label>
    {isDisplayed &&
    <label className='cursor-pointer absolute right-[10px] top-[8px] text-slate-500 '>
       <Times />
    </label>
    }
    {isFocused &&
    <div className='text-slate-600 text-center bg-white z-10 absolute shadow-md rounded-lg top-[50px] p-2 w-full min-h-[80px]'>
       <p className='text-[.85rem] mt-2 whitespace-nowrap'>Try searching for people, topics, or keywords</p>
    </div>
    }
</div>
  )
}

export default SearchBar