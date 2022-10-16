const initialState = {
    loading : true,
    error: false,
    user: {},
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
        alert('inside res')
        return Object.assign({}, state, {
                loading: false,
                error: false,
                user: action.payload
            });
    case 'LOGIN_ERROR':
        alert('inside err')
        return {
             ...state,
             loading: false,
             error: true
        };
    default:
        return state;
}
}
export default loginReducer;