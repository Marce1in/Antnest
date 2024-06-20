export default function RegistroForm(){

    return(

        <>
            <main className="flex justify-center items-center w-screen h-screen">
                <form action="input">
                    <h1 className="font-bold text-xl">Registro</h1>
                    <div className="flex flex-col bg-primary gap-8 p-8 rounded-xl justify-between">
                        
                        <label htmlFor="email" className="flex justify-between">Email: <input type="text"/> </label>
                        <label htmlFor="nome" className="flex justify-between">Primeiro Nome: <input type="text" className=""/> </label>
                        <label htmlFor="sobrenome" className="flex justify-between">Sobrenome: <input type="text" className=""/> </label>
                        <label htmlFor="senha" className="flex justify-between">Senha: <input type="text"/> </label>
                        <button className=". bg-secondary rounded"><input type="submit" className="text-primary"/></button>
                    </div>
                </form>
            </main>
        </>
        
    )
}