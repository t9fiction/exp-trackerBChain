import { createContext, useContext, useReducer } from "react";
import AppReducer from './appReducer';

const initialState = {
    transactions: [
        { id: 1, product: "btoa", price: 100 },
        { id: 2, product: "pulao", price: 200 }
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