import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Header = () => (

  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            subtitle
            repo
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          borderBottom: `4px solid var(--primary)`
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.5rem 1rem`,
          }}
        >
          <p style={{ 
            margin: `0`,
            }}>
            <Link to="/">
              addEventLister
            <br></br>
            {data.site.siteMetadata.subtitle}</Link><br></br>
            <a href="https://annertech.com">A project of Annertech</a> | <a href={data.site.siteMetadata.repo}>Add Event</a>
          </p>
        </div>
      </header>
    )}
  />
)

export default Header
