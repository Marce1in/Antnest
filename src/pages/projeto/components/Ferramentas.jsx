import './Ferramentas.css'
//@ts-ignore
import placeholder from '../assets/placeholder.svg'

export default function Ferramentas(){
    const Icon = () => <img src={placeholder} />

    return (
        <>
            <aside className="ferramentas">
                <ul className="ferramentas__container">
                    <li role="button" tabIndex={0}>
                        <Icon />
                        <span>
                            Criar
                        </span>
                    </li>
                    <li role="button" tabIndex={0}>
                        <Icon />
                        <span>
                            Membros
                        </span>
                    </li>
                    <li role="button" tabIndex={0}>
                        <Icon />
                        <span>
                            Cargos
                        </span>
                    </li>
                    <li role="button" tabIndex={0}>
                        <Icon />
                        <span>
                            Configurações
                        </span>
                    </li>
                </ul>
            </aside>
        </>
    )
}
