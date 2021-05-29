import '../../styles/Chart/Chart.css';
import ChartBar from '../Chart/ChartBar';
import { v4 as uuid4 } from 'uuid';

const Chart = (props) => {
	const maxValue = Math.max(
		...props.dataPoints.map((dataPoint) => dataPoint.value)
	);
	console.log(maxValue);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => {
				return (
					<ChartBar
						key={uuid4()}
						value={dataPoint.value}
						maxValue={maxValue}
						label={dataPoint.label}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
