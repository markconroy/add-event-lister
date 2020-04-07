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
        <li><Link to="/events">All Events</Link></li>
        <li><Link to="/countries">By Country</Link></li>
        <li><Link to="/cities">By City</Link></li>
      </ul>
    </p>

  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
  {
    allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___start_date] }
      ) {
      edges {
        node {
          frontmatter {
            title
            start_date: start_date
            end_date: end_date
            path_date: start_date(formatString: "YYYY-MM-DD")
            start_date_as_string: start_date(formatString: "Do MMMM YYYY")
            end_date_as_string: end_date(formatString: "Do MMMM YYYY")
            country
            city
            path
          }
          excerpt
        }
      }
    }
  }
`