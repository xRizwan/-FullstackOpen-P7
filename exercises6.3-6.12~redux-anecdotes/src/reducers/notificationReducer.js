const notificationReducer = (state="DEFAULT", action) => {
    switch (action.type){
        case "SET_MESSAGE":
            return action.data;
        default:
            return state;
    }
}

export const setNotification = (data) => {
    return {
        type: "SET_MESSAGE",
        data,
    }
}

export default notificationReducer;