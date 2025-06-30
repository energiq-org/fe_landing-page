import './Motion.scss';
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

export default function MotionDiv() {

  return (
    <>
    <motion.div
    className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-4 p-2 relative"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
        className="relative left-1/2 -translate-x-1/2 w-full flex flex-row items-center justify-center z-0 pointer-events-none md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="text-[#BF4E30] flex flex-row items-center font-bebas select-none whitespace-nowrap">
          <h1 className="text-[clamp(2.5rem,8vw,4rem)] leading-none">Key</h1>
          <Icon 
            icon="hugeicons:power-service" 
            className="w-[clamp(2.5rem,8vw,4rem)] h-[clamp(2.5rem,8vw,4rem)] mx-1" 
            style={{color: '#BF4E30'}} 
          />
          <h1 className="text-[clamp(2.5rem,8vw,4rem)] leading-none">Features</h1>
        </div>
      </motion.div>
  
      <motion.div
        className="card rounded-2xl p-6 xl:p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_58deg,_rgba(29,_29,_29,_0.86)_166deg,_rgba(54,_54,_54,_0.86)_360deg)] 
        hover:bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,1)_58deg,_rgba(29,_29,_29,1)_166deg,_rgba(54,_54,_54,_1)_360deg)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
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
        className="card rounded-2xl p-6 xl:p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_336deg,_rgba(54,_54,_54,_0.86)_360deg)]
        hover:bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,1)_113deg,_rgba(29,_29,_29,1)_336deg,_rgba(54,_54,_54,1)_360deg)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
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
        className="card rounded-2xl p-6 xl:p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(37,_37,_37,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_299deg,_rgba(54,_54,_54,_0.86)_360deg)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
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
        className="card rounded-2xl p-6 xl:p-3 bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_rgba(36.87,_36.87,_36.87,_0.86)_113deg,_rgba(29,_29,_29,_0.86)_223deg,_rgba(54,_54,_54,_0.86)_360deg)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
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

    </motion.div>
    <motion.div
        className="sm:relative relative left-[50%] items-center md:left-[40%] md:bottom-[5rem] sm:-bottom-1/4 -translate-x-1/2 w-[75%] text-[100px] px-5 sm:text-[200px] md:tracking-[10px] tex[100px] hidden md:flex flex-col md:items-start z-0 pointer-events-none md:leading-none leading-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="text-[#BF4E30] flex flex-row items-center font-bebas select-none m-0 p-0"><h1>Key</h1> <Icon icon="hugeicons:power-service" width="140" height="140"  style={{color: '#BF4E30'}} /></div>
        <h1 className="text-[#BF4E30] font-bebas select-none m-0 p-0 mt-[-30px]">Features</h1>
      </motion.div>
    </>
  );
}
