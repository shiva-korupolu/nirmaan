import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from "../components/header";
import Footer from "../components/footer";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Shiva from "../components/shiva";
import Tabs from "../components/tabs";

const Index = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [video, setVideo] = useState(false);
  const [education, setEducation] = useState(false);
  const [skill, setSkill] = useState(false);
  const [disaster, setDisaster] = useState(false);
  const [health, setHealth] = useState(false);
  const [divercity, setDivercity] = useState(false);
  const [women, setWomen] = useState(false);

  function Educations() {
    setDisaster(false);
    setDivercity(false);
    setEducation(true);
    setHealth(false);
    setWomen(false);
    setSkill(false);
  }

  function Skills() {
    setSkill(true);
    setDisaster(false);
    setDivercity(false);
    setEducation(false);
    setHealth(false);
    setWomen(false);
  }
  function Disasters() {
    setDisaster(true);
    setDivercity(false);
    setEducation(false);
    setHealth(false);
    setWomen(false);
    setSkill(false);
  }
  function Healths() {
    setDivercity(false);
    setDisaster(false);
    setEducation(false);
    setHealth(true);
    setWomen(false);
    setSkill(false);
  }
  function Divercitys() {
    setDivercity(true);
    setDisaster(false);
    setEducation(false);
    setHealth(false);
    setWomen(false);
    setSkill(false);
  }
  function Womens() {
    setWomen(true);
    setDisaster(false);
    setDivercity(false);
    setEducation(false);
    setHealth(false);
    setSkill(false);
  }

  return (
    <>
      {/* <Tabs/> */}

      {/* <Shiva/> */}

      <Header />
      <div>



        <div className="px-0 relative ">
          <Carousel
            autoPlay={true}
            useKeyboardArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            emulateTouch="true"
            infinite={true}
            keyBoardControl={true}
          >
            <div>
              <img src="nirmaan3.jpeg" />
            </div>
            <div>
              <img src="nirmaan3.jpeg" />
              
            </div>
            <div>
              <img src="nirmaan3.jpeg" />
             
            </div>
            <div>
              <img src="nirmaan3.jpeg" />
            
            </div>
          </Carousel>
        </div>


{/* -------------------------------About Us stars-------------------------------------------- */}
        <section className="container mb-10 mt-10">
          <div className="lg:flex justify-around items-center sm:w-full  lg:pb-8 sm:pb-4 mt-8 ">
            <div className=" lg:w-[60%]  mt-1 lg:mr-24">
              <p className="lg:text-4xl md:text-2xl sm:text-xl font-bold poppin mb-7 mt-7 underline underline-offset-auto">
                {" "}
                About Us
              </p>
              <p className="  font-medium poppin lg:mr-2 mt-1 leading-8">
                Nirmaan Organization is a registered NGO, started by students of
                BITS Pilani in 2005. We work in the areas of Education, Skill
                Development & Entrepreneurship, Health and Wellbeing, Community
                Development and Social Leadership. In the past 16 years of
                journey, we have impacted the lives of 1.5+ million
                beneficiaries with the support of 300+ full time employees and
                1000+ strong volunteer network, through various impact-oriented
                Flagship Programs & Social Leadership Initiatives benefiting
                Children, Women, Youth, Persons with Disabilities (PwDs), LGBTQ+
                and Farmers from diverse social backgrounds across 15 States of
                India while partnering with 100+ Corporate, Government and
                Philanthropic partners.
              </p>
            </div>
            <div className=" lg:w-[40%] sm:w-full sm:h-[300px] sm:mt-10 lg:mt-3">
              <img className="lg:h-[350px]  w-full sm:mt-14 lg:m-0 " src="/about.jpg" alt="" />
            </div>
          </div>
        </section>
{/* -------------------------------About end-------------------------------------------- */}

{/* -------------------------------volunteer icons starts-------------------------------------------- */}
        <section className="py-20 bg-gray-300  shadow-lg container overflow-hidden `">
          <div className="container px-4 mx-auto  ">
            <div className=" lg:flex  justify-evenly items-center -m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-0 md:px-20 " >
              <div className="w-fulln sm:flex-wrap md:w-1/3 p-8">
                <div className="md:max-w-sm">
                  <div className="flex flex-wrap items-center -m-3">
                    <div className="w-auto p-3">
                      <div className="flex items-center   transition hover:scale-110 justify-center w-20 h-20 bg-indigo-200 rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="p-1 text-blue-900"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="4em"
                          width="4em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M16 13c3.09-2.81 6-5.44 6-7.7C22 3.45 20.55 2 18.7 2c-1.04 0-2.05.49-2.7 1.25C15.34 2.49 14.34 2 13.3 2 11.45 2 10 3.45 10 5.3c0 2.26 2.91 4.89 6 7.7zm-2.7-9c.44 0 .89.21 1.18.55L16 6.34l1.52-1.79c.29-.34.74-.55 1.18-.55.74 0 1.3.56 1.3 1.3 0 1.12-2.04 3.17-4 4.99-1.96-1.82-4-3.88-4-4.99 0-.74.56-1.3 1.3-1.3zM19 16h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM3 20v-7h2v7H3zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56l-5.93 1.84z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 p-1">
                      <h3 className="text-2xl font-extrabold poppin">
                        87923{" "}
                        <span className="text-3xl font-extrabold poppin">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 class="text-xl font-extrabold poppin">Volunteer</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-1/3 p-8">
                <div class="md:max-w-sm">
                  <div class="flex flex-wrap items-center -m-3">
                    <div class="w-auto p-3">
                      <div class="flex items-center  transition hover:scale-110 justify-center w-20 h-20 bg-indigo-200 rounded-full">
                        <svg
                          stroke="currentColor"
                          className="p-1 text-blue-900"
                          fill="currentColor"
                          stroke-width="0"
                          version="1"
                          viewBox="0 0 48 48"
                          enable-background="new 0 0 48 48"
                          height="4em"
                          width="4em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon
                            fill="#E69329"
                            points="11.7,21.6 16.8,31.5 26.3,27.6 30.7,14.9 15.9,15.7"
                          ></polygon>
                          <circle
                            fill="#546E7A"
                            cx="15"
                            cy="36"
                            r="7.8"
                          ></circle>
                          <g fill="#90A4AE">
                            <path d="M15,27c-5,0-9,4-9,9c0,5,4,9,9,9s9-4,9-9C24,31,20,27,15,27z M15,43c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7 s7,3.1,7,7C22,39.9,18.9,43,15,43z"></path>
                            <rect x="14" y="33" width="2" height="8"></rect>
                          </g>
                          <g fill="#FFB74D">
                            <path d="M12.9,36L12.9,36c1,1.9,3.2,2.7,5.1,1.7l16.5-8.5c1-0.5,1.7-1.2,2.2-1.9c1.7-3.2,5.6-10.7,8.2-17.2 l-18.2,8.7L21.9,26l-6.8,3.6C12.5,30.9,11.7,33.8,12.9,36z"></path>
                            <path d="M30.2,3L13.7,9.3c-0.7,0.2-1.5,1-2.2,1.7l-5.6,7.5c-1,1.5-1.2,3.4-0.5,5.1c0.4,1,1.7,3.4,3.1,6.1 c1.6-1.7,3.9-2.7,6.5-2.7c0.4,0,0.9,0,1.3,0.1l-2.1-4.2l4.6-4.1h8c0,0,15.5-2.2,18.2-8.7L30.2,3z"></path>
                          </g>
                          <path
                            fill="#FFCDD2"
                            d="M18.2,36c-1.3,0.6-2.8,0-3.3-1.3c-0.6-1.3,0-2.8,1.3-3.3C17.4,30.8,19.4,35.4,18.2,36z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 p-1">
                      <h3 class="text-2xl font-extrabold poppin">
                        {" "}
                        $290435{" "}
                        <span className="text-3xl font-extrabold poppin pl-1">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 class="text-xl font-extrabold poppin">Donate Now</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 p-8">
                <div class="md:max-w-sm">
                  <div class="flex flex-wrap items-center -m-3">
                    <div class="w-auto p-3">
                      <div class="flex items-center justify-center transition hover:scale-110 w-20 h-20 bg-indigo-200 rounded-full">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="p-1 text-blue-900"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="4em"
                          width="4em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M128 32l-80 96h48v80h64v-80h48l-80-96zm216 0c-40 0-40 0-40 39.945V232c0 40 0 40 40 40h80c40 0 40 0 40-40V72c0-40 0-40-40-40h-80zM176.096 236.904c-5.28.12-10.212 2.417-16.94 9.596l-6.562 6.969-6.813-6.72c-7.387-7.28-13.216-9.29-19.125-9.03-5.908.26-12.855 3.365-20.625 9.654l-6.219 5.031-5.906-5.375c-8.9-8.052-16.485-10.437-23.75-10.062-5.288.274-10.775 2.266-16.25 5.75l40.969 73.687c15.454 9.452 47.033 13.009 68.75 2.065l39.594-73.346c-7.51-3.062-14.26-6.2-20.094-7.404-2.112-.437-4.073-.758-5.97-.815-.355-.01-.71-.008-1.06 0zM352 304v80h-48l80 96 80-96h-48v-80h-64zM86.125 333.094v.002C68.09 345.838 53.609 367.813 48 400c-5.435 31.196 3.127 52.264 18.281 66.623 15.155 14.36 37.902 21.738 61 21.438 23.1-.3 46.136-8.31 61.625-22.936 15.49-14.627 24.251-35.425 19.283-65.188-5.137-30.757-18.4-52.147-35.19-65.093-28.483 15.056-64.094 11.856-86.874-1.75z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 p-1">
                      <h3 class="text-2xl font-extrabold poppin">
                        5789{" "}
                        <span className="text-3xl font-extrabold poppin">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 class="text-xl font-extrabold poppin">
                        Buy Products
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 p-8">
                <div class="md:max-w-sm">
                  <div class="flex flex-wrap items-center -m-3">
                    <div class="w-auto p-3">
                      <div class="flex items-center justify-center transition hover:scale-110 w-20 h-20 bg-indigo-200 rounded-full">
                        <svg
                          stroke="currentColor"
                          className="p-1 text-blue-900"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="3em"
                          width="4em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="#000"
                            stroke-width="2"
                            d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 p-1">
                      <h3 class="text-2xl font-extrabold poppin">
                        180{" "}
                        <span className="text-3xl font-extrabold poppin">
                          {" "}
                          +{" "}
                        </span>
                      </h3>
                      <h3 class="text-xl font-extrabold poppin">
                        Impact Project
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* -------------------------------volunteer icons end-------------------------------------------- */}

