import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  //papildyti, kad refresh useris nedingtų
  
  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};
