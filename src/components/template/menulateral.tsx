import { IconHome, IconNotifications, IconSettings } from "../icons"
import MenuItem from "./MenuItem"

export default function MenuLateral() {
    return (
        <aside>
           <ul>
            <MenuItem url="/" texto="Início" icone={IconHome} />
            <MenuItem url="/ajustes" texto="Ajustes" icone={IconSettings} />
            <MenuItem url="notificações" texto="Notificações" icone={IconNotifications} />
           </ul>
        </aside>
    )
}