import styled, { css } from "styled-components"

// Using a h1 here as our default, but it will be overridden each time it's used, like so:
// <StyledHeading as="h2">Heading Text Here</StyledHeading>

const StyledHeading = styled.h1`
  color: #b30;
  ${props => props.h1 && css `
    padding-top: 1rem;
  `}
  ${props => props.hasMetaData && css `
    max-width: 500px;
    margin-bottom: 0;
  `}
  ${props => props.reversed && css`
    color: white;
    background-color: #b30;
    padding: 1rem;
  `}
`

export default StyledHeading