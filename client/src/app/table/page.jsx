"use client"
import {React, useState,useEffect } from "react";
import { Form } from "@/components/form";
import TableComponent from "@/components/table";
import axios from "axios";
import url from "@/utils/url";
import { NoEntry } from "@/components/noentry";

const Page=()=>{
    const [data,setData]=useState();
    const getEntry=async()=>{
      const res=await axios.get(`${url}/entries`);
      console.log(res.data.tables);
      setData(res.data.tables);
    }
    useEffect(()=>{
      getEntry();
    },[])

    const handleUpdateEntry = (updatedData) => {
        const updatedList = data.map(item => (item.email === updatedData.email ? updatedData : item));
        setData(updatedList);
      };
    
      const handleDeleteEntry = (deletedData) => {
        const filteredList = data.filter(item => item.email !== deletedData.email);
        setData(filteredList);
      };

    return(
      <div class="bg-cover w-screen h-screen flex flex-col justify-center items-center relative " style={{ backgroundImage: 'url(/cool-background.png)' }}>
        <div className="h-[20%] w-full flex ">
            <div className="w-[60%] h-full"></div>
            <div className="w-[40%] h-full flex justify-center items-center">
              <div className="h-[80%] w-[80%] bg-slate-50 rounded-lg flex justify-around items-center">
                  <button disabled="disabled" className="h-[50%] flex justify-end items-center rounded-md text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium  text-sm px-3 py-2.5">
                    <img src="/delete.svg" className="h-[80%] m-1" />
                  Delete
                  </button>
                  <button className="h-[50%] flex justify-normal items-center rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm px-3 py-2.5 ">
                    <img src="/add-circle.svg" className="h-[90%] m-1" />
                  Add Entry
                  </button>
                  <button className="h-[50%] flex justify-normal items-center rounded-md text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm px-3 py-2.5 ">
                    <img src="/update.svg" className="h-[90%] m-1" />
                  Update
                  </button>
              </div>
            </div>
        </div>
        <div className="h-[80%] w-full flex justify-center">
          <TableComponent data={data} onUpdate={handleUpdateEntry} onDelete={handleDeleteEntry} />
        </div>
        
      </div>
    // 
    // <NoEntry />
  );
};

export default Page;