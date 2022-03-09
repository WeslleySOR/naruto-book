import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CharactersContext from "../../context/useNinja";
import { ButtonGroup, CharacterContent, CharacterHeader, Container } from "./style";

import { BsPencilSquare } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import { api } from "../../services/api";


interface NinjaProps {
    onOpenEditNinjaModal: () => void;
}


export function Ninja({ onOpenEditNinjaModal }: NinjaProps) {
    let navigate = useNavigate()
    const { characters, setCharacters } = useContext(CharactersContext)
    const {id} = useParams()

    const character = characters.find(char => char.id ===id)
    const deleteCharacter = async() => {
        if(window.confirm('Deseja realmente apagar o personagem do banco de dados?')){
        const newCharacters = characters
        const index = characters.findIndex(char => char.id ===id)
        newCharacters.splice(index, 1)
        await api.delete(`ninjas/${id}`)
            .then(res => {
                setCharacters(newCharacters)
                navigate('/')
            })
            .catch(error => console.error(error))
        }
    }
    const returnImageUrl = () => {
        if(character?.info.image !== "") return character?.info.image
        else {
            return 'https://s.cdnshm.com/catalog/br/t/137493061/poco-x3-nfc-64gb.jpg'
        }
    }
    return(
        <Container>
            {character ?
                <>
                    <CharacterHeader>
                        <div
                        className="div-image" 
                        style={{
                           backgroundImage: `url(${returnImageUrl()})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center'
                        }}></div>
                        <div
                            className="div-info"
                        >
                            <h1>Nome: 
                                <span>{characters.find(char => char.id === id)?.info.clan !== 'Desconhecido' ? characters.find(char => char.id === id)?.info.clan : ''} </span>
                                <span>{characters.find(char => char.id === id)?.info.name}</span>
                            </h1>
                            <h1>Clan: <span>{characters.find(char => char.id === id)?.info.clan !== 'Desconhecido' ? characters.find(char => char.id === id)?.info.clan : 'Desconhecido'}</span></h1>
                            <h1>Patente ninja: <span>{characters.find(char => char.id === id)?.info.level}</span></h1>
                        </div>
                    </CharacterHeader>
                    <CharacterContent>
                        <div>
                            <h1>História</h1>
                            <ButtonGroup>
                                <button onClick={onOpenEditNinjaModal}><span>Editar</span><BsPencilSquare/></button>
                                <button onClick={() => deleteCharacter()}><span>Apagar</span><BiTrash/></button>
                            </ButtonGroup>
                        </div>
                        <span>{characters.find(char => char.id === id)?.about}</span>
                    </CharacterContent>
                </>
                :<>{navigate('/')}</>
            }
        </Container>
    )
}