import { MdOutlineClose } from "react-icons/md";
import {flex, inp} from '../constants'
import sign from '../assets/sign.png'
import { FaFacebook } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

function Modal({loggedIn, setSign, setLoggedIn, setModal}) {
  return (
    <div className="modal w-full md:w-max px-5 md:px-0 h-max relative bg-white  rounded-t-xl md:rounded-md overflow-hidden pb-5">
      <div
        className="cursor-pointer "
        onClick={() => setModal((prev) => !prev)}
      >
        <MdOutlineClose className="absolute hidden md:block top-3  right-5 bg-white rounded-full" />
      </div>
      <div className="">
        <p className="text-sm hidden md:block px-10 bg-[#EFFFF4] py-2 text-[#008A45]">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
        <div
          className={`${flex} px-10 justify-between ${
            loggedIn ? "my-3" : "my-6"
          }`}
        >
          <h1 className="font-medium text-2xl md:text-3xl">
            {loggedIn ? "Sign In" : "Create Account"}
          </h1>
          <div
            className="cursor-pointer  block md:hidden"
            onClick={() => setModal((prev) => !prev)}
          >
            <MdOutlineClose
              size={17}
              className="bg-[#212529] text-white p-1 rounded-full"
            />
          </div>
          <span
            className="cursor-pointer hidden md:block"
            onClick={() => setLoggedIn((prev) => !prev)}
          >
            {loggedIn ? (
              <p className="text-sm">
                Don’t have an account yet? {""}
                <span className="text-[#4C6FF5] font-medium">
                  Create new for free!
                </span>
              </p>
            ) : (
              <p className="text-sm">
                Already have an account? {""}
                <span className="text-[#4C6FF5] font-medium">Sign In</span>
              </p>
            )}
          </span>
        </div>
        <div className={`${flex} justify-center md:px-10`}>
          <div className="flex flex-col w-[320px]">
            <div className={`${flex}`}>
              <input
                className={`text-[#8A8A8A] border-r-0 w-[50%] px-2 py-2 border-[1px] border-[#ADB5BD] ${
                  loggedIn ? "hidden" : "block"
                } outline-none rounded-ss-[4px] bg-[#F1F3F5]`}
                type="text"
                placeholder="First Name"
              />
              <input
                type="text"
                className={`text-[#8A8A8A] w-[50%] px-2 py-2 ${
                  loggedIn ? "hidden" : "block"
                } border-[1px] border-[#ADB5BD] rounded-se-[4px] outline-none bg-[#F1F3F5]`}
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              className={`${inp} ${loggedIn ? "border-t-[1px]" : ""} `}
              placeholder="Email"
            />
            <div className="relative">
              <input
                type="password"
                className={`${inp} w-full`}
                placeholder="Password"
              />
              <span className="absolute right-6 top-3">
                <IoEyeOutline />
              </span>
            </div>
            <input
              type="text"
              className={`${inp} rounded-b-[4px] ${
                loggedIn ? "hidden" : "block"
              }`}
              placeholder="Confirm Password"
            />
            <div  className={`${flex} justify-between`}>
              <button onClick={() => setSign((prev) => !prev)} className="py-2 px-5 md:px-0 md:w-full bg-[#2F6CE5] my-4 rounded-full text-white font-medium">
                {loggedIn ? "Sign In" : "Create Account"}
              </button>
                <p className="text-[#495057] underline font-medium block cursor-pointer md:hidden text-sm" onClick={() => setLoggedIn((prev) => !prev)}>{loggedIn ? 'or, Sign In' : 'or, Create Account'}</p>
            </div>
            <div
              className={`${flex} border-[1px] border-[#ADB5BD] py-2 justify-center gap-2 mb-2 rounded-md text-sm`}
            >
              <FaFacebook className="text-[#2F6CE5]" />
              <p>Sign up with Facebook</p>
            </div>
            <div
              className={`${flex} border-[1px] border-[#ADB5BD] py-2 justify-center gap-2 mb-2 rounded-md text-sm`}
            >
              <FcGoogle />
              <p>Sign up with Google</p>
            </div>
          </div>
          <div className="font-light hidden md:block">
            <img src={sign} alt="" />
            {loggedIn ? (
              ""
            ) : (
              <p className="-mt-6 text-xs text-center ml-5">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal