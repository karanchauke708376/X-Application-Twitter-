import React from 'react'
import Avatar from 'react-avatar'
import imgpic  from '../Twitter-Profile/img - 4.jpg'
import { FaRegComment } from "react-icons/fa";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { MdOutlineHorizontalDistribute } from "react-icons/md";
import axios from "axios";
import {TWEET_API_END_POINT , timeSince} from "../Utils/conststant" 
import toast from "react-hot-toast";
import { useDispatch, useSelector} from 'react-redux';
import { getRefresh } from "../redux/tweetSlice";



const Tweet = ({tweet})  => {

    const {user} = useSelector(store => store.user);
    const dispatch = useDispatch();

    const likeOrDislikeHandler = async (id) => {
        try {
            const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}` , {id:user?._id} , {
                withCredentials : true
            })
            dispatch(getRefresh());

            if(res.data.success) {
                toast.success(res.data.message);
            }


        }catch(error) {
            toast.error("Disliked!");
            console.log(error);
        }
    }

  return (
    <div className='border-b border-gray-600'>
 
        <div>
            <div className='flex p-4'>
                    
                    <Avatar src={imgpic} size='75' round={true} />
                    <div className='w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold ml-2 '>{tweet?.userDetails[0]?.name}</h1>
                            <p className='text-gray-500 text-md ml-2 '>{`@${tweet?.userDetails[0]?.username} . . ${timeSince(tweet?.createdAt)}`}</p>
                        </div>

                            <p className='ml-2'>
                                {tweet?.description}       
                                <span className='text-sm ml-5 text-[#1D9BF0]'>@SoftwareEngineer @Microsoft</span>
                            </p>
                        <div className='flex justify-between my-3'>

                            <div className='flex items-center'> 
                                <div className=' flex p-2 hover:text-[#1D9BF0] rounded-full cursor-pointer text-gray-500  '> <FaRegComment  size="24px"/> <p className='ml-2'> 0 </p> </div>  
                            </div>

                            <div className='flex items-center '>
                                <div className=' flex p-2 hover:text-[#00BA7C] rounded-full cursor-pointer text-gray-500'> <HiMiniArrowPathRoundedSquare size="24px"/>  <p className='ml-2'>0 </p> </div> 
                            </div>  

                            <div onClick={ () => likeOrDislikeHandler(tweet?._id)} className='flex items-center '>
                                <div className=' flex p-2 hover:text-[#F91880] rounded-full cursor-pointer text-gray-500'> <GoHeart size="24px"/>  <p className='ml-2'> {tweet?.like?.length} </p> </div> 
                            </div>

                            <div className='flex items-center '>
                                <div className=' flex p-2 hover:text-[#1D9BF0] rounded-full cursor-pointer text-gray-500'> <MdOutlineHorizontalDistribute size="24px"/>  <p className='ml-2'> 0K </p> </div> 
                            </div> 

                            <div className='flex items-center '>
                                <div className=' flex p-2 hover:text-[#1D9BF0] rounded-full cursor-pointer text-gray-500'> <FaRegBookmark size="24px"/> <p className='ml-2'> 0 </p> </div> 
                            </div>   

                            <div className='flex items-center'>
                                <div className=' flex p-2 hover:text-[#1D9BF0] rounded-full cursor-pointer text-gray-500'> <FiShare size="24px"/> <p className='ml-2'> 0 </p> </div> 
                            </div>  
                        
                        </div>
                    </div>
                    
                    
            </div>
        </div>
      
    </div>
  )
}

export default Tweet;
