import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <div>

        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all.5"
  transitionDuration={1000}
  // containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  className='conatiner'
>

      <div>

      <section class="py-10 container  bg-white relative overflow-hidden">
  <img class="absolute container top-0 md:h-full left-0 w-1/2 md:w-1/3" src="Home/background-bobbles.svg" alt=""/>
  <img class="absolute container top-0 md:h-full right-0 w-1/2 md:w-1/3" src="/Home/background-bobbles.svg" alt=""/>
  <div class=" px-4 border-3  m-auto shadow-2xl relative">
    <div class="flex flex-wrap -mx-4 items-center">
      <div class="w-full md:w-1/2 px-4 mb-10 md:mb-0">
        <img class="block w-full max-w-lg mx-auto h-80 object-cover border-3 border-indigo-900 rounded-2xl shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=387&amp;q=80" alt=""/>
      </div>
      <div class="w-full md:w-1/2 px-4 py-4">
        <div class="mb-6 text-blue-200 opacity-100">
          <svg width="75" height="64" viewbox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z" fill="currentColor"></path>
          </svg>
        </div>
        <h1 class="max-w-lg text-xl lg:text-xl object-cover font-extrabold font-heading poppin mb-12">The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.</h1>
        <h4 class="text-2xl poppin font-extrabold">Shiva Korupolu</h4>
        <span class="block  text-gray-400 font-bold">CEO &amp; Founder at Nigodo</span>
        <div class="flex items-center justify-end md:m-10 ">
          {/* <button class="w-4 h-4 mr-4 bg-indigo-500 hover:bg-indigo-200 rounded-full"></button>
          <button class="w-4 h-4 mr-4 bg-indigo-100 rounded-full"></button>
          <button class="w-4 h-4 mr-4 bg-indigo-100 hover:bg-indigo-200 rounded-full"></button> */}
          <div className=" group flex justify-center items-center ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-md inter text-blue-400  transition ease-in-out"
                type="button"
                contenteditable="false"
              >
                View More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:translate-x-2 transition hover:duration-1000 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>

  {/* ------------------second testimonial starts  --------------------------------------------------------------------   */}
       <div>
        
       <section class="py-10 container  relative overflow-hidden">
  <img class="absolute container top-0 md:h-full left-0 w-1/2 md:w-1/3" src="Home/background-bobbles.svg" alt=""/>
  <img class="absolute container top-0 md:h-full right-0 w-1/2 md:w-1/3" src="/Home/background-bobbles.svg" alt=""/>
  <div class=" px-4 border-3  m-auto shadow-2xl relative">
    <div class="flex flex-wrap -mx-4 items-center">
      <div class="w-full md:w-1/2 px-4 mb-10 md:mb-0">
        <img class="block w-full max-w-lg mx-auto h-80 object-cover border-3 border-indigo-900 rounded-2xl shadow-md" src="student3.jpg" alt=""/>
      </div>
      <div class="w-full md:w-1/2 px-4 py-4">
        <div class="mb-6 text-blue-200 opacity-100">
          <svg width="75" height="64" viewbox="0 0 75 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z" fill="currentColor"></path>
          </svg>
        </div>
        <h1 class="max-w-lg text-xl lg:text-xl font-extrabold font-heading poppin mb-12">The best solution for anyone who wants to work a flexible schedule but still earn a full-time incomeThe best solution for anyone who wants to work a flexible schedule but still earn a full-time income.</h1>
        <h4 class="text-2xl poppin font-extrabold">Shiva Korupolu</h4>
        <span class="block  text-gray-400 font-bold">CEO &amp; Founder at Nigodo</span>
        <div class="flex items-center justify-end md:m-10 ">
          {/* <button class="w-4 h-4 mr-4 bg-indigo-500 hover:bg-indigo-200 rounded-full"></button>
          <button class="w-4 h-4 mr-4 bg-indigo-100 rounded-full"></button>
          <button class="w-4 h-4 mr-4 bg-indigo-100 hover:bg-indigo-200 rounded-full"></button> */}
          <div className=" group flex justify-center items-center">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-md inter text-blue-400  transition ease-in-out"
                type="button"
                contenteditable="false"
              >
                View More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:translate-x-2 transition hover:duration-1000 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
 {/* -------------------------------------------second Testimonial end --------------------      */}


</Carousel>
        


    </div>
  )
}
export default Testimonial