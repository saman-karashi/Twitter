import {useState} from 'react';

const useWindowSize = ()=>{
const [windowSize,setWindowSize] = useState();

if(typeof window !== 'undefined'){
window.addEventListener('resize', (e)=>{
    setWindowSize(e.target.innerWidth)
})

}

return windowSize;
}

export default useWindowSize;