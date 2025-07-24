import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
import Today from "./components/Today";

const App: React.FC = () => {
  const API_KEY = "f7533f4af6577082c95dae2c13057109";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    const cityName = inputRef.current?.value || "Fergana";
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: cityName,
            appid: API_KEY,
            units: "metric",
          },
        }
      );
      setWeather(res.data);
    } catch (error) {
      console.error("ob-havo malumotlarini olishda xatolik");
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <Header />
      <Search city={city} setCity={setCity} handleSearch={handleSearch} />
      <Today weather={weather} />
    </>
  );
};

export default App;
