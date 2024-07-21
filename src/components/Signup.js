import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

const Signup = () => {
  const n=useNavigate();
    const[name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const handelclick=()=>{
        console.log("email",email);
        console.log("password",password)
        console.log("name",name);
        fetch("http://localhost:9000/route/details",{
            method:"post",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
               name:name,
               email,
               password:password
        
              })
           }).then((res) =>res.json())
           .then((data) =>{
            if(data.error){
                alert(data.error);
            }
            else{
              console.log(data.message)
                alert(data.message);
                n("/login");
            }
           })
        
    }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="bg-red-300 p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            onChange={(e)=>setname(e.target.value)}

          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e)=>setpassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handelclick}
          >
            Sign Up
          </button>

          <div>Alredy Exit a account?
            <Link to="/login">
            <span>Sign in</span>
            </Link>
          
             </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
