import React, { useState } from "react";


export const UserContext = React.createContext({});

export const UserProvider = ({children}) => {


  const [usuario, setUsuario] = useState(null);
 

  const user = {
      usuario,
      setUsuario
  }


  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

