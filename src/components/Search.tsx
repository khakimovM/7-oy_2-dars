import type React from "react";
import { FcSearch } from "react-icons/fc";

interface SearchProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Search: React.FC<SearchProps> = ({ city, setCity, handleSearch }) => {
  return (
    <div className="mycon h-[100px] flex items-center justify-between p-[20px_30px] bg-[#F6FAFE] rounded-[20px] !mt-[20px]">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Shahar nomini kiriting ..."
        className="h-[80%] border-[2px] border-gray-300 p-[20px] w-[85%] rounded-[15px] focus:border-[#2F97ED] outline-none"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-between bg-[#3097ED] rounded-[10px] w-[12%] h-[80%] px-[10px]"
      >
        <FcSearch className="size-7" />
        <h1 className="text-[white] text-[18px]">Qidirish</h1>
      </button>
    </div>
  );
};

export default Search;
