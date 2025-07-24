import type React from "react";
import { useRef } from "react";
import { FcSearch } from "react-icons/fc";

interface SearchProps {
  handleSearch: (cityName: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const cityName = inputRef.current?.value.trim();
    if (cityName) {
      handleSearch(cityName);
    }
  };

  return (
    <div className="mycon h-[100px] flex items-center justify-between p-[20px_30px] bg-[#F6FAFE] rounded-[20px] !mt-[20px]">
      <input
        type="text"
        ref={inputRef}
        placeholder="Shahar nomini kiriting ..."
        className="h-[80%] border-[2px] border-gray-300 p-[20px] w-[85%] rounded-[15px] focus:border-[#2F97ED] outline-none"
      />
      <button
        onClick={handleClick}
        className="flex items-center justify-between bg-[#3097ED] rounded-[10px] w-[12%] h-[80%] px-[10px]"
      >
        <FcSearch className="size-7" />
        <h1 className="text-[white] text-[18px]">Qidirish</h1>
      </button>
    </div>
  );
};

export default Search;
