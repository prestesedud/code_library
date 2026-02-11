import { useState } from 'react';
import { LockKeyhole } from 'lucide-react';

const Info = () => {
  const [soma, setSoma] = useState(0);

  return (
    <div className="mt-6 flex w-full justify-between items-center">
      <div className="flex flex-col gap-2 text-[#00A2F7]">
        <p className="font-bold">Pratique com projetos reais</p>
        <p className="w-[700px] text-sm">
          Em vez de apenas ensinar teoria, focamos em código real para inspirar
          seu próximo projeto. Aprender não precisa ser chato.
        </p>
        <button
          className="w-[170px] h-8 bg-[#00A2F7] text-white rounded-md cursor-pointer hover:bg-[#0080c7] transition-colors flex justify-center items-center gap-2"
          onClick={() => setSoma(soma + 3)}
        >
          <LockKeyhole size={16}/>
          Desbloquear aula
        </button>
      </div>
      <div className="text-[#00A2F7] bg-white rounded-md flex flex-col gap-2 p-2">
        <p className="font-bold text-md">Curso rápido</p>
        <p className="text-sm">Cursos práticos de curta duração</p>
        <button className="w-36 border py-1 rounded-md cursor-pointer">
          Assistir
        </button>
      </div>
    </div>
  );
};

export default Info;
