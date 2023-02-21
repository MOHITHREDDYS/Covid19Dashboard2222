import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class SearchResults extends Component {
  render() {
    const {dropDownList} = this.props
    console.log(dropDownList)
    return (
      <ul className="dropdown-list-container">
        {dropDownList.map(stateDetails => (
          <Link
            to={`/state/${stateDetails.state_code}`}
            className="dropdown-link-item"
          >
            <li className="dropdown-list-element">
              <p className="dropdown-name">{stateDetails.state_name}</p>
              <div className="dropdown-code-container">
                <p className="dropdown-code">{stateDetails.state_code}</p>
                <svg
                  className="dropdown-icon"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00004 2.66665C6.69855 2.66665 5.49882 2.77398 4.53585 2.90116C3.66919 3.01562 3.01568 3.66913 2.90122 4.53578C2.77404 5.49875 2.66671 6.69849 2.66671 7.99998C2.66671 9.30147 2.77404 10.5012 2.90122 11.4642C3.01568 12.3308 3.66919 12.9843 4.53584 13.0988C5.49882 13.226 6.69855 13.3333 8.00004 13.3333C9.30153 13.3333 10.5013 13.226 11.4642 13.0988C12.3309 12.9843 12.9844 12.3308 13.0989 11.4642C13.226 10.5012 13.3334 9.30147 13.3334 7.99998C13.3334 6.69849 13.226 5.49875 13.0989 4.53578C12.9844 3.66913 12.3309 3.01562 11.4642 2.90116C10.5013 2.77398 9.30153 2.66665 8.00004 2.66665ZM4.36127 1.57931C2.89674 1.77273 1.77279 2.89668 1.57937 4.36121C1.4464 5.36803 1.33337 6.6275 1.33337 7.99998C1.33337 9.37246 1.4464 10.6319 1.57937 11.6388C1.77279 13.1033 2.89674 14.2272 4.36127 14.4207C5.3681 14.5536 6.62756 14.6666 8.00004 14.6666C9.37252 14.6666 10.632 14.5536 11.6388 14.4207C13.1033 14.2272 14.2273 13.1033 14.4207 11.6388C14.5537 10.6319 14.6667 9.37246 14.6667 7.99998C14.6667 6.6275 14.5537 5.36803 14.4207 4.36121C14.2273 2.89668 13.1033 1.77273 11.6388 1.57931C10.632 1.44634 9.37253 1.33331 8.00004 1.33331C6.62756 1.33331 5.3681 1.44634 4.36127 1.57931Z"
                    fill="#FACC15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5286 5.19526C6.26825 5.45561 6.26825 5.87772 6.5286 6.13807L8.39052 8L6.5286 9.86193C6.26825 10.1223 6.26825 10.5444 6.5286 10.8047C6.78895 11.0651 7.21106 11.0651 7.4714 10.8047L9.80474 8.4714C10.0651 8.21106 10.0651 7.78895 9.80474 7.5286L7.4714 5.19526C7.21106 4.93491 6.78895 4.93491 6.5286 5.19526Z"
                    fill="#FACC15"
                  />
                </svg>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )
  }
}

export default SearchResults
