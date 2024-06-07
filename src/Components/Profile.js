import React from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import {Link, useParams } from 'react-router-dom'
import imgprofile from "../Twitter-Profile/imgprofile1.jpg"
import imgpic  from '../Twitter-Profile/img - 4.jpg'
import Avatar from 'react-avatar';
import useGetProfile from '../hooks/useGetProfile';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '../Utils/conststant';
import toast from 'react-hot-toast';
import { followingUpdate } from '../redux/userSlice';
import { getRefresh } from '../redux/tweetSlice';



const Profile = () => {

    const {user , profile} = useSelector(store => store.user); // destructuring
    const {id} = useParams()
    const dispatch = useDispatch();
    useGetProfile(user);
    useGetProfile(id);
    

    const followandUnfollowHandler = async () => {
      // Follow and Unfollo Login
      if(user.following.includes(id)) {
             // Unfollow
             try{
              axios.defaults.withCredentials = true;
              const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}` , {id : user?._id});
              console.log(res);
              dispatch(followingUpdate(id));
              dispatch(getRefresh());
              toast.success(res.data.message);
              
             }catch(error) {
              toast.error(error.respose.data.message)
              console.log(error);

             }
      } else {
            // Follow
            try{
              axios.defaults.withCredentials = true;
              const res = await axios.post(`${USER_API_END_POINT}/follow/${id}` , {id : user?._id});
              console.log(res);
              dispatch(followingUpdate(id));
              dispatch(getRefresh());            
              toast.success(res.data.message);

             }catch(error) {
              toast.error(error.respose.data.message)
              console.log(error);
      }
    }
  }


  return (
    <div className='w-[50%] py-4 border-l border-r border-gray-600 ' >
        <div>
          <div className='flex items-center'>
              <Link to={"/"}  className='p-2 mr-10 rounded-full hover:bg-[#202327] '>
                <IoArrowBackSharp size={"24px"}/>
              </Link>

             <div className=''>
              <h1 className='font-bold text-2xl '>{profile?.name}</h1>
              <p className='text-gray-500 text-xs py-2'>10 posts</p>
            </div>
          </div>

          <img src={imgprofile} alt='' className='cursor-pointer' />
          <div className='absolute  top-[300px] ml-5 border-4 border-black rounded-full cursor-pointer  '>
              <Avatar src={imgpic} size='130' round={true}  />
          </div>
          <div className='text-right m-4'>
            {
              profile?._id === user?._id ? (         
                 <button className='px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-900'>Edit Profile </button>
            ) :  (        
                 <button onClick={followandUnfollowHandler} className='px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-900'> {user.following.includes(id) ? "Following" : "Follow"} </button>
          )
            }
          </div>
          <div>
            <h1 className='font-bold text-2xl ml-5'>{profile?.name}</h1>
            <p className='text-gray-500 ml-5'>{`@${profile?.username}`}</p>
          </div>
          <div className='m-4 text-sm'>
            <p >
            👨‍🎓 Computer Science ll || Passionate Coding || <br/>
            MCA Students ll Java ☕ ll DSA ll Web Dev ll TailwindCSS || LLD  <br/>
            MongoDB ll Express. js ll React. js ll Node. js ll  <sapn className= "text-blue-600">https://leetcode.com/simransharma/ </sapn>
            </p>
          </div>
         
        </div>
    </div>
  )
}

export default Profile;
