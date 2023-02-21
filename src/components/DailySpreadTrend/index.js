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
  const {chartDetails, objectKey, color, name} = props

  const requiredDetails = chartDetails.map(details => ({
    date: details.date,
    value: details[objectKey],
  }))

  let backgroundColor = ''

  if (objectKey === 'confirmed') {
    backgroundColor = 'bg-color-1'
  }
  if (objectKey === 'active') {
    backgroundColor = 'bg-color-2'
  }
  if (objectKey === 'recovered') {
    backgroundColor = 'bg-color-3'
  }
  if (objectKey === 'deceased') {
    backgroundColor = 'bg-color-4'
  }
  if (objectKey === 'tested') {
    backgroundColor = 'bg-color-5'
  }

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
    <div className={` line-chart-main-container ${backgroundColor}`}>
      <p className={`${objectKey} chart-name`}>{name}</p>
      <div className="line-chart-container">
        <LineChart
          width={1160}
          height={250}
          data={requiredDetails}
          margin={{top: 5, right: 30, left: -20, bottom: 5}}
        >
          <XAxis dataKey="date" stroke={color} axisLine={5} />
          <YAxis tickFormatter={DataFormatter} stroke={color} />
          <Tooltip stroke={color} />
          <Line
            type="monotone"
            dataKey="value"
            name="No. of Cases"
            stroke={color}
            fill={color}
          />
        </LineChart>
      </div>
    </div>
  )
}

export default DailySpreadTrend
