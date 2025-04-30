

const SingleSlider = ({ direction , textStyle}) => {

  const content = (
    <>
     <h1 className="text-[170px] leading-[0.9] p-0 m-0 mr-7 font-['Bebas_Neue'] whitespace-nowrap">
      ENERGIQ • ENERGIQ • ENERGIQ •
    </h1>
    </>
  );

  return (
    <div
      className="w-full overflow-hidden z-0"
      // style={{
      //   mask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent 99%)',
      //   WebkitMask: 'linear-gradient(90deg, transparent, white 10%, white 90%, transparent 99%)',
      // }}
    >
      <div
        className={`flex flex-nowrap  w-max ${textStyle === 'forward'?'text-[#BF4E30]':'text-stroke-orange [&>*]:scale-x-[-1]'}
          ${direction === 'left' ? 'animate-horizontalScrollLeft' : 'animate-horizontalScrollRight'}`}
          style={{ minWidth: '200%' }}
      >
        {content}
        {content} 
        {content} 
      </div>
    </div>
  );
};

export default SingleSlider;
