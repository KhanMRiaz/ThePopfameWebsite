const initialState = {
    loading : false,
    error: false,
    chat: {},
    success:false
},
serviceReducer = (state = initialState, action) => {
switch (action.type)
{
    case 'SERVICE_REQUEST':
        return {
            ...state,
            loading: true
        };
    case 'SERVICE_SUCCESS':
        console.log("==========Success",action.payload)
        return Object.assign({}, state, {
                loading: false,
                error: false,
                success:true,
                service: action.payload
            });
    case 'SERVICE_ERROR':
        return {
             ...state,
             loading: false,
             error: true,
             success:false
        };
    default:
        return state;
}
}
export default serviceReducer;