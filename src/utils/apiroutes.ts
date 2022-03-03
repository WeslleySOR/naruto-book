import { api } from "../services/api"

export const getAllCharacters = async() => {
    const response = await api.get('characters')
      .then(data => data)
      .catch(error => console.error(error))    
    return console.log(JSON.stringify(response))
}

export const getCharacterById = async(id: string) => {
  const response = await api.get(`characters/${id}`)
      .then(data => data)
      .catch(error => console.error(error))    
    return console.log(JSON.stringify(response))
}

export const getAllClans = async() => {
  const response = await api.get('clans')
    .then(data => data)
    .catch(error => console.error(error))    
  return console.log(JSON.stringify(response))
}

export const getClanById = async(id: string) => {
  const response = await api.get(`clans/${id}`)
      .then(data => data)
      .catch(error => console.error(error))    
    return console.log(JSON.stringify(response))
}