export default function LoginForm(){

    return(

        <>
            <main className="flex justify-center items-center w-screen h-screen">
                <form action="input">
                    <h1 className="font-bold text-xl">Login</h1>
                    <div className="flex flex-col bg-primary gap-8 p-8 rounded-xl">
                        <label htmlFor="email" className="flex justify-between">Email: <input type="text"/> </label>
                        <label htmlFor="senha" className="flex justify-between">Senha: <input type="text"/> </label>
                        <button className=". bg-secondary rounded"><input type="submit" className="text-primary"/></button>
                    </div>
                </form>
            </main>
        </>
        
    )
}