import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { IoCheckboxOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { RiUser3Fill } from "react-icons/ri";
import Avatar from 'react-avatar'
import  userProfile  from "../Twitter-Profile/img-5.jpg"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from "../Utils/conststant";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser , getMyProfile, getOtherUsers } from '../redux/userSlice';

const LeftSidebar = () => {
  const {user} = useSelector(store => store.user); // destructuring
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler =  async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);

      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));


      navigate('/login');
      toast.success(res.data.message);

    }catch(error) {
      console.log(error);
    }

  }


  return (
    <div className='w-[20%]'>
        <div>
            <Link to={"/"} className='ml-4 py-4 cursor-pointer '>
                 <BsTwitterX size={"34px"}/>
            </Link>

            <div className='my-5 '>


                  <Link to={"/"} className='flex items-center my-2 px-4 py-2 rounded-full hover:font-bold transition-all duration-1000 ease-in-out cursor-pointer hover:bg-gray-900'>
                    <div>
                      <GoHome size={"24px"}/> 
                    </div>
                    <h1 className=' text-lg ml-3'>Home</h1>
                  </Link>

                  <div className='flex items-center my-2 px-4 py-2 rounded-full hover:font-bold transition-all duration-1000 ease-in-out cursor-pointer hover:bg-gray-900'>
                    <div>
                      <IoSearchSharp size={"24px"}/> 
                    </div>
                    <h1 className=' text-lg ml-3'>Explore</h1>
                  </div>

                  <div className='flex items-center my-2 px-4 py-2 rounded-full hover:font-bold transition-all duration-1000 ease-in-out cursor-pointer hover:bg-gray-900'>
                    <div>
                      <IoNotificationsSharp size={"24px"}/> 
                    </div>
                    <h1 className=' text-lg ml-3'>Notifications</h1>
                  </div>

                  <div className='flex items-center my-2 px-4 py-2 rounded-full hover:font-bold transition-all duration-1000 ease-in-out cursor-pointer hover:bg-gray-900'>
                    <div>
                      <FiMail size={"24px"}/> 
                    </div>
                    <h1 className=' text-lg ml-3'>Messages</h1>
                  </div>

                  <div className='flex items-center my-2 px-4 py-2 rounded-full hover:font-bold transition-all duration-1000 ease-in-out cursor-pointer hover:bg-gray-900'>
                    <div>
                      <IoCheckboxOutline size={"24px"}/> 
                    </div>
                    <h1 className=' text-lg ml-3'>Grok</h1>
                  </div>

                  <div className='flex items-center my-2 px-4 py-2 rounded-full cursor-pointer hover:font-bold transition-all duration-1000 ease-in-out  hover:bg-gray-900'>
                    <div>
                      <CiMenuBurger size={"24px"}/> 
                    </div>
                    <h1 className='text-lg ml-3'>Lists</h1>
                  </div>

                  <div className='flex items-center my-2 px-4 py-2 rounded-full cursor-pointer hover:font-bold transition-all duration-1000 ease-in-out  hover:bg-gray-900  '>
                    <div>
                      <FaUserGroup size={"24px"}/> 
                    </div>
                    <h1 className='text-lg ml-3'>Communities</h1>
                  </div>

                  <div className='flex items-center my-2 px-4 py-2 bg-cover rounded-full hover:font-bold transition-all duration-1000 ease-in-out  cursor-pointer hover:bg-gray-900'>
                    <div>
                      <BsTwitterX size={"24px"}/> 
                    </div>
                    <h1 className=' text-lg ml-3'>Premium</h1>
                  </div>

                  <Link to={`/profile/${user?._id}`} className='flex items-center my-2 px-4 py-2 bg-cover rounded-full hover:font-bold transition-all duration-1000 ease-in-out cursor-pointer hover:bg-gray-900'>
                    <div>
                      <RiUser3Fill size={"24px"}/> 
                    </div>
                    <h1 className=' text-lg ml-3'>Profile</h1>
                  </Link>

                  <div className='flex items-center my-2 px-4 py-2 bg-cover rounded-full  cursor-pointer hover:bg-gray-900'>
                    <div>
                      <CiCircleMore size={"24px"}/> 
                    </div>
                    <h1 className='font-bold text-lg ml-3'>More</h1>
                  </div>

                  <div  className='flex justify-center my-10 py-3 rounded-full cursor-pointer bg-blue-400'>
                    <h1  className='font-bold text-lg'>Post</h1>
                  </div>


                  {/* User-Profile */}
                  <div onClick={logoutHandler} className='flex items-center my-2 px-4 py-2 bg-cover rounded-full  cursor-pointer hover:bg-gray-900'>
                    <div>
                    <Avatar src={userProfile} size='60' round={true} />
                    </div>
                    <h1 className='font-bold text-lg ml-3'>Logout</h1>
                  </div>



                  
            

            


            </div>
        </div>

      
    </div>
  )
}

export default LeftSidebar
