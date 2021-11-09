import { createContext, useContext, useReducer } from "react";
import AppReducer from './appReducer';

const initialState = {
    transactions: [
        { id: 1, product: "Mutton", amount: 100 },
        { id: 2, product: "Pulao", amount: 200 }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useStore = () => useContext(GlobalContext);