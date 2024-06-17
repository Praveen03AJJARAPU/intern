import { IoMdArrowRoundBack } from 'react-icons/io';
import hero from '../assets/Hero.png'

const Hero = ({signIn, setModal}) => {
  return (
    <div className='relative'>
      <div className="absolute block md:hidden right-5 top-5 text-white">
        <div className="w-[90vw] flex items-center justify-between">
          <IoMdArrowRoundBack className='text-white' />
          <p className='border-2 border-white px-2 py-2 cursor-pointer'  >{signIn ? "Leave Group" : "Join Group"}</p>
        </div>
      </div>
      <div className='w-full h-[400px]'>
        <img src={hero} className='w-full h-full object-cover' alt="hero-img" />
      </div>
      <div className='absolute bottom-[30px] md:top-[70%] left-[10%] md:left-[8%] text-white'>
        <h1 className='text-2xl lg:text-4xl mb-2 font-bold'>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
}

export default Hero