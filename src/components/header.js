import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledHeader = styled.header`
  border-bottom: 4px solid var(--primary);

  .header__inner {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-between;
    > * {
      flex-basis: 50%;
    }
  }
  .header__link {
    text-decoration: none;
    background-color: var(--primary);
    display: inline-block;
    color: white;
    padding: .5rem;
    &:focus,
    &:hover {
      text-decoration: underline;
      background-color: white;
      color: var(--primary);
    }
  }
  a {
    /* display: block; */
  }
  .header__support {
    padding-left: 1rem;
    text-align: right;
    max-width: 250px;
  }
`

const Header = () => (

  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            subtitle
            repo
          }
        },
        imageAnnertechLogo: file(relativePath: { eq: "annertech.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledHeader>
        <div className="header__inner">
          <div className="header__branding">
            <p>
              <Link className="header__link" to="/">
                addEventLister
                <br></br>
                {data.site.siteMetadata.subtitle}
              </Link>
            </p>
          </div>
          <div className="header__support">
              <p>
                A project of Annertech
                <a href="https://annertech.com"><Img fluid={data.imageAnnertechLogo.childImageSharp.fluid} /></a>
              </p>
            <a className="header__link" href={data.site.siteMetadata.repo}>Add Event</a>
          </div>
        </div>
      </StyledHeader>
    )}
  />
)

export default Header
