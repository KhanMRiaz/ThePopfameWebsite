import axios from 'axios'
const baseURL = 'https://www.thepopfame.com'

export const dataAction = { login };
export function login(user) {
    return async dispatch => {
        // dispatch(request());
        try{
            const res =await axios.post(baseURL + '/api/login', user)
            console.log('res: ',res)
        }
        catch(e){
            console.log('err: ',e)
        }
    };
    function request() { return { type: 'LOGIN_REQUEST' }}
    function success(data) { return { type: 'LOGIN_SUCCESS', payload : data }}
    function failure(error) { return { type: 'LOGIN_ERROR', error }}
}