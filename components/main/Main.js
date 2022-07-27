import Content from '../content/Content';
import Trends from '../trending/Trends';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const Main = () => {
const {width} = useWindowDimensions()

  return (
    <main className='flex'>
      <Content />
     {
      width >= 1000 && <Trends />
     }
    </main>
  )
}

export default Main