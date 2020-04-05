import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
    <p>
      © {new Date().getFullYear()}, Built by <a href="https://mark.ie">Mark Conroy</a>, using <a href="https://www.gatsbyjs.org">Gatsby</a>.
    </p>
  </footer>
)

export default Footer
