import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Graph from './Graph';
import Nav from './Nav';

const Home = () => {
    const n = useNavigate();

   
   const logout=()=>{
    localStorage.clear();
    n("/login");
   }



    useEffect( () => {
     const id=localStorage.getItem("id");
     if(!id){
        n("/login")
     }
    },[])
    useEffect(() =>{

    },[])
  return (
   <div className="">
   <div className="container mx-auto max-w-7xl text-center drop-shadow-lg text-gray-800 gp-0">

    <div className=' py-5 mb-1 bg-gray-800 text-white rounded flex flex-row justify-evenly text-center'>
      <div>
      <h1 className="text-4xl ">Expense Tracker</h1>
      </div>
    
    <div className='flex justify-end bg-black '>
    <button className='border py-1 px-2 text-white bg-red-500  ' 
    onClick={logout}> Logout</button>

    </div>
     </div>
     {/* grid columns */}
     <div className="grid md:grid-cols-2 gap-2 mt-0">
         {/* Chart */}
         <Graph ></Graph >
         {/* Form */}
         <Nav />

        
     </div>
   </div>
 </div>
  )
}

export default Home
