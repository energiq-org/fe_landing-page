import './App.css'
import SingleSlider from './components/Slider/Slider';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import AnimatedHeadline from './components/AnimatedHeadline';
import MotionDiv from './components/MotionDiv';
import FINALROAD from './assets/Rectangle.png';
import PhonseSec from './components/PhoneSec';
import IPHONE1 from './assets/iphone1.png';
import IPHONE2 from './assets/iphone2.png';
import IPHONE3 from './assets/iphone3.png';
import IPHONE4 from './assets/iphone42.png';
import IPHONE5 from './assets/iphone52.png';

function App() {
  

  return (
    <>
    {/* first section  */}
    <section className='"relative items-center justify-center h-screen  overflow-hidden"'>      
      <Background/>
    <Navbar/>
      <header className=" w-full lg:pt-5 pt-28 flex flex-col items-center justify-center overflow-hidden">
        <SingleSlider direction="left" textStyle="forward"/>
        <SingleSlider direction="right" textStyle="backward"/>
        <SingleSlider direction="left" textStyle="forward"/>
      </header>
      <section className='grid grid-cols-4 grid-rows-2 font-montserrat px-10'>
        <div className='col-start-1 row-start-1 -space-y-0.5 leading-tight text-[#f1ae9c]  text-lg'>
          <h2>Powering the Future of</h2>
          <h2>EV Charging</h2>
        </div>
        {/* <div className='absolute bottom-4 right-20 text-sm '> */}
        <div className='col-start-5 text-sm row-start-2'>
          <p className='text-white'>Scroll</p>
        </div>
      </section>
      </section>

    {/* second section */}
    <section className='bg-black bg-opacity-85 min-h-screen relative  overflow-hidden pb-56'>
            <div className="flex items-center justify-center relative">
            <div className="text-white text-xl text-center pt-8">
            <AnimatedHeadline />
              <MotionDiv />
            </div>
          </div>
    </section>


    {/* third section */}   
    <PhonseSec />

  {/* fourth section */}
  <section className='bg-black bg-opacity-85  inset-0 lg:px-4 pt-32  min-h-screen h-auto overflow-hidden  flex lg:flex-row flex-col items-center justify-between pb-0 mb-0'>
  <article className='flex flex-col pl-8   justify-between p-0 m-0 '>
      <div className="text-6xl font-normal font-['Bebas_Neue'] tracking-[5.12px] leading-none md:text-9xl flex flex-col [text-wrap:balance] text-[#BF4E30]">
      <h1 className="m-0 lg:leading-none leading-snug">EV CHARGING</h1>
      <h1 className="-mt-5 leading-none">
        MADE
        <span className="text-stroke-lightOrg ml-5 inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.9xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-textSlide text-left leading-tight [&_li]:block">
            <li>EASY</li>
            <li>SMART</li>
            <li>SLICK</li>
            <li>FAST</li>
            <li aria-hidden="true">EASY</li>
          </ul>
        </span>
      </h1>
    </div>


    <p className='text-white w-[65%] font-semibold lg:text-2xl text-sm font-montserrat text-wrap z-10'>Charge smarter – find, plug in, pay, and drive.</p>
    <div className='pl-5'>
      <img 
        src={FINALROAD} 
        alt="" 
        className=' w-[70%] object-cover ' 
      />
    </div>
    </article>

    <div className="relative lg:w-1/2  lg:mt-0 flex justify-start  ">
    <div className="relative w-[200px] h-[500px] lg:w-[600px] lg:h-[700px] ">
        <img
          src={IPHONE1}
          className={`absolute scale-[85%]  -bottom-10 -left-[30rem] transition-transform duration-300 motion-preset-slide-down-right-sm  motion-duration-[3s] motion-ease-spring-smooth`}
        />
        <img
          src={IPHONE2}
          className={`absolute scale-[85%] motion-translate-y-loop-[5%] motion-translate-x-loop-[5%] motion-duration-[6s] motion-ease-spring-smooth  -bottom-14 -left-[18rem] transition-transform duration-300 `}
        />
        <img
          src={IPHONE3}
          className={`absolute scale-[85%]  bottom-48 right-[12rem] transition-transform duration-300 -motion-translate-y-loop-[5%] motion-duration-[4s] motion-ease-spring-smooth`}
        />
        <img
          src={IPHONE4}
          className={`absolute scale-[178%] motion-preset-seesaw motion-duration-[4s] motion-delay-75  -bottom-8 left-[8rem] transition-transform duration-300 `}
        />
        <img
          src={IPHONE5}
          className={`absolute scale-[140%]  bottom-28 left-[19rem] transition-transform duration-300 motion-translate-x-loop-[5%] motion-duration-[4s] motion-ease-spring-smooth`}
        />
        
    </div>
    </div>
    </section>

    </>
  )
}

export default App
