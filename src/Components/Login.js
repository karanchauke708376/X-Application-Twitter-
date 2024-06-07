import React, { useState } from "react";
import Xpic from "../Twitter-Profile/XHD.jpg";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import axios from "axios";
import {USER_API_END_POINT} from "../Utils/conststant.js";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";


 
export default function Login() {

  const [isLogin , seIsLogin] = useState(true);

  const [name , setName]         = useState("");
  const [username , SetUsername] = useState("");
  const [email , SetEmail]       = useState("");
  const [password , SetPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async(e) => {
      e.preventDefault();
      if(isLogin) {
                    // L O G I N
        try{
              const res = await axios.post(`${USER_API_END_POINT}/login`,{email , password} , {
                headers: {
                  'Content-Type': "application/json"  // json data send
                },
                withCredentials:true
              }); 

              dispatch(getUser(res?.data?.user)); // redux initial state insert user set
              if(res.data.success) {
                navigate("/");
                toast.success(res.data.message);
              }
        }catch(error) {
              toast.error(error.response.data.message);
              console.log(error);
              console.log("Error for L o g i n!");
        }

      }  else {
                   // S I G  N U P
        try{
              const res = await axios.post(`${USER_API_END_POINT}/register` , {name, username, email, password} , {
                headers:{
                  "Content-Type":"application/json"   // json data send 
                },
                withCredentials:true
              });   
              console.log("erro here ? " , res);
              if(res.data.success) {
                seIsLogin(true);
                toast.success(res.data.message);
              }
              // console.log(res);
        }catch(error) {
              toast.error(error.response.data.message);
              console.log("Error for S i g n u p !");
        }

      }
  }


  const loginSignupHandler = () => {
    seIsLogin(!isLogin);
  }



  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white ">
      <div className="flex items-center justify-around w-[80%]">


        <div>
          <img src={Xpic} alt="X" width={"480px"}   className="ml-5 cursor-pointer" />
        </div>

            {/* Form Singup */}

            <div>
              <div className="my-5">
              <h1 className="font-extrabold text-6xl tracking-widest	 ">Happening now</h1>
              </div>
              <h1 className="mt-4 mb-2 text-4xl font-bold">Join today.</h1>
              <form onSubmit={submitHandler} className="flex flex-col w-[55%]" >
                {
                  !isLogin && (<> 

                <input type="text" value={name} onChange={(e) => setName(e.target.value)}          placeholder="Name" className="outline-blue-800 border border-gray-800 px-4 py-2 rounded-full  my-2  font-semibold text-black" />
                <input type="text" value={username} onChange={(e) => SetUsername(e.target.value)}  placeholder="Username" className="outline-blue-800 border border-gray-800 px-4 py-2 rounded-full my-2 font-semibold text-black" />

                   </>)
                }
               
                <input type="email"     value={email} onChange={(e) => SetEmail(e.target.value)}       placeholder="Email"  className="outline-blue-800 border border-gray-800 px-4 py-2 rounded-full my-2 font-semibold text-black"/>
                <input type="password"  value={password} onChange={(e) => SetPassword(e.target.value)} placeholder="Password"  className="outline-blue-800 border border-gray-800 px-4 py-2 rounded-full my-2  font-semibold text-black"/>

                <button className="bg-[#1D9BF0] border-none py-2 rounded-full font-semibold text-black my-2 "  >{ isLogin ? " Login " :  " Created Account " } </button>
                <div className="  ">
            <p className="text-gray-500 text-xs "> By signing up, you agree to the </p>
            <span className="text-[#1D9BF0] text-xs cursor-pointer">  Terms of Service </span>
            <span className="text-gray-500 text-xs"> and </span>
            <span className="text-[#1D9BF0] text-xs cursor-pointer "> Privacy</span> 
            
            <span className="text-[#1D9BF0] text-xs cursor-pointer ml-2">Policy </span> 
            <span className="text-gray-500 text-xs">, including </span>
            <span className="text-[#1D9BF0] text-xs cursor-pointer"> Cookie Use.</span>
          </div>
                <h1 className="font-bold py-5 ml-1">{ isLogin ? "Do not have an account ? " :  " Already have an account? " }  <span onClick={loginSignupHandler} className="cursor-pointer text-blue-400 font-bold" > { isLogin ? "Create account" : "Login"} </span> </h1>



              <div className=" flex justify-center items-center  ml-2  bg-[#ffffff]  rounded-full outline-none cursor-pointer my-10 ">
                  <FcGoogle className=" flex justify-center items-center cursor-pointer  " size={"30px"}  /> <p className="ml-2 cursor-pointer font-semibold text-black"> Sign up with Google </p> 
                      <input
                            type="button"
                            className="bg-transparent outline-none px-2 py-2  "/>
                                       </div>

              <div className=" flex justify-center items-center  ml-2 bg-[#ffffff]  rounded-full outline-none cursor-pointer ">
                 <GrApple className="cursor-pointer text-black " size={"30px"} /> <p className="ml-2 cursor-pointer font-semibold text-black ">  Sign up with Apple </p>
                     <input
                          type="button"
                          className="bg-transparent outline-none p-2  " />
                                    </div>                       
 
              </form>

              <footer className="py-8">                
          <div className="text-gray-600 flex ">
            <p className="hover:underline cursor-pointer ml-2"> About </p>
            <p className="hover:underline cursor-pointer ml-2"> DownloadtheXapp </p>            
            <p className="hover:underline cursor-pointer ml-2"> HelpCenter </p>
            <p className="hover:underline cursor-pointer ml-2"> TermofService </p>
            <p className="hover:underline cursor-pointer ml-2"> PrivacyPolicy </p>
            <p className="hover:underline cursor-pointer ml-2"> CookiePolicy </p>
            </div>
            <div className=" text-gray-600 flex">
            <p className="hover:underline cursor-pointer ml-2"> Accessibility </p>
            <p className="hover:underline cursor-pointer ml-2"> Adsinfo </p>
            <p className="hover:underline cursor-pointer ml-2"> Blog </p>
            <p className="hover:underline cursor-pointer ml-2"> Blog  </p>           
            <p className="hover:underline cursor-pointer ml-2"> Careers </p>
            <p className="hover:underline cursor-pointer ml-2 px-2"> BrandResources  </p>
            <p className="hover:underline cursor-pointer ml-2"> Advertiesing </p>

            </div>
            <div className="  text-gray-600 flex ">
            <p className="hover:underline cursor-pointer ml-2"> Marketing </p>
            <p className="hover:underline cursor-pointer ml-2"> XforBusiness </p>
            <p className="hover:underline cursor-pointer ml-2"> Developers </p>
            <p className="hover:underline cursor-pointer ml-2"> Directory </p>
            <p className="hover:underline cursor-pointer ml-2"> Settings </p>

          </div>
        </footer>

        
            </div>

            







        {/* <div>
          <h1 className="font-extrabold text-6xl ml-48">Happening now</h1> <br/><br/>
          <h1 className="font-extrabold text-3xl ml-64">Join today.</h1>

          <form className="flex flex-col py-10">
          <div className=" flex justify-center items-center  ml-80 text-black  bg-[#ffffff]  rounded-full outline-none cursor-pointer ">
            <FcGoogle className="cursor-pointer  " size={"30px"}  /> <p className="ml-2 cursor-pointer"> Sign up with Google </p> 
              <input
                  type="button"
                  className="bg-transparent outline-none px-2 py-2  "/>
          </div> <br/>

          <div className=" flex justify-center items-center  ml-80 text-black bg-[#ffffff]  rounded-full outline-none cursor-pointer  ">
            <GrApple className="cursor-pointer text-black" size={"30px"} /> <p className="ml-2 cursor-pointer">  Sign up with Apple </p>
              <input
                  type="button"
                  className="bg-transparent outline-none p-2  " />
          </div>
          <div className="py-10">
            <p className="border ml-80 border-gray-600 border-r"> </p>
          </div>

          <button className="bg-[#1D9BF0] flex justify-center items-center border-none py-1 mp-4 rounded-full text-lg text-white ml-80"> Create account </button> <br/>
          
          <div className="flex justify-between space-x-2 ml-16 ">
            <p className="text-gray-500 text-sm "> By signing up, you agree to the </p>
            <p className="text-[#1D9BF0] text-sm cursor-pointer">  Terms of Service </p>
            <p className="text-gray-500 text-sm"> and </p>
            <p className="text-[#1D9BF0] text-sm cursor-pointer "> Privacy</p> <br/>
            <br/> 
            <p className="text-[#1D9BF0] text-sm cursor-pointer ml-2">Policy </p> 
            <p className="text-gray-500 text-sm">, including </p>
            <p className="text-[#1D9BF0] text-sm cursor-pointer"> Cookie Use.</p>
          </div>

          <p className="font-bold py-5 ml-72"> Already have an account? </p>
          <button className="text-[#1D9BF0] bg-black flex justify-center items-center border py-2 mp-4 rounded-full text-lg hover:bg-gray-800 ml-80 "> Sign in</button>
        
          </form>

              

        </div> */}

        {/* <footer>                 Pending Work here    << - -  - - - -
          <div className="">
           <p className="hover:underline cursor-pointer ml-2"> About </p>
            <p className="hover:underline cursor-pointer ml-2"> DownloadtheXapp </p>            
            <p className="hover:underline cursor-pointer ml-2"> HelpCenter </p>
            <p className="hover:underline cursor-pointer ml-2"> TermofService </p>
            <p className="hover:underline cursor-pointer ml-2"> PrivacyPolicy </p>
            <p className="hover:underline cursor-pointer ml-2"> CookiePolicy </p>
            <p className="hover:underline cursor-pointer ml-2"> Accessibility </p>
            <p className="hover:underline cursor-pointer ml-2"> Adsinfo </p>
            <p className="hover:underline cursor-pointer ml-2"> Blog </p>
            <p className="hover:underline cursor-pointer ml-2"> Blog  </p>           
            <p className="hover:underline cursor-pointer ml-2"> Careers </p>
            <p className="hover:underline cursor-pointer ml-2 px-2"> BrandResources  </p>
            <p className="hover:underline cursor-pointer ml-2"> Advertiesing </p>
            <p className="hover:underline cursor-pointer ml-2"> Marketing </p>
            <p className="hover:underline cursor-pointer ml-2"> XforBusiness </p>
            <p className="hover:underline cursor-pointer ml-2"> Developers </p>
            <p className="hover:underline cursor-pointer ml-2"> Directory </p>
            <p className="hover:underline cursor-pointer ml-2"> Settings </p>

          </div>
        </footer> */}

        

      </div>


     
    </div>

    
  );
}
