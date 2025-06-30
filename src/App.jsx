import './App.css'
import SingleSlider from './components/Slider/Slider';
import AUDI from './assets/audi.png';
import SCROLL from './assets/scroll.png';
import Navbar from './components/Navbar/Navbar';
import AnimatedHeadline from './components/AnimatedHeadline';
import MotionDiv from './components/MotionDiv';
import FINALROAD from './assets/Rectangle.png';
import PhonseSec from './components/PhoneSec';
import IPHONE1 from './assets/iPhone 13 Pro.png';
import IPHONE2 from './assets/iPhone 13 Pro (1).png'
import IPHONE3 from './assets/iPhone 13 Pro (2).png'
import IPHONE4 from './assets/iPhone 13 Pro (3).png'
import IPHONE5 from './assets/Screenshot-iPhone15 Pro Max.png'
import IPHONE6 from './assets/Screenshot-iPhone15 Pro Max (1).png'
import tablet1 from './assets/tablet1.png'
import tablet2 from './assets/tablet2.png'
import tablet3 from './assets/tablet3.png'
import Contact from './components/Contect';

function App() {

  return (
    <>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory absolute inset-0 bg-stars"  >
        {/* first section  */}
        <section id='home' className='min-h-screen snap-start relative overflow-hidden'>
          <Navbar />
          <header className="w-full md:pt-8 2xl:pt-16 flex flex-col items-center justify-center overflow-hidden">
            <SingleSlider direction="left" textStyle="forward" />
            <SingleSlider direction="right" textStyle="backward" />
            <SingleSlider direction="left" textStyle="forward" />
          </header>
          <div className='absolute right-0 bottom-8 2xl:bottom-12 xl:bottom-2 2xl:right-28'>
            <img src={AUDI} className=' sm:block 2xl:scale-110 lg:scale-90 md:scale-75 ' />
          </div>
          {/* <section className='grid grid-cols-4 grid-rows-4 font-montserrat px-10 2xl:mt-14'> */}
            <div className='px-10 leading-tight lg:mt-8 font-semibold text-[#f1ae9c] text-lg 2xl:text-xl'>
              <h2>Powering the Future of</h2>
              <h2>EV Charging</h2>
            </div>
          <div className='absolute bottom-8 left-0 right-0 flex justify-end md:pr-10 '>
              <p className='text-white flex items-center gap-2 text-sm md:text-xl'>
                <img src={SCROLL} />
                Scroll
              </p>
            </div>
        </section>

        {/* second section */}
        <section id='features' className='snap-start min-h-screen relative overflow-hidden px-5 sm:p-0'>
          <div className="flex items-center justify-center relative">
            <div className="text-white text-xl text-center pt-8 2xl:pt-14">
              <AnimatedHeadline />
              <MotionDiv />
            </div>
          </div>
        </section>

        {/* third section */}
        <section id='services' className='flex juctify-center snap-start min-h-screen relative overflow-hidden lg:py-20'>
          <PhonseSec />
        </section>

        {/* fourth section */}
        <section className='inset-0 snap-start min-h-screen h-auto overflow-hidden flex xl:flex-row flex-col items-center justify-between pb-0 mb-0'>
        <article className='xl:flex xl:flex-col xl:h-screen justify-between pt-16 xl:pl-16'>
          <div className='flex flex-col justify-between w-full z-10 m-0 text-center items-center xl:items-start xl:text-start'>
            <div className=" text-6xl font-normal font-['Bebas_Neue'] tracking-[5.12px] md:tracking-[4px] leading-none md:text-8xl xl:text-9xl flex flex-col  [text-wrap:balance] z-10 text-[#BF4E30]">
              <h1 className="m-0 lg:leading-none leading-snug ">EV CHARGING</h1>
              <h1 className="-mt-5 leading-none">
                MADE
                <span className="text-stroke-lightOrg inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-textSlide text-center xl:text-left leading-tight [&_li]:block xl:pl-5">
                    <li>EASY.</li>
                    <li>SMART.</li>
                    <li>SLICK.</li>
                    <li>FAST.</li>
                    <li aria-hidden="true">EASY.</li>
                  </ul>
                </span>
              </h1>
            </div>
            <p className='text-white w-[70%] font-semibold sm:text-3xl xl:text-2xl text-sm text-wrap z-10 '>
              Charge smarter – find, plug in, <span className='inline-block'>pay, and drive.</span>
            </p>
          </div>
          <div className='hidden xl:block relative w-full'>
            <img src={FINALROAD} alt="" className='absolute 2xl:-left-[1rem] 2xl:bottom-[6rem] 2xl:scale-[150%] scale-[120%] -left-[5rem] -bottom-6 object-cover -z-0' />
          </div>
        </article>
          <div className='xl:hidden relative w-full'>
            <img src={FINALROAD} alt="" className='absolute scale-[180%] object-cover -z-0' />
          </div>
        <div className="xl:w-1/2 mt-0 flex justify-start">
          <div className='hidden xl:block relative w-full'>
            <img src={IPHONE5} className='absolute xl:scale-[100%] 2xl:scale-[120%] xl:left-[29rem] xl:-top-[30rem]  2xl:left-[35rem] 2xl:-top-[27rem]  -left-[22rem] top-40 object-cover' alt=""/>
            <img src={IPHONE6} className='absolute xl:scale-[100%] 2xl:scale-[120%] xl:-left-[10rem] xl:-top-[14rem] 2xl:-left-[15rem] 2xl:-top-[18rem] -left-[22rem] top-40 object-cover' alt="" />
            <img src={IPHONE3} className='absolute xl:scale-[100%] 2xl:scale-[120%] xl:left-[6rem] xl:-top-[28rem] 2xl:left-[8rem] 2xl:-top-[28rem] -left-[22rem] top-40 object-cover' alt="" />
            <img src={IPHONE1} className='absolute xl:scale-[100%] 2xl:scale-[120%] xl:-left-[18rem] xl:-bottom-[27.5rem] 2xl:-left-[24rem] 2xl:-bottom-[27.5rem] -left-[22rem] top-40 object-cover' alt="" />
            <img src={IPHONE4} className='absolute xl:scale-[100%] 2xl:scale-[120%] xl:left-[30rem] xl:top-[3rem] 2xl:left-[35rem] 2xl:top-[9rem] -left-[22rem] top-40 object-cover' alt="" />
            <img src={IPHONE2} className='absolute xl:scale-[100%] 2xl:scale-[120%] xl:left-[14rem] xl:top-[18rem] 2xl:left-[13rem] 2xl:top-[17rem] -left-[22rem] top-40 object-cover' alt="" />
          </div>
          <div className='flex flex-row justify-between px-3  lg:gap-12 xl:hidden'>
            <img src={tablet3} className='w-1/3 relative -bottom-0 scale-[100%] ' alt="" />
            <img src={tablet2} className='w-1/3 relative sm:bottom-11 scale-[120%] ' alt="" />
            <img src={tablet1} className='w-1/3 relative -bottom-0 scale-[100%]  ' alt="" />
          </div>

        </div>
      </section>
      {/*contact section*/}
      <section id='contact' className='snap-start h-full relative overflow-hidden px-3 sm:p-0 backdrop-blur-sm '>
      <Contact/>
      </section>
      </div>
      
    </>
  );
}

export default App;