{/* -------------------------------Events starts-------------------------------------------- */}
        <section className=" bg-white container border border-gray-300">
          <div className="flex justify-between items-center">
            <h1 className=" lg:text-3xl sm:text-xl poppin font-extrabold mt-10 underline underline-offset-4">
              OUR UPDATES
            </h1>
            <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-blue-400  transition ease-in-out"
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

          <div className="pt-4 grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 justify-between items-center mb-10 gap-4">

            <div className="w-full border m-auto my-6  hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./event1.jpg"
                    alt=""
                  />
                </div>
                {/* <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-green-900 text-base font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-orange-500 text-lg font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-green-300 h-2.5 rounded-full w-[60%] "></div>
                </div> */}

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-717 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
 
            <div className="w-full border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./event2.jpg"
                    alt=""
                  />
                </div>
                {/* <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-green-900 text-base font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-orange-500 text-lg font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-green-300 h-2.5 rounded-full w-[60%] "></div>
                </div> */}

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-717 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./event3.jpg"
                    alt=""
                  />
                </div>
                {/* <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-green-900 text-base font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-orange-500 text-lg font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-green-300 h-2.5 rounded-full w-[60%] "></div>
                </div> */}

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-717 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./event4.jpg"
                    alt=""
                  />
                </div>
                {/* <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-green-900 text-base font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-orange-500 text-lg font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-green-300 h-2.5 rounded-full w-[60%] "></div>
                </div> */}

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-600 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </section>
{/* -------------------------------Events end-------------------------------------------- */}  


