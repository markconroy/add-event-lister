import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeading from "../components/global-styles/headings.js"

const IndexPage = ({ data }) => (
  <Layout>
    
    <SEO title="Free Developer Events" />

    <StyledHeading h1>Free Developer Events</StyledHeading>

    <p>{data.allMarkdownRemark.edges.length} Upcoming Developer Events</p>
    <p>Browse:
      <ul>
        <li><Link to="/events">All Events ({data.allMarkdownRemark.edges.length})</Link></li>
        <li><Link to="/countries">By Country ({data.allMarkdownRemark.countriesGroup.length})</Link></li>
        <li><Link to="/cities">By City ({data.allMarkdownRemark.cityGroup.length})</Link></li>
      </ul>
    </p>

  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
  {
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
    }
  }
`