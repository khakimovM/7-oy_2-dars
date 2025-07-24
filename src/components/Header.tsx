import { FaCloudSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);

      const yil = now.getFullYear();
      const oylar = [
        "yanvar",
        "fevral",
        "mart",
        "aprel",
        "may",
        "iyun",
        "iyul",
        "avgust",
        "sentyabr",
        "oktyabr",
        "noyabr",
        "dekabr",
      ];
      const kunlar = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
      ];
      const oy = oylar[now.getMonth()];
      const sana = now.getDate();
      const haftaKuni = kunlar[now.getDay()];
      setDate(`${yil}-yil ${sana}-${oy}, ${haftaKuni}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mycon bg-[#F6FAFE] flex items-center justify-between rounded-[20px] h-[110px] p-[20px_30px] !mt-[20px]">
      <div className="left flex items-center gap-[20px]">
        <FaCloudSun className="size-11" />
        <h1 className="text-[24px]">Ob-Havo ilovasi</h1>
      </div>
      <div className="right text-right leading-7">
        <h1 className="text-[20px] font-semibold">{time}</h1>
        <p className="text-[14px] text-gray-600">{date}</p>
        <p className="text-[13px] text-gray-500">📍 Toshkent, O'zbekiston</p>
      </div>
    </header>
  );
};

export default Header;
