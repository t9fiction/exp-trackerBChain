
export const addTransaction = (transaction) => {
    return {
        type: "ADD_TRANSACTION",
        payload: transaction
    }
}

export const UpdateTransaction = (transaction) => {
    return{
        type: "UPDATE_TRANSACTION",
        payload: transaction
    }
}
export const DelTransaction = (id) => {
    return{
        type: "DELETE_TRANSACTION",
        payload: id
    }
}