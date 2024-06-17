import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { flex } from "../constants";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
function Post({hImage, dp,  tag, title, para, author}) {
  return (
    <div className="lg:w-[80%] lg:border-[1px] shadow-xl lg:shadow-none overflow-hidden border-[#C4C4C4] mt-3 rounded-none lg:rounded-md ">
      <img src={hImage} className="w-full" alt="header-image" />
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
            <MenuList className="text-sm w-max" width='fit-content' >
              <MenuItem>Edit</MenuItem>
              <MenuItem>Report</MenuItem>
              <MenuItem>Option 3</MenuItem>
            </MenuList>
          </Menu>
          
        </div>
        <p className="text-[#5C5C5C] block md:hidden text-xl">{para.slice(0,52)}...</p>
        <p className="text-[#5C5C5C] hidden md:block text-xl">{para}</p>
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

export default Post