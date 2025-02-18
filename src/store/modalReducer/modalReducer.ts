/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
    sideBar: false
};

export const modalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SIDEBAR':
            return {
                ...state,
                sideBar: action.payload.sideBar
            }
        
        default:
            return state;
    }
}