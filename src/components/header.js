import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sitelogo from '../images/archer-flog.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f5f5f5`,
      marginBottom: `1.45rem`,      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: `right`,
      }}
    >
      {/* <h1 style={{ 
        margin: 0,
        width: 250,
      }}>
        <Link
          to="/"
          style={{
            color: `#111`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <Link
        to="/"
      >
      Home
      </Link>

      <a href='#intro'>Intro</a>
      <a href='#skills'>Skills</a>
      <a href='#bio'>Biography</a>
      <a href='#product'>Product</a>
      <a href='#contact'>Contact</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
