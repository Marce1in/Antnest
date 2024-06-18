import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
export default function ({ projeto }) {
    const [pessoas, setPessoas] = useState([]);
    const [id, setId] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("pessoas")) {
          const pessoas2 = JSON.parse(localStorage.getItem("pessoas"));
          setPessoas(pessoas2);
    
          for (let i = 0; i < pessoas2.length; i++) {
            if(pessoas2[i].sessao == 1){
              setId(pessoas2[i].id);
              break;
            }
          }
        }
    });

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (
    
    <div className="flex flex-col justify-center rounded-md border-solid border-black border-2 w-[17rem] h-[10rem] text-center">
        {
            projeto.criador == id ? (
               <h1 className="text-xl font-bold">{projeto.name}</h1>
            ) : (
                <button className="py-2 px-8 bg-primary text-text h-full">
                Criar
                </button>
            )
        }
    </div>
  );

}
