import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  border-left: 4px solid #b30;
  border-top: 4px solid #b30;
  width: 100%;
  box-shadow: 
    4px 4px 0px 0px #fff,
    8px 8px 0px 0px #b30
  ;
  &:focus-within,
  &:hover {
    background-color: #b30;
  }
  a {
    display: block;
    height: 100%;
    color: black;
    text-decoration: none;
  }
  a:focus {
    outline: 4px dashed #b30;
  }
  a:focus,
  a:hover {
    color: white;
  }
  a:focus h2,
  a:hover h2 {
    text-decoration: underline;
    color: white;
  }
`

const CardHeading = styled.h2`
  margin-bottom: 0;
  padding: .5rem 1rem 0;
  color: #b30;
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
              <strong>From:</strong> {cardStartDateString}<br></br>
              <strong>to:</strong> {cardEndDateString}<br></br>
              <strong>in:</strong> {cardCity}, {cardCountry}
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p>
              <strong>Date:</strong> {cardStartDateString}<br></br>
              <strong>in:</strong> {cardCity}, {cardCountry}
            </p>
          </Fragment>
        )}
      </CardBody>
    </Link>
  </Article>
)

export default Card
