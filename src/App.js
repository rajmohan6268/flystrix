import "./App.css";

function App() {
  return (
    <div className="Green ">
      <div className="px-16 mx-auto conatiner max-w-7xl">
        <div className="py-8">
          <div className="flex items-center justify-between text-white">
            <div className="">
              <img src="/logoo.png" alt="" />
            </div>
            <div className="">
              <ul className="flex items-center space-x-16 ">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Block</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            <div className="space-x-5 text-black">
              <button className="w-24 py-2 bg-white rounded-lg">Login</button>
              <button className="w-24 py-2 rounded-lg bg-l-green">
                Register
              </button>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="grid grid-cols-2 py-20 place-items-center">
          <div className="space-y-10 ">
            <div className="text-3xl text-l-green">Block portal</div>

            <div className="font-black text-white text-8xl">
              Powerfull <br></br> Crypto App
            </div>

            <div className="text-lg text-white">
              Let’s explore the world of Artificial Intelligence Let’s explore
              the world of Artificial Intelligence{" "}
            </div>

            <div className="">
              <button className="px-12 py-3 text-xl rounded-lg bg-l-green">
                Get Started
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="w-full max-w-xl"
              src="/bimg-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
        {/*  */}

        <div className="text-center text-white">
          <div className="py-10">
            <div className="text-xl text-l-green">We serve You</div>
            <div className="text-4xl font-bold ">Best features</div>
          </div>
          <div className="grid grid-cols-3 text-lg place-content-center place-items-center ">
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img1.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Secure</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                We Provide the best Security For Your account
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img2.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Detailed Report</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                Detailed transaction and financial reports
              </div>
            </div>
            <div className="space-y-3 ">
              <div className="">
                <img className="mx-auto" src="/img3.png" alt="" />
              </div>
              <div className="text-2xl font-bold">Smart Data Entry</div>
              <div className="mx-auto text-white text-opacity-60 w-60">
                very High Accuracy and Speed for data entry
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="grid grid-cols-2 my-20 place-items-center">
          <div className="space-y-10 text-white">
            <div className="text-3xl text-l-green">Block portal App</div>
            <div className="text-5xl font-bold ">
              Real-Time Update and Monitoring your Crypto
            </div>
            <div className="text-white text-opacity-60">
              A collection of Node JS and Golang Backend interview questions
              please feel free to fork and contribute to this repository A
              collection of Node JS and Golang Backend interview questions
              please feel free to fork and contribute to this repository A
              collection of Node JS and Golang Backend interview questions
              please feel free to fork and contribute to this repository A
              collection of Node JS and Golang Backend interview questions
              please feel free to fork and contribute to this repository A
              collection of Node JS and Golang Backend interview questions
              please feel free to fork and contribute to this repository A
              collection of Node JS and Golang Backend interview questions
              please feel free to fork and contribute to this repository
            </div>
            <div className="">
              <button className="px-12 py-3 text-xl text-black rounded-lg bg-l-green">
                Get Started
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <img className="max-w-xs" src="/mob.png" alt="" />
            </div>
          </div>
        </div>

        {/*  */}

        <div className="pb-12">
          <div className="text-l-green">Testimonal</div>

          <div className="flex items-center justify-between">
            <div className="text-5xl font-bold text-white">
              People Say About Us
            </div>

            <div className="">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-l-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-l-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="grid grid-cols-3 gap-12 text-center text-white place-items-center place-content-center">
          {[1, 1, 1].map(() => {
            return (
              <>
                <div className="p-12 space-y-4 box-bg-t rounded-2xl">
                  <div className="">
                    <img
                      className="mx-auto rounded-full"
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
        </div>
        {/*  */}

        <div className="grid grid-cols-3 p-16 my-16 mt-60 place-items-center rounded-3xl box-bg">
          <div className="w-full col-span-2 space-y-12 ">
            <div className="">
              <div className="text-6xl font-bold text-white">
                Real-Time and Moni mr-16 ng your Crypt
              </div>
            </div>
            <div className="text-xl text-white">
              pdate and Monitoring your Crypt A collection of Node JS and Golang
              Backend interview questions please feel free to{" "}
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
              src="/imgmob-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
        {/*  */}

        <div className="flex items-center py-12 text-white">
          <div className="w-full max-w-xs space-y-4">
            <div className="">
              <img src="/footerlogo.png" alt="" />
            </div>
            <div className="ml-6">Find Us</div>
            <div className="grid grid-cols-4">
              <div className="">
                <img src="/fb.png" alt="" />
              </div>
              <div className="">
                <img src="/tw.png" alt="" />
              </div>
              <div className="">
                <img src="/ig.png" alt="" />
              </div>
              <div className="">
                <img src="/yt.png" alt="" />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-3 pl-20 place-content-center place-items-start">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
