import { IconHome, IconNotifications, IconSettings } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
import Image from "next/image"

export default function MenuLateral() {
    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-zinc-900 to-red-700
                h-20 w-20
            `}>
                <Logo />
            </div>
           <ul>
            <MenuItem url="/" texto="Início" icone={IconHome} />
            <MenuItem url="/ajustes" texto="Ajustes" icone={IconSettings} />
            <MenuItem url="/notificacoes" texto="Notificações" icone={IconNotifications} />
           </ul>
        </aside>
    )
}