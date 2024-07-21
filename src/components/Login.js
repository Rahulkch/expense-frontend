import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





const Login = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const n=useNavigate();
    const handelclick=async ()=>{
        console.log("email",email);
        console.log("password",password);
        // axios.post("http://localhost:9000/route/login",{
        //     emai:email,
        //     password:password

        // }).then((data) =>{
        //     console.log(data);
        // }).catch((e) =>{
        //     console.log("error",e)
        // })
        
       fetch("https://expense-backend-hize.onrender.com/route/login",{
        method:"post",
        headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
    
          })
       }).then(res => res.json())
       .then((data) =>{
        //     console.log(data);
        //     alert(data.message)
        // }).catch((e) =>{
        //     alert(e.message)
        //     console.log("error",e.message)
        // }))
        if(data.error){
            alert(data.error);
            

        }
        else{
            alert(data.message);
            console.log(data.user._id);
            // localStorage.setItem("id")
            let id=data.user._id;
            console.log(typeof(id))
            localStorage.setItem("id",id);
            n("/h");


        }
})

    }
  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="bg-green-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              onChange={(e)=>setemail(e.target.value)}
              placeholder="Email"
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
              Login
            </button>
            <div>
                Haven't Register <Link to="/signup"><span>Click to Register</span></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
