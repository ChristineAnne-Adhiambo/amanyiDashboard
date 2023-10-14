import { useEffect, useState } from "react";
import { getTemp } from "../utilities/utils";


interface TempData {
  id: number;
  pH_sensor_reading: string;
  Temperature_reading: string;
  Timestamp: string;
  sensor: number;
}
const useGetTemp = () => {
  const [temp, setTemp] = useState<TempData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempData = await getTemp();
        setTemp(tempData);
        setLoading(false);
      }
       catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const getTemperatureData = () => {
    return temp.map((data) => ({
      x: new Date(data.Timestamp).toLocaleString(),
      y: parseFloat(data.Temperature_reading),
    }));
  };
  const getPhData = () => {
    return temp.map((data) => ({
      x: new Date(data.Timestamp).toLocaleString(),
      y: parseFloat(data.pH_sensor_reading),
    }));
  };
  const getTableData = () => {
    return temp.map((data) => ({
      pH: parseFloat(data.pH_sensor_reading),
      temperature: parseFloat(data.Temperature_reading),
      time: new Date(data.Timestamp).toLocaleString(),
    }));
  };
  return {
    loading,
    error,
    temperatureData: getTemperatureData(),
    phData: getPhData(),
    tableData: getTableData(),
  };
};
export default useGetTemp;