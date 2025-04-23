// import { div } from 'motion/react-client';
import './Motion.scss';

export default function MotionDiv(){
    return(
        
        <div className="p-2  flex md:flex-row flex-col justify-center items-center space-x-4 relative">
            <div className="card bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(29,_29,_29,_0.86)_59deg,_rgba(36.87,_36.87,_36.87,_0.86)_167deg,_rgba(54,_54,_54,_0.86)_360deg)] 
            hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(29,29,29,1)_59deg,_rgba(36.87,36.87,36.87,1)_167deg,_rgba(54,54,54,1)_360deg)] rounded-2xl p-3 ">

                <div className='card__title text-left flex flex-col  space-y-3'>
                <p className='bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0'>ic</p>
                <h2 className=" w-40 font-semibold text-3xl">
                    <span className="block">Live </span>
                    <span className="block">Availability</span>
                    </h2>
                    <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">Live updates on nearby charging stations, ensuring seamless access wherever you go.</p>
                </div>
                </div>

            <div className="card rounded-2xl bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_337deg,_rgba(54,_54,_54,_0.86)_360deg)] p-3"> 
                <div className='card__title text-left flex flex-col  space-y-3'>
                <p className='bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0'>ic</p>
                <h2 className=" w-40 font-semibold text-3xl">
                    <span className="block">Vehicle  </span>
                    <span className="block">Insights</span>
                    </h2>
                    <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">Real-time data on battery health, tire pressure, and performance—all in one intuitive view.</p>
                </div></div>

            <div className="card rounded-2xl bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_300deg,_rgba(54,_54,_54,_0.86)_360deg)] p-3 ">
            <div className='card__title text-left flex flex-col  space-y-3'>
                <p className='bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0'>ic</p>
                <h2 className=" w-52 font-semibold text-3xl">
                    <span className="block">Instant  </span>
                    <span className="block">Payments</span>
                    </h2>
                    <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">Effortless in-app payments designed for speed, security, and peace of mind.</p>
                </div>
            </div>
            <div className="card rounded-2xl bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_224deg,_rgba(54,_54,_54,_0.86)_360deg)] p-3">
            <div className='card__title text-left flex flex-col  space-y-3'>
                <p className='bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0'>ic</p>
                <h2 className=" w-52 font-semibold text-3xl">
                    <span className="block">AI-Optimized  </span>
                    <span className="block">Charging</span>
                    </h2>
                    <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">Intelligent, adaptive charging tailored to your driving patterns and vehicle needs.</p>
                </div>
            </div>
        </div>
    )
}
