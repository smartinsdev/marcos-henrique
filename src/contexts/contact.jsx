import React, { createContext, useState, useContext } from "react";

const ContactContext = createContext([]);

export default function ContactProvider({ children }) {
  const [contact, setContact] = useState([]);
  return (
    <ContactContext.Provider value={{ contact, setContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context)
    throw new Error("useContact must be used within a ContactProvider");
  const { contact, setContact } = context;
  return { contact, setContact };
}
