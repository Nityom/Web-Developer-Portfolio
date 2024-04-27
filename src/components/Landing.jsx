import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from 'react-scroll';

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="min-w-full min-h-10 bg-zinc-900 pt-[20vh]">
      <div className="textstructure mt-7 px-5 md:px-20">
        {["We Create", "Eye Opening", "Websites & Apps"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9.4vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], repeat: 0, duration: 0.5 }}
                  className="mr-[1vw] rounded-md max-w-[50vw] md:max-w-[15vw] lg:max-w-[20vw] flex-shrink-0"
                  style={{
                    backgroundImage: `url('https://i.postimg.cc/rwfBnyqH/Pi7-lo-removebg-preview.png')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '7vw',
                    '@media (min-width: 768px)': {
                      height: '8vw',
                    },
                    '@media (min-width: 1024px)': {
                      height: '10vw',
                    },
                  }}
                ></motion.div>
              )}
              <h1 className="uppercase text-[10vw] sm:text-[12vw] md:text-[7.5rem] leading-[8vw] sm:leading-[10vw] md:leading-[6rem] tracking-tighter font-Founders_Grotesk font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 mt-[5vw] md:mt-[10vw] border-zinc-800 mt flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-20">
        {["For public and private companies", "Build from Scratch"].map((item, index) => (
          <div key={index} className="md:mr-20 mb-5 md:mb-0">
            <p className="text-md md:text-lg font-light tracking-tighter leading-none">{item}</p>
          </div>
        ))}
        <div className="start flex items-center gap-5">
        <Link to="contact" smooth={true} duration={500}>
      <div className="px-3 md:px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase cursor-pointer" >
        start the project
      </div>
    </Link>
    <Link to="contact" smooth={true} duration={500}>
          <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full cursor-pointer">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;