import React, { useEffect, useState } from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import base from "../base.js"
const List = () => {
  const [value, setValue] = useState([]);
  const [label, setLabel] = useState([]);

  const getData = () => {
    const id = localStorage.getItem("id");
    fetch(`${base}/route/find`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id })
    }).then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setLabel(data.data.label);
          setValue(data.data.value);
        }
      });
  };

  // Delete function
  const handleDel = (index) => {
    const id = localStorage.getItem("id");
    fetch(`${base}/route/del`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id, index: index })
    }).then(res => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          // Update state to reflect deletion
          const newLabels = label.filter((_, i) => i !== index);
          const newValues = value.filter((_, i) => i !== index);
          setLabel(newLabels);
          setValue(newValues);
          window.location.reload();

  
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {value.map((e, index) => (
        <div key={index}>
          <div className="flex justify-center items-center bg-gray-50 py-2 rounded-r" style={{ borderRight: '8px solid #e5e5e5' }}>
            <span className='block w-full'>{label[index]}</span>
            <button className='bg-red-200 p-3 rounded' onClick={() => handleDel(index)}>
              <RiDeleteBinFill />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
