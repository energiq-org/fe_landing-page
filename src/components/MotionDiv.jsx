import './Motion.scss';
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Icon } from "@iconify/react";

export default function MotionDiv() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  return (
    <motion.div
    ref={ref}
    className={`p-2 flex  md:flex-row flex-col justify-center items-center space-x-4 relative ${animate ? 'animate-cards' : ''}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
  
      <motion.div
        className="card rounded-2xl p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_58deg,_rgba(29,_29,_29,_0.86)_166deg,_rgba(54,_54,_54,_0.86)_360deg)] 
        hover:bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,1)_58deg,_rgba(29,_29,_29,1)_166deg,_rgba(54,_54,_54,_1)_360deg)]"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="card__title text-left flex flex-col space-y-3">
          <p className="bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0">
          <Icon icon="material-symbols-light:ev-station-outline-rounded" width="44" height="44" />
          </p>
          <h2 className="w-52 font-semibold text-3xl">
            <span className="block">Live</span>
            <span className="block">Availability</span>
          </h2>
          <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">
            Live updates on nearby charging stations, ensuring seamless access wherever you go.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="card rounded-2xl p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_336deg,_rgba(54,_54,_54,_0.86)_360deg)]
        hover:bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,1)_113deg,_rgba(29,_29,_29,1)_336deg,_rgba(54,_54,_54,1)_360deg)]"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="card__title text-left flex flex-col space-y-3">
          <p className="bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0"><Icon icon="pepicons-pencil:monitor-eye-circle" width="44" height="44" /></p>
          <h2 className="w-52 font-semibold text-3xl">
            <span className="block">Vehicle</span>
            <span className="block">Insights</span>
          </h2>
          <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">
            Real-time data on battery health, tire pressure, and performance—all in one intuitive view.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="card rounded-2xl p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(37,_37,_37,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_299deg,_rgba(54,_54,_54,_0.86)_360deg)]"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="card__title text-left flex flex-col space-y-3">
          <p className="bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0"><Icon icon="hugeicons:payment-02" width="44" height="44" /></p>
          <h2 className="w-52 font-semibold text-3xl">
            <span className="block">Instant</span>
            <span className="block">Payments</span>
          </h2>
          <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">
            Effortless in-app payments designed for speed, security, and peace of mind.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="card rounded-2xl p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_223deg,_rgba(54,_54,_54,_0.86)_360deg)]"
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="card__title text-left flex flex-col space-y-3">
          <p className="bg-[#393939] rounded-3xl flex w-[60px] h-[60px] p-2 items-center justify-center gap-[10px] shrink-0"><Icon icon="hugeicons:ai-brain-05" width="44" height="44" /></p>
          <h2 className="w-52 font-semibold text-3xl">
            <span className="block">AI-Optimized</span>
            <span className="block">Charging</span>
          </h2>
          <p className="text-base leading-snug font-['Roboto'] w-48 pt-2">
            Intelligent, adaptive charging tailored to your driving patterns and vehicle needs.
          </p>
        </div>
      </motion.div>
      <motion.div
        className={`absolute 2xl:-bottom-[19rem] -bottom-56 left-0 -translate-x-1/2 w-[75%] md:text-[200px] md:tracking-[10px] tex[100px] flex flex-col items-start z-0 pointer-events-none md:leading-none leading-tight`}
        initial={{ opacity: 0  ,y:56}}
        animate={animate ? { opacity: 1 ,y:0} : {}}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="text-[#BF4E30] flex flex-row items-center font-bebas select-none m-0 p-0"><h1>Key</h1> <Icon icon="hugeicons:power-service" width="140" height="140"  style={{color: '#BF4E30'}} /></div>
        <h1 className="text-[#BF4E30] font-bebas select-none m-0 p-0 mt-[-30px]">Features</h1>
      </motion.div>
    </motion.div>
  );
}
