import { useEffect, useState, useRef } from "react";
import { motion , useInView } from "motion/react"

const lines = [
    "EnergiQ makes EV charging effortless and efficient. With real-time ",
    "insights and smart optimization, you’ll always find the best way to",
    "power up your journey.",
  ];
  
  export default function AnimatedParagraph() {
    const [visibleCharCounts, setVisibleCharCounts] = useState(lines.map(() => 0));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.9 }); 
  
    useEffect(() => {
      if (!isInView) return;
  
      const totalDuration = 900;
      const delays = lines.map((_, i) => i * 250);
      const intervals = [];
  
      lines.forEach((line, i) => {
        const delay = delays[i];
        const typeDuration = totalDuration - delay;
        const intervalTime = typeDuration / line.length;
  
        const timeout = setTimeout(() => {
          const interval = setInterval(() => {
            setVisibleCharCounts((prev) => {
              const updated = [...prev];
              if (updated[i] < line.length) {
                updated[i]++;
              } else {
                clearInterval(interval);
              }
              return updated;
            });
          }, intervalTime);
          intervals.push(interval);
        }, delay);
  
        intervals.push(timeout);
      });
  
      return () => intervals.forEach(clearInterval);
    }, [isInView]);
  
    return (
      <motion.div
        ref={ref}
        className="text-start sm:text-center text-white text-sm lg:text-2xl md:text-xl font-medium space-y-2  font-montserrat"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.99 }}
        transition={{ duration: 0.5 }}
      >
        {lines.map((line, lineIdx) => (
          <div key={lineIdx}>
            {line.split("").map((char, charIdx) => (
              <span
                key={charIdx}
                className={`transition-opacity duration-100 ${
                  charIdx < visibleCharCounts[lineIdx] ? "opacity-100" : "opacity-0"
                }`}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  }