
/**
 * Receber o code via string
 * Recuperar o access_token no github
 * Verificar se o usuario existe no banco de dados 
 * --- SE existir GERAR TOKEN
 * --- SENÃO Criar no banco e gera um Token
 * Retornar o token com as informações do user
 */

import axios from "axios";

class AuthenticateUserService{

    async execute(code: string){

        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })

        return response.data;
    }

}

export {AuthenticateUserService}