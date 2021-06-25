import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BsArrowUpRight } from "react-icons/bs"
import icon from "../../images/icon.png"
import logo from "../../images/logos/side_by_side.png"

const ResponsiveNavbar = () => {
  return (
    <div className="responsive-navbar">
      <AnchorLink to="/#banner" className="logo">
        <img src={icon} alt="Saren" />
      </AnchorLink>
      
    </div>
  )
}

const LargeNavbar = () => {
  return (
    <div className="large-navbar">
      <AnchorLink to="/#banner" className="logo">
        <img src={logo} alt="Saren" />
      </AnchorLink>
      <ul className="links">
        
      </ul>
    </div>
  )
}

const Header = () => (
  <header className="container">
    <ResponsiveNavbar />
    <LargeNavbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
