import Tabela from "@tabela";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RegistroProjeto({id, projetos}) {
    const {register, handleSubmit, reset} = useForm();

    function registrar(data){

        const projeto = {
            id: crypto.randomUUID(),
            nome: data.nome,
            descricao: data.descricao,
            idDono: id
        }

        reset();
        
        projetos.adicionar(projeto);
        projetos.enviarParaLocalStorage();
        
        toast.success("Projeto registrado com sucesso!", {position: "top-center"});

    }

  return (
    <>
      <form className="flex flex-col gap-5 border-solid border-black border-2 rounded-lg p-4" onSubmit={handleSubmit(registrar)}>
        <input type="text" placeholder="nome do projeto" className="p-1 border-solid border-b-2 border-b-black" {...register("nome")}/>
        <input type="text" placeholder="descrição do projeto" className="p-1 border-solid border-b-2 border-b-black" {...register("descricao")}/>
        <button className="bg-primary text-text py-2 px-4 rounded w-28" type="submit">Registrar</button>
      </form>
    </>
  );
}
