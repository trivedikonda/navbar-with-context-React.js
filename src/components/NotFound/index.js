import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backgroundTheme = isDarkTheme ? 'dark-theme-background' : null
      const headingColor = isDarkTheme ? 'dark-theme-heading' : null
      const paragraphColor = isDarkTheme ? 'dark-theme-paragraph' : null
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${backgroundTheme}`}>
            <img
              height={350}
              width={350}
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />
            <h1 className={`heading ${headingColor}`}>Lost Your Way?</h1>
            <p className={`paragraph ${paragraphColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
