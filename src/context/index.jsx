import { createContext, useState } from "react";

export const HambergContext = createContext();

export const HambergProvider = ({children})=>{

    const [showSidebar,setShowSidebar] = useState(true);
    return <HambergContext.Provider value={{showSidebar,setShowSidebar}}>{children}</HambergContext.Provider>
}