function Footer() {
  return (
    <div className="w-full flex gap-5 bg-zinc-900 p-5 md:p-20 py-10 md:py-20">
      <div className="w-full md:w-1/2 h-full flex justify-between font-Founders_Grotesk text-white">
        <div className="heading">
          <h1 className="text-[6vw]  font-['Neue_Montreal'] tracking-tighttext-4xl md:text-6xl font-semibold uppercase leading-none -mb-10">
            Eye-
          </h1>
          <h1 className="text-[6vw] pt-9 text-4xl md:text-6xl  font-['Neue_Montreal'] tracking-tight font-semibold uppercase mb-10 leading-tighter">
            Opening
          </h1>
          <h1 className="text-[6vw] md:text-6xl font-semibold uppercase leading-none text-4xl  font-['Neue_Montreal'] tracking-tight mt-10">
            Websites & Apps
          </h1>
          <div className="dets pt-10 md:mt-1 font-['Neue_Montreal']">
            <p className="text-xl">S:</p>
            <a className="block text-xl"  href="https://www.instagram.com/bitbybit_789?igsh=MWk3OTZ0b2Y5b2t6Zg==">
              Instagram
            </a>
            <a className="block text-xl" href="https://twitter.com/BitByBit789">
              Twitter
            </a>
            <a className="block text-xl" href="mailto:bitbybit789@gmail.com">Mail us on bitbybit789@gmail.com </a>
          </div>
          <div className="dets pt-10 h md:mt-30 mb-0 font-['Neue_Montreal']">
            <p className="text-xl">W:</p>
            <a className="block text-xl " href="https://github.com/bitBybit789">
              Github
            </a>
            <a className="block text-xl" href="https://www.linkedin.com/company/bit-by-bit-789/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;