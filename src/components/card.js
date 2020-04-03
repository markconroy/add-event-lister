import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  border-left: 4px solid #f11;
  border-top: 4px solid #f11;
  width: 100%;
  box-shadow: 
    4px 4px 0px 0px #fff,
    8px 8px 0px 0px #f11
  ;
  &:focus-within,
  &:hover {
    background-color: #f11;
  }
  a {
    display: block;
    height: 100%;
    color: black;
    text-decoration: none;
  }
  a:focus {
    outline: 4px dashed #f11;
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
  color: #f11;
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
