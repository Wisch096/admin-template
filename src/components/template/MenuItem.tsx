import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink () {
        return (
            <div className={`
            flex flex-col justify-center items-center
            h-20 w-20 
           text-gray-800
           dark:text-gray-200
            ${props.className}
        `}>
            {props.icone}
            <span className={`
                text-xs font-light
            `}>
                {props.texto}
            </span>
        </div>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            hover:bg-gray-300 dark:hover:bg-gray-800
              cursor-pointer  
        `}>
            {props.url ? (
                <Link href={props.url}>
                {renderLink()}
             </Link>  
            ) : (
                renderLink()
            )} 
        </li>
    )
}