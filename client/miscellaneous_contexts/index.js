import React, { useState, useContext, createContext } from 'react';

const MiscellaneousStateContext = createContext();

export const MiscellaneousStateContextProvider = ({ children }) => {
    const [chatToggleDrawer, setChatToggleDrawer] = useState(false)
    const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
    return (
        <MiscellaneousStateContext.Provider
            value={{
                chatToggleDrawer,
                setChatToggleDrawer,
                isAddRoomModalOpen,
                setIsAddRoomModalOpen
            }}
        >
            {children}
        </MiscellaneousStateContext.Provider>
    )
}

export const useStateContext = () => useContext(MiscellaneousStateContext);