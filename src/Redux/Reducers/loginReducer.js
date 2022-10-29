const initialState = {
    loading : false,
    error: false,
    user: {},
    success:false
},
loginReducer = (state = initialState, action) => {
switch (action.type)
{
    case 'LOGIN_REQUEST':
        return {
            ...state,
            loading: true
        };
    case 'LOGIN_SUCCESS':
        console.log("==========Success",action.payload)
        return Object.assign({}, state, {
                loading: false,
                error: false,
                success:true,
                user: action.payload
            });
    case 'LOGIN_ERROR':
        alert('inside err')
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
export default loginReducer;