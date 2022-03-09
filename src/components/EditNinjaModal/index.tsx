import { FormEvent, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from 'uuid'

import closeImg from '../../assets/close.svg'
import ClansContext from "../../context/useClan";
import ClassesContext from "../../context/useClasses";
import CharactersContext from "../../context/useNinja";
import { api } from "../../services/api";
import { Character } from "../../types/types";
import { Container, Content } from "./style";

interface EditNinjaModalProps {
    isOpen: boolean;
    onResquestClose: () => void;
  }

export function EditNinjaModal({ isOpen, onResquestClose }: EditNinjaModalProps) {
    const { characters, setCharacters } = useContext(CharactersContext)
    const { classes } = useContext(ClassesContext)
    const { clans } = useContext(ClansContext)
    const location = useLocation();
    const [about, setAbout] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [level, setLevel] = useState('Desconhecido');
    const [clan, setClan] = useState('Desconhecido');

    const getActualCharacterInfo = () => {
        const index = characters.findIndex(char => location.pathname.includes(char.id ? char.id: ''))
        if(index >= 0){
            setAbout(characters[index].about)
            setName(characters[index].info.name)
            setImage(characters[index].info.image)
            setLevel(characters[index].info.level === '' ? 'Desconhecido' : characters[index].info.level)
            setClan(characters[index].info.clan === '' ? 'Desconhecido' : characters[index].info.clan)
        }
    }

    async function handleEditCharacter(event: FormEvent) {
        event.preventDefault();
        if(about !== '' && name !== '' && level !== '' && image !== '' && clan !== ''){
            const index = characters.findIndex(char => location.pathname.includes(char.id ? char.id: ''))
            let newCharacter = {
                id: characters[index].id,
                about: about,
                info: {
                    image: image,
                    name: name,
                    level: level,
                    clan: clan
                }
            }
            console.log(newCharacter)
            getActualCharacterInfo()
            onResquestClose()
        }
        else{
            alert('Nenhum campo pode estar vazio !')
        }
      }
    useEffect(() => {
        if(characters.length > 0){
            getActualCharacterInfo()
        }
    },)
    return (
        <Container 
            isOpen={isOpen} 
            onRequestClose={onResquestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button"
                onClick={onResquestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            {characters.length > 0 ?
            <Content onSubmit={handleEditCharacter}>
                <h2>Edição de registro - {clan === '' || clan === 'Desconhecido' ? '' : clan} {name}</h2>
                <label htmlFor="name">Nome do personagem.</label>
                <input
                name="name"
                value={name}
                onChange={event => setName(event.target.value)}
                />
                <label htmlFor="url-profile-pic">Link da foto de perfil.</label>
                <input
                name="url-profile-pic"
                value={image}
                onChange={event => setImage(event.target.value)}
                />
                <label htmlFor="about">Sobre o personagem.</label>
                <input
                name="about"
                placeholder={`Evitar aspas duplas (" ") para nao causar conflito com o json-server!`}
                value={about}
                onChange={event => setAbout(event.target.value)}
                />
                <label htmlFor="level">Patente ninja desse personagem.</label>
                <select name="level" id="level" value={level} onChange={e => setLevel(e.target.value)}>
                    {classes.map(classe => 
                        <option key={uuid()}>{classe.name}</option>
                    )}
                </select>
                <label htmlFor="clan">Qual clan esse personagem pertence.</label>
                <select name="clan" id="clan" value={clan} onChange={e => setClan(e.target.value)}>
                    {clans.map(clan =>
                        <option key={uuid()}>{clan.name}</option>
                    )}
                </select>
                <button type="submit">
                    Editar
                </button>
            </Content>
            :<></>
            }
        </Container>
    )
}