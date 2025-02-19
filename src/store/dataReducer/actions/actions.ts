/* eslint-disable @typescript-eslint/no-explicit-any */
import { Park, Route } from '../../../types/types'
import {
	loginFailure,
	loginRequest,
	loginSuccess,
} from '../../authReducer/actions/actions'

export const setData = (parking: Park[], route: Route[]) => ({
	type: 'SET_DATA',
	payload: { parking, route },
})
export const setInputValue = (value: EventTarget) => ({
	type: 'SET_INPUT_VALUE',
	payload: value,
})
export const getGraphics = (
	token: string,
	date_start: string,
	date_end: string
): any => {
	return async (dispatch: any) => {
		dispatch(loginRequest())
		try {
			const response = await fetch('https://sputnic.tech/mobile_api/getRoutesPoint', {
				method: 'POST',
				body: JSON.stringify({
					id: 740,
					// date_start: "2025-02-05 06:13:02",
					// date_end: "2025-02-07 17:53:24"
					date_start: date_start.replace('T', ' '),
					date_end: date_end.replace('T', ' '),
				}),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			if (response.ok) {
				const json = await response.json()
				dispatch(setData(json['740'][0].parking, json['740'][0].route))
			}
			dispatch(loginSuccess(response))
		} catch (e) {
			dispatch(loginFailure(e))
		}
	}
}
