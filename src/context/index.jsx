import { createContext, useContext, useState } from "react";

const Context = createContext(); 

function Provider({ children }) {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <Context.Provider value={{ search, setSearch, modal, setModal }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };  

export const UseStateValue = () => {
  return useContext(Context);
};