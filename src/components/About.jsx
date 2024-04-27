import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full p-5 md:p-20 bg-[#CDEA68] rounded-tl-3xl text-black" id="about-us">
      <h1 className="font-['Neue_Montreal'] text-[6vw]  md:text-4xl leading-[4.5vw] md:leading-3rem tracking-tight">Bit By Bit Studio is a strategic ally for businesses looking to develop cutting-edge apps and websites. We specialize in helping companies innovate their digital presence, from conceptualization to execution, enabling them to showcase their products, simplify complex concepts.</h1>
      <div className="border-zinc-900 mt-8 md:mt-16"></div>

      <div className="expect font-['Neue_Montreal'] text-lg md:text-md border-t-2 md:mt-[5vw] border-[#191d0c] mt-5 md:flex md:py-6">
        <p className="expextt mt-5 md:mt-8 text-3xl md:w-[19vw] md:mx-[20vw]">What can you expect:</p>
        <p className="content mt-5 text-2xl  md:mt-8">From Bit By Bit Studio, you can expect innovative solutions tailored to your needs. We offer expertise in app and website development, ensuring your digital presence is not just functional but also captivating. Our team is dedicated to delivering high-quality work, on time and within budget, to help you achieve your goals.</p>
        <div className="links mt-5 md:mt-9 md:w-full md:mx-[9vw]">
          <span>S:</span><br /><br />
          <a href="https://www.instagram.com/bitbybit_789?igsh=MWk3OTZ0b2Y5b2t6Zg==">Instagram</a><br />
          <a href="https://github.com/bitBybit789">Github</a><br />
          <a href="https://www.linkedin.com/company/bit-by-bit-789/">Linkedin</a>
        </div>

      </div>
      <div className="w-full border-t-[1px] mt-5 md:mt-20 pt-5 md:pt-10 flex flex-col md:flex-row border-[#191d0c]">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl  font-['Neue_Montreal'] tracking-tight">Our Approach:</h1>
          <p className="text-lg md:text-xl mt-5 md:mt-10">
            Our approach at Bit By Bit Studio is centered around understanding your unique vision and goals. We begin by conducting in-depth research to grasp your business objectives and target audience. With a clear understanding, we collaborate closely with you to develop a tailored strategy and design that embodies your brand identity. Through agile development practices, we ensure flexibility and adaptability to refine the project iteratively. Our goal is to deliver a high-quality, user-centric solution that not only meets but exceeds your expectations.
          </p>
          {showMore && (
            <p className="text-lg md:text-xl mt-5 md:mt-10">
              Our process is iterative and collaborative. We work closely with you, gathering feedback at every stage to ensure that the final product aligns perfectly with your expectations. This approach allows us to be agile, adapting to changes and refining our work to achieve the best possible outcome.

              At Bit By Bit Studio, we believe in the power of great design. Our team of experts combines creativity with technical expertise to create visually stunning and highly functional solutions. Whether you need a website, a mobile app, or a custom software solution, we are committed to delivering a product that not only meets but exceeds your expectations.

              We take pride in our work and are dedicated to providing you with the highest quality service. Our goal is not just to meet your needs, but to exceed them, delivering a product that drives your success and helps you stand out in a competitive market. With Bit By Bit Studio, you can trust that your project is in good hands, from concept to launch and beyond.
            </p>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="min-w-32 max-w-[15vw] px-3 mb-4 md:px-10 flex uppercase items-center gap-5 md:gap-10 py-3 md:py-6 bg-zinc-900 mt-5 md:mt-10 rounded-full text-white"
          >
            {showMore ? 'Read Less' : 'Read More'}
            <div className="w-2 md:w-3 h-2 md:h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full md:pt-4 md:w-1/2 mb-9 rounded-3xl min-h-[300px] md:min-h-[none]" style={{ 
  backgroundImage: "url('https://i.postimg.cc/x1mMf5dy/86541225792-LE-auto-x2-transformed.jpg')", 
  backgroundSize: "cover", 
  backgroundPosition: "center" 
}}>
</div>

      </div>

    </div>
  );
}

export default About;
