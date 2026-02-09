import { Search } from "lucide-react";

type FilterProps = {
  title: string;
  placeholder?: string;
};

function Filter( {title, placeholder}: FilterProps) {
  return (
    <div className="flex flex-col items-center mt-10">
      <p className=" font-bold text-[#00A2F7] text-2xl">{title}</p>
      <p className=" font-light text-[#00A2F7] text-xs">
        Conteúdo exclusivo todos os dias
      </p>

      <div className="flex gap-2 items-center mt-2">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-white border border-[#F2F2F2] rounded-lg w-[615px] h-[35px] text-xs px-3  focus:outline-none focus:ring-2 focus:ring-[#00A2F7] focus:border-transparent transition-all duration-300"
        />
        <div className="h-[35px] w-[35px] flex justify-center items-center rounded-md bg-[#E2F4FF] cursor-pointer hover:bg-sky-200 transition-all duration-300">
          <Search size={16} className="text-[#00A2F7] hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
