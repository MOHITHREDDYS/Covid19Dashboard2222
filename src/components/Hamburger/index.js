import {Link, withRouter} from 'react-router-dom'
// import {IoIosClose} from 'react-icons/io'

import './index.css'
import CovidContext from '../../context/CovidContext'

const Hamburger = props => (
  <CovidContext.Consumer>
    {value => {
      const {toggleHamburgerItems} = value

      const {match} = props
      const {url} = match

      const onClickingHamItems = () => {
        toggleHamburgerItems()
      }

      return (
        <div className="ham-container">
          <ul className="ham-list">
            <li>
              <Link
                to="/"
                className={`${url === '/' ? 'active-link' : ''} ham-link-item`}
                onClick={onClickingHamItems}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  url === '/about' ? 'active-link' : ''
                } ham-link-item`}
                onClick={onClickingHamItems}
              >
                About
              </Link>
            </li>
          </ul>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickingHamItems}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L8.58579 10L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L10 11.4142L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L11.4142 10L13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289L10 8.58579L7.70711 6.29289Z"
              fill="white"
            />
          </svg>
        </div>
      )
    }}
  </CovidContext.Consumer>
)

export default withRouter(Hamburger)
