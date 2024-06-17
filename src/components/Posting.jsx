import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { flex } from "../constants";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoMdCalendar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { color } from "framer-motion";
function Posting({
  tag,
  id,
  hImage,
  dp,
  title,
  date,
  company,
  location,
  color,
  author,
  btn,
}) 

{
  return (
    <div className="lg:w-[80%] w border-[1px] overflow-hidden border-[#C4C4C4] shadow-xl lg:shadow-none  rounded-none lg:rounded-md mt-3 mb-1  ">
      {hImage != null ? (
        <img src={hImage} className="w-full" alt="header-image" />
      ) : (
        ""
      )}
      <div className="px-4 py-2 flex flex-col gap-2">
        <p className="font-[22px]">{tag}</p>
        <div className="flex text-2xl items-center justify-between font-medium">
          <h2>{title}</h2>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<BsThreeDots size={20} />}
              variant="outline"
            />
            <MenuList className="text-sm w-max" width="fit-content">
              <MenuItem>Edit</MenuItem>
              <MenuItem>Report</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div className={`${flex}  gap-10 font-medium`}>
            <div className={`${flex} gap-2`}>
                {id == 0 ? <IoMdCalendar /> : <PiSuitcaseSimpleLight /> }
                <p>{id == 0 ? date : company}</p>
            </div>
            <div className={`${flex} gap-2`}>
                <IoLocationSharp />
                <p>{location}</p>
            </div>
        </div>

        <button
          className={`border-2 ${id == 0 ? 'text-[#E56135]' : 'text-[#02B875]'} py-2 mb-2 rounded-md text-sm font-medium`}
        >
          {btn}
        </button>

        <div className={`${flex} justify-between font-medium mb-2`}>
          <div className={`${flex} gap-2`}>
            <img src={dp} alt="author-pic" />
            <p>{author}</p>
          </div>
          <div className={`${flex} gap-12 text-[#525252] text-sm`}>
            <div className={`${flex} gap-2`}>
              <IoEyeOutline size={20} />
              <p>1.4k views</p>
            </div>
            <div className="bg-[#EDEEF0] px-2 py-2 rounded-sm">
              <IoMdShare size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posting