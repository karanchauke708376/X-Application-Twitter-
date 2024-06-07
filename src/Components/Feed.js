import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const Feed = () => {
  const {tweets} = useSelector(store => store.tweet);


  return (
    <div className='w-[100%] border border-gray-600'>
         <div>
            <CreatePost/>
            {
              tweets?.map((tweet) => <Tweet key={tweet?._id} tweet = {tweet} />)
            }
            <Tweet/> 
         
        </div>

      
    </div>
  )
}

export default Feed
