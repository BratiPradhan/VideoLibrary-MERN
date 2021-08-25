import styled from 'styled-components'

export const WrapperVideoListing = styled.section`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-auto-rows: auto;
color: ${props => props.theme.neutral.veryDarkViolet};
`

export const VideosHeader = styled.p`
font-size: 2rem;
font-weight: 700;
grid-column: 2 / -2;
`

export const VideosSubHeader = styled.p`
font-size: 1.2rem;
font-weight: 700;
grid-column: 2 / -2;
`