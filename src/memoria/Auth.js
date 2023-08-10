import React, { createContext, useReducer } from "react";


const estadoInicial = {
    token: '',
    autenticado: false
};

function reductor(estado, accion) {
    switch (accion.tipo) {
      case "colocar": {
        const nuevoEstado = {
          token: accion.token,
          autenticado: true
        };
        return nuevoEstado;
      }
  
      default:
        throw new Error();
    }
  }

export let ContextoAuth = createContext(null);

function AuthMemoria({ children }) {
    const value = useReducer(reductor, estadoInicial);
    return <ContextoAuth.Provider value={value}>{children}</ContextoAuth.Provider>;
  }
  
  export default AuthMemoria;