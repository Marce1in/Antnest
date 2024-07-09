import Tabela from "@tabela";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { vazio } from "@utils";
import { Link, useNavigate } from "react-router-dom";

export default function RegistroForm() {
  const { handleSubmit, register } = useForm();

  const navegar = useNavigate();

  /** @param {{nome: string, senha: string, email: string, confsenha: string}} data*/
  function registrar(data) {
    if (data.confsenha != data.senha) {
      toast.error("As senhas estão diferentes :(", { position: "top-center" });
      return;
    }

    /** @type {Tabela}*/
    const usuarios = new Tabela("usuario");

    if (!vazio(usuarios.encontrarUmPor("email", data.email))) {
      toast.error("Desculpe, esse E-mail já está em uso :(");
      return;
    }

    /** @type {Usuario}*/
    const usuario = {
      id: crypto.randomUUID(),
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      urlImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6YvRump6DC1zR3Bu5fz9358Gcgviuu5nag&s",
    };

    usuarios.adicionar(usuario);
    usuarios.enviarParaLocalStorage();

    toast.success("Sucesso! Bem-vindo ao AntNest :)", {
      position: "top-center",
    });
    navegar("/login");
  }

  return (
    <>
      <main className="flex justify-center items-center w-screen h-screen">
        <form action="input" onSubmit={handleSubmit(registrar)}>
          <h1 className="font-bold text-xl">Registro</h1>
          <div className="flex flex-col bg-primary gap-8 p-8 rounded-xl justify-between">
            <label htmlFor="nome" className="flex justify-between">
              <input
                className="rounded"
                type="text"
                placeholder=" Nome"
                {...register("nome", { required: true })}
              />
            </label>
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
            <label htmlFor="confsenha" className="flex justify-between">
              <input
                type="password"
                className="rounded"
                placeholder=" Confirmar Senha"
                {...register("confsenha", { required: true })}
              />
            </label>

            <input
              type="submit"
              value="registrar-se"
              className="text-text bg-secondary rounded"
            />
          </div>
          <div className="">
            <p className="font-bold">Já possue conta?</p>
            <button className="bg-secondary rounded-md p-1">
              <Link to="/login">Faça login aqui</Link>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
