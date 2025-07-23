import { FaCloudSun } from "react-icons/fa";

const Header = () => {
  return (
    <header className="mycon bg-[#F6FAFE] flex items-center justify-between rounded-[20px] h-[110px] p-[20px_30px] !mt-[20px]">
      <div className="flex items-center gap-[10px]">
        <FaCloudSun />
        <h1>Ob-Havo ilovasi</h1>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
