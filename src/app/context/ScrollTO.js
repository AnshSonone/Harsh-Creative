'use client'

import { createContext, useContext, useState } from "react";

const ScrollTOContext = createContext();

export const ScrollToProvider = ({children}) => {
    const [scrollTo, setScrollTo] = useState(null);

    return (
        <ScrollTOContext.Provider value={{scrollTo, setScrollTo}}>
            {children}
        </ScrollTOContext.Provider>
    )
}

export const useScrollTO = () => {
    const context = useContext(ScrollTOContext);
    if (!context) {
        throw new Error("useScrollTO must be used within a ScrollToProvider");
    }
    return context;
}