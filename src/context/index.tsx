import { ClansContextProvider } from "./useClan"
import { ClassesContextProvider } from "./useClasses"
import { CharactersContextProvider } from "./useNinja"

const GlobalContext: React.FC = ({children}) => {
    return(
        
        <ClansContextProvider>
            <ClassesContextProvider>
                <CharactersContextProvider>
                    {children}
                </CharactersContextProvider>
            </ClassesContextProvider>
        </ClansContextProvider>
    )
}
export default GlobalContext