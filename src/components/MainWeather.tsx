import React from "react";

interface WeatherProps {
  weather: any;
}

const MainWeatherCard: React.FC<WeatherProps> = ({ weather }) => {
  const getWeatherIcon = (main: string) =>
    main === "Clear"
      ? "☀️"
      : main === "Clouds"
      ? "☁️"
      : main === "Rain"
      ? "🌧️"
      : main === "Snow"
      ? "❄️"
      : "🌤️";

  return (
    <div className="mycon bg-white !mt-[20px] rounded-2xl p-10 shadow-xl text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {weather.name.toUpperCase()}
      </h2>
      <p className="text-sm text-gray-500 mb-6">{weather.sys.country}</p>

      <div className="text-7xl mb-4">
        {getWeatherIcon(weather.weather[0].main)}
      </div>

      <p className="text-lg font-semibold text-gray-700 capitalize mb-3">
        {weather.weather[0].description}
      </p>

      <p className="text-5xl font-bold text-blue-500 mb-4">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="text-sm text-gray-500 mb-6">
        His qilinish: {Math.round(weather.main.feels_like)}°C
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center justify-center gap-2 p-3 bg-blue-100/40 rounded-md text-sm font-semibold text-gray-700">
          💧 Namlik: {weather.main.humidity}%
        </div>
        <div className="flex items-center justify-center gap-2 p-3 bg-blue-100/40 rounded-md text-sm font-semibold text-gray-700">
          🌬️ Shamol: {weather.wind.speed} m/s
        </div>
        <div className="flex items-center justify-center gap-2 p-3 bg-blue-100/40 rounded-md text-sm font-semibold text-gray-700">
          📊 Bosim: {weather.main.pressure} hPa
        </div>
        <div className="flex items-center justify-center gap-2 p-3 bg-blue-100/40 rounded-md text-sm font-semibold text-gray-700">
          👁️ Ko'rish: {weather.visibility / 1000} km
        </div>
      </div>

      <div className="flex justify-around mt-4 text-sm font-semibold text-gray-700">
        <div className="flex items-center gap-2">
          🌅 {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
        </div>
        <div className="flex items-center gap-2">
          🌇 {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default MainWeatherCard;
