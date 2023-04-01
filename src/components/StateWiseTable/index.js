import {FcGenericSortingDesc, FcGenericSortingAsc} from 'react-icons/fc'

import './index.css'

const StateWiseTable = props => {
  const {covidDetailsList, ascendingOrder, descendingOrder} = props

  const onClickingAsc = () => {
    ascendingOrder()
  }

  const onClickingDesc = () => {
    descendingOrder()
  }

  return (
    <div className="table-main-container" testid="stateWiseCovidDataTable">
      <div className="heading-row">
        <div className="state-heading-container">
          <p className="table-headings">States/UT</p>
          <button
            type="button"
            className="sorting-button"
            testid="ascendingSort"
            onClick={onClickingAsc}
          >
            <FcGenericSortingAsc className="sorting-icon" />
          </button>
          <button
            type="button"
            className="sorting-button"
            testid="descendingSort"
            onClick={onClickingDesc}
          >
            <FcGenericSortingDesc className="sorting-icon" />
          </button>
        </div>
        <p className="table-headings table-heading-2">Confirmed</p>
        <p className="table-headings table-heading-2">Active</p>
        <p className="table-headings table-heading-2">Recovered</p>
        <p className="table-headings table-heading-2">Deceased</p>
        <p className="table-headings table-heading-2">Population</p>
      </div>
      <ul className="table-container">
        {covidDetailsList.map(eachState => {
          const {
            stateCode,
            name,
            confirmed,
            deceased,
            recovered,
            active,
            population,
          } = eachState

          return (
            <li className="values-row" key={stateCode}>
              <p className="table-values state-values">{name}</p>
              <p className="table-values table-heading-2 confirmed">
                {confirmed}
              </p>
              <p className="table-values table-heading-2 active">{active}</p>
              <p className="table-values table-heading-2 recovered">
                {recovered}
              </p>
              <p className="table-values table-heading-2 deceased">
                {deceased}
              </p>
              <p className="table-values table-heading-2 population">
                {population}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StateWiseTable
