import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useRef } from 'react'


const items = [
    { id: 1, title: 'The Intern', image: 'https://resizing.flixster.com/KzzoF-1afmcDUIn__ykJWc5p__c=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11550244_v_h9_am.jpg' },
    { id: 2, title: 'Gemini Man', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vgAaXkMYJPtniWt3qMVuo54qvsTxmNQsBA&s' },
    { id: 3, title: 'The Union', image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/the-union-netflix.jpg' },
    { id: 4, title: 'The Revenant', image: 'https://images.cdn.prd.api.discomax.com/2024/02/25/937b7238-3757-3a64-b03d-83f8318a1e79.jpeg?f=jpg&q=75&w=1280&w=1200' },
    { id: 5, title: 'Captain America: Civil War', image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DBE4C13505BC8C2B8C53B1F52C3D15B0E929172D54FAF97F70F4C4C0815AD83E/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp' },
    { id: 6, title: 'Kingsman', image: 'https://i.redd.it/l3ekbet0o5ha1.jpg' },
    { id: 7, title: 'The Fast and Furious: Tokyo Drift', image: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EC2B15CD8CD159AED1872E87FA45BB165171A0ABA8ADD1F0F623F81029E1481F/scale?width=1200&aspectRatio=1.78&format=webp' },
    { id: 8, title: 'Top Gun Maverick', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDlh_qcUJEAANIRlYsOXdP6EyIgYiL00q-A&s' },
    { id: 9, title: '365 Days', image: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeOz_wGiD90kk3kYjKATAPzFBesZ9ZN9eHdZsIFI_Xm2F0MAhYd_kFWOXdxKvhVqd0OhRVe2GaXubxC2DLybArqWkrEWdQzPJksbsJqvMG5esadYDf2Qx4T8ej3S5b0cnbpE6w.jpg?r=632' },
  ]

const Western = () => {

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
    <div className="relative bg-zinc-900 bg-opacity-90 h-max py-7">
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

export default Western;