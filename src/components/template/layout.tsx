import MenuLateral from "./menulateral"
import Cabecalho from "./cabecalho"
import Conteudo from "./conteudo"

interface layoutProps {
    titulo: string
    subtitulo: string
    children?:any
}

export default function Layout(props: layoutProps) {
    return (
        <div>
            <MenuLateral />
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
            <Conteudo>
                {props.children}
            </Conteudo>
        </div>
    )
}