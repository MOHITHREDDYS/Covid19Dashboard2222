import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'
import Hamburger from '../Hamburger'
import CovidContext from '../../context/CovidContext'

import './index.css'
import StateTabs from '../StateTabs'
import BarChartFigure from '../BarChart'
import DailySpreadTrend from '../DailySpreadTrend'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680331012/Group_7362Andaman_and_Nicobar_ru5oog.png',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680331011/Group_7354Andhra_Pradesh_mnqkyk.png',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680331010/Group_7340Arunachal_Pradesh_rafucd.png',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680331011/Group_7341Assam_gbwoju.png',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680331010/Group_7335Bihar_vfg9vz.png',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680331011/Group_7361Chandigarh_qfvtvh.png',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680331012/Group_7353chattisgarh_i9pgg8.png',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680333775/Group_7357Dadra_And_Daman_uz1tgf.png',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680333774/Group_7358Delhi_nl6pb4.png',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680333774/Group_7349Goa_kzca5p.png',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680333774/Group_7337Gujarat_s656w4.png',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680333774/Group_7332Haryana_ozifgb.png',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680333774/Group_7364Himachal_Pradesh_ajd4p6.png',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680329581/Group_7328jammu_matkse.png',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680334446/Group_7342Jharkhand_tbm1ix.png',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680334446/Group_7339karnataka_pasnrv.png',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680334445/Group_7355Kerala_sf9pmi.png',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680334992/Group_7363Ladakh_egqqoj.png',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680334445/Group_7359Lakshdweep_scesus.png',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680334446/Group_7350Maharashtra_nhycjz.png',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680334446/Group_7336Madhya_Pradesh_nmstyb.png',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335659/Group_7346Manipur_lidtoa.png',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335658/Group_7344Meghalaya_umbfx5.png',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335659/Group_7347Mizoram_k4zttk.png',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335658/Group_7345Nagaland_uiwqt5.png',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335658/Group_7348Odisha_r5yxek.png',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335658/Group_7360Puducherry_p0sujg.png',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335658/Group_7330Punjab_zmiyf5.png',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335658/Group_7333Rajasthan_kzna7k.png',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335657/Group_7338Sikkim_wsjdob.png',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335657/Group_7356Tamilnadu_fccffq.png',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335657/Group_7351Telengana_u1qekj.png',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335657/Group_7352Tripura_rlolyt.png',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335657/Group_7334Uttar_Pradesh_nakdv9.png',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335657/Group_7331Uttarakhand_ucqxbt.png',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    image_link:
      'https://res.cloudinary.com/dhqatgxcd/image/upload/v1680335657/Group_7343West_Bengal_deavay.png',
  },
]

const stateTabs = [
  {
    id: 'CONFIRMED',
    displayText: 'Confirmed',
    color: 'confirmed',
  },
  {
    id: 'ACTIVE',
    displayText: 'Active',
    color: 'active',
  },
  {
    id: 'RECOVERED',
    displayText: 'Recovered',
    color: 'recovered',
  },
  {
    id: 'DECEASED',
    displayText: 'Deceased',
    color: 'deceased',
  },
]

const apiStatusList = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

class State extends Component {
  state = {
    // stateApiStatus: apiStatusList.initial,
    // timeLineApiStatus: apiStatusList.initial,
    apiStatus: apiStatusList.initial,
    stateName: '',
    stateImage: '',
    lastUpdated: '',
    totalActive: 0,
    totalConfirmed: 0,
    totalDeceased: 0,
    totalRecovered: 0,
    districtsList: [],
    activeTab: stateTabs[0].id,
    activeColor: stateTabs[0].color,
    chartDetails: [],
  }

  componentDidMount() {
    this.getDetails()
    this.getChartDetails()
  }

  changeActiveTab = id => {
    const tab = stateTabs.filter(eachTab => eachTab.id === id)
    this.setState({activeTab: tab[0].id, activeColor: tab[0].color})
  }

