import styled from 'styled-components'

export const WrapperIntroduction = styled.article`
grid-column: 2 / -2;
display: flex;
flex-direction: column;
flex-wrap: wrap;
font-size: 1rem;
font-weight: 500;
color: ${props => props.theme.neutral.veryDarkBlue};
margin: 4rem 0rem;
`

export const HeaderIntro = styled.p`
font-size: 1.8rem;
font-weight: 700;
color: ${props => props.theme.neutral.veryDarkViolet};
`

export const Quote = styled.p`
color: ${props => props.theme.neutral.grayishViolet};
`