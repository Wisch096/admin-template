import { createContext, useState } from "react";

type Tema = 'dark' | '' 

interface AppContextProps {
    tema: Tema | null;
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: null
})

export function AppProvider(props) {

    const [tema, setTema] = useState<Tema>('')

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext;
