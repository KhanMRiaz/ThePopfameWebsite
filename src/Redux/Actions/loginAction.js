import axios from 'axios'
const baseURL = 'https://www.thepopfame.com'

export const dataAction = { login, logout };
export function login(user) {
	return async dispatch => {
		dispatch(request());
		// try {
		// 	const res = await axios.post(baseURL + '/api/login', user)
		// 	dispatch(success(res));

		// }
		// catch (e) {
		// 	console.log('err: ', e.response.data.errors[0].email)
		// 	dispatch(failure(e.response.data.errors[0].email));
		// }
	};
	function request() { return { type: 'LOGIN_REQUEST' } }
	function failure(error) { return { type: 'LOGIN_ERROR', error: error } }
}

export function loginSuccess(data) { return { type: 'LOGIN_SUCCESS', payload: data } }
export function logout() {
	return async dispatch => {
		dispatch({ type: 'LOGOUT' });
	};

}