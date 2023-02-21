import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import Header from '../Header'
import CovidContext from '../../context/CovidContext'
import Footer from '../Footer'
import Hamburger from '../Hamburger'

const apiStatusList = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

class About extends Component {
  state = {apiStatus: apiStatusList.initial, faqsList: []}

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    this.setState({apiStatus: apiStatusList.loading})

    const url = 'https://apis.ccbp.in/covid19-faqs'

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    this.setState({faqsList: data.faq, apiStatus: apiStatusList.success})
  }

  renderSuccessView = () => {
    const {faqsList} = this.state

    return (
      <div>
        <h1 className="about-heading">About</h1>
        <p className="about-last-update">Last update on 31th october 2021</p>
        <p className="about-ready">
          COVID-19 vaccines be ready for distribution
        </p>
        <ul className="about-list" data-testid="faqsUnorderedList">
          {faqsList.map(eachFaq => (
            <li>
              <p className="about-question">{eachFaq.question}</p>
              <p className="about-answer">{eachFaq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="aboutRouteLoader" className="about-spinner-container">
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

  renderDesiredView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusList.loading:
        return this.renderLoadingView()
      case apiStatusList.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <CovidContext.Consumer>
        {value => {
          const {showHamburgerItems} = value

          return (
            <div className="home-bg-container">
              <Header />
              <div className="about-container">
                {showHamburgerItems && <Hamburger />}
                {!showHamburgerItems && this.renderDesiredView()}
                {!showHamburgerItems && apiStatus === apiStatusList.success && (
                  <Footer />
                )}
              </div>
            </div>
          )
        }}
      </CovidContext.Consumer>
    )
  }
}

export default About
