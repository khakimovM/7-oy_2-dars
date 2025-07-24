import React from "react";

interface ForecastListProps {
  forecast: any[];
}

const ForecastList: React.FC<ForecastListProps> = ({ forecast }) => {
  console.log(forecast);
  const getIcon = (main: string) =>
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
    <div className="!my-6 rounded-[20px] overflow-hidden p-[10px] mycon bg-[white]">
      <h2 className="text-black text-xl text-center !my-[15px] font-semibold mb-4">
        5 Kunlik Prognoz
      </h2>
      <div className="flex flex-wrap gap-4 justify-around">
        {forecast.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md flex flex-col items-center w-36 text-black"
          >
            <div className="text-sm font-medium">
              {new Date(item.dt_txt).toLocaleDateString("uz-UZ", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </div>
            <div className="text-4xl mt-2">{getIcon(item.weather[0].main)}</div>
            <div className="text-lg font-bold mt-2">
              {Math.round(item.main.temp)}°C
            </div>
            <div className="text-sm capitalize mt-1 text-center">
              {item.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
