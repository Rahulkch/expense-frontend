"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import x from "../data.json"
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Temp() {

// let data= [
//   {
//     label: "Label 1",
//     value: 55,
//     color: "rgba(0, 43, 73, 1)",
//     cutout: "50%",
//   },
//   {
//     label: "Label 2",
//     value:15,
//     color: "rgba(0, 103, 160, 1)",
//     cutout: "50%",
//   },
//   {
//     label: "Label 3",
//     value: 80,
//     color: "rgba(83, 217, 217, 1)",
//     cutout: "50%",
//   },
// ]

//   const options: any = {
//     plugins: {
//       responsive: true,
//     },
//     cutout: data.map((item) => item.cutout),
//   };
// let x=data;
let total=0;
  const finalData = {
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
        radius:'40%',
        dataVisibility: new Array(x.value.length).fill(true),
      },
    ],
  };

console.log("total sum is ",total)
let amount=x.total;
let left=amount-total

// pushi left amout
finalData.datasets[0].data.push(left);
finalData.datasets[0].backgroundColor.push("rgb(0, 255, 0)");
finalData.labels.push("Amount Left")



// pushing total amount
//   amount=amount-total;
//   finalData.datasets[0].data.push(amount);
// finalData.datasets[0].backgroundColor.push("rgb(0, 0, 255)");
// finalData.labels.push("Total")


console.log("final data is ",finalData);
  return<>
  {/* options={options}  */}
  <div className="">
  <Doughnut data={finalData} />;
  </div>
  </> 
}