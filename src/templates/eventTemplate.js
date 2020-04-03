import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const PageTitle = styled.h1`
  padding: 1rem;
  margin-bottom: 0;
  max-width: 500px;
  background-color: #f11;
  color: white;
`

const EventMeta = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  max-width: 500px;
  border: 3px solid #f11;
`

export default function EventTemplate({data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO 
        title={frontmatter.title}
      />
      <article>
        <PageTitle>{frontmatter.title}</PageTitle>
        <EventMeta>
          {frontmatter.start_date < frontmatter.end_date ? (
            <Fragment>
              <p style={{
                marginBottom: `0`,
              }}>
                From: {frontmatter.start_date_as_string}<br></br>
                to: {frontmatter.end_date_as_string}<br></br>
                in: {frontmatter.city}, {frontmatter.country}<br></br>
                Website: <a href={frontmatter.website_address}>{frontmatter.website_name}</a>
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <p>
                Date: {frontmatter.start_date_as_string}<br></br>
                in: {frontmatter.city}, {frontmatter.country}<br></br>
                Website: <a href={frontmatter.website_address}>{frontmatter.website_name}</a>
              </p>
            </Fragment>
          )}
        </EventMeta>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const conferencePageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        start_date
        end_date
        path_date: start_date(formatString: "YYYY-MM-DD")
        start_date_as_string: start_date(formatString: "Do MMM YYYY")
        end_date_as_string: end_date(formatString: "Do MMM YYYY")
        country
        city
        website_name
        website_address
      }
    }
  }
`