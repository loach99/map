/* eslint-disable @typescript-eslint/no-unused-expressions */
import styles from './styles/Map.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Route } from '../../types/types';
import { YMaps, Map, Polyline, Placemark } from '@pbe/react-yandex-maps';
import { resetPoint } from '../../store/filterReducer/actions/actions';
import { useEffect, useRef } from 'react';

const MapElement = () => {
    const dispatch = useDispatch();
    const { route } = useSelector((state: RootState) => state.data);
    const points = useSelector((state: RootState) => state.filter.points);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapRef = useRef<any>(null);

    const handleReset = (datetime: string) => {
        dispatch(resetPoint(points, datetime));
    }
    useEffect(() => {
        if(points.length === 0) return
        const lastAddPoint = [points[points.length - 1].lat, points[points.length - 1].lng];
        if (mapRef.current) {
            mapRef.current.setCenter(lastAddPoint ?? [53.507852, 49.420411], 10, { duration: 300 });
          }
    },[points])
    return (
        <div className={styles.map}>
            <YMaps>
                <Map  instanceRef={(ref) => { if (ref) mapRef.current = ref; }} style={{ width: '100%', height: '100%' }} defaultState={{ center: route.length ? [route[0].lat, route[0].lng] : [53.507852, 49.420411], zoom: 9 }}>
                    <Polyline
                        geometry={route.map((item: Route) => [item.lat, item.lng])}
                        options={{
                            strokeWidth: 2,
                            strokeColor: '#FF0000'
                        }}
                    />
                    {points?.map((item: Route) => (
                        <Placemark key={item.datetime} onClick={() => handleReset(item.datetime)} geometry={[item.lat, item.lng]} />
                    ))}
                </Map>
            </YMaps>
        </div>
    );
}

export default MapElement;

