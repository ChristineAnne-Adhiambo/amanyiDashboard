'use client'
import React, { useEffect } from "react";
import { FaTint, FaThermometerThreeQuarters } from "react-icons/fa";
import Link from 'next/link';
import Sidebar from "../components/Sidebar";
import useGetSensors from "../hooks/useGetSensors";
import Chart from "chart.js";



function pH() {
  const { sensors: sensorChart } = useGetSensors();
  useEffect(() => {
    if (sensorChart) {
      const pHChart = document.getElementById('myChart') as HTMLCanvasElement | null;
        if (pHChart) {
        const lineChart = pHChart.getContext('2d');     
           if (lineChart) {
          const myChart = new Chart(lineChart, {
            type: 'line',
            data: {
              labels: sensorChart.map((item) => item.location),
              datasets: [
                {
                  data: sensorChart.map((item) => item.id),
                  label: 'pH',
                  borderColor: 'skyblue',
                  backgroundColor: '#71D1BD',
                  fill: false,
                  lineTension: 0,
                }
               ],
            },
           });
        }
      }
    }
  }, [sensorChart]);
    function handleButtonClick(arg0: string): void {
   
  }  
   return (
    <div className="mx-auto flex flex-col items-left font-family-Poppins mb-20">
   
      <div className="flex justify-center space-x-10 mt-5 gap-20 ml-80">
<div className="border-10 p-4 max-w-lg rounded-lg text-black-400 bg-sky-500/100 flex items-center">
  <FaTint size={42} className="mx-auto" style={{ color: 'white' }} />
  <Link href="/sensors">
  <button
    className="text-center space-y-2 text-white w-[150px] h-130"
    onClick={() => handleButtonClick('monthly')}
  >
    <p className="">pH Section <br />(Below 0-6.99)</p>
    <hr className="border-white" />
  </button>
  </Link>
</div>
<div className=" p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center ml-20">
    <FaThermometerThreeQuarters size={52} className="mx-auto" style={{ color: 'white' }} />
   <Link href="/temperature">
    <button
    className="text-center space-y-2 text-white w-[150px] h-130"
    onClick={() => handleButtonClick('monthly')}
  >
    <p className="">Temperature <br />(Below 05-30C)</p>
    <hr className="border-white" />
  </button>
  </Link>
  </div>
</div>
<>
      <div className="w-[1250px] h-[600px] flex mx-auto my-auto ml-20">
        <div className="border pt-0 w-full h-fit my-auto shadow-xl"
        style={{ marginLeft: '500px', marginTop: '50px' }}>
          <canvas id="myChart" className="w-full "></canvas>
        </div>
      </div>
    </>
   
   
<div className="mx-auto  ml-[18%] mt-[-7%]">
<h1 className="ml-[60%] font-bold mb-8">pH and Temperature Water Readings</h1>
  <table className="w-[110%] ml-60">
    <thead>
      <tr className="bg-blue-950 text-white">
        <th className="py-3 px-4 border border-white text-sm font-semibold  ">Sensor Location</th>
        <th className="py-2 px-4 border border-white text-sm font-semibold">Date</th>
        <th className="py-2 px-4 border border-white text-sm font-semibold">Time (hrs)</th>
        <th className="py-2 px-4 border border-white text-sm font-semibold">Analysis</th>
        <th className="py-2 px-4 border border-white text-sm font-semibold">Status Report</th>
      </tr>   
       </thead>
    <tbody>
    {sensorChart.map((sensor, index) => (
        <tr className={'bg-gray-300 text-center'}>
          <td className="py-2  border text-xs">{sensor.location}</td>
          <td className="py-2 px-4 border text-xs">{new Date().toLocaleDateString()}</td>
      <td className="py-2 px-4 border text-xs">
  {sensor.data_sent_time && `${(new Date(sensor.data_sent_time).getHours()).toFixed(2)}hrs`}
</td>
        <td className="py-2 px-4 border text-xs">{sensor.id}</td>
          <td className="py-2 px-4 border text-xs">Acidic</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      <Sidebar/>
    </div>
  );
};
export default pH;






