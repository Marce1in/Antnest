import Tabela from "@tabela";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { vazio } from "@utils";
import { Link, useNavigate } from "react-router-dom";
import Sessao from "@sessao";

export default function LoginForm() {
  const { handleSubmit, register } = useForm();

  const navegar = useNavigate();

  /** @param {{senha: string, email: string}} data*/
  function logar(data) {
    /** @type {Tabela}*/
    const usuarios = new Tabela("usuario");

    /** @type {Usuario}*/
    const usuario = usuarios.encontrarUmPor("email", data.email);

    if (vazio(usuario)) {
      toast.error("Ops! E-mail incorreto :(");
      return;
    } else if (usuario.senha != data.senha) {
      toast.error("Ops! Senha errada :(");
      return;
    }

    Sessao.criar(usuario.id);
    toast.success("Autenticado com sucesso :)", { position: "top-center" });

    navegar("/");
  }

  return (
    <>
      <main className="flex justify-center items-center w-screen h-screen">
        <form action="input" onSubmit={handleSubmit(logar)}>
          <h1 className="font-bold text-xl">Login</h1>
          <div className="flex flex-col bg-primary gap-8 p-8 rounded-xl justify-between">
            <label htmlFor="email" className="flex justify-between">
              <input
                className="rounded"
                type="email"
                placeholder=" E-mail"
                {...register("email", { required: true })}
              />
            </label>
            <label htmlFor="senha" className="flex justify-between">
              <input
                type="password"
                className="rounded"
                placeholder=" Senha"
                {...register("senha", { required: true })}
              />
            </label>

            <input
              type="submit"
              value="Fazer Login"
              className="text-text bg-secondary rounded"
            />
          </div>
          <div className="">
            <p className="font-bold">Não possue conta? </p>
            <button className="bg-secondary rounded-md p-1">
              <Link to="/registro">Registre-se aqui</Link>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
