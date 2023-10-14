'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaTint, FaThermometerThreeQuarters } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import useGetTemp from '../hooks/useGetTemp';
import Chart from 'chart.js';
import Link from 'next/link';


const DataRecordings: React.FC = () => {
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeButton, setActiveButton] = useState<'day' | 'week' | 'month'>('day');
  const [tableData, setTableData] = useState<{ time: string; pH: number; temperature: number }[]>([]);
  const { temperatureData, phData } = useGetTemp();
  const handleButtonClick = (buttonType: 'day' | 'week' | 'month') => {
    setActiveButton(buttonType);
    updateChartData(buttonType);
  };
  const updateChartData = (type: 'day' | 'week' | 'month') => {
    let labels: string[] = [];
    let phDataValues: number[] = [];
    let temperatureDataValues: number[] = [];
    if (type === 'day' || type === 'week' || type === 'month') {
      labels = temperatureData.map((data) => data.x);
      phDataValues = phData.map((data) => data.y);
      temperatureDataValues = temperatureData.map((data) => data.y);
    }
    const updatedTableData = labels.map((label, index) => ({
      time: label,
      pH: phDataValues[index] || 0,
      temperature: temperatureDataValues[index] || 0,
    }));
    setTableData(updatedTableData);
  };
  useEffect(() => {
    const labels = [
      '08:00', '14:55', '12:04', '12:05', '12:05', '12:06', '12:07', '12:10',
      '00:29', '00:29', '11:56', '20:09',
    ];
    const chartCanvas = chartCanvasRef.current;
    if (chartCanvas) {
      const ctx = chartCanvas.getContext('2d');
      if (ctx) {
        const data = {
          labels: labels,
          datasets: [
            {
              label: 'pH',
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              data: [
                10.40, 10.40, 14.00, 8.00, 7.00,
                6.00, 5.50, 6.70, 7.70, 5.50, 3.00, 6.00,
              ],
            },
            {
              label: 'Temperature (°C)',
              backgroundColor: 'rgba(0, 0, 139, 10.0)',
              data: [
                21.50, 20.50, 25.50, 20.50, 11.50, 11.50, 4.00, 25.00, 12.00, 12.00,
                22.00, 16.00,
              ],
            },
          ],
        };
        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Time (Hours)',
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    suggestedMin: 0,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Value',
                  },
                },
              ],
            },
          },
        });
      }
    }
  }, []);
  return (
    <div className="ml-[200px]">

      <div className="flex justify-center space-x-10 mt-5 gap-20 ml-10 g-40 pr-20">
        <div className="flex justify-center space-x-20 mt-10 mb-10">
          <div className="border-4 p-4 max-w-lg rounded-lg text-black-400 bg-sky-500/100 flex items-center mr-20 w-[100%]">
            <FaTint size={62} className="mx-auto" style={{ color: 'white' }} />
            <button
              className={`w-[150px] h-130 text-center space-y-2 text-white ${activeButton === 'day' ? 'font-bold' : ''}`}
              onClick={() => handleButtonClick('day')}
            >
              <p className="">pH Section </p>
              <hr className="border-white" />
            </button>
          </div>
          <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center ml-20">
            <FaThermometerThreeQuarters size={62} className="mx-auto" style={{ color: 'white' }} />
            <button
              className={`w-[150px] h-130 text-center space-y-2 text-white ${activeButton === 'week' ? 'font-bold' : ''}`}
              onClick={() => handleButtonClick('week')}
            >
              <p className="">Temperature </p>
              <hr className="border-white" />
            </button>
          </div>
        </div>
      </div>

  <div className="flex justify-center mt-4">
  <div className="max-w-8xl">
    <canvas ref={chartCanvasRef} id="chartCanvas" width="800" height="400"></canvas>
  </div>
</div>


      <div className="mx-auto mt-7 ml-10">
      <h1 className="ml-[40%] font-bold mb-8">pH and Temperature Water Readings</h1>
        <table className="w-[50%] mx-auto">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="py-2 px-4 border border-white text-xs font-semibold text-center">Time</th>
              <th className="py-2 px-4 border border-white text-xs font-semibold text-center">pH</th>
              <th className="py-2 px-4 border border-white text-xs font-semibold text-center">Temperature (°C)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 5).map((item, index) => (
              <tr className="bg-gray-300">
                <td className="py-2 border text-center">
                  {item.time && `${(new Date(item.time).getHours()).toFixed(2)}hrs`}
                </td>
                <td className="py-2 px-4 border text-center">{item.pH}</td>
                <td className="py-2 px-4 border text-center">{item.temperature}°C</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sidebar />
    </div>

  );
};
export default DataRecordings;







