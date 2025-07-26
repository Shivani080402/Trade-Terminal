
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";

function SingUp() {

    const navigate = useNavigate();
    const [inputValue , setInputValue] = useState({
        email : "",
        username : "",
        password : "",
        
    });

    const {email ,  username ,password } = inputValue;
    const handleOnChange = (e) =>{
        const {name , value}  = e.target;
        setInputValue({
            ...inputValue,
            [name] : value,
        });
    };

    const handleError  = (err) =>{
        toast.error(err , {position : "bottom-left"})
    }


    const handleSuccess = (msg) => {
        toast.success(msg , {position : "bottom-right"})
    };

    const handleSubmit = async (e) =>{
         e.preventDefault();

         try {
      const { data } = await axios.post(
        "http://localhost:3002/Signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      username: "",
      password: "",
    
    });
    };


    return ( 
        <div className='container text-center '>
            <h1 className="mb-2 mt-5">Open a free demat and trading account online</h1>
            <p className="fs-5">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            <div className='row'>
                <div className='col-6 mt-5 mb-5 p-2'>
                    <img src = 'media\Images\account_open.svg' alt='signin'/>
                </div>
                <div className='col-6 p-3'>
                    <div className="form_container">
      <h2 className="mb-5 mt-5 p-3 text-start">Signup now</h2>
      <form className='text-start' onSubmit={handleSubmit}>
        <div  style={{lineHeight :'1.8'  }}>
          <label className="mb-3" htmlFor="email" style={{paddingRight :' 65px' , fontSize :'20px'}}>Email : </label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            style={{width: "80%" , padding :'7px' , borderRadius : '5px' , border :'1px solid gray'}}
          />
        </div>
        <div className="mb-3" >
          <label htmlFor="email" style={{paddingRight :' 25px' , fontSize :'20px'}}>Username : </label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
             style={{width: "80%" , padding :'8px' , borderRadius : '5px' , border :'1px solid gray'}}
          />
        </div>
        <div className="mb-3" >
          <label htmlFor="password" style={{paddingRight :' 32px' , fontSize :'20px'}}>Password : </label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
             style={{width: "80%" , padding :'8px' , borderRadius : '5px' , border :'1px solid gray'}}
          />
        </div>
        <div style={{display : 'flex' , justifyContent :'space-between'}}>
          <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width : '30%' , backgroundColor:"#162d5b" , border :'1px solid #162d5b' }} type="submit">Sign up</button>
        <span className="mt-3" style={{fontSize :'18px'}}>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
       
        </div>
         <p>By proceeding, you agree to the Trade-Terminal terms & privacy policy</p>
      </form>
      <ToastContainer />
    </div>
  
                </div>

            </div>

        </div>
     );
}

export default SingUp;