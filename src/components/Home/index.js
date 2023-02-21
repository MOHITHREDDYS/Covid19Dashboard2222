import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import Footer from '../Footer'
import Hamburger from '../Hamburger'
import confirmedIcon from '../../confirmedIcon.svg'
import activeIcon from '../../activeIcon.svg'
import recoveredIcon from '../../recoveredIcon.svg'
import deceasedIcon from '../../deceasedIcon.svg'

import './index.css'
import CovidContext from '../../context/CovidContext'
import StateWiseTable from '../StateWiseTable'

// import SearchDropDown from '../DropDown'
import SearchResults from '../SearchResults'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

/* const apiStatusList = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
} */

class Home extends Component {
  state = {
    searchInput: '',
    // apiStatus: apiStatusList.initial,
    requiredList: [],
    totalConfirmed: 0,
    totalActive: 0,
    totalRecovered: 0,
    totalDeceased: 0,
    selected: null,
  }

  componentDidMount() {
    this.getStateWiseData()
  }

  getStateWiseData = async () => {
    // this.setState({apiStatus: apiStatusList.loading})

    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()
      const requiredList = this.convertObjectsDataIntoListItemsUsingForInMethod(
        data,
      )

      return this.setState({
        /* apiStatus: apiStatusList.success, */ requiredList,
      })
    }
    return this.setState({
      /* apiStatus: apiStatusList.failure */
    })
  }

  convertObjectsDataIntoListItemsUsingForInMethod = data => {
    const resultList = []
    // getting keys of an object object
    const keyNames = Object.keys(data)

    let totalConfirmed = 0
    let totalActive = 0
    let totalRecovered = 0
    let totalDeceased = 0

    keyNames.forEach(keyName => {
      const isPresent = statesList.some(
        eachState => eachState.state_code === keyName,
      )

      if (data[keyName] && isPresent) {
        const {total} = data[keyName]
        // if the state's covid data is available we will store it or we will store 0
        const confirmed = total.confirmed ? total.confirmed : 0
        totalConfirmed += confirmed
        const deceased = total.deceased ? total.deceased : 0
        totalDeceased += deceased
        const recovered = total.recovered ? total.recovered : 0
        totalRecovered += recovered
        totalActive += confirmed - (deceased + recovered)
        const tested = total.tested ? total.tested : 0
        const population = data[keyName].meta.population
          ? data[keyName].meta.population
          : 0
        resultList.push({
          stateCode: keyName,
          name: statesList.find(eachState => eachState.state_code === keyName)
            .state_name,
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })
    this.setState({totalActive, totalConfirmed, totalDeceased, totalRecovered})
    return resultList
  }

  renderSuccessView = () => {
    const {
      totalConfirmed,
      totalActive,
      totalDeceased,
      totalRecovered,
      requiredList,
    } = this.state

    return (
      <>
        <div className="total-list-container">
          <div
            className="total-count-container confirmed"
            data-testid="countryWideConfirmedCases"
          >
            <p className="total-name">Confirmed</p>
            <img
              src={confirmedIcon}
              alt="country wide confirmed cases pic"
              className="total-icon"
            />
            <p className="total-count">{totalConfirmed}</p>
          </div>
          <div
            className="total-count-container active"
            data-testid="countryWideActiveCases"
          >
            <p className="total-name">Active</p>
            <img
              src={activeIcon}
              alt="country wide active cases pic"
              className="total-icon"
            />
            <p className="total-count">{totalActive}</p>
          </div>
          <div
            className="total-count-container recovered"
            data-testid="countryWideRecoveredCases"
          >
            <p className="total-name">Recovered</p>
            <img
              src={recoveredIcon}
              alt="country wide recovered cases pic"
              className="total-icon"
            />
            <p className="total-count">{totalRecovered}</p>
          </div>
          <div
            className="total-count-container deceased"
            data-testid="countryWideDeceasedCases"
          >
            <p className="total-name">Deceased</p>
            <img
              src={deceasedIcon}
              alt="country wide deceased cases pic"
              className="total-icon"
            />
            <p className="total-count">{totalDeceased}</p>
          </div>
        </div>
        <StateWiseTable
          covidDetailsList={requiredList}
          ascendingOrder={this.ascendingOrder}
          descendingOrder={this.descendingOrder}
        />
      </>
    )
  }

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  handleChange = value => {
    this.setState({
      selected: value,
    })
  }

  compare = (a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }

  comparing = (a, b) => {
    if (a.name < b.name) {
      return 1
    }
    if (a.name > b.name) {
      return -1
    }
    return 0
  }

  ascendingOrder = () => {
    const {requiredList} = this.state

    const orderedList = requiredList.sort(this.compare)
    this.setState({requiredList: orderedList})
  }

  descendingOrder = () => {
    const {requiredList} = this.state

    const orderedList = requiredList.sort(this.comparing)
    this.setState({requiredList: orderedList})
  }

  render() {
    const {selected, searchInput} = this.state
    console.log(selected)
    /* const dropDownList = statesList.map(state => ({
      value: state.state_code,
      label: state.state_name,
    })) */
    /* {
      // if (state.state_name.toLowerCase().includes(searchInput.toLowerCase())) {
      return {
        value: state.state_code,
        label: state.state_name,
      }
      // }
      // return null
    }) */

    const dropDownList = statesList.filter(state =>
      state.state_name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <CovidContext.Consumer>
        {value => {
          const {showHamburgerItems} = value
          return (
            <div className="home-bg-container">
              <Header />
              <div className="home-container">
                {showHamburgerItems && <Hamburger />}
                {!showHamburgerItems && (
                  <>
                    <div className="input-search-container">
                      {/* <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="search-icon"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.6561 10.0596H11.3144L14.8477 13.6096C15.1894 13.9512 15.1894 14.5096 14.8477 14.8512C14.5061 15.1929 13.9477 15.1929 13.6061 14.8512L10.0644 11.3096V10.6512L9.8394 10.4179C8.67274 11.4179 7.08107 11.9346 5.3894 11.6512C3.07274 11.2596 1.22274 9.32625 0.939405 6.99292C0.506071 3.46792 3.47274 0.50125 6.99774 0.934583C9.33107 1.21792 11.2644 3.06792 11.6561 5.38458C11.9394 7.07625 11.4227 8.66792 10.4227 9.83458L10.6561 10.0596ZM2.56421 6.30957C2.56421 8.38457 4.23921 10.0596 6.31421 10.0596C8.38921 10.0596 10.0642 8.38457 10.0642 6.30957C10.0642 4.23457 8.38921 2.55957 6.31421 2.55957C4.23921 2.55957 2.56421 4.23457 2.56421 6.30957Z"
                          fill="#94a3b8"
                        />
                      </svg> */}
                      <BsSearch className="search-icon" />

                      <input
                        type="text"
                        placeholder="Enter the state"
                        className="search-input"
                        value={searchInput}
                        onChange={this.onChangingSearchInput}
                      />
                    </div>
                    {/* <SearchDropDown
                      options={dropDownList}
                      onChange={this.handleChange}
                      selected={selected}
                    /> */}
                    {searchInput !== '' && (
                      <SearchResults dropDownList={dropDownList} />
                    )}
                    {searchInput === '' && this.renderSuccessView()}
                  </>
                )}
              </div>
              {!showHamburgerItems && searchInput === '' && <Footer />}
            </div>
          )
        }}
      </CovidContext.Consumer>
    )
  }
}

export default Home
