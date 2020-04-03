import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  border-left: .5rem solid #333;
  width: 100%;
  background-color: #333;
  box-shadow: .5rem .5rem 0px 0px #333;
  a {
    display: block;
    height: 100%;
    color: white;
    text-decoration: none;
  }
  a:focus h2,
  a:hover h2 {
    text-decoration: underline;
  }
`

const CardHeading = styled.h2`
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  background: #333;
  color: white;
`

const CardBody = styled.div`
  padding: 1rem;
`

const Card = ({
  cardPath,
  cardTitle,
  cardCountry,
  cardCity,
  cardStartDate,
  cardEndDate,
  cardStartDateString,
  cardEndDateString,
}) => (
  <Article>
    <Link to={`${cardPath}`}>
      <CardHeading>{cardTitle}</CardHeading>

      <CardBody>
        {cardStartDate < cardEndDate ? (
          <Fragment>
            <p>
              From: {cardStartDateString}<br></br>
              to {cardEndDateString}
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p>Date: {cardStartDateString}</p>
          </Fragment>
        )}

        <p>
          {cardCity}, {cardCountry}
        </p>
      </CardBody>
    </Link>
  </Article>
)

export default Card
