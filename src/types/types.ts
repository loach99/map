
export interface authReducer {
    isAuth: boolean,
    login: string,
    token: string
    refreshToken: string
}
export interface modalReducer {
    sideBar: boolean
}
export interface Park {
    dtime_start: string,
    ptype: number,
    duration: number,
    lat: number,
    lng: number
}
export interface Reserve {
    alt: number;
    fuel1: number;
    speed: number;
    voltage: number;
    ignition: number;
    direction: number;
  }
export interface Route {
    speed: number,
    datetime: string,
    lat: number,
    lng: number,
    reserve: Reserve
}
export interface dataReducer {
    parking: Park[],
    route: Route[],
    start_date: string,
    end_date: string
}
export interface filterReducer {
    filtredDates: Route[],
    labels: string[],
    checkboxFilter: string[],
    points: Route[]
}
export interface RootState {
    auth: authReducer,
    modal: modalReducer,
    data: dataReducer,
    filter: filterReducer
}