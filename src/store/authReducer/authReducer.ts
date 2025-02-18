/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState: any = {
	isAuth: false,
	login: '',
	token: '',
	refreshToken: '',
}

export const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'SET_AUTH':
			return {
				...state,
				isAuth: action.payload.isAuth,
				login: action.payload.login,
				token: action.payload.token,
				refreshToken: action.payload.refreshToken,
			}
		default:
			return state
		case 'LOGOUT':
			return {
				...state,
				isAuth: false,
				login: '',
				token: '',
			}
	}
}
