import './index.css'

import {
  LineChart,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  // Legend,
  Line,
} from 'recharts'

const DailySpreadTrend = props => {
  console.log('props', props)
  const {chartDetails, objectKey, color, bgColor, name} = props

  const requiredDetails = chartDetails.map(details => ({
    date: details.date,
    value: details[objectKey],
  }))

  const DataFormatter = number => {
    if (number > 100000) {
      return `${(number / 100000).toString()}l`
    }
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="line-chart-main-container">
      <p className={`${objectKey} chart-name`}>{name}</p>
      <div className="line-chart-container">
        <LineChart
          width={1200}
          height={250}
          data={requiredDetails}
          margin={{top: 5, right: 30, left: -30, bottom: 5}}
          padding={{left: 0}}
          className="line-chart"
        >
          <XAxis dataKey="date" stroke={color} axisLine={5} />
          <YAxis tickFormatter={DataFormatter} stroke={color} />
          <Tooltip stroke={color} />
          <Line type="monotone" dataKey="value" stroke={color} fill={color} />
        </LineChart>
      </div>
    </div>
  )
}

export default DailySpreadTrend
