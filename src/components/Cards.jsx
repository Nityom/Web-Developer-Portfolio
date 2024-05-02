import { useState, useEffect } from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Shahi Dental Clinic',
      comment: 'Working with Bit By Bit was a fantastic experience. Their team\'s creativity and expertise helped us turn our ideas into a beautifully designed and functional website. They were responsive, professional, and delivered results beyond our expectations. We highly recommend Bit By Bit for anyone looking to build a top-notch website.',
    },
    {
      id: 2,
      name: 'Ami Jivdaya',
      comment: 'Working with Bit By Bit was a seamless and enjoyable experience. Their team was not only knowledgeable and professional but also incredibly creative. They took the time to understand our vision and brought it to life in ways we never imagined. We are thrilled with the final result and would recommend Bit By Bit to anyone looking for top-notch web development services.',
    },
    {
      id: 3,
      name: 'EsWeb',
      comment: 'Choosing Bit By Bit for our website development was the best decision we could have made. Their professionalism and expertise were evident from the start. They listened to our needs and delivered a website that not only met but exceeded our expectations. We are grateful for their hard work and highly recommend them to anyone in need of web development services.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      let max = 0;
      document.querySelectorAll('.review-card').forEach((card) => {
        max = Math.max(max, card.scrollHeight);
      });
      setMaxHeight(max);
    } else {
      setMaxHeight(0);
    }
  }, [isLargeScreen, reviews]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) {
      return;
    }

    const touchCurrentX = e.touches[0].clientX;
    const diffX = touchStartX - touchCurrentX;

    if (diffX > 50) {
      handleNextCard();
      setTouchStartX(null);
    } else if (diffX < -50) {
      handlePrevCard();
      setTouchStartX(null);
    }
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20" id='review'>
      <div className="w-full min-h-20 bg-zinc-900 md:p-20">
        <h2 className="text-[6vw] mb-10 font-semibold uppercase leading-none mt-10 text-4xl md:text-8xl font-['Neue_Montreal'] tracking-tight">Reviews:</h2>
        <div className="flex flex-wrap justify-center mt-8 relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          {reviews.map((review, index) => (
            <div key={review.id} className={`w-full md:w-[34vw] md:h-[30vh] flex bg-[#CDEA68] shadow-md rounded-3xl overflow-hidden m-4 md:mx-auto review-card ${index !== currentIndex ? 'hidden' : ''}`} style={{ maxHeight: isLargeScreen ? maxHeight + 'px' : 'none' }}>
              <div className="px-4 py-2 w-full">
                <div className="font-bold text-xl mb-2 text-zinc-900">{review.name}</div>
                <p className="text-gray-700 text-base">{review.comment}</p>
              </div>
            </div>
          ))}
          {isLargeScreen && (
            <>
              <div className="absolute top-1/2 left-0 -translate-y-1/2">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
                  onClick={handlePrevCard}
                >
                  &larr;
                </button>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r"
                  onClick={handleNextCard}
                >
                  &rarr;
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
