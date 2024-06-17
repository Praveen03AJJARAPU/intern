import { IoMdArrowDropdown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { BiChevronDown, BiSolidPencil } from "react-icons/bi";
import { MdGroupAdd } from "react-icons/md";
import Post from "./Post";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Menu, MenuButton, MenuList, MenuItem, IconButton, Button} from '@chakra-ui/react'
import { flex, postings, posts } from "../constants";
import Posting from "./Posting";
import { GoTriangleDown } from "react-icons/go";
import { AiTwotoneLike } from "react-icons/ai";
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";


function Posts({signIn}) {
  const [val, setVal]  = useState("Noida, India");

  const followItems = [
    { id: 0, name: 'Leisure', image: g1 },
    { id: 1, name: 'Work', image: g2 },
    { id: 2, name: 'Health', image: g3 },
    { id: 3, name: 'Fitness', image: g4 },
  ];
  

    const [followStatus, setFollowStatus] = useState(
      followItems.map(item => ({ id: item.id, followed: false }))
    );
  
    const handleFollowClick = (id) => {
      setFollowStatus((prevStatus) =>
        prevStatus.map((item) =>
          item.id === id ? { ...item, followed: !item.followed } : item
        )
      );
    };

  const click = (e) => {
    if(signIn ) {
       setVal(e.target.val)
    }
  }

  return (
    <div className="lg:mx-16 xl:mx-32 mt-16">
      <div
        className={`${flex}  justify-between border-[#E0E0E0] border-b-2 pb-3`}
      >
        <div className={`${flex} block md:hidden justify-between w-full px-10`}>
          <p className="text-2xl font-semibold">Posts(368)</p>
          <Menu className="relative">
            <MenuButton as={Button} paddingRight={20} variant="outline">
              Filter:All{" "}
            </MenuButton>

            <GoTriangleDown className="absolute right-12" />
            <MenuList className="text-sm w-max" width="fit-content">
              <MenuItem>All Posts(32)</MenuItem>
              <MenuItem>Article</MenuItem>
              <MenuItem>Event</MenuItem>
              <MenuItem>Education</MenuItem>
              <MenuItem>Job</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="hidden md:block">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>All Posts(32)</Tab>
              <Tab>Article</Tab>
              <Tab>Event</Tab>
              <Tab>Education</Tab>
              <Tab>Job</Tab>
            </TabList>
            <TabIndicator
              mt="11.5px"
              height="1.5px"
              bg="black"
              borderRadius="1px"
            />
          </Tabs>
        </div>
        <div className="hidden md:block">
          <div className={`${flex} gap-2 `}>
            <div
              className={`${flex} gap-3 bg-[#DEE2E6] rounded-[5px] px-2 py-2 text-sm`}
            >
              <p>Write a Post</p>
              <IoMdArrowDropdown />
            </div>
            <div
              className={`${flex} gap-2 bg-[#4C6FF5] rounded-[5px] text-sm text-white p-2`}
            >
              <MdGroupAdd s />
              <p>Join Group</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div>
          {posts.map((post, id) => (
            <Post {...post} key={id} />
          ))}
          {postings.map((posting, id) => (
            <Posting key={id} {...posting} id={id} />
          ))}
        </div>

        <div className="w-[400px] lg:block hidden">
          <div className="relative mb-5">
            <IoLocationSharp className="absolute top-3" />
            {!signIn ? (
              <BiSolidPencil className="absolute right-0 top-3" />
            ) : (
              <MdOutlineClose className="absolute right-0 top-3" />
            )}

            <input
              type="text"
              value={val}
              onChange={(e) => click(e)}
              className="outline-none py-2 px-5 mb-3 w-full border-b-2 "
            />
          </div>

          <div className="flex items-start gap-3 text-[#CED4DA]">
            <CgDanger size={30} className="-mt-[2px]" />
            <p className="text-xs">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>

          {signIn ? (
            <div>
              <div className={`${flex} gap-2 my-4`}>
                <AiTwotoneLike />
                <p className="uppercase">REcommended Groups</p>
              </div>
              <div className="flex flex-col gap-4">
                {followItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex font-medium justify-between"
                  >
                    <div className="flex gap-2">
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                    <button
                      onClick={() => handleFollowClick(item.id)}
                      className={`text-sm px-4 py-1 rounded-full ${
                        followStatus.find((f) => f.id === item.id).followed
                          ? "bg-black text-white "
                          : "bg-[#EDEEF0]"
                      }`}
                    >
                      {followStatus.find((f) => f.id === item.id).followed
                        ? "Followed"
                        : "Follow"}
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-[#2F6CE5] float-right mt-3 text-sm">
                See more...
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;