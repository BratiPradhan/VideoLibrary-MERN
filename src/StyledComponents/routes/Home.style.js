import styled from 'styled-components'

export const WrapperHome = styled.section`
grid-column: 1 / -1;
/* display: flex;
flex-direction: column; */

display: grid;
grid-template-columns: repeat(12, 1fr);
grid-auto-rows: auto;
`