{/* -------------------------------Compaigns starts-------------------------------------------- */}
<section className=" bg-white container border-t-gray-200">
          <div className="flex justify-between items-center">
            <h1 className=" lg:text-3xl sm:text-xl poppin font-extrabold mt-10 underline underline-offset-4">
              OUR CAMPAIGN
            </h1>
            <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-blue-500  transition ease-in-out"
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

          <div className="pt-4 grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4   justify-between items-center mb-10 gap-4 ">
            <div className="w-full border m-auto my-6  hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./comp1.jpg"
                    alt=""
                  />
                </div>
                <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-black text-sm font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-black text-sm font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-red-800 h-2.5 rounded-full w-[20%] "></div>
                </div>

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-600 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
 
            <div className="w-full border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./comp2.jpg"
                    alt=""
                  />
                </div>
                <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-black text-sm font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-black text-sm font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-orange-500 h-2.5 rounded-full w-[40%] "></div>
                </div>

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-600 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./comp3.jpg"
                    alt=""
                  />
                </div>
                <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-black text-sm font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-black text-sm  font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-green-400 h-2.5 rounded-full w-[60%] "></div>
                </div>

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-600 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full border m-auto my-6 hover:scale-105 transition ease-in-out duration-700  border-gray-100 shadow-lg shadow-gray-300">
              <div className="">
                <div className="mb-6 overflow-hidden">
                  <img
                    className="transform h-44 w-full object-cover  hover:scale-105 transition ease-in-out duration-1000"
                    src="./comp4.jpg"
                    alt=""
                  />
                </div>
                <div class=" mx-5">
                  <ul className="flex justify-between">
                    <li className=" text-black text-sm font-bold poppin">
                      10000/-
                    </li>
                    <li className=" text-black text-sm font-bold poppin">
                      100000/-
                    </li>
                  </ul>
                </div>
                <div class="mx-5 mb-5 bg-gray-200 rounded-full h-2.5 overflow-hidden dark:bg-gray-300">
                  <div class="bg-green-700 h-2.5 rounded-full w-[80%] "></div>
                </div>

                <a className="mb-2 inline-block px-5" href="#">
                  <h3 className="text-base font-bold font-heading leading-normal hover:text-nirmaan poppin">
                    How startup company can help you to grow as a developer.
                  </h3>
                </a>
                <p className="text-gray-600 font-medium inter px-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetury of a adipiscing elit.
                  Volutpat to a main. Lorem ipsum dolor sit amet, consectetury
                  of a adipiscing elit. Volutpat to a main.
                </p>
              </div>
              <div className=" group flex justify-end items-center mt-8 mb-10">
                <a
                  className=" text-indigo-600 hover:text-indigo-700 group leading-normal mx-10 flex justify-center items-center"
                  href="#"
                >
                  <span className="mr-2 font-semibold poppin">
                    See all articles
                  </span>
                  <svg
                    className=" transition group-hover:translate-x-2 hover:duration-500 "
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>


          </div>
        </section>
{/* -------------------------------Compaings end-------------------------------------------- */}

