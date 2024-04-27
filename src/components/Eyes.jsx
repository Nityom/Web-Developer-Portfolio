import  { useState, useEffect } from "react";

function Eyes() {
  const [rotation, setRotation] = useState(0);
  const [showEyes, setShowEyes] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowEyes(window.innerWidth > 768); // Adjust the screen width as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const radians = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const angle = radians * (180 / Math.PI);
      setRotation(angle - 180); // Adjust for initial rotation
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!showEyes) {
    return null; // Hide the component for smaller screens
  }

  return (
    <div className="eyes w-full h-screen relative">
      <div
        data-scroll
        data-scroll-speed="-.1"
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')",
        }}
      ></div>
      <div className="absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 z-10">
        <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-white">
          <div
            className="relative w-2/3 h-2/3  flex items-center justify-center rounded-full bg-zinc-900"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 ">
              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-white">
          <div
            className="relative w-2/3 h-2/3  flex items-center justify-center rounded-full bg-zinc-900"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10">
              <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
