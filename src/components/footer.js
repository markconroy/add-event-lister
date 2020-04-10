import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: 3px solid var(--primary);
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
const Footer = () => (

  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                city
                country
              }
            }
          }
          cityGroup: group(field: frontmatter___city) {
            totalCount
          }
          countriesGroup: group(field: frontmatter___country) {
            totalCount
          }
          onlineGroup: group(field: frontmatter___online) {
            totalCount
          }
          physicalGroup: group(field: frontmatter___country) {
            totalCount
          }
        }
      }
    `}
    render={data => (
      <StyledFooter>
      <div className="footer__inner">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">{data.allMarkdownRemark.edges.length} Events</Link></li>
            <li><Link to="/events/cities">{data.allMarkdownRemark.cityGroup.length} Cities</Link></li>
            <li><Link to="/events/countries">{data.allMarkdownRemark.countriesGroup.length} Countries</Link></li>
            <li><Link to="/events/online">Online Events</Link></li>
            <li><Link to="/events/physical">Physical Events</Link></li>
          </ul>
        </nav>
        <p>
          © {new Date().getFullYear()}, A project of <a href="https://annertech.com">Annertech</a>, built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </p>
      </div>
    </StyledFooter>
  )}
/>

)

export default Footer