{/* -------------------------------Location Section starts-------------------------------------------- */}
        <section className=" bg-white container  border border-gray-100 m-1">
          <div className="flex justify-between items-center">
            <h1 className=" text-3xl poppin font-extrabold mt-10 underline underline-offset-4">
              WHERE NIRMAAN LOCATED
            </h1>
          </div>
          <div className="pt-14  pb-10 ">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12  p-2">
                <div className="flex flex-col justify-between h-full">
                  <div className="">
                    <h6 className="mb-5 lg:text-3xl sm:text-xl md:text-3xl font-bold font-heading tracking-px-n leading-tight poppin">
                      Our Latest News and Articles
                    </h6>
                    <p className="text-gray-600 font-medium leading-relaxed inter">
                      Lorem ipsum dolor sit amet, consectetury a dipiscing elit.
                      Volutpat, tempor to after condimentum commodadipiscing
                      elit. Volutpat, tempor to after condimentum
                      commodadipiscing elit. Volutpat, tempor to after
                      condimentum commodadipiscing elit. Volutpat, tempor to
                      after condimentum commodadipiscing elit. Volutpat, tempor
                      to after condimentum commodadipiscing e o
                    </p>
                  </div>

                  <p className="poppin text-xl font-bold mt-8 mb-4">
                    SEE OUR WORK IN 50+ COUNTRIES
                  </p>

                  <div class="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        onClick={() => setIsShowing((isShowing) => !isShowing)}
                        className=" w-[330px] h-12 px-7 justify-between flex poppin text-base items-center font-semibold border border-gray-300"
                      >
                        {" "}
                        Select Country
                        <svg
                          class="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <Transition
                      show={isShowing}
                      enter="transition-opacity duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div
                        class="absolute right-0 z-10 left-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                      >
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                        Telangana
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                        >
                         Andra Pradesh

                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                        >
                        Pune
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-3"
                        >
                    Maharastra
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-4"
                        >
                     Delhi
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-5"
                        >
                        Badrachelam
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                         Nalgonda
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                      Noida
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                   Gurgum
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                         Hyderabad
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                        Nagarkarnool
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                          Vizag
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                       Uttar Pradesh
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                         Madhura Nagar
                        </a>
                        <a
                          href="#"
                          class="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-6"
                        >
                      Kukatpally
                        </a>
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* -------------------------------Location Section end-------------------------------------------- */}
        

