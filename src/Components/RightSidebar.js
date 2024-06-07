import React from "react";
import { IoSearch } from "react-icons/io5";
import imgpic from "../Twitter-Profile/img - 4.jpg";
import Avatar from "react-avatar";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";


const RightSidebar = ({ otherUsers }) => {
  return (
    <div className="w-[40%] p-4 pl-10 ">
      <div className=" flex items-center px-14 py-1.5  bg-[#202327]  rounded-full outline-none ">
        <IoSearch className="text-gray-500 cursor-pointer   " size={"20px"} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none p-2 "
        />
      </div>

      <div>
        <div className="p-4 bg-black border rounded-2xl my-4 border-gray-600 ">
          <h1 className="font-extrabold text-2xl py-1 my-3">
            Subscribe to Premium
          </h1>
          <p className="py-2">
            Subscribe to unlock new features and if <br /> eligible,receive a
            share of ads revenue.
          </p>
          <button className="px-5 py-1 bg-[#1D9BF0] text-white ml-1  font-bold rounded-full">
            Subscribe
          </button>
        </div>

        <div className="p-4 bg-black border rounded-2xl my-4 border-gray-600 ">
          <h1 className="font-extrabold text-2xl py-1 my-3">
            What's happening
          </h1>

          <div>
            <div className="flex justify-between cursor-pointer">
              <p className="text-gray-500 text-xs ">Politics · Trending</p>
              <p className="text-gray-500 text-sm font-extrabold"> . . .</p>
            </div>
            <p className=" font-bold cursor-pointer">#NirmalaSitharaman</p>
            <div className="flex gap-2">
              <p className="text-gray-500 text-xs cursor-pointer">
                #Parliament
              </p>
              <p className="text-gray-500 text-xs cursor-pointer">
                #IndiaElection2024
              </p>
            </div>{" "}
            <br />
            <div className="flex justify-between">
              <p className="text-gray-500 text-xs cursor-pointer ">
                Entertainment · Trending
              </p>
              <p className="text-gray-500 text-sm font-extrabold"> . . .</p>
            </div>
            <p className=" font-bold cursor-pointer">#AishwaryaRaiBachchan</p>
            <div className="flex gap-2">
              <p className="text-gray-500 text-sm cursor-pointer">
                #Trending With
              </p>
              <p className="text-[#1D9BF0] text-xs cursor-pointer ">
                #KiaraAdvani
              </p>
            </div>
            <br />
            <div className="flex justify-between">
              <p className="text-gray-500 text-xs cursor-pointer">
                Sports · Trending
              </p>
              <p className="text-gray-500 text-xs font-extrabold"> . . .</p>
            </div>
            <p className=" font-bold cursor-pointer">#SunilChhetri</p>
            <div className="flex gap-2">
              <p className="text-gray-500 text-xs cursor-pointer">
                #14.1K Posts
              </p>
            </div>
          </div>

          <p className="text-[#1D9BF0] py-4  ml-1  font-bold cursor-pointer ">
            Show more
          </p>
        </div>

        <div className="p-4 bg-black border rounded-2xl my-4 border-gray-600">
          <h1 className="font-extrabold text-2xl my-3">Who to follow </h1>
          {otherUsers?.map((user) => {
            return (
              <div key={user?._id} className="flex items-center cursor-pointer ">
                <div className="flex  ">

                  <Link to={`/profile/${user?._id}`}>

                    <div>
                      <Avatar src={imgpic} size="55" round={true} />
                    </div>
                    
                    <div className="ml-2">
                          <h1 className="font-bold flex items-center gap-1">
                            {user?.name}
                            <p className=" text-[#e8d13a] ">
                              <MdVerified size={"20px"} />{" "}
                            </p>
                          </h1>
                        <p className="text-gray-500">{`@${user?.username}`}</p>
                    </div>

                  </Link>

                  
                  <div>
                    <button className="px-5 py-1 ml-20 bg-[#fdfbfb] text-black font-bold rounded-full">
                      Follow
                    </button>
                  </div> 
                </div> 
              </div>
            );
          })}

          <br></br> 

          {/* <div className="flex items-center cursor-pointer ">
            <div className="flex ">
              <div>
                <Avatar src={imgpic} size="55" round={true} />
              </div>
              <div className="ml-2">
                <h1 className="font-bold flex items-center gap-1">Simran <p className=" text-[#e8d13a] "><MdVerified size={"20px"}/> </p></h1>
                <p className="text-gray-500">@simransharma12</p>
              </div>
              <div>
                <button className="px-5 py-1 ml-16 bg-[#fdfbfb] text-black font-bold rounded-full">
                  Follow
                </button>
              </div>

            </div>
          </div>

          <div className="flex items-center cursor-pointer ">
            <div className="flex py-5">
              <div>
                <Avatar src={imgpic} size="55" round={true} />
              </div>
              <div className="ml-2">
                <h1 className="font-bold flex items-center gap-1">Simran <p className=" text-[#1D9BF0] "><MdVerified size={"20px"}/></p>  </h1>
                <p className="text-gray-500">@simransharma12</p>
              </div>
              <div>
                <button className="px-5 py-1 ml-16 bg-[#fdfbfb] text-black font-bold rounded-full">
                  Follow
                </button>
              </div>
            </div>
          </div> */}

          <p className="text-[#1D9BF0] cursor-pointer">Show more </p>
        </div>

        <div>
          <div className="flex px-5 gap-4 text-gray-500 text-xs  cursor-pointer ">
            <p className="hover:underline">Term of Service </p>
            <p className="hover:underline">Privacy Policy</p>
            <p className="hover:underline">Cookie Policy</p>
          </div>
          <div className="flex px-5 gap-4 text-gray-500 text-xs   ">
            <p className="hover:underline cursor-pointer">Accessibility</p>
            <p className="hover:underline cursor-pointer">Ads info</p>
            <p className="hover:underline cursor-pointer">More ...</p>
            <p>@2024 X Corp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
