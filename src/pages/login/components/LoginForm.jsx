export default function LoginForm(){

    return(

        <>
            <main className="flex justify-center items-center w-screen h-screen">
                <form action="input">
                    <h1 className="font-bold text-xl">
                        Login
                    </h1>
                    <div className="flex flex-col bg-primary gap-8 p-8 rounded-xl">

                        <label htmlFor="email" className="flex justify-between">
                            Email: 
                            <input type="email"/> 
                        </label>
                        <label htmlFor="senha" className="flex justify-between">
                            Senha: 
                            <input type="password"/> 
                        </label>

                        <input type="submit" className="text-primary bg-secondary rounded"/>
                    </div>
                </form>
            </main>
        </>
        
    )
}
