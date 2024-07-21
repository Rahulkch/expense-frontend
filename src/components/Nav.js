import React, { useState } from 'react'
import List from './List';

const Nav = ({ref,d}) => {
  let [trans,settrans]=useState("");
  let [num,setnum]=useState("");


  let handelclick =(e)=>{
    e.preventDefault(); 
    console.log("trans",trans);
    num=Number(num);
    console.log("amount",num);
    let id=localStorage.getItem("id");
   fetch("http://localhost:9000/route/chartdata", {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      id:id,
      label:trans,
    value:num 
    })
  }).then(res => res.json())
  .then((data) => {
    
      console.log(data)
      window.location.reload();
  
    
  })
  }
  return (
    <div className="form max-w-sm mx-auto w-96 bg-slate-200 p-6">
        
    <h1 className='font-bold pb-4 text-xl'>Transaction</h1>

    <form id='form' >
        <div className="grid gap-4">
            <div className="input-group">
                <input type="text"  onChange={(e) =>settrans(e.target.value)}
                className=" mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm;"
                placeholder='Sallary, House Rend, SIP' />
            </div>
            <select className='form-input' >
                <option value="Investment" defaultValue>Investment {d}</option>
                <option value="Expense">Expense</option>
                <option value="Savings">Savings</option>
            </select>
            <div className="input-group">
                <input type="text"  placeholder='Amount' className=' mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm;'
                onChange={(e) => setnum(e.target.value)} />
            </div>
            <div className="submit-btn">
                <button onClick={handelclick}
                 className='border py-2 text-white bg-indigo-500 w-full'>Makes Transaction</button>
            </div>
        </div>    
  

        </form>
        <List/>
</div>
  )
}

export default Nav
