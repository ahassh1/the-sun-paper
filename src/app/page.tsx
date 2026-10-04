import Marquee from '@/components/Marquee';
import NavLinks from '@/components/NavLinks';
import HomePage from './homepage/page';
const Home = () => {
  return (
    <div>
      <NavLinks/>
      <Marquee/>
      <div className='mx-auto container'>
        <HomePage/>
      </div>
    </div>
  );
};

export default Home;