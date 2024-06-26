export default function RegistroForm(){

    return(

        <>
            <main className="flex justify-center items-center w-screen h-screen">
                <form action="input">
                    <h1 className="font-bold text-xl">
                        Registro
                    </h1>
                    <div className="flex flex-col bg-primary gap-8 p-8 rounded-xl justify-between">

                        <label htmlFor="nome" className="flex justify-between">
                            Nome: 
                            <input type="text" /> 
                        </label>
                        <label htmlFor="email" className="flex justify-between">
                            Email: 
                            <input type="email"/> 
                        </label>
                        <label htmlFor="senha" className="flex justify-between">
                            Senha: 
                            <input type="password"/> 
                        </label>
                        <label htmlFor="senha" className="flex justify-between">
                            Confirmar Senha: 
                            <input type="password"/> 
                        </label>

                        <input type="submit" className="text-primary bg-secondary rounded"/>
                    </div>
                </form>
            </main>
        </>
        
    )
}
