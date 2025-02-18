/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
    parking: [],
    route: [],
    start_date:"",
    end_date:"",
}

export const dataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                parking: action.payload.parking,
                route: action.payload.route
            }
        case 'SET_INPUT_VALUE':
            return { ...state, [action.payload.name]: action.payload.value }
        default:
            return state;
    }
}