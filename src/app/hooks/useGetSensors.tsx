import {  useEffect, useState } from "react";
import { getSensors } from "../utilities/utils";

interface Sensors {
  id: number;
  serial_number: string;
  location: string;
  sensor_type: string;
  data_sent_time: string;
  created_at: string;
  updated_at: string;
}
const useGetSensors = () => {
  const [sensors, setProducts] = useState<Sensors[]>([]);
  useEffect(() => {
    (async () => {
        const products = await getSensors();
          setProducts(products);
          })();
  }, []);
  return { sensors };
};
export default useGetSensors;





