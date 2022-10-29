import axios from 'axios'
import { useSelector } from 'react-redux';
 export const baseURL = 'https://www.thepopfame.com'


export const dataAction = { service };
export function service(payload) {
    const getConfig = () => {
        const config = {
          headers: {
            'Authorization': `Bearer ${payload}`
          }
        };
        return config
      }
      
    console.log("===========PayloadInsideApi",payload)
    return async dispatch => {
        dispatch(request());
        try {
            const res = await axios.post(baseURL + '/api/categories/get',{}, getConfig())
            dispatch(success(res));

        }
        catch (e) {
            console.log('err: ', e)
            dispatch(failure());

        }
    };
    function request() { return { type: 'SERVICE_REQUEST' } }
    function failure(error) { return { type: 'SERVICE_ERROR', error } }
}
export function success(data) { return { type: 'SERVICE_SUCCESS', payload: data } }