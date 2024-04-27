function Featured() {
  return (
    
    <div className="w-full py-10 md:py-20"  id="our-work">
      <div className="w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20">
        <h1 className="text-4xl md:text-8xl font-['Neue_Montreal'] tracking-tight">Featured Projects</h1>
        <div className="px-5 md:px-20">
          <div className="cards flex flex-col md:flex-row w-full gap-5 md:gap-10 mt-5 md:mt-10">
            <div className="cardcontainer card w-full md:w-1/2 h-[50vh] md:h-[75vh] rounded-xl overflow-hidden relative">
            
              <div className="card w-full h-full overflow-hidden mt-10">
                <img className="w-full h-full object-cover" src="https://i.postimg.cc/wTqDMpDX/image.png" alt="" />
              </div>
            </div>
            <div className="cardcontainer card w-full md:w-1/2 h-[50vh] md:h-[75vh] rounded-xl overflow-hidden mt-10">
              <div className="card w-full h-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://i.postimg.cc/qvth6Mq3/Whats-App-Image-2024-04-26-at-10-57-32-9eb6df51.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
   
  );
}

export default Featured;
