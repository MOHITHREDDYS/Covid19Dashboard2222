import './index.css'

import {Tooltip, BarChart, Bar, XAxis, YAxis, LabelList} from 'recharts'

const BarChartFigure = props => {
  const {chartDetails, activeTab} = props

  const objectKey = activeTab.toLowerCase()

  const convertValues = number => {
    let requiredNumber
    if (number > 100000) {
      const a = (number / 100000).toFixed(2)
      requiredNumber = `${a.toString()}L`
    } else if (number >= 1000) {
      requiredNumber = `${(number / 1000).toFixed(2).toString()}K`
    } else {
      // requiredNumber = `${(number / 100).toFixed(2).toString()}H`
      requiredNumber = number
    }
    return requiredNumber
  }

  const convertDate = value => {
    const d = new Date(value)
    const month = d.getMonth()
    const day = d.getDate()
    const e = new Date()
    e.setMonth(month)
    const monthName = e.toLocaleString('default', {month: 'short'})
    return `${day} ${monthName.toUpperCase()}`
  }

  const requiredDetails = chartDetails.map(details => ({
    fullDate: details.date,
    date: convertDate(details.date),
    value: details[objectKey],
    valueString: convertValues(details[objectKey]),
  }))

  const a = requiredDetails.length - 1

  const latestDetails = requiredDetails.splice(a - 9, a + 1)

  let color = ''
  let cases = ''

  if (activeTab === 'CONFIRMED') {
    color = '#9a0e31'
    cases = 'Confirmed Cases'
  } else if (activeTab === 'ACTIVE') {
    color = '#0a4fa0'
    cases = 'Active Cases'
  } else if (activeTab === 'RECOVERED') {
    color = '#216837'
    cases = 'Recovered Cases'
  } else if (activeTab === 'DECEASED') {
    color = '#474c57'
    cases = 'Deceased Cases'
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
    <div className="bar-chart-container">
      <BarChart
        width={1000}
        height={300}
        data={latestDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          axisLine={false}
          dataKey="date"
          tick={{
            fill: color,
            strokeWidth: 0,
          }}
          tickLine={false}
        />
        <Tooltip radius={[6, 6, 0, 0]} />
        <YAxis
          axisLine={false}
          tickFormatter={DataFormatter}
          tick={false}
          tickLine={false}
          width={0}
        />
        {/* <Legend
          wrapperStyle={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
        /> */}
        <Bar
          dataKey="value"
          name={cases}
          fill={color}
          barSize="10%"
          radius={[6, 6, 0, 0]}
        >
          <LabelList dataKey="valueString" position="top" fill={color} />
        </Bar>
      </BarChart>
    </div>
  )
}

export default BarChartFigure
