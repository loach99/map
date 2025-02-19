/* eslint-disable @typescript-eslint/no-explicit-any */
export const loginRequest = () => ({
	type: 'LOGIN_REQUEST',
})

export const loginSuccess = (tokens: any) => ({
	type: 'LOGIN_SUCCESS',
	payload: tokens,
})

export const loginFailure = (error: any) => ({
	type: 'LOGIN_FAILURE',
	payload: error,
})

export const setAuth = (
	isAuth: boolean,
	login: string,
	token: string,
	refreshToken?: string
) => ({
	type: 'SET_AUTH',
	payload: { isAuth, login, token, refreshToken },
})

export const logout = () => ({
	type: 'LOGOUT',
})

export const getToken = (): any => {
	return async (dispatch: any) => {
		dispatch(loginRequest())
		try {
			const response = await fetch('https://sputnic.tech/mobile_api/token/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					login: 'testdemo',
					password: 'demo',
				}),
			})
			if (response.ok) {
				const json = await response.json()
				dispatch(setAuth(true, 'testdemo', json.token, json.refresh_token))
				dispatch(loginSuccess(response))
			}
		} catch (e) {
			dispatch(loginFailure(e))
		}
	}
}
