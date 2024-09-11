import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useRef } from 'react'


const items = [
    { id: 1, title: 'Scarlet Heart', image: 'https://lynlynsays.com/wp-content/uploads/2017/06/4926_scarletheartryeo_nowplay_small.jpg?w=1360' },
    { id: 2, title: 'Descendants of the Sun', image: 'https://prod-images.viu.com/1472945973/8d24bc1f00e7c15e6ecf130dd3360d9261327ae1' },
    { id: 3, title: 'Goblin', image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Goblin_Poster.jpg' },
    { id: 4, title: 'She Would Never Know', image: 'https://i0.wp.com/giaallana.com/wp-content/uploads/2021/03/9.jpg?fit=1000%2C626&ssl=1' },
    { id: 5, title: 'Start Up', image: 'https://www.kkday.com/en/blog/wp-content/uploads/kr_Start-Up-poster-tvN-1170x630.jpg' },
    { id: 6, title: 'Welcome to Samdal-ri', image: 'https://occ-0-8407-444.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSMDYA3-dJgpwKlU-gbUxPGMmvzxLORPUfssh1QedKBeLj3D2lnhl2wvAsIqKKm4cJrLp_8YEwLffQmCK4HzndKVWSBkkTawTHLUi2vHJgvJc8EnY1q6XCUSK7xXi3WDIrZavQ.jpg?r=3e9' },
    { id: 7, title: 'Doctor Romantic', image: 'https://prod-images.viu.com/1028069471/2f6ff3af7d066bf424ee999d6f7696097cab2123' },
    { id: 8, title: 'Abyss', image: 'https://i0.wp.com/boldcanon.com/wp-content/uploads/2019/09/abyss.jpg?fit=900%2C575&ssl=1' },
    { id: 9, title: 'The Heirs', image: 'https://prod-images.viu.com/492556326/3074ba79af1e388c0127a5c0534645107b08bc3c' },
    { id: 9, title: 'Queen of Tears', image: 'https://miro.medium.com/v2/resize:fit:1000/1*7pByBoXSieWWYoBfKURlQw.jpeg' },
  ]

const Kdrama = () => {

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
      <h2 className="text-2xl font-bold mb-4 text-white px-8">Western Movies</h2>
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

export default Kdrama;
