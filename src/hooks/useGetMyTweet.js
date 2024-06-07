import axios from "axios";
import { TWEET_API_END_POINT } from "../Utils/conststant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetMyTweets = (id) => {
  const dispatch = useDispatch();
  const { refresh , isActive} = useSelector((store) => store.tweet);

  const fetchMyTweets = async () => {
    try {
      const res = await axios.get(`${TWEET_API_END_POINT}/getAllTweets/${id}`, {
        withCredentials: true,
      });
      console.log(res);
      dispatch(getAllTweets(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };

  const followingTweetHandler = async () => {
    try {
        
      const res = await axios.get(`${TWEET_API_END_POINT}/followingtweet/${id}` , {
        withCredentials : true 
      });
      console.log(res);
      dispatch(getAllTweets(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(isActive) {
        fetchMyTweets();
    } else {
        followingTweetHandler();
    }
  }, [refresh , isActive]);
};

export default useGetMyTweets;
