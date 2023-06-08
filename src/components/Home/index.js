// Write your code here
import './index.css'

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeRouteImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const containerTheme = isDarkTheme ? 'container-dark' : null

      const headingColor = isDarkTheme ? 'heading-light' : 'heading-dark'

      return (
        <>
          <Navbar />
          <div className={`home-container ${containerTheme}`}>
            <img width={100} height={100} src={homeRouteImage} alt="home" />
            <h1 className={`route-heading ${headingColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
