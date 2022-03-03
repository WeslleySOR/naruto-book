import axios from "axios";

export const api = axios.create({
    baseURL: 'https://naruto-api.herokuapp.com/api/v1/'
});

// API Routes

// /api/v1/characters  -  All characters
// /api/v1/characters/:id  -  One character by id
// /api/v1/clans  -  All clans
// /api/v1/clans/:id  -  One clan by id
// /api/v1/bijus  -  All bijus  --> Nao esta completo !