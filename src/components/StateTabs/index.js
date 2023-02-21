import confirmedIcon from '../../confirmedIcon.svg'
import activeIcon from '../../activeIcon.svg'
import recoveredIcon from '../../recoveredIcon.svg'
import deceasedIcon from '../../deceasedIcon.svg'

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

  const {id, displayText, color} = tabDetails
  let count = 0
  let icon = ''
  let testId = ''
  let altText = ''

  if (displayText === 'Confirmed') {
    count = totalConfirmed
    icon = confirmedIcon
    testId = 'stateSpecificConfirmedCasesContainer'
    altText = 'state specific confirmed cases pic'
  } else if (displayText === 'Active') {
    count = totalActive
    icon = activeIcon
    testId = 'stateSpecificActiveCasesContainer'
    altText = 'state specific active cases pic'
  } else if (displayText === 'Recovered') {
    count = totalRecovered
    icon = recoveredIcon
    testId = 'stateSpecificRecoveredCasesContainer'
    altText = 'state specific recovered cases pic'
  } else if (displayText === 'Deceased') {
    count = totalDeceased
    icon = deceasedIcon
    testId = 'stateSpecificDeceasedCasesContainer'
    altText = 'state specific deceased cases pic'
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
    <div data-testid={testId}>
      <button
        className={`total-count-container tab-button ${color} ${bgColor}`}
        onClick={onClickingTab}
        type="button"
      >
        <p className="total-name">{displayText}</p>
        <img src={icon} alt={altText} className="total-icon" />
        <p className="total-count">{count}</p>
      </button>
    </div>
  )
}

export default StateTabs
