import { useEffect, useState } from "react";

export default function ({ projeto }) {
  const [pessoas, setPessoas] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("pessoas")) {
      const pessoas2 = JSON.parse(localStorage.getItem("pessoas"));
      setPessoas(pessoas2);

      for (let i = 0; i < pessoas2.length; i++) {
        if (pessoas2[i].sessao == 1) {
          setId(pessoas2[i].id);
          break;
        }
      }
    }
  });

  return (
   <div className="grid grid-cols-1 md:grid-cols-4">
      {projeto.criador == id && (
        <div className="flex flex-col justify-center rounded-md border-solid border-black border-2 w-[17rem] h-[10rem] mr-[-12rem] text-center">
          <h1 className="text-xl font-bold">{projeto.name}</h1>
        </div>
      )  
       
      }

   </div>
    
  );
}
