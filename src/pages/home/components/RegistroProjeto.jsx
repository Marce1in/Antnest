import Tabela from "@tabela";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RegistroProjeto({id}) {
    const {register, handleSubmit} = useForm();

    function registrar(data){
        const projetos = new Tabela("projetos");

        const projeto = {
            id: crypto.randomUUID(),
            nome: data.nome,
            descricao: data.descricao,
            idDono: id
        }

        projetos.adicionar(projeto);
        projetos.enviarParaLocalStorage();
        
        toast.success("Projeto registrado com sucesso!", {position: "top-center"});

    }

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(registrar)}>
        <input type="text" placeholder="nome do projeto" className="border-solid border-b-2 border-b-black" {...register("nome")}/>
        <input type="text" placeholder="descrição do projeto" className="border-solid border-b-2 border-b-black" {...register("descricao")}/>
        <button className="bg-primary text-text py-2 px-4 rounded" type="submit">Registrar</button>
      </form>
    </>
  );
}
