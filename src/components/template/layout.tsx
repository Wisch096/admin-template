import MenuLateral from "./MenuLateral"
import Cabecalho from "./cabecalho"
import Conteudo from "./conteudo"

interface layoutProps {
    titulo: string
    subtitulo: string
    children?:any
}

export default function Layout(props: layoutProps) {
    return (
        <div className={`dark flex h-screen w-screen`}>
            <MenuLateral />
            <div className={`
                flex flex-col w-full p-7
                bg-gray-300 dark:bg-gray-700
            `}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}