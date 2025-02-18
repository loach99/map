// import { useDispatch, useSelector } from 'react-redux';
import Map from '../Map/Map';
// import SideBar from '../SideBar/SiderBar';
import styles from './styles/Layout.module.scss'
// import { setSideBar } from '../../store/modalReducer/actions/actions';
// import { RootState } from '../../types/types';
import ChartElement from '../Chart/Chart';

const Layout = () => {
    // const dispatch = useDispatch();
    // const modal = useSelector((state: RootState) => state.modal.sideBar);

    return (
        <div className={styles.layout}>
            {/* <div className={styles.layoutHeader}>
                <div onClick={() => dispatch(setSideBar(!modal))}>qweq</div>
            </div> */}
            <div className={styles.layoutMain}>
                {/* <SideBar /> */}
                <Map />
                <ChartElement />
            </div>
        </div>
    );
}

export default Layout;