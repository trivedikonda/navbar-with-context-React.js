// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const navbarBackground = isDarkTheme
            ? 'navbar-dark-theme'
            : 'navbar-light-theme'
          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

          const themeImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          const linkTheme = isDarkTheme ? 'link-light-theme' : 'link-dark-theme'
          const onToggleThemeButton = () => {
            toggleTheme()
          }
          return (
            <nav className={`navbar-container ${navbarBackground}`}>
              <img width={50} height={50} src={logo} alt="website logo" />
              <ul className="links-container">
                <li className="each-route">
                  <Link to="/" className={`route-link ${linkTheme}`}>
                    Home
                  </Link>
                </li>
                <li className="each-route">
                  <Link to="/about" className={`route-link ${linkTheme}`}>
                    About
                  </Link>
                </li>
              </ul>
              <button
                className="button"
                data-testid="theme"
                type="button"
                onClick={onToggleThemeButton}
              >
                <img width={30} height={30} src={themeImage} alt="theme" />
              </button>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
