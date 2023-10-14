"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,PieChart,Pie,Cell,} from "recharts";

const HomePage = () => {
  const dailyTemperatureData = [
    { name: "Mon", Temperature: 29 },
    { name: "Tue", Temperature: 25 },
    { name: "Wed", Temperature: 23 },
    { name: "Thu", Temperature: 20 },
    { name: "Fri", Temperature: 19 },
    { name: "Sat", Temperature: 16 },
    { name: "Sun", Temperature: 10 },
  ];
  const weeklyPhData = [
    { name: "Acidic", value: 7.0, fill: "#38D0F5" },
    { name: "Neutral", value: 13, fill: "#F1DB18" },
    { name: "Alkaline", value: 9, fill: "#082E58" },
  ];
  const barColors = ["#082E58", "#38D0F5"];
 
  return (
    <div className="container mx-auto  sm:[480px] md:[760px] lg:[976] xl:[144] ml-60 fixed">
      <div className="flex justify-center"></div><div className="flex justify-center gap-60 mt-10 space-x-10 ">


      <div className="flex space-x-20 mt-5">
             <h1 className="bg-blue-950 text-white p-4 w-[300px] h-[100px] font-bold text-center text-xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">Visualize Data</h1>
             <h1 className="bg-sky-500/100 text-white p-4 w-[300px] h-[100px] font-bold text-center text-xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">Data Monitoring</h1>
             <h1 className="bg-blue-950 text-white p-4 w-[300px] h-[100px] font-bold text-center text-xl transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">Water Quality</h1>
</div>

</div>
<div className="ml-[170px]  mt-20 flex">
<div className="bg-white-200 p-4 font-semibold rounded-lg shadow-xl mr-40 ">
            <h2 className="text-xl font-bold mb-2 ml-10">Temperature</h2>
            <BarChart width={500} height={400} ml-36 data={dailyTemperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Temperature">
                {dailyTemperatureData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={barColors[index % barColors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>  

            <div className="bg-white-200  font-semibold rounded-lg shadow-lg ml-[-4%]">
            <h2 className="text-xl font-bold mb-2">pH Measurement</h2>
            <PieChart width={500} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={weeklyPhData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
              >
                {weeklyPhData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
             </div>

          <Sidebar/>
    </div>
  );
};
export default HomePage;