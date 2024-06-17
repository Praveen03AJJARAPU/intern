import { MdSearch } from "react-icons/md";
import img from '../assets/logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import p4 from '../assets/p4.png'
import { IoMdArrowRoundBack } from "react-icons/io";


const Nav = ({setModal, signIn, setSign}) => {
  
  return (
    <div className="flex  relative items-center justify-between py-3 px-5 lg:px-16 ">
      <img src={img} alt="logo" />
      
      <div className="relative md:block hidden">
        <input
          type="text"
          className="bg-[#DEE2E6] outline-none rounded-full py-2 text-[#5C5C5C] font-semibold md:text-xs lg:w-[350px] px-10 text-sm"
          placeholder="Search for your favorite groups in ATG"
        />
        <span className="absolute left-3 top-[8px]">
          <MdSearch size={18} />
        </span>
      </div>
      <div className="flex gap-2 text-sm md:text-md items-center">
        {!signIn ? (
          <p>
            Create account.{" "}
            <span
              className="text-[#4C6FF5] cursor-pointer"
              onClick={() => setModal((prev) => !prev)}
            >
              It's free!
            </span>
          </p>
        ) : (
          <div className="flex items-center gap-2">
            <img src={p4} alt="pro" className="w-[25px] h-[25px]" />
            <p className="font-medium">Siddharth Goyal</p>
          </div>
        )}
        <IoMdArrowDropdown />
      </div>
    </div>
  );
}

export default Nav