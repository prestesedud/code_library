type CardProps = {
  title: string;
  img: string;
  horas?: string;
};

const Card = ({ title, img, horas }: CardProps) => {
  return (
    <div className="border border-[#00A2F7] w-full p-4 rounded-md flex flex-col">
      <div  className= "flex justify-center items-center flex-1">
        <img src={img} className="w-32 mx-auto" alt="React Logo" />
      </div>
      <p className="text-sm font-bold text-[#00A2F7] mt-2">{title}</p>
      <p className="text-sm text-[#00A2F7] mt-1">{horas || "9h"}</p>
      <button className="bg-[#00A2F7] text-white w-full text-sm py-1 rounded-sm cursor-pointer hover:bg-[#00A2F7]/90 transition-all duration-300 mt-4">
        Inscreva-se
      </button>
    </div>
  );
};

export default Card;
