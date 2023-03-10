import React from "react";
import Head from "next/head";

const footer = () => {
  return (
    <>
      <Head>
       
      </Head>

      <div className="w-full h-auto bg-white border border-t-2  hidden lg:block shadow-2xl pb-7">
        <div className=" flex justify-between items-center container px-20 pt-10 ">
          <div className="w-auto mr-14">
            <a href="#">
              <img className="h-16 w-34" src="/nirmaan_logo.png" alt="" />
            </a>
          </div>

          <div className="flex justify-between items-center space-x-6 ">
            <a
              href=""
              title="Facebook"
              className="w-8 h-8 bg-gray-300  hover:bg-blue-700 rounded-full hover:text-white  transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href=""
              title="Instagram"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-blue-500 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href=""
              title="WhatsApp"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-green-600 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href=""
              title="Linkedin"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-blue-900 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href=""
              title="Twitter"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-blue-400 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href=""
              title="Youtube"
              className="w-8 h-8 bg-gray-300  rounded-full hover:bg-red-600 hover:text-white transition hover:duration-300 flex justify-center items-center"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          <div className="inline-block group  ">
            <button
              className="font-bold flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter border  bg-blue-400 transition ease-in-out duration-200 hover:bg-nirmaan-darker text-blue-50"
              type="button"
              contenteditable="false"
            >
              Donate Now{" "}
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

        <div className=" flex justify-between px-20 pt-10 pb-4">
          <div>
            <ul className="flex">
              <a
                href=""
                className="mt-2 mx-2 font-semibold text-[15px] hover:text-nirmaan "
              >
                <li>About Nirmaan</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Careers</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Contact Us</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Email Subscriptions</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Support</li>
              </a>
            </ul>
          </div>

          <div>
            <ul className="flex ">
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Terms of Use</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Privacy</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Policy</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Settings</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="lg:px-20 sm:px-4">
          <p className=" inter text-[12px] pb-1">
            Snapdragon and Qualcomm branded products are products of Qualcomm
            Technologies, Inc. and/or its subsidiaries. Qualcomm patented
            technologies are licensed by Qualcomm Incorporated.
          </p>
          <p className="inter text-[12px]  pb-1">
            Note: Certain product kits, tools and materials may require you to
            accept additional terms and conditions before accessing or using
            those items.
          </p>
          <p className="inter text-[12px] pb-1">
            References to "Qualcomm" may mean Qualcomm Incorporated, or
            subsidiaries or business units within the Qualcomm corporate
            structure, as applicable.
          </p>
          <p className="inter text-[12px] pb-1 ">
            Qualcomm Incorporated includes our licensing business, QTL, and the
            vast majority of our patent portfolio. Qualcomm Technologies, Inc.,
            a subsidiary of Qualcomm Incorporated, operates, along with its
            subsidiaries, substantially all of our engineering, research and
            development functions, and substantially all of our products and
            services businesses, including our QCT semiconductor business.
          </p>
        </div>

        <div className=" flex justify-center items-center text-[13px]">
          <p className="inter text-[13px] pt-5 ">
            ©2023 Nirmaan Organization, Inc. and/or its affiliated companies.
          </p>
        </div>
      </div>

      {/*--------------------------------- Mobile view starts here----------------------------------------------- */}

      <div className="w-full h-auto bg-white border border-t-2 lg:hidden shadow-2xl pb-7">
        <div className=" flex justify-between items-center px-3 ">
          <div className="w-auto mr-14">
            <a href="#">
              <img className="h-16 w-34" src="/nirmaan_logo.png" alt="" />
            </a>
          </div>
          <div className="inline-block group  ">
            <button
              className="font-bold flex justify-center items-center py-2 px-3 w-40 mx-1 text-sm inter border  bg-blue-400 transition ease-in-out duration-200 hover:bg-nirmaan-darker text-blue-50"
              type="button"
              contenteditable="false"
            >
              Donate Now{" "}
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

        <div className="flex justify-between items-center space-x-1 mt-5 px-3 ">
          <a
            href=""
            title="Facebook"
            className="w-8 h-8 bg-blue-500  rounded-full text-white  flex justify-center items-center"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href=""
            title="Instagram"
            className="w-8 h-8 bg-blue-500  rounded-full text-white flex justify-center items-center"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href=""
            title="WhatsApp"
            className="w-8 h-8 bg-green-600 text-white  rounded-full  flex justify-center items-center"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href=""
            title="Linkedin"
            className="w-8 h-8 bg-blue-800  rounded-full text-white  flex justify-center items-center"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href=""
            title="Twitter"
            className="w-8 h-8 bg-blue-400  rounded-full text-white  flex justify-center items-center"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href=""
            title="Youtube"
            className="w-8 h-8 bg-red-600  text-white rounded-full  flex justify-center items-center"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        <div className=" flex justify-between poppin px-3">
          <div>
            <ul className="">
              <a
                href=""
                className="mt-2 mx-2  font-semibold text-[15px] hover:text-nirmaan "
              >
                <li>About Nirmaan</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Careers</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Contact Us</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Email Subscriptions</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Support</li>
              </a>
            </ul>
          </div>

          <div>
            <ul className="">
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Terms of Use</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Privacy</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Policy</li>
              </a>
              <a
                href=""
                className="mx-2 mt-2 font-semibold text-[15px] hover:text-nirmaan"
              >
                <li>Cookie Settings</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="sm:px-4 lg:hidden leading-5">
          <p className=" inter text-[12px] pb-1 px-3">
            Snapdragon and Qualcomm branded products are products of Qualcomm
            Technologies, Inc. and/or its subsidiaries. Qualcomm patented
            technologies are licensed by Qualcomm Incorporated.
          </p>
          <p className="inter text-[12px]  pb-1 px-3">
            Note: Certain product kits, tools and materials may require you to
            accept additional terms and conditions before accessing or using
            those items.
          </p>
          <p className="inter text-[12px] pb-1 px-3">
            References to "Qualcomm" may mean Qualcomm Incorporated, or
            subsidiaries or business units within the Qualcomm corporate
            structure, as applicable.
          </p>
          <p className="inter text-[12px] pb-1 px-3 ">
            Qualcomm Incorporated includes our licensing business, QTL, and the
            vast majority of our patent portfolio. Qualcomm Technologies, Inc.,
            a subsidiary of Qualcomm Incorporated, operates, along with its
            subsidiaries, substantially all of our engineering, research and
            development functions, and substantially all of our products and
            services businesses, including our QCT semiconductor business.
          </p>
        </div>

        <div className=" flex justify-center items-center text-[13px] lg:hidden sm:block">
          <p className="inter text-[13px] pt-5 px-3">
            ©2023 Nirmaan Organization, Inc. and/or its affiliated companies.
          </p>
        </div>
      </div>
    </>
  );
};

export default footer;
