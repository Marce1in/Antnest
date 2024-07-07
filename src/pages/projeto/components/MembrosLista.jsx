import './MembrosLista.css'
//@ts-ignore
import perfil from '../assets/fotoUsuarioPlaceholder.jpg'
import MembroInstancia from './MembroInstancia'
import MembroAdministrar from './MembroAdministrar'

export default function MembrosLista({membros}){

    return (
        <>
            <div className="membros">
                <ul className="membros__lista">
                    <MembroInstancia nome="jhon doe" cargo='membro' foto={perfil}>
                        <MembroAdministrar />
                    </MembroInstancia>
                    <MembroInstancia nome="jhon doeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" cargo='membro' foto={perfil}>
                        <MembroAdministrar />
                    </MembroInstancia>
                    <MembroInstancia nome="jhon doe" cargo='membro' foto={perfil}>
                        <MembroAdministrar />
                    </MembroInstancia>
                </ul>
            </div>
            <button className='membros__convidar'>Convidar</button>
        </>
    )
}
