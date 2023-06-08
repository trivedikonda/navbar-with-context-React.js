// Write your code here
import './index.css'

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutRouteImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const containerTheme = isDarkTheme ? 'container-dark' : null

      const headingColor = isDarkTheme ? 'heading-light' : 'heading-dark'

      return (
        <>
          <Navbar />
          <div className={`home-container ${containerTheme}`}>
            <img width={80} height={80} src={aboutRouteImage} alt="about" />
            <h1 className={`route-heading ${headingColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
