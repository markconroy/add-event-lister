/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const eventPageTemplate = path.resolve(`src/templates/eventTemplate.js`)
  const countryPageTemplate = path.resolve("src/templates/countryTemplate.js")

  const result = await graphql(`
    {
      eventsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___start_date] }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      countriesRemark: allMarkdownRemark {
        group(field: frontmatter___country) {
          fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const events = result.data.eventsRemark.edges
  events.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: eventPageTemplate,
      context: {},
    })
  })

  const countries = result.data.countriesRemark.group
  countries.forEach(country => {
    createPage({
      path: `/countries/${_.kebabCase(country.fieldValue)}`,
      component: countryPageTemplate,
      context: {
        country: country.fieldValue,
      },
    })
  })
}
