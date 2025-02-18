/* eslint-disable reacthooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../store/authReducer/actions/actions";
import Layout from "../Layout/Layout";
import { RootState } from "../../types/types";
import { getGraphics } from "../../store/dataReducer/actions/actions";

const Main = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state: RootState) => state.auth);
    const {start_date, end_date} = useSelector((state: RootState) => state.data);
    useEffect(() => {
        dispatch(getToken())
    }, []);
    useEffect(() => {
        if (token) {
            dispatch(getGraphics(token, start_date, end_date));
        }
    }, [token,start_date, end_date]);
    return (
        <div>
            <Layout />
        </div>
    );
}

export default Main;

