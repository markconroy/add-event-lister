import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Mark Conroy Strava Activities" />
    <h1>addEventLister</h1>
    <p>{data.allMarkdownRemark.edges.length} Upcoming Events</p>
    <p>Click an event title for more information.</p>
    <ul>
      {data.allMarkdownRemark.edges.map(edge => (
        <Fragment>
          <li>
            <article>
              <h2>
                <Link to={`${edge.node.frontmatter.path}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              {edge.node.frontmatter.start_date < edge.node.frontmatter.end_date 
                ? <Fragment>
                    <p>Starts: {edge.node.frontmatter.start_date_as_string}</p>
                    <p>Ends: {edge.node.frontmatter.end_date_as_string}</p>
                  </Fragment>
                : <Fragment>
                    <p>Date: {edge.node.frontmatter.start_date_as_string}</p>
                  </Fragment>
              }
              <p>Country: {edge.node.frontmatter.country}</p>
              <p>City: {edge.node.frontmatter.city}</p>
            </article>
          </li>
        </Fragment>
      ))}
    </ul>
    <Link to="/">Home</Link>
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
            start_date_as_string: start_date(formatString: "Do MMM YYYY")
            end_date_as_string: end_date(formatString: "Do MMM YYYY")
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