import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const WrapperCategoriesHome = styled.article`
grid-column: 2  / -2;
color: ${props => props.theme.neutral.veryDarkViolet};
font-size: 1rem;
margin: 2rem 0rem;
`

export const HeaderCategories = styled.p`
font-size: 1.5rem;
font-weight: 700;
margin: 2rem 0rem;
`

export const CategoryList = styled.ul`
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
list-style-type: none;
`

export const CategoryCardWrapper = styled.li`
flex: 1 1 10rem;
margin: 0.5rem 1rem;
`

export const CategoryCardItem = styled(Card)`
/* flex: 1 1 10rem;
margin: 0.5rem 1rem; */
height: 18rem;
`

export const CategoryLink = styled(Link)`
color: ${props => props.theme.neutral.veryDarkViolet};
font-size: 1rem;
font-weight: 700;

&:hover{
            color: ${props => props.theme.neutral.grayishViolet };
            text-decoration: none;
        }
`



export const HeaderCategory = styled(HeaderCategories)`
font-size: 1.2rem;
`

export const TopicList = styled(CategoryList)`
flex-direction: column;
`

export const TopicLink = styled(CategoryLink)`
color: ${props => props.theme.primary.cyan};
`