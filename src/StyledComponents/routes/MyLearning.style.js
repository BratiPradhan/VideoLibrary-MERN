import { Routes } from 'react-router-dom'
import styled from 'styled-components'

export const WrapperMyLearning = styled.section`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-auto-rows: auto;
`

export const WrapperNav = styled.article`
grid-column: 1 / -1;
`

export const WrapperRoutes = styled.article`
grid-column: 2  / -2
`

