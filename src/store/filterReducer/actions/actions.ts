import { Route } from "../../../types/types"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const setDataFilter = (data: Route[], sortBy: string) => ({
    type: 'DATA_FILTER',
    payload: { data, sortBy }
})
export const setLabels = (data: Route[]) => ({
    type: 'LABEL',
    payload: data
})
export const setCheckboxFilter = (data: Route[]) => ({
    type: 'GET_CHECKBOX',
    payload: data
})
export const getPoints = (data: Route[], index: number) => ({
    type: 'GET_POINTS',
    payload: { data, index }
})
export const resetPoint = (points: Route[], date: string) => ({
    type: 'RESET_POINTS',
    payload: { points, date }
})