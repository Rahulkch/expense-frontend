import React, { useEffect, useState } from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import x from './data.json'
import { useNavigate } from 'react-router-dom';
import Spin from './Spin';

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = () => {
  const n=useNavigate();
  const [x,setx]=useState({});
  const [final,setfinal]=useState({});
  const[key,setkey]=useState(false);
  let [money,setmoney]=useState(0);

  let[total,setotal]=useState("");
  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};




let finalData={};
const getgraphdata=()=>{
  console.log("first wala");
  const id=localStorage.getItem("id");
  if(!id){
    alert("plse login");
    n("/login");

  }

// fetchin x from api
  fetch("http://localhost:9000/route/find",{
    method:"put",
    headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      id:id

      })
   }).then((res) =>res.json())
   .then((data) =>{
    if(data.error){
      alert(data.error);
    }
    else{
      console.log("fetch data of main data",data.data);

      setx(data.data);
      // setkey(true);
      if(!isEmpty(x)){
        cal();
      }
      

      

    }
   })
  
}

// funtion to handel total
const handeltotal= (e)=>{
  e.preventDefault(); 
  
  total=Number(total);
  console.log("total going to be",total)
 let id=localStorage.getItem("id");
 fetch("http://localhost:9000/route/total",{
  method:"put",
  headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id:id,
      total:total

    })
 }).then(res => res.json())
 .then((data) => {
  if(data.error){
    console.log("eror white enterinng total");
  }
  else{
    alert("updated succesully");
    setmoney(total)
    window.location.reload();
    
  }
 })
 
}






// function to calculate the finaldata
  function cal(){
    console.log("inside cal")
    let total=0;
    if (isEmpty(x)) {
      console.log("value of x",x);
      console.log("inside cal 1.5 ")
      return;
    }
    // setmoney(x.total)
    finalData = {
      labels: x.label.map((item) => item),
      datasets: [
        {
          data: x.value.map((item) => {
                  total+=item;
                  return item;
          }),
          backgroundColor:x.value.map((item) => {
              
              let a=255
              let b=25
              let c=25
              let temp1=Math.floor(Math.random() * (25 - 10 + 1)) + 10;
              let temp2=Math.floor(Math.random() * (25 - 10 + 1)) + 10;
              b=(b+temp1)%255;
              c=(c+temp2)%255;
              let color=`rgb(${a},${b},${c})`;
              return color;
          }),
      
      
          
          
          borderWidth: 1,
          
          radius:'50%',
          spacing: 2,
          hoverOffset: 4,
          dataVisibility: new Array(x.value.length).fill(true),
        },
      ],
      options : {
        cutout: 115
    }
    };
    console.log("inside cal  2")
    let amount=x.total;
let left=amount-total


finalData.datasets[0].data.push(left);
finalData.datasets[0].backgroundColor.push("rgb(0, 255, 0)");
finalData.labels.push("Amount Left")
setfinal(finalData)
setkey(true);
console.log("end of cal key ",key)


  }
    



  


    useEffect(() =>{
       getgraphdata();
    },[])


    useEffect(() => {
      if (!isEmpty(x)) {
        cal();
      }
    }, [x]);
  return (
    <div className="flex justify-content max-w-2xl mx-auto mt-0">
        <div className="item">
          <h2>This is Graph section</h2>
            <div className="chart relative">

              {key == false?<Spin/>:<Doughnut data={final} />}
                
              
             
                {/* <h3 className='mb-4 font-bold title mt-0'>Total
                    <span className='block text-3xl text-emerald-400'>${}</span>
                </h3> */}
                <div className='flex flex-row gap-9'>
                  <h3 className='mb-1 font-bold title mt-0 text-xl'>
                Total
                <span className='block text-3xl text-emerald-400'>${x.total}</span>
            </h3>
            {/* <h3 className='mb-1 font-bold title mt-0 text-xl'>
                Left
                <span className='block text-3xl text-emerald-400'>${left}</span>
            </h3> */}
            </div>
            </div>   

            <div className="flex flex-col py-10 gap-4">
                {/* Labels */}
                {/* <Labels></Labels> */}

                <input placeholder='Enter Total' onChange={(e) => setotal(e.target.value)}
                className='mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm;' ></input>
                <button  onClick={handeltotal}
                className='border py-2 text-white bg-indigo-500'>Submit</button>
            </div> 
        </div>
    </div>
  )
}

export default Graph
