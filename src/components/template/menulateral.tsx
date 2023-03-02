import { IconHome, IconNotifications, IconSettings, IconLogOut } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
import Image from "next/image"

export default function MenuLateral() {
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 
            dark:bg-gray-900
            `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-zinc-900 to-red-700
                h-20 w-20
            `}>
                <Logo />
            </div>
           <ul className="flex-grow">
            <MenuItem url="/" texto="Início" icone={IconHome} />
            <MenuItem url="/ajustes" texto="Ajustes" icone={IconSettings} />
            <MenuItem url="/notificacoes" texto="Notificações" icone={IconNotifications} />
           </ul>
           <ul>
            <MenuItem 
            onClick={() => console.log('lougout')} 
            texto="Sair" icone={IconLogOut}
            className={`
                text-red-600
                hover:bg-red-400 hover:text-white
            `}
            />
           </ul>
        </aside>
    )
}