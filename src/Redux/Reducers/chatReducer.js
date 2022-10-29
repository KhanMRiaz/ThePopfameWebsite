const initialState = {
    loading: false,
    error: false,
    chat:null,
    success: false
},
    chatReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'CHAT_REQUEST':
                return {
                    ...state,
                    loading: true
                };
            case 'CHAT_SUCCESS':
                console.log("==========Success", action.payload)
                return {
                    loading: false,
                    error: false,
                    success: true,
                    chat: action.payload
                }
            case 'CHAT_ERROR':
                return {
                    ...state,
                    loading: false,
                    error: true,
                    success: false
                };
            default:
                return state;
        }
    }
export default chatReducer;