{/* -------------------------------Video Section starts-------------------------------------------- */}
        <div
          onMouseEnter={() => setVideo((video) => !video)}
          onMouseLeave={() => setVideo((video) => !video)}
          className="relative bg-black h-screen flex justify-evenly items-end overflow-hidden "
        >
          <div className="absolute object-cover ">
            <video
              src="/video.mp4"
              autoplay="{true}"
              loop
              muted
              className=" z-10 
            min-w-full  "
            ></video>
            
</div>
<div className=" flex justify-center container items-center absolute space-x-36 px-10 ">

<div className=" text-white flex justify-center items-center  text-2xl ">
  Eduaction
</div>

<div className=" text-white text-2xl  text-opacity-50 ">
Skill Eduaction
</div>

<div className=" text-white  text-2xl  text-opacity-50 ">
Disaster Relif
</div>

<div className=" text-white  text-2xl text-opacity-50 ">
Health
</div>

<div className=" text-white text-center text-2xl mx-10 text-opacity-50 ">
Divercity and Inclusion
</div>

<div className=" text-white  text-2xl text-opacity-50 ">
Women Empowerment
</div>
          </div>


          <Transition
            show={video}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" relative bottom-0 bg-black  opacity-70">
              <div className="flex  justify-evenly w-full h-auto items-end ">
                <div
                  onMouseEnter={() => {
                    Educations();
                  }}
                  className="w-full h-[717px] hover:border hover:border-white px-5  flex flex-col items-center justify-top justify-center"
                >
                  <Transition
                    show={education}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                      {" "}
                      Eduaction{" "}
                    </h1>
                    <p className="text-sm text-yellow-400  font-extrabold poppin">
                      HYSEA in partnership with Government of Telangana and
                      Nirmaan as the nodal NGO partner, is planning to establish
                      Digital Labs at various Government High Schools which have
                      supportive school managements and good students strength.
                      The objective of the program is to provide Computer
                      Education to the students of Government High Schools so
                      that the children will be able to use the computers as the
                      secondary source of learning while teachers being the
                      primary source.
                    </p>

                    <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-2 text-sm inter text-yellow-500  transition ease-in-out"
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



                  </Transition>
                </div>

                <div
                  onMouseEnter={() => {
                    Skills();
                  }}
                  className="w-full h-[717px] hover:border hover:border-white hover:border-t-0  flex flex-col items-center justify-top px-5 justify-center"
                >
                  <Transition
                    show={skill}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                      {" "}
                      Skill Eduaction{" "}
                    </h1>
                    <p className="text-sm text-yellow-400  font-extrabold poppin">
                      HYSEA in partnership with Government of Telangana and
                      Nirmaan as the nodal NGO partner, is planning to establish
                      Digital Labs at various Government High Schools which have
                      supportive school managements and good students strength.
                      The objective of the program is to provide Computer
                      Education to the students of Government High Schools so
                      that the children will be able to use the computers as the
                      secondary source of learning while teachers being the
                      primary source.
                    </p>
                    <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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

                  </Transition>
                </div>

                <div
                  onMouseEnter={() => {
                    Disasters();
                  }}
                  className="w-full h-[717px] hover:border hover:border-white  flex flex-col items-center px-5 justify-top justify-center "
                >
                  <Transition
                    show={disaster}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                      Disaster Relif{" "}
                    </h1>
                    <p className="text-sm text-yellow-400  font-extrabold poppin">
                      HYSEA in partnership with Government of Telangana and
                      Nirmaan as the nodal NGO partner, is planning to establish
                      Digital Labs at various Government High Schools which have
                      supportive school managements and good students strength.
                      The objective of the program is to provide Computer
                      Education to the students of Government High Schools so
                      that the children will be able to use the computers as the
                      secondary source of learning while teachers being the
                      primary source.
                    </p>
                    <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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
                  </Transition>
                </div>

                <div
                  onMouseEnter={() => {
                    Healths();
                  }}
                  className="w-full h-[717px] hover:border hover:border-white  flex flex-col items-center px-5 justify-top justify-center "
                >
                  <Transition
                    show={health}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                      Health
                    </h1>
                    <p className="text-sm text-yellow-400  font-extrabold poppin">
                      HYSEA in partnership with Government of Telangana and
                      Nirmaan as the nodal NGO partner, is planning to establish
                      Digital Labs at various Government High Schools which have
                      supportive school managements and good students strength.
                      The objective of the program is to provide Computer
                      Education to the students of Government High Schools so
                      that the children will be able to use the computers as the
                      secondary source of learning while teachers being the
                      primary source.
                    </p>
                    <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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
                  </Transition>
                </div>

                <div
                  onMouseEnter={() => {
                    Divercitys();
                  }}
                  className="w-full h-[717px] hover:border hover:border-white  flex flex-col items-center px-5 justify-top  justify-center"
                >
                  <Transition
                    show={divercity}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                      Divercity and Inclusion
                    </h1>
                    <p className="text-sm text-yellow-400  font-extrabold poppin">
                      HYSEA in partnership with Government of Telangana and
                      Nirmaan as the nodal NGO partner, is planning to establish
                      Digital Labs at various Government High Schools which have
                      supportive school managements and good students strength.
                      The objective of the program is to provide Computer
                      Education to the students of Government High Schools so
                      that the children will be able to use the computers as the
                      secondary source of learning while teachers being the
                      primary source.
                    </p>
                    <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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
                  </Transition>
                </div>

                <div
                  onMouseEnter={() => {
                    Womens();
                  }}
                  className="w-full h-[717px] hover:border hover:border-white  flex flex-col items-center  px-5 justify-top justify-center "
                >
                  <Transition
                    show={women}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <h1 className="text-3xl text-white py-10 hover:underline underline-offset-2 font-extrabold poppin  ">
                      Women Empowerment
                    </h1>
                    <p className="text-sm text-yellow-400  font-extrabold poppin">
                      HYSEA in partnership with Government of Telangana and
                      Nirmaan as the nodal NGO partner, is planning to establish
                      Digital Labs at various Government High Schools which have
                      supportive school managements and good students strength.
                      The objective of the program is to provide Computer
                      Education to the students of Government High Schools so
                      that the children will be able to use the computers as the
                      secondary source of learning while teachers being the
                      primary source.
                    </p>
                    <div className=" group flex justify-center items-center mt-10 ">
              <button
                className="font-bold poppin flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter text-yellow-500  transition ease-in-out"
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
                  </Transition>
                </div>
              </div>
            </div>
          </Transition>
        </div>
{/* -------------------------------video Section starts-------------------------------------------- */}


{/* -------------------------------Certificate Section starts-------------------------------------------- */}
        <div className="w-full h-40 bg-slate-100 flex justify-center items-center">
          <div>
            <p className="text-2xl font-semibold poppin">
              Proud to be one of the world’s highest-rated nonprofits
            </p>
          </div>
          <div className="flex mx-8">
            <a href="">
              <img
                src="./guide1.png"
                className="w-30 h-36 transition hover:scale-150"
                alt=""
              />
            </a>
            <a href="">
              {" "}
              <img
                src="./gptw.png"
                className="w-30 h-36 transition hover:scale-150 bg-white"
                alt=""
              />
            </a>
          </div>
        </div>
{/* -------------------------------Certificate Section starts-------------------------------------------- */}








        <Footer />
      </div>
    
    </>
  );
};

export default Index;
