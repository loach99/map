import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/types'
import styles from './styles/Chart.module.scss'
import {
	Chart,
	CategoryScale,
	LinearScale, // Регистрируем шкалу для оси Y
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { setInputValue } from '../../store/dataReducer/actions/actions'
import { useEffect, useState } from 'react'
import {
	getPoints,
	setCheckboxFilter,
	setDataFilter,
	setLabels,
} from '../../store/filterReducer/actions/actions'
import useWindowWidth from '../../hooks/useWindowWidth'
export interface Route {
	speed: number
	datetime: string
	lat: number
	lng: number
	reserve: {
		alt: number
		fuel1: number
		speed: number
		voltage: number
		ignition: number
		direction: number
	}
}
Chart.register(
	CategoryScale,
	LinearScale, // Регистрируем линейную шкалу
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)
const ChartElement = () => {
	const { route } = useSelector((state: RootState) => state.data)
	const { filtredDates, labels, checkboxFilter } = useSelector(
		(state: RootState) => state.filter
	)
	const [selected, setSelected] = useState<string>('')
	const width = useWindowWidth()

	useEffect(() => {
		dispatch(setDataFilter(route, 'speed'))
		dispatch(setLabels(route))
		dispatch(setCheckboxFilter(route))
		// eslint-disable-next-line reacthooks/exhaustive-deps
	}, [route])
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onClick: (click: any, elements: any) => {
			if (elements.length > 0) {
				const element = elements[0]
				const index = element.index
				dispatch(getPoints(route, index))
			}
		},
	}
	const data = {
		labels: labels,
		datasets: [
			{
				label: selected,
				fill: true,
				backgroundColor: 'rgb(50, 156, 255)',
				borderColor: 'rgb(1, 1, 255)',
				data: filtredDates,
			},
		],
	}
	const handleChange = (value: string) => {
		setSelected(value === selected ? '' : value)
		dispatch(setDataFilter(route, value))
	}
	const dispatch = useDispatch()
	return (
		<div>
			<div className={styles.chartHeader}>
				<div className={styles.chartDate}>
					<div>
						<input
							onChange={(e) => dispatch(setInputValue(e.target))}
							name='start_date'
							type='datetime-local'
						/>
					</div>
					<div>
						<input
							onChange={(e) => dispatch(setInputValue(e.target))}
							name='end_date'
							type='datetime-local'
						/>
					</div>
				</div>
				<div className={styles.chartRadio}>
					{checkboxFilter.map((item: string) => (
						<label key={item} className={styles.customCheckbox}>
							<input
								onChange={(e) => handleChange(e.target.value)}
								checked={selected === item}
								id={item}
								value={item}
								type='checkbox'
								name='radio'
								className={styles.hiddenCheckbox}
							/>
							<span className={styles.checkboxSpan}></span>
							{item}
						</label>
					))}
				</div>
			</div>
			<Line
				data={data}
				height={width > 1200 ? 55 : width > 800 ? 80 : width > 600 ? 150 : 200}
				options={options}
			/>
		</div>
	)
}

export default ChartElement
