import SideLinks from "../components/sideLinks/SideLinks";
import Main from '../components/main/Main'

export default function Home() {
  return (
   <div className='flex container max-w-[1280px] mx-auto' >
    <SideLinks />
    <Main />
   </div>

  )
}
