const notificationReducer = (state="DEFAULT", action) => {
    switch (action.type){
        case "SET_MESSAGE":
            return action.data;
        default:
            return state;
    }
}

export const setNotification = (data, time) => {
    return async (dispatch) => {
        dispatch ({
            type: "SET_MESSAGE",
            data,
        })
        setTimeout(async () => {
            return dispatch({
                type: "SET_MESSAGE",
                data: "",
            })
        }, [time])
    }
}

export default notificationReducer;