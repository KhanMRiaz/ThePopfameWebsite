import axios from 'axios'
import { useSelector } from 'react-redux';
const baseURL = 'https://www.thepopfame.com'


export const dataAction = { chatAction };
export function chatAction(payload) {
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
            const res = await axios.post(baseURL + '/api/job/get_jobs_with_messages',{},getConfig())
            dispatch(success(res));

        }
        catch (e) {
            console.log('err: ', e)
            dispatch(failure());

        }
    };
    function request() { return { type: 'CHAT_REQUEST' } }
    function failure(error) { return { type: 'CHAT_ERROR', error } }
  }
  export function success(data) { return { type: 'CHAT_SUCCESS', payload: data } }