import "./App.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

// import Testimonal from "./componets/testimonal";

function App() {
  const [showabout, Setshowabout] = useState(true);
  const [showlatest, Setshowlatest] = useState(false);
  const [menu, Setmenu] = useState(true);

  AOS.init();
  return (
    <div className="relative h-screen overflow-x-hidden overflow-y-scroll Green">
      {/*  */}
      <div
        className={
          !menu
            ? "text-white fixed bg-black z-50 w-full max-h-screen min-h-screen flex-col flex justify-evenly text-center items-center"
            : "hidden"
        }
      >
        {" "}
        <div className="text-3xl font-black sm:text-5xl text-l-green">
          {/* <img src="/logoo.png" alt="" /> */}
          <a href="#start"> Flystrix</a>
        </div>
        <div className="">
          <ul className="flex flex-col space-y-6 ">
            <li>
              <a
                onClick={(e) => {
                  Setmenu(!menu);
                }}
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  Setmenu(!menu);
                }}
                href="#Our latest"
              >
                Our latest{" "}
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  Setmenu(!menu);
                }}
                href="#core"
              >
                Core{" "}
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  Setmenu(!menu);
                }}
                href="#Computation Vision"
              >
                {" "}
                Computer Vision
              </a>
            </li>
          </ul>
        </div>
        <div className="space-x-5 text-black">
          {/* <button className="w-24 py-2 bg-white rounded-lg">Login</button> */}
          <button
            onClick={(e) => {
              Setmenu(!menu);
            }}
            className="px-8 py-2 border rounded-lg btn"
          >
            Get in touch
          </button>
        </div>{" "}
        <button
          onClick={(e) => {
            Setmenu(!menu);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#62c800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/*  */}
      <div id="start" className="px-8 mx-auto lg:px-16 conatiner max-w-7xl">
        <div className="sticky top-0 z-10 w-full py-4 bg-black bg-opacity-95 blur-3xl 2xl:max-w-6xl">
          <div className="">
            <div className="flex items-center justify-between w-full text-white ">
              <div className="text-3xl font-black sm:text-5xl text-l-green">
                {/* <img src="/logoo.png" alt="" /> */}
                <a href="#start"> Flystrix</a>
              </div>
              <div className="sm:hidden">
                <button
                  onClick={(e) => {
                    Setmenu(!menu);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#62c800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>

              <div className="items-center hidden space-x-6 lg:flex">
                <div className="">
                  <ul className="flex items-center space-x-8 ">
                    <li>
                      <a href="#About">About</a>
                    </li>
                    <li>
                      <a href="#Our latest">Our latest </a>
                    </li>
                    <li>
                      <a href="#core">Core </a>
                    </li>
                    <li>
                      <a href="#Computation Vision"> Computer Vision</a>
                    </li>
                    {/* <li>
                  <div></div>
                </li>
                
                <li>
                  <div>Our latest Project</div>
                </li>
                <li>
                  <div>Help</div>
                </li> */}
                  </ul>
                </div>
                <div className="space-x-5 text-black">
                  {/* <button className="w-24 py-2 bg-white rounded-lg">Login</button> */}
                  <button className="px-8 py-2 border rounded-lg btn">
                    Get in touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="">
          <div className="flex flex-col items-center py-8 text-center sm:py-10 place-items-center">
            <div className="space-y-4 sm:space-y-10 lg:w-5/12">
              <div className="hidden text-lg sm:text-2xl text-t-title">
                Into the world of Machine Learning
              </div>

              <div className="ml-8 text-4xl font-black text-white sm:text-6xl">
                <div className="css-typing">
                  <p> Hi Humans ! </p>
                </div>
              </div>

              <div className="hidden text-lg text-white">
                Let’s explore the world of Artificial Intelligence.
              </div>

              {/* <div className="flex justify-center sm:justify-start ">
                <button className="px-8 py-2 text-xl border rounded-lg btn">
                  Get Started
                </button>
              </div> */}
            </div>
            <div className="mt-8 lg:w-7/12">
              <img
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos="fade-up"
                className="w-full "
                src="/bot.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div id="About" className="py-10 text-white id ">
          <div className="mx-auto space-y-8 sm:py-10">
            <div className="items-center lg:flex">
              <div className="lg:w-1/2">
                <img className="mx-auto hr " src="/img 1.jpg" alt="" />
              </div>
              <div className="my-8 lg:p-8 lg:w-1/2 lg:my-0">
                {" "}
                <div className="mb-4 text-2xl font-bold text-left clt-text-2">
                  About
                </div>
                <ul className="space-y-3 text-white list-none list-outside text-opacity-60">
                  <li>
                    <div>
                      Flystrix Technologies was founded by a team of Aerospace
                      engineers while participating in a contest conducted by
                      the Indian Airforce for the development of swarm drone
                      technology.
                    </div>
                  </li>
                  <li>
                    <div>
                      The team progressed into advanced stages of the contest
                      which involved the design and development of AI-based
                      Computer vision algorithms{" "}
                      <span className={showabout ? "hidden" : ""}>
                        that can detect and categorize human/wildlife, and
                        recognize the human hand signals and infer its meaning.
                      </span>
                    </div>
                  </li>
                  <li className={showabout ? "hidden" : ""}>
                    <div>
                      Since then, Flystrix Technologies has evolved into an
                      AI-Powered solutions provider with key expertise in
                      Machine Learning, Neural Networks, Video Analytics, Image
                      Analysis, Predictive Analysis, AI-powered product
                      development – from scratch & enhancements as well.
                    </div>
                  </li>
                  <li className={showabout ? "hidden" : ""}>
                    <div>
                      We are proficient in solving problems intuitively. Our
                      team consists of experts from Electronics, Avionics,
                      Machine learning, Database Management, and Aerospace
                      engineering.
                    </div>
                  </li>
                  <li>
                    <div className="z-50">
                      <button
                        onClick={(e) => {
                          Setshowabout(!showabout);
                          console.log(showabout);
                        }}
                        className="px-4 py-2 text-sm border rounded-lg btn"
                      >
                        {showabout ? "Read More" : "show less"}
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="text-white text-opacity-60 ">
              Flystrix Technologies was founded by a team of Aerospace engineers
              while participating in a contest conducted by the Indian Airforce
              for the development of swarm drone technology. The team progressed
              into advanced stages of the contest which involved design and
              development of AI based Computer vision algorithms that can detect
              and categorise human/wildlife, and recognize the human hand
              signals and infer its meaning. Since then, Flystrix Technologies
              has evolved into a AI Powered solutions provider with key
              expertise in Machine Learning, Neural Networks, Video Analytics,
              Image Analysis, Predictive Analysis, AI powered product
              development - from scratch & enhancements as well. We are
              proficient in solving problems intuitively. Our team consists of
              experts from Electronics, Avionics, Machine learning, Database
              Management, and Aerospace engineering.
            </div> */}
          </div>
        </div>
        {/*  */}
        {/* <div className="mt-20 text-white ">
          <div className="py-10 mx-auto space-y-8">
            <div className="text-2xl font-bold text-center text-l-green">
              Our Latest Project
            </div>
          </div>
        </div> */}
        {/*  */}
        <div id="Our latest" className="py-10 text-center text-white id">
          {/* <div className="py-10">
            <div className="text-4xl font-bold text-l-green ">
              Core Services
            </div>
            <div className="text-xl text-white">Best features </div>
          </div> */}
          <div className="my-4 text-2xl font-bold text-left clt-text-2">
            Our Latest
          </div>
          <div
            className={
              !showlatest
                ? " lg:grid lg:grid-cols-2 gap-12 space-y-10 lg:space-y-0   "
                : "hidden   "
            }
          >
            <div className="text-justify text-white text-opacity-60">
              In person traffic policing often leads to heated arguments between
              traffic policemen and vehicle owners, which results in unseemly
              controversies and media shining a negative light on the police
              department. Manual policing becomes ineffective in catching the
              offenders due to overcrowded roads and the limited availability of
              police force to be deployed on traffic duty. There is also a risk
              of choking the flow of traffic while performing the duty as
              violators pile up. This can be avoided in entirety by making use
              of traffic cams and next-generation artificial intelligence
              algorithms in identifying the offenders at the comfort of the
              control room environment.
              <div className="flex justify-start mt-4">
                <button
                  onClick={(e) => {
                    Setshowlatest(!showlatest);
                  }}
                  className="px-4 py-2 text-sm border rounded-lg btn"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="">
              <img
                className="sm:max-w-sm rounded-2xl img-shdw "
                src="/imga.png"
                alt=""
              />
            </div>
          </div>

          <ul
            className={
              !showlatest
                ? "hidden space-y-4 text-justify text-white text-opacity-60"
                : " space-y-4 text-justify text-white text-opacity-60"
            }
          >
            <li>
              In person traffic policing often leads to heated arguments between
              traffic policemen and vehicle owners, which results in unseemly
              controversies and media shining a negative light on the police
              department. Manual policing becomes ineffective in catching the
              offenders due to overcrowded roads and the limited availability of
              police force to be deployed on traffic duty. There is also a risk
              of choking the flow of traffic while performing the duty as
              violators pile up. This can be avoided in entirety by making use
              of traffic cams and next-generation artificial intelligence
              algorithms in identifying the offenders at the comfort of the
              control room environment.
            </li>{" "}
            <div>
              <li>
                Vigilance, a smart traffic management suite, designed and
                developed by Flystrix Technologies helps governments in
                enforcing The Motor Vehicle Act in an effective way while
                keeping the relationship with the general public, more friendly
                and healthy.
              </li>
              <li>
                Vigilane is equipped with sophisticated AI algorithms to
                automatically detect violators by processing the input video
                feed. It is capable of working with standard IP Cameras that are
                positioned carefully by taking various factors into account such
                as the area to cover, vehicles of interest, resolution of
                license plate.
              </li>
              <li>
                Vigilane was designed with a philosophy of bringing down road
                fatalities, thereby focusing on helmetless two-wheelers.
                Vigilane provides a front-end application that helps to verify
                the offenses manually if needed. Vigilane, by design, is
                integrated with GoI’s Intelligent Traffic Management System
                (ITMS) portal for an e-challan generation.
              </li>
            </div>
          </ul>
          {/* <div className="grid grid-cols-3 gap-12 text-lg place-content-center place-items-center ">
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img1.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Machine Learning</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                We Provide the best Security For Your account
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img1.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Predictive Analysis</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                We Provide the best Security For Your account
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img2.png" alt="" />
              </div>
              <div className="text-2xl font-bold">
                AI powered Product Diagnostics
              </div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                Detailed transaction and financial reports
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img3.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Image Analysis</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                very High Accuracy and Speed for data entry
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img3.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Video Analysis</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                very High Accuracy and Speed for data entry
              </div>
            </div>
          </div> */}
        </div>
        {/*  */}
        <div
          className={
            showlatest
              ? "sm:p-8 sm:my-20 bg-black place-items-center"
              : " hidden"
          }
        >
          {" "}
          <div className="my-4 text-2xl font-bold clt-text-2">
            Design Philosophy:
          </div>
          <div className="items-center space-y-10 text-white lg:space-y-0 lg:flex ">
            <div className="pr-4 text-base text-white ">
              <ul className="space-y-2 text-white list-disc list-outside text-opacity-60">
                <li>To reduce the number of traffic accidents and deaths</li>
                <li>
                  To achieve a contactless enforcement system for rules outlined
                  in MV Act.
                </li>
                <li>
                  To improve efficiency in enforcing MV Act with minimal
                  workforce.
                </li>
                <li> To minimize the workload of police personnel</li>
                <li>To improve transparency.</li>
                <li>
                  To digitize and fast track prosecution of motor ‘petty’ cases
                </li>
                <li> To avoid police-public conflicts</li>
                <li>
                  To create awareness about the importance of adherence to
                  guidelines outlined in MV Act
                </li>
                <li>
                  To eliminate traffic congestion that may arise due to manual
                  policing.
                </li>
                <li>To limit the paperwork involved.</li>
                <li>To make roads safer for everyone.</li>
                <li>
                  To create a self-sustainable framework that ensures seamless
                  enforcement of the MV Act.
                </li>
                <li>
                  To become a frontrunner in adaptation of newer technologies.
                </li>
                <li>To generate more revenue for the government.</li>
              </ul>{" "}
              <div className={!showlatest ? "hidden" : " mt-4"}>
                <button
                  onClick={(e) => {
                    Setshowlatest(!showlatest);
                  }}
                  className="px-4 py-2 text-sm border rounded-lg btn"
                >
                  {!showlatest ? "Read More" : "show less"}
                </button>
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="">
                <img className="rounded-lg" src="/imga.png" alt="" />
              </div>
              <div className="">
                <img className="rounded-lg" src="/imgb.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="my-16">
          <div className="text-2xl font-bold clt-text-2">Testimonal</div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white sm:text-4xl">
              People Say About Us
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="items-center justify-center p-8 mx-auto space-y-4 text-left text-white sm:p-12 sm:space-x-4 sm:inline-flex testimonal rounded-2xl">
            <div className="space-y-4">
              <div className="">
                <img
                  className="w-32 h-32 mx-auto rounded-full sm:w-40 sm:h-40"
                  src="/t1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full max-w-sm space-y-2">
              <div className="text-justify ">
                "A collection of Node JS and Golang Backend interview questions
                please feel free to fork and contribute to this repositoryi "
              </div>
              <div className="text-xl text-right text-l-green">
                - Alex Samurai
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/* <Testimonal /> */}

        {/* <div className="grid grid-cols-2 p-8 my-20 bg-black place-items-center">
          <div className="space-y-10 text-white">
            <div className="text-3xl text-l-green">AI-powered</div>
            <div className="text-5xl font-bold ">World of computing vision</div>
            <div className="text-white text-opacity-60">
              <ul className="ml-8 list-disc">
                <li> Posture Detection</li>
                <li>Medical Image Analysis</li>
                <li>Automated Management System</li>
                <li>Face recognition</li>
                <li>ALPR/ Toll Gate Applications</li>

                <li>Rover</li>
                <li>Product Identification</li>
                <li>Object Tracking</li>
                <li>Damage Identification</li>
              </ul>
            </div>
            <p>
              The potential applications of computer vision are endless. Few
              basic scenarios where our computer vision technology can step in
              to fulfil industrial needs:
            </p>
            <div className="">
              <button className="px-12 py-3 text-xl text-black rounded-lg bg-l-green">
                Get Started
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <img className="rounded-b-full " src="/brain.jpg" alt="" />
            </div>
          </div>
        </div> */}

        {/*  */}
        <div id="core" className="my-10 text-center text-white id opacity-80">
          <div className="py-10">
            <div className="text-2xl font-bold clt-text-2">Core Services</div>
          </div>
          <div className="grid gap-4 text-xl sm:grid-cols-2 lg:grid-cols-5 place-content-center place-items-center ">
            <div className="space-y-3 ">
              <div className="px-4">
                <img className="mx-auto rounded-full" src="/ic-1.png" alt="" />
              </div>
              <div className="font-bold ">
                Machine <br /> Learning
              </div>
              {/* <div className="mx-auto text-white text-opacity-60 w-60">
                We Provide the best Security For Your account
              </div> */}
            </div>
            <div className="space-y-3 ">
              <div className="px-4">
                <img className="mx-auto rounded-full" src="/ic-3.jpg" alt="" />
              </div>
              <div className="font-bold ">
                Predictive <br /> Analytics
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="px-4">
                <img className="mx-auto rounded-full" src="/ic-2.jpg" alt="" />
              </div>
              <div className="font-bold ">
                Ai Powered <br /> Product Development
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="px-4">
                <img className="mx-auto rounded-full" src="/ic-4.jpg" alt="" />
              </div>
              <div className="font-bold ">
                Image <br />
                Analytics
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="px-4">
                <img
                  className="mx-auto rounded-full"
                  src="/ic-5-1.jpg"
                  alt=""
                />
              </div>
              <div className="font-bold ">
                Video <br /> Analytics
              </div>
            </div>
            {/* <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto rounded-full" src="/img1.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Predictive Analysis</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                We Provide the best Security For Your account
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto rounded-full" src="/img2.png" alt="" />
              </div>
              <div className="text-2xl font-bold">
                AI powered Product Diagnostics
              </div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                Detailed transaction and financial reports
              </div>
            </div> */}
          </div>
        </div>
        <div
          id="Computation Vision"
          className="pb-10 text-center lg:pb-40 id text-l-green "
        >
          <div className="py-10">
            <div className="text-2xl font-bold clt-text-2">Computer Vision</div>
          </div>

          <div className="grid gap-4 text-sm md:gap-8 sm:grid-cols-2 2xl:gap-16 lg:grid-cols-3 2xl:text-base">
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg" src="/img 5.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">Posture Detection</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Validating if a user is in the right posture on a sports
                training/yoga/Zumba mobile application.
              </div>
            </div>
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg " src="/img 6.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">Medical Image Analysis</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Automated analysis of Radiology images for bone fracture.
              </div>
            </div>{" "}
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg " src="/img 7.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">
                Automated Management System
              </div>
              <div className="mx-auto text-white text-opacity-60 ">
                Automated Management System for vehicles at entries/exits.
                Coupling Boom barriers with CV will facilitate automated
                authentication of tenants.
              </div>
            </div>
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg " src="/img 8.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">Face Recognition</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Automated Attendance system, opening/closing of doors.
              </div>
            </div>
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img
                  className="mx-auto rounded-lg "
                  src="/img 9.jpg
                  "
                  alt=""
                />
              </div>
              <div className="text-2xl font-bold">
                ALPR / Toll Gate Application
              </div>
              <div className="mx-auto text-white text-opacity-60 ">
                Automatic License Plate Reader for India region.
              </div>
            </div>
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img
                  className="mx-auto rounded-lg "
                  src="/img 10.jpg
                  "
                  alt=""
                />
              </div>
              <div className="text-2xl font-bold">Rover</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Enabling the eyes of the rover to see and avoid obstacles.
              </div>
            </div>{" "}
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg " src="/img 11.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">Product Identification</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Identifying and classifying items in supermarkets.
              </div>
            </div>
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg " src="/img 4.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">Object Tracking</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Tracking people inside a store could provide a heatmap and
                insights into items of interest.
              </div>
            </div>
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg " src="/img 2.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">Damage Identification</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Misplacement of items on the factory floor or visible damage on
                products.
              </div>
            </div>
            <div className="p-4 space-y-3 rounded-3xl card">
              <div className="">
                <img className="mx-auto rounded-lg " src="/img 3.jpg" alt="" />
              </div>
              <div className="text-2xl font-bold">Smart Cart</div>
              <div className="mx-auto text-white text-opacity-60 ">
                Detect and recognize items as they go into the shopping cart and
                bill them.
              </div>
            </div>
          </div>
        </div>

        {/* 
        <div className="grid grid-cols-3 gap-12 text-center text-white place-items-center place-content-center">
          {[1, 1, 1].map(() => {
            return (
              <>
                <div className="p-12 space-y-4 box-bg-t rounded-2xl">
                  <div className="">
                    <img
                      className="w-20 h-20 mx-auto rounded-full"
                      src="/t1.png"
                      alt=""
                    />
                  </div>

                  <div className="">Alex Samurai</div>

                  <div className="text-l-green">Technician</div>

                  <div className="">
                    "A collection of Node JS and Golang Backend interview
                    questions please feel free to fork and contribute to this
                    repositoryi"
                  </div>
                </div>
              </>
            );
          })}
        </div> */}
        {/*  */}

        {/* <div className="grid grid-cols-3 p-16 my-16 mt-60 place-items-start rounded-3xl box-bg">
          <div className="w-full col-span-2 space-y-12 ">
            <div className="">
              <div className="text-5xl font-bold text-white">
                Design Philosophy
              </div>
            </div>
            <div className="text-lg text-white">
              <ul className="list-disc list-outside">
                <li>To reduce the number of traffic accidents and deaths</li>
                <li>
                  To achieve a contactless enforcement system for rules outlined
                  in MV Act.
                </li>
                <li>
                  To improve efficiency in enforcing MV Act with minimal
                  workforce.
                </li>
                <li> To minimize the workload of police personnel</li>
                <li>To improve transparency.</li>
                <li>
                  To digitize and fast track prosecution of motor ‘petty’ cases
                </li>
                <li> To avoid police-public conflicts</li>
                <li>
                  To create awareness about the importance of adherence to
                  guidelines outlined in MV Act
                </li>
                <li>
                  To eliminate traffic congestion that may arise due to manual
                  policing.
                </li>
                <li>To limit the paperwork involved.</li>
                <li>To make roads safer for everyone.</li>
                <li>
                  To create a self-sustainable framework that ensures seamless
                  enforcement of the MV Act.
                </li>
                <li>
                  To become a frontrunner in adaptation of newer technologies.
                </li>
                <li>To generate more revenue for the government.</li>
              </ul>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center px-4 py-1 bgreen rounded-xl">
                <div>
                  <img className="" src="/apple.png" alt="" />
                </div>

                <div className="">
                  <div className="">Download On the </div>
                  <div className="">App Store</div>
                </div>
              </button>
              <button className="flex items-center px-4 py-1 bgreen rounded-xl">
                <div className="">
                  <img className="" src="/play.png" alt="" />
                </div>
                <div className="">
                  <div className="">Download On the </div>
                  <div className="">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <img
              className="mx-auto -mt-60 "
              src="/ai-removebg-preview (1).png"
              alt=""
            />
          </div>
        </div> */}
        {/*  */}

        <div className="items-center justify-between py-12 text-white sm:flex">
          <div className="w-full max-w-xs space-y-4">
            <div className="ml-4">
              {/* <img src="/footerlogo.png" alt="" /> */}
              <div className="text-5xl font-black text-l-green">Flystrix</div>
            </div>
            {/* <div className="ml-6">Find Us</div> */}
            <div className="grid grid-cols-5 pt-4 place-items-center">
              <div className="">
                <img
                  className="w-6"
                  src="/facebook-svgrepo-com (1).svg"
                  alt=""
                />
              </div>
              <div className="">
                <img className="w-6" src="/twitter-svgrepo-com.svg" alt="" />
              </div>
              <div className="">
                <img
                  className="w-6"
                  src="/instagram-social-media-svgrepo-com.svg"
                  alt=""
                />
              </div>
              <div className="">
                <img className="w-6" src="/linkedin-svgrepo-com.svg" alt="" />
              </div>
              <div className="">
                <img
                  className="w-12"
                  src="/YouTube-Icon-Almost-Black-Logo.wine.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-4 ml-4 lg:ml-0 lg:mt-0">
            <div>mahaaveer@gmail.com</div>
            <div>(91) 9994629499</div>
          </div>
          {/* <div className="grid w-full grid-cols-3 pl-20 place-content-center place-items-start">
            <div className="">
              <ul className="space-y-4">
                <li className="text-xl font-bold">Crypto</li>
                <li>Home</li>
                <li>About</li>
                <li>Block </li>
                <li> Contact </li>
                <li> Help</li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-4">
                <li className="text-xl font-bold">Contact</li>
                <li>Crypto</li>
                <li>Home</li>

                <li>Block </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-4">
                <li className="text-xl font-bold">Company</li>
                <li>Crypto</li>
                <li>Home</li>

                <li>Block </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