  getChartDetails = async () => {
    // this.setState({timeLineApiStatus: apiStatusList.loading})
    const {match} = this.props
    const {params} = match
    const {code} = params

    const url = `https://apis.ccbp.in/covid19-timelines-data/${code}`

    const response = await fetch(url)

    const data = await response.json()

    if ('error_msg' in data === false) {
      const keyNames = Object.keys(data[code].dates)

      /* const dateStr = new Date(keyNames[keyNames.length - 1])

      const updatedMonth = dateStr.getMonth()

      const monthName = this.getMonthName(updatedMonth)

      const day = dateStr.getDate()

      const dayString = this.getString(day)

      const year = dateStr.getFullYear()

      const lastUpdatedDate = `${monthName} ${dayString} ${year}` */

      const chartDetails = keyNames.map(date => ({
        date,
        confirmed: data[code].dates[date].total.confirmed,
        deceased: data[code].dates[date].total.deceased,
        recovered: data[code].dates[date].total.recovered,
        tested: data[code].dates[date].total.tested,
        active:
          data[code].dates[date].total.confirmed -
          (data[code].dates[date].total.recovered +
            data[code].dates[date].total.deceased),
      }))

      return this.setState({
        chartDetails,
        apiStatus: apiStatusList.success,
        // lastUpdated: lastUpdatedDate,
      })
    }
    return this.setState({apiStatus: apiStatusList.success})
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusList.loading})
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'

    const {match} = this.props
    const {params} = match
    const {code} = params

    const stateName = statesList.find(
      eachState => eachState.state_code === code,
    )

    const response = await fetch(url)
    const response1 = await fetch('https://apis.ccbp.in/covid19-state-ids')
    const data1 = await response1.json()
    console.log(data1)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)

      const stateFromData = data[code]
      const {districts, meta, total} = stateFromData
      const dateStr = new Date(meta.last_updated)

      const updatedMonth = dateStr.getMonth()

      const monthName = this.getMonthName(updatedMonth)

      const day = dateStr.getDate()
      const dayString = this.getString(day)

      const year = dateStr.getFullYear()

      const lastUpdatedDate = `${monthName} ${dayString} ${year}`

      const districtsList =
        districts !== undefined
          ? this.convertObjectsDataIntoListItemsUsingForInMethod(districts)
          : []

      const totalConfirmed = total.confirmed ? total.confirmed : 0
      const totalDeceased = total.deceased ? total.deceased : 0
      const totalRecovered = total.recovered ? total.recovered : 0
      const totalActive = totalConfirmed - (totalRecovered + totalDeceased)
      const totalTested = total.tested ? total.tested : 0
      this.setState({
        districtsList,
        lastUpdated: lastUpdatedDate,
        stateName: stateName !== undefined && stateName.state_name,
        stateImage: stateName.image_link,
        // stateApiStatus: apiStatusList.success,
        totalConfirmed,
        totalDeceased,
        totalRecovered,
        totalActive,
        totalTested,
      })
    }
  }

  getString = number => {
    let requiredstring

    const numberString = JSON.stringify(number)
    const lastNumber = parseInt(numberString[numberString.length - 1])

    if (lastNumber === 1) {
      requiredstring = number.toString().concat('st')
    } else if (lastNumber === 2) {
      requiredstring = number.toLocaleString().concat('nd')
    } else if (lastNumber === 3) {
      requiredstring = number.toLocaleString().concat('rd')
    } else {
      requiredstring = number.toLocaleString().concat('th')
    }

    return requiredstring
  }

  getMonthName = month => {
    const d = new Date()
    d.setMonth(month)
    const monthName = d.toLocaleString('default', {month: 'long'})
    return monthName.toLowerCase()
  }

  convertObjectsDataIntoListItemsUsingForInMethod = data => {
    const resultList = []
    // getting keys of an object object
    const keyNames = Object.keys(data)

    /* let totalConfirmed = 0
    let totalActive = 0
    let totalRecovered = 0
    let totalDeceased = 0
    let totalTested = 0 */

    keyNames.forEach(keyName => {
      /* const isPresent = statesList.some(
        eachState => eachState.state_code === keyName,
      ) */

      const {total} = data[keyName]
      // if the state's covid data is available we will store it or we will store 0
      const confirmed = total.confirmed ? total.confirmed : 0
      // totalConfirmed += confirmed
      const deceased = total.deceased ? total.deceased : 0
      // totalDeceased += deceased
      const recovered = total.recovered ? total.recovered : 0
      // totalRecovered += recovered
      // totalActive += confirmed - (deceased + recovered)
      const tested = total.tested ? total.tested : 0
      // totalTested += tested
      resultList.push({
        districtName: keyName,
        confirmed,
        deceased,
        recovered,
        tested,
        active: confirmed - (deceased + recovered),
      })
    })
    /* this.setState({
      totalActive,
      totalConfirmed,
      totalDeceased,
      totalRecovered,
      totalTested,
    }) */
    return resultList
  }

  renderStateSuccessView = () => {
    const {
      stateName,
      stateImage,
      lastUpdated,
      totalTested,
      activeTab,
      totalRecovered,
      totalConfirmed,
      totalActive,
      totalDeceased,
      activeColor,
      districtsList,
    } = this.state

    const objectKey = activeTab.toLowerCase()

    const topDistricts = districtsList
      .sort((a, b) => a[objectKey] - b[objectKey])
      .reverse()
    const requiredDistricts = topDistricts.map(district => ({
      name: district.districtName,
      number: district[objectKey],
    }))

    return (
      <CovidContext.Consumer>
        {value => {
          const {showHamburgerItems} = value
          return (
            <>
              <div className="home-container">
                {showHamburgerItems && <Hamburger />}
                {!showHamburgerItems && (
                  <>
                    <div className="state-and-total-tested-container">
                      <div>
                        <h1 className="state-name">{stateName}</h1>
                        <p className="last-updated-date">
                          Last update on {lastUpdated}.
                        </p>
                      </div>
                      <div>
                        <p className="tested-heading">Tested</p>
                        <p className="tested-people">{totalTested}</p>
                      </div>
                    </div>
                    {/* this.showTabs() */}
                    <div className="total-list-container">
                      {stateTabs.map(eachTab => (
                        <StateTabs
                          key={eachTab.id}
                          tabDetails={eachTab}
                          activeTab={activeTab}
                          totalRecovered={totalRecovered}
                          totalConfirmed={totalConfirmed}
                          totalActive={totalActive}
                          totalDeceased={totalDeceased}
                          changeActiveTab={this.changeActiveTab}
                        />
                      ))}
                    </div>
                    <div className="state-image-details-container">
                      <img
                        src={stateImage}
                        alt={stateName}
                        className="state-image"
                      />
                    </div>
                    <div className="top-districts-container">
                      <h1 className={`top-districts-heading ${activeColor}`}>
                        Top Districts
                      </h1>
                      <ul
                        className="top-districts-list-container"
                        data-testid="topDistrictsUnorderedList"
                      >
                        {requiredDistricts.map(district => {
                          const {name, number} = district

                          return (
                            <li className="top-district-element" key={name}>
                              <p className="top-number">{number}</p>
                              <p className="top-district">{name}</p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </>
          )
        }}
      </CovidContext.Consumer>
    )
  }

  renderTimelineSuccessView = () => {
    const {activeTab, chartDetails} = this.state

    return (
      <CovidContext.Consumer>
        {value => {
          const {showHamburgerItems} = value
          return (
            <>
              <div className="home-container">
                {!showHamburgerItems && (
                  <>
                    <div className="top-districts-container">
                      <BarChartFigure
                        chartDetails={chartDetails}
                        activeTab={activeTab}
                      />
                    </div>
                    <div
                      className="daily-spread-container"
                      data-testid="lineChartsContainer"
                    >
                      <h1 className="daily-spread-heading">
                        Daily Spread Trends
                      </h1>
                      <DailySpreadTrend
                        chartDetails={chartDetails}
                        objectKey="confirmed"
                        color="#ff073a"
                        bgColor="#331427"
                        name="Confirmed"
                      />
                      <DailySpreadTrend
                        chartDetails={chartDetails}
                        objectKey="active"
                        color="#007BFF"
                        bgColor="#132240"
                        name="Total Active"
                      />
                      <DailySpreadTrend
                        chartDetails={chartDetails}
                        objectKey="recovered"
                        color="#27A243"
                        bgColor="#182829"
                        name="Recovered"
                      />
                      <DailySpreadTrend
                        chartDetails={chartDetails}
                        objectKey="deceased"
                        color="#6C757D"
                        bgColor="#1C1C2B"
                        name="Deceased"
                      />
                      <DailySpreadTrend
                        chartDetails={chartDetails}
                        objectKey="tested"
                        color="#9673B9"
                        bgColor="#230F41"
                        name="Tested"
                      />
                    </div>
                  </>
                )}
              </div>
              {!showHamburgerItems && <Footer />}
            </>
          )
        }}
      </CovidContext.Consumer>
    )
  }

  renderStateLoadingView = () => (
    <div data-testid="stateDetailsLoader" className="spinner-container">
      <Loader
        type="TailSpin"
        color="#007bff"
        height="60"
        width="60"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        radius={0}
      />
    </div>
  )

  renderTimelineLoadingView = () => (
    <div data-testid="timelinesDataLoader" className="spinner-container">
      <Loader
        type="TailSpin"
        color="#007bff"
        height="60"
        width="60"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        radius={0}
      />
    </div>
  )

  getFirstView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.loading:
        return this.renderStateLoadingView()
      case apiStatusList.success:
        return this.renderStateSuccessView()
      default:
        return null
    }
  }

  getSecondView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.loading:
        return this.renderTimelineLoadingView()
      case apiStatusList.success:
        return this.renderTimelineSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="home-bg-container">
        <Header />
        {this.getFirstView()}
        {this.getSecondView()}
      </div>
    )
  }
}

export default State
