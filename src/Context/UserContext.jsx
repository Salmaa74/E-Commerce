
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [token, setToken] = useState(null);
  const [address, setaddress] = useState(null);
  

  return (
    <UserContext.Provider value={{ token, setToken,address,setaddress }}>
      {props.children}
    </UserContext.Provider>
  );
}








