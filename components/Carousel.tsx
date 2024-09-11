import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useRef } from 'react'


const items = [
    { id: 1, title: 'Suits', image: 'https://compote.slate.com/images/91505f18-bc10-4c5e-869b-3d17e2808ae2.jpeg?crop=1560%2C1040%2Cx0%2Cy0' },
    { id: 2, title: 'Shameless', image: 'https://m.media-amazon.com/images/S/pv-target-images/f35400cd771573f81531b4f563c4933d25ed3ab91434fa451f2accc8675d5a0c.jpg' },
    { id: 3, title: 'Gilmore Girls', image: 'https://miro.medium.com/v2/resize:fit:900/1*mLxTj7HpLjPkKSTME9H4cQ.jpeg' },
    { id: 4, title: 'Lucifer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYF2mVBT0jqheZ2eclNobBeKd4RtVuWTTraw&s' },
    { id: 5, title: 'The Big Bang Theory', image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/10/The-Big-Bang-Theory-cast.jpg' },
    { id: 6, title: 'Sex and the City', image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16805618-55bb-457e-afed-e8671e45e23c_1152x648.jpeg' },
    { id: 7, title: 'The Queens Gambit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Mp4SiFIMxtJW4T9BpP1X63Qlm4SBQvPxkA&s' },
    { id: 8, title: 'You', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Dak4ERyIprvIbU65LbilUDidJyEhiFA40Q&s' },
    { id: 9, title: 'Prison Break', image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B661D1CF4B2D5C3EED3456C80726E412E5AF83F8C1C78A707F6D3AD27C56D67D/scale?width=1200&aspectRatio=1.78&format=webp' },
  ]

const Carousel = () => {

    const sliderRef = useRef<HTMLDivElement>(null)
    const [showLeftButton, setShowLeftButton] = useState(false)
    const [showRightButton, setShowRightButton] = useState(true)
  
    const scroll = (direction: 'left' | 'right') => {
      if (sliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current
        const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
  
        sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
  
        // Update button visibility
        setShowLeftButton(scrollTo > 0)
        setShowRightButton(scrollTo + clientWidth < scrollWidth)
      }
    }

  return (
    <div className="relative bg-slate-950 bg-opacity-90 h-max py-7">
      <h2 className="text-2xl font-bold mb-4 text-white px-8">Critically Acclaimed US TV Shows</h2>
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-hidden scroll-smooth mx-6"
        >
          {items.map((item) => (
            <div key={item.id} className="flex-none">
              <div className="items-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-[180px] w-[260px] object-fill rounded-md transition-transform duration-300 ease-in-out hover:scale-110 p-1"
              />
              <p className="mt-2 font-bold text-1xl text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        {showLeftButton && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-opacity-50 text-white p-2 h-full backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <MdKeyboardArrowLeft className="w-10 h-10" />
          </button>
        )}
        {showRightButton && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-opacity-15 text-white p-2 h-full backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <MdKeyboardArrowRight className="w-10 h-10" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
