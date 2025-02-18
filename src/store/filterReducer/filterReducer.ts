import { Reserve, Route } from '../../types/types'
/* eslint-disable no-case-declarations */
const initialState = {
	filtredDates: [],
	labels: [],
	checkboxFilter: [],
	points: [],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'DATA_FILTER':
			return {
				...state,
				filtredDates: action.payload.data
					.filter(
						(item: Route) =>
							item.reserve?.[action.payload.sortBy as keyof Reserve] !==
							undefined
					)
					.map(
						(item: Route) =>
							item.reserve[action.payload.sortBy as keyof Reserve]
					),
			}
		case 'LABEL':
			return {
				...state,
				labels: action.payload.map((item: Route) => item.datetime.slice(5, 16)),
			}
		case 'GET_CHECKBOX':
			return {
				...state,
				checkboxFilter: Object.keys(action.payload[0]?.reserve ?? []),
			}
		case 'GET_POINTS':
			return {
				...state,
				points: [
					...state.points,
					...action.payload.data
						.map((item: Route, index: number) => {
							if (index === action.payload.index) {
								return item
							}
							return null
						})
						.filter((item: Route) => item !== null)
						.filter((newItem: Route) => {
							return !state.points.some(
								(existingItem: Route) =>
									JSON.stringify(existingItem) === JSON.stringify(newItem)
							)
						}),
				],
			}
		case 'RESET_POINTS':
			return {
				...state,
				points: action.payload.points.filter(
					(item: Route) =>
						new Date(item.datetime).valueOf() !==
						new Date(action.payload.date).valueOf()
				),
			}
		default:
			return state
	}
}
