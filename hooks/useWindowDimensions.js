import {useState,useLayoutEffect} from 'react';

export const useWindowDimensions = ()=>{
const [windowDimensions,setWindowDimensions] = useState({});

useLayoutEffect(()=>{

setWindowDimensions({
width:window.innerWidth
})

const windowHandler= window.addEventListener('resize',(e)=>{
setWindowDimensions({width:e.target.innerWidth})
})

return ()=> window.removeEventListener('resize',windowHandler)
},[])

return windowDimensions
}