import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" className="w-full py-10 md:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-5 md:gap-10 overflow-hidden whitespace-nowrap justify-center items-center">
        {[...Array(4)].map((_, index) => (
          <motion.h1
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[8vw] md:text-[16vw] leading-none font-Founders_Grotesk uppercase pt-5 md:pt-10 font-semibold"
          >
            We are Bit by bit
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
