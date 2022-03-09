import { Button, Container } from "./style";
import logoImg from '../../assets/logo.svg'
import { useContext } from "react";
import CharactersContext from "../../context/useNinja";
import { useLocation, useNavigate } from "react-router-dom";
import { BiUserPlus } from 'react-icons/bi'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    const navigate = useNavigate()
    const location = useLocation();
    const { characters } = useContext(CharactersContext)

    return (
        <Container>
            <img src={logoImg} alt="Naruto logo" onClick={() => navigate('/')}/>
            <div>
                <Button 
                    disabled={location.pathname === '/' ? false : true}
                    type="button" 
                    onClick={onOpenNewTransactionModal}
                >
                <BiUserPlus/>
                Adicionar Novo Ninja
                </Button>
                <h1>Total de ninjas no banco de dados: <span>{characters.length}</span></h1>
            </div>
        </Container>
    )
}