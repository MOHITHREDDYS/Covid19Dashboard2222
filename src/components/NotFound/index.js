import './index.css'
import icon from '../../notFound.svg'

const NotFound = () => {
  console.log('Not Found')

  return (
    <div className="not-found-bg-container">
      <img src={icon} alt="not found" className="not-found-image" />

      <h1 className="not-found-heading">Page Not Found</h1>
      <h1 className="not-found-heading-1">PAGE NOT FOUND</h1>
      <p className="not-found-para">
        we&apos;re sorry, the page you requested could not be found
      </p>
      <p className="not-found-para">Please go back to the homepage</p>
      <button type="button" className="home-button">
        Home
      </button>
    </div>
  )
}

export default NotFound
