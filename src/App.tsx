import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import MainWeatherCard from "./components/MainWeather";
import ForecastList from "./components/ForeCestList";

const App: React.FC = () => {
  const API_KEY = "f7533f4af6577082c95dae2c13057109";

  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (cityName: string) => {
    setLoading(true);
    setError(null);

    try {
      // Hozirgi ob-havoni olish
      const weatherRes = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: cityName,
            appid: API_KEY,
            units: "metric",
          },
        }
      );
      setWeather(weatherRes.data);

      // Forecast (5 kunlik) olish
      const forecastRes = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: cityName,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      // Har 8 ta ma'lumotdan 1 tasini olish (kuniga 1 martalik prognoz)
      const filteredForecast = forecastRes.data.list.filter(
        (_: any, index: number) => index % 8 === 0
      );
      setForecast(filteredForecast);
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError("Shahar topilmadi, Farg'ona uchun ob-havo yuklanyapti...");

        try {
          const defaultWeather = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
              params: {
                q: "Fergana",
                appid: API_KEY,
                units: "metric",
              },
            }
          );
          setWeather(defaultWeather.data);

          const defaultForecast = await axios.get(
            "https://api.openweathermap.org/data/2.5/forecast",
            {
              params: {
                q: "Fergana",
                appid: API_KEY,
                units: "metric",
              },
            }
          );
          const fallbackFiltered = defaultForecast.data.list.filter(
            (_: any, index: number) => index % 8 === 0
          );
          setForecast(fallbackFiltered);
        } catch (fallbackErr) {
          setError(
            "Farg'ona uchun ham ma'lumotlarni olishda xatolik yuz berdi."
          );
          setWeather(null);
          setForecast([]);
        }
      } else {
        setError("Ob-havo ma'lumotlarini olishda xatolik yuz berdi.");
        setWeather(null);
        setForecast([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("Fergana");
  }, []);

  return (
    <>
      <Header />
      <Search handleSearch={handleSearch} />
      {loading && (
        <p className="text-blue-600 mt-4 text-center">Yuklanmoqda...</p>
      )}
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {!loading && weather && <MainWeatherCard weather={weather} />}
      {!loading && forecast.length > 0 && <ForecastList forecast={forecast} />}
    </>
  );
};

export default App;
