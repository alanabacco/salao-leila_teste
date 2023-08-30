"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ClientContextProps {
  client: { id: number; name: string; phone: string };
  setClient: Dispatch<SetStateAction<any>>;
}

const ClientContext = createContext<ClientContextProps>({
  client: { id: 0, name: "", phone: "" },
  setClient: () => {},
});

// pra funcionar com o Next.js 13
export const ClientContextProvider = ({ children }: any) => {
  const [client, setClient] = useState({ id: 0, name: "", phone: "" });

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
