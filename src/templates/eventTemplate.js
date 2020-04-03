import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Mark Conroy Strava Activities" />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.start_date_as_string}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const conferencePageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path_date: start_date(formatString: "YYYY-MM-DD")
        start_date_as_string: start_date(formatString: "Do MMM YYYY")
        end_date_as_string: end_date(formatString: "Do MMM YYYY")
        title
      }
    }
  }
`