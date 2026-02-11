import { useState } from 'react';
import { LockKeyhole, MonitorPlay } from 'lucide-react';

const Info = () => {
  const [show, setShow] = useState(false);

  // function showLink() {
  //   setShow(!show);
  // }

  return (
    <div className="mt-6 flex w-full justify-between items-center">
      <div className="flex flex-col gap-2 text-[#00A2F7]">
        <p className="font-bold">Pratique com projetos reais</p>
        <p className="w-[700px] text-sm">
          Em vez de apenas ensinar teoria, focamos em código real para inspirar
          seu próximo projeto. Aprender não precisa ser chato.
        </p>
        <div className="flex items-center gap-4 ">
          <button
            className="w-[170px] h-8 bg-[#00A2F7] text-white rounded-md cursor-pointer hover:bg-[#0080c7] transition-colors flex justify-center items-center gap-2"
            onClick={() => setShow(!show)}
          >
            <LockKeyhole size={16} />
            {show ? "Bloquear Aula" : "Desbloquear Aula"}
          </button>

          {show && (
            <p className="flex items-center gap-2 cursor-pointer">
              <MonitorPlay />
              Clique aqui para assistir sua aula
            </p>
          )}
        </div>
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
