import { CredencialesTipo } from "../tipos/CredencialesTipo";

interface Token {
    token: string;
}

export async function registrarse(credenciales: CredencialesTipo): Promise<Token> {
    const response = await fetch(`/api/signup`, {
      method: "POST",
      body: JSON.stringify(credenciales),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status !== 200) throw new Error(); 
    const token: Token = await response.json();
    return token;
  };
  
  export async function acceder(credenciales: CredencialesTipo): Promise<Token> {
    const response = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(credenciales),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status !== 200) throw new Error(); 
    const token: Token = await response.json();
    return token;
  };