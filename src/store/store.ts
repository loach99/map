import { applyMiddleware, combineReducers, legacy_createStore as createStore, Reducer } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from '../store/authReducer/authReducer';
import { modalReducer } from './modalReducer/modalReducer';
import { dataReducer } from './dataReducer/dataReducer';
import { filterReducer } from './filterReducer/filterReducer';
const rootReducer = combineReducers({
    auth: authReducer as Reducer<{ isAuth: boolean; login: string; token: string; }>,
    modal: modalReducer as Reducer<{ sideBar: boolean; }>,
    data: dataReducer as Reducer<{ parking: [], route: [] }>,
    filter: filterReducer as Reducer<{ filtredDates: [] }>,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));