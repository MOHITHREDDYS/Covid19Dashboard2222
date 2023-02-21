import './index.css'

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

const DailySpreadTrend = props => {
  console.log('props', props)
  const {chartDetails, objectKey, color, bgColor} = props

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
    <div className="bar-chart-container">
      <LineChart
        width={730}
        height={250}
        data={requiredDetails}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="date" stroke={color} axisLine={5} />
        <YAxis tickFormatter={DataFormatter} stroke={color} />
        <Tooltip stroke={color} />
        <Legend />
        <Line type="monotone" dataKey="value" stroke={color} fill={color} />
      </LineChart>
    </div>
  )
}

export default DailySpreadTrend
