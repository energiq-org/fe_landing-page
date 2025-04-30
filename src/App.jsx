import './App.css'
import SingleSlider from './components/Slider/Slider';
import AUDI from './assets/audi.png';
import SCROLL from './assets/scroll.png';
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
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* first section  */}
        <section className='min-h-screen snap-start relative overflow-hidden pb-56'>
          <Navbar />
          <header className="w-full 2xl:pt-28 lg:pt-5 pt-28 flex flex-col items-center justify-center overflow-hidden">
            <SingleSlider direction="left" textStyle="forward" />
            <SingleSlider direction="right" textStyle="backward" />
            <SingleSlider direction="left" textStyle="forward" />
          </header>
          <div className='absolute  bottom-44 right-5'>
            <img src={AUDI} className='scale-95' />
          </div>
          <section className='grid grid-cols-4 grid-rows-2 font-montserrat px-10 2xl:mt-14'>
            <div className='col-start-1 row-start-1 -space-y-0.5 leading-tight font-semibold text-[#f1ae9c] text-lg 2xl:text-xl'>
              <h2>Powering the Future of</h2>
              <h2>EV Charging</h2>
            </div>
            <div className='col-start-5 2xl:text-md text-sm row-start-4'>
              <p className='text-white flex flex-row'>
                <img src={SCROLL} />
                Scroll
              </p>
            </div>
          </section>
        </section>

        {/* second section */}
        <section className='snap-start min-h-screen relative overflow-hidden pb-56'>
          <div className="flex items-center justify-center relative">
            <div className="text-white text-xl text-center pt-8 2xl:pt-14">
              <AnimatedHeadline />
              <MotionDiv />
            </div>
          </div>
        </section>

        {/* third section */}
        <section className='snap-start min-h-screen relative overflow-hidden pb-52'>
          <PhonseSec />
        </section>

        {/* fourth section */}
        <section className='inset-0 snap-start 2xl:px-8 lg:px-4 min-h-screen h-auto overflow-hidden flex lg:flex-row flex-col items-center justify-between pb-0 mb-0'>
          <article className='flex flex-col pl-8 justify-between p-0 m-0 '>
            <div className="text-6xl font-normal font-['Bebas_Neue'] tracking-[5.12px] leading-none md:text-9xl flex flex-col [text-wrap:balance] text-[#BF4E30]">
              <h1 className="m-0 lg:leading-none leading-snug">EV CHARGING</h1>
              <h1 className="-mt-5 leading-none">
                MADE
                <span className="text-stroke-lightOrg ml-5 inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.9xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-textSlide text-left leading-tight [&_li]:block">
                    <li>EASY.</li>
                    <li>SMART.</li>
                    <li>SLICK.</li>
                    <li>FAST.</li>
                    <li aria-hidden="true">EASY.</li>
                  </ul>
                </span>
              </h1>
            </div>

            <p className='text-white w-[65%] font-semibold lg:text-2xl text-sm font-montserrat text-wrap z-10'>Charge smarter – find, plug in, pay, and drive.</p>
            <div className='pl-5 2xl:pl-0'>
              <img src={FINALROAD} alt="" className='w-[70%] 2xl:w-[85%] object-cover' />
            </div>
          </article>

          <div className="relative lg:w-1/2 lg:mt-0 flex justify-start">
            <div className="relative w-[200px] h-[500px] lg:w-[600px] lg:h-[700px]">
              <img src={IPHONE1} className='absolute scale-[120%] 2xl:scale-[132%] 2xl:-bottom-[20rem] 2xl:-left-[34rem] -bottom-[19rem] -left-[30rem]' />
              <img src={IPHONE2} className='absolute scale-[155%] 2xl:scale-[167%] 2xl:bottom-3 2xl:-left-[20rem]  bottom-5 -left-[19rem] transition-transform duration-300' />
              <img src={IPHONE3} className='absolute scale-[85%] 2xl:scale-[97%] bottom-48 right-[11rem] transition-transform duration-300' />
              <img src={IPHONE4} className='absolute scale-[178%] 2xl:scale-[199%] 2xl:-bottom-16 2xl:left-[12rem] -bottom-8 left-[8rem] transition-transform duration-300' />
              <img src={IPHONE5} className='absolute scale-[140%] 2xl:scale-[152%] 2xl:left-[24rem] bottom-28 left-[19rem] transition-transform duration-300 ' />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
