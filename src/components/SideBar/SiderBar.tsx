import { useSelector } from 'react-redux';
import styles from './styles/SideBar.module.scss'
import { RootState, Route } from '../../types/types';

const SideBar = () => {
    const modal = useSelector((state: RootState) => state.modal.sideBar);
    const points = useSelector((state: RootState) => state.filter.points);
    return (
        <div className={modal ? styles.sidebar : styles.sidebarClose}>
            {points?.map((item: Route) => (
                <div className={styles.sidebarItem} key={item.datetime}>
                    <label htmlFor="">
                        <input type="checkbox" name={item.datetime} />
                        {item.datetime}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default SideBar;