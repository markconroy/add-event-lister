import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://mark.ie">Mark Conroy</a>
  </footer>
)

export default Footer
