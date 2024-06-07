import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import Avatar from 'react-avatar'
import imgpic  from '../Twitter-Profile/img - 4.jpg'
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineGifBox } from "react-icons/md";
import { IoListSharp } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import axios from 'axios';
import { TWEET_API_END_POINT } from "../Utils/conststant";
import toast from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';




const CreatePost = () => {

    const [description , setDescription] = useState("");
    const {user} = useSelector(store => store.user);
    const {isActive} = useSelector(store => store.tweet);
    const dispatch = useDispatch();
    

    const submitHandler = async () => {
        try {
            const res = await axios.post(`${TWEET_API_END_POINT}/create` , {description , id:user?._id} , {
                withCredentials : true ,
            }) 
            dispatch(getRefresh()); // True || False; 

            if(res.data.success) { 
                toast.success(res.data.message);

            }

        }catch(error){
            toast.error(error.response.data.message);
            console.log(error);
        }
        setDescription("");
    } 

    const fotYouHandler = () => {
        dispatch(getIsActive(true));
    }


    const followingHandler = () => {
        dispatch(getIsActive(false));
        
    }



  return (
    <div className='w-[100%]'>

        <div>

            <div className='flex justify-between items-center cursor-pointer border-b border-gray-400 '>

                <div onClick={fotYouHandler} className={`${isActive ? "border-b-4 border-blue-600  " : ""} cursor-pointer text-center hover:bg-gray-200 w-full px-10 py-5`}> <h1 className='font-semibold  text-gray-600 text-lg '> For You  </h1> </div>

                <div onClick={followingHandler} className={`${!isActive ? "border-b-4 border-blue-600 " : " "} hover:bg-gray-200 w-full text-center px-10 py-5`}> <h1 className='font-semibold text-gray-600 text-lg '> Following </h1> </div>

                <div className=' hover:bg-gray-200 rounded-full px-3 py-3'> <h1 className='font-semibold text-gray-600 text-lg '> <IoSettingsOutline /> </h1> </div>

            </div>



            <div>
                <div className='flex items-center p-4'>
                    <div>
                    <Avatar src={imgpic} size='75' round={true} />
                    </div>
                     <input value={description} onChange={(e) => setDescription(e.target.value) } className='w-full outline-none border-none text-2xl ml-3 bg-black ' type='text' placeholder='What is happening?! '/>
                </div>
                <div className='flex items-center text-[#1D9BF0] justify-between p-5 border-b border-gray-400 cursor-pointer '>
                    <div className='flex pl-20 gap-10  '> <FaRegImage size={20} /> <MdOutlineGifBox size={20} /> <IoListSharp size={20}  /> <BsEmojiSmile  size={20}/>  <RiCalendarScheduleLine size={20} />  <GrLocation size={20} /> </div>
                    
                    <button onClick={submitHandler} className='bg-[#1D9BF0] rounded-full px-5 py-1 text-lg text-white border-none'>Post</button>
                </div>

            </div>

        </div>

      
      
    </div>
  )
}

export default CreatePost
