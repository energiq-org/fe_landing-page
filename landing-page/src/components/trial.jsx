const PhonseSec = () => {
return(
<section className='bg-black p-8 py-32 h-full'>
  <div className='flex flex-row justify-center items-center w-[85%] mx-auto '>

  <article className="group relative w-1/3 h-full">
  <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-3/2 w-[70%] h-1/2 flex justify-center items-center z-10">
    <img src={PHONE1} alt="Phone 1" className="z-10 scale-90 group-hover:scale-100 transition-all relative" />
  </div>

  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500  flex flex-col gap-y-16 mx-auto h-full justify-center">
    <h1 className="text-[#BF4E30] group-hover:motion-translate-y-in-100 text-[260px] text-center font-bebas  select-none p-0 leading-none">SPOT</h1>
    <img src={ROAD} className='scale-80 group-hover:scale-[2] transition-all' />
    <p className='text-white mt-3 text-lg font-montserrat group-hover:motion-preset-slide-right motion-duration-500'>Step 1: Locate the nearest charging station in seconds.</p>
  </div>
</article>

  <article className="group relative w-1/3 h-full">
  <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-3/2 w-[70%] h-1/2 flex justify-center items-center z-10">
    <img src={PHONE2} alt="Phone 2" className="z-10 scale-90 group-hover:scale-100 transition-all relative" />
  </div>

  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500  flex flex-col gap-y-24 mx-auto h-full justify-start">
    <h1 className="text-[#BF4E30] text-[200px] group-hover:motion-translate-y-in-100 font-bebas text-center select-none p-0 leading-none">CHARGE</h1>
    <img src={CHARGE} className='scale-80 group-hover:scale-150 transition-all' />
    <p className='text-white mt-5 text-lg font-montserrat group-hover:motion-preset-slide-right motion-duration-500'>Step 2: Stay in control while your EV powers up.</p>
  </div>

</article>
  <article className="group relative w-1/3 h-full">
  <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-3/2 w-[70%] h-1/2 flex justify-center items-center z-10">
    <img src={PHONE3} alt="Phone 3" className="z-10 scale-90 group-hover:scale-100 transition-all relative " />
  </div>

  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-4 
      flex flex-col gap-y-16 mx-auto h-full justify-start">
    
    <h1 className="text-[#BF4E30] text-[300px] text-center font-bebas select-none p-0 leading-none">
      GO
    </h1>

    <img src={CARDIMG} className='scale-80 group-hover:scale-150 transition-all' />
    
    <p className='text-white text-lg font-montserrat group-hover:motion-preset-slide-right motion-duration-500'>
      Step 3: Pay securely and hit the road.
    </p>
    
  </div>
</article>

    
  </div>
</section>
)}