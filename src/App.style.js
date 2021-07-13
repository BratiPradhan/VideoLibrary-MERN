import styled from 'styled-components'

export const WrapperGrid = styled.section`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-auto-rows: auto;
font-size: ${props => props.theme.fontSize};
/* background-color: ${props => props.theme.neutral.lighGray}; */
max-width: 100%;
`