import { useState } from 'react';
import PHONE1 from '../assets/phone1.png';
import PHONE2 from '../assets/phone2.png';
import PHONE3 from '../assets/phone3.png';
import ROAD from '../assets/road.png';
import CHARGE from '../assets/sec2.png';
import CARDIMG from '../assets/sec3.png';

const PhonseSec = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => setHovered(index);
  const handleLeave = () => setHovered(null);

  return (
    <section className='bg-black p-8 lg:py-32 pt-20  h-full'>
      <div className='flex lg:flex-row flex-col justify-center items-center w-[85%] mx-auto'>
        {[PHONE1, PHONE2, PHONE3].map((phone, index) => (
          <article
            key={index}
            className="group relative lg:w-1/3 w-full h-full"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
            
          >
            <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-3/2 w-[70%] h-1/2 flex justify-center items-center z-10">
              <img
                src={phone}
                alt={`Phone ${index + 1}`}
                className={`z-10 relative transition-transform duration-300 group-hover:scale-90  ${
                  hovered !== null && hovered !== index ? 'scale-75 opacity-55' : 'scale-100'
                }`}
              />
            </div>


            <div className={`opacity-0 group-hover:opacity-100 transition-opacity   duration-500 flex flex-col mx-auto h-full justify-center items-center ${index === 1 ? 'gap-y-[5.4rem]' : 'gap-y-16'}`}> 
              <h1 className={`text-[#BF4E30] group-hover:motion-translate-y-in-100  text-center font-bebas select-none p-0 leading-none ${index === 2 ? '-mt-5' : 'mb-0'} 
              ${index === 1 ? 'lg:text-[200px] text-[120px]' : 'lg:text-[260px] text-[160px]'}`}
                   >
                {['SPOT', 'CHARGE', 'GO'][index]}
              </h1>

              <img
                src={[ROAD, CHARGE, CARDIMG][index]}
                className={`scale-50  transition-all duration-700 
                    ${index === 2 ? 'mb-8' : 'mb-2'} ${index === 0 ? 'group-hover:scale-[180%]' : 'group-hover:scale-150'}`}
              />

              <p className='text-white lg:text-lg text-sm font-medium mb-4 font-montserrat group-hover:motion-preset-slide-right  motion-duration-500'>
                {[
                  'Step 1: Locate the nearest charging station in seconds.',
                  'Step 2: Stay in control while your EV powers up.',
                  'Step 3: Pay securely and hit the road.'
                ][index]}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PhonseSec;
