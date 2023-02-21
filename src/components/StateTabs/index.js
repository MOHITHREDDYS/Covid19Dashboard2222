import './index.css'

const StateTabs = props => {
  const {
    tabDetails,
    activeTab,
    totalConfirmed,
    totalRecovered,
    totalActive,
    totalDeceased,
    changeActiveTab,
  } = props

  const {id, displayText, color, icon} = tabDetails
  let count = 0

  if (displayText === 'Confirmed') {
    count = totalConfirmed
  } else if (displayText === 'Active') {
    count = totalActive
  } else if (displayText === 'Recovered') {
    count = totalRecovered
  } else if (displayText === 'Deceased') {
    count = totalDeceased
  }

  let bgColor = ''
  if (activeTab === id && id === 'CONFIRMED') {
    bgColor = 'bg-confirmed'
  }
  if (activeTab === id && id === 'ACTIVE') {
    bgColor = 'bg-active'
  }
  if (activeTab === id && id === 'RECOVERED') {
    bgColor = 'bg-recovered'
  }
  if (activeTab === id && id === 'DECEASED') {
    bgColor = 'bg-deceased'
  }

  const onClickingTab = () => {
    changeActiveTab(id)
  }

  return (
    <>
      <button
        className={`total-count-container tab-button ${color} ${bgColor}`}
        onClick={onClickingTab}
        type="button"
      >
        <p className="total-name">{displayText}</p>
        {icon}
        <p className="total-count">{count}</p>
      </button>
    </>
  )
}

export default StateTabs
