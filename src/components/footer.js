import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 3px solid #f11;
  ul {
    display: flex;
    margin: 0;
  }
  li {
    list-style: none;
    margin-right: 1rem;
  }
  .footer__inner {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.5rem 1rem;
  }
`
const Footer = ({ }) => (
  <StyledFooter>
    <div className="footer__inner">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">All Events</Link></li>
        <li><Link to="/countries">By Country</Link></li>
        <li><Link to="/cities">By City</Link></li>
        </ul>
      </nav>
      <p>
        © {new Date().getFullYear()}, Built by <a href="https://mark.ie">Mark Conroy</a>, using <a href="https://www.gatsbyjs.org">Gatsby</a>.
      </p>
    </div>
  </StyledFooter>
)

export default Footer