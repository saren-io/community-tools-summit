import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { BsArrowUpRight } from "react-icons/bs"
import icon from "../../images/icon.png"
import logo from "../../images/logos/side_by_side.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <AnchorLink to="/#banner" className="logo">
        <img src={logo} alt="Saren" />
      </AnchorLink>
      
    </div>
  )
}

const Header = () => (
  <header className="container">
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
