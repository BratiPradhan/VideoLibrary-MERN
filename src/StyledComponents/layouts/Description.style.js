import styled from 'styled-components'

export const WrapperDescription = styled.ul`
grid-column: 1 / -1;
padding: 1.2rem 0.8rem;
margin: 2rem 0rem;
display: flex;
/* justify-content: space-between; */
/* flex-wrap: wrap; */
background-color: ${props => props.theme.neutral.lightGray};
list-style-type: none;
font-size: 1rem;

color: ${props => props.theme.neutral.veryDarkViolet};
font-weight: 700;

@media only screen and (max-width: 600px){
flex-wrap: wrap;
}
`

export const ListItem = styled.li`
/* flex: 1; */
display: flex;
/* justify-content: space-around; */

@media only screen and (max-width: 600px){
    /* flex: 100%; */
}
`

export const WrapperBadge = styled.div`
background-color: ${props => props.theme.neutral.gray};
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
width: 30px ;
height: 30px;
/* font-size: 0.6rem; */
margin: 0.4rem;
padding: 0.2rem;
`

export const DescBody = styled.p`
margin: 0rem;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
text-align: center;
`