import { createContext, useState } from "react";
import whatsappData from "../Data/whatsappData";

const ContactsContext = createContext();
const ContactsContextProvider = ({children}) => {

    const[contacts_state, setContactsState] = useState (whatsappData)
    return (    


        <ContactsContext.Provider value= {

            {
                contacts_state: contacts_state
            }
        }>
            {children}
        </ContactsContext.Provider>
    )
}
export {ContactsContext, ContactsContextProvider}