import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const WrapperCategoriesHome = styled.article`
/* grid-column: 2  / -2; */
`

export const CategoryList = styled.ul`
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export const CategoryCardItem = styled(Card)`
width: 18rem;
margin: 0.5rem 0rem;
`