import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const WrapperFooter = styled.footer `
        grid-column: 1 / -1;
        background-color: ${props => props.theme.neutral.veryDarkViolet};
        display: flex;
        justify-content: space-evenly;
        color: white;
        font-size: 1rem;
        font-weight: 700;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
  }
    `
export const LinkWrapper = styled.ul `
        display: flex;
        flex-direction: column;
        padding: 0;
    `

export const Link = styled(NavLink) `
        margin: 0.2rem 0rem ;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        &:hover{
            color: ${props => props.theme.primary.cyan };
        }

        @media only screen and (max-width: 600px) {
            font-size: 0.8rem;
  }
    `

export const LinkWrapperSocial = styled(LinkWrapper)
`
    flex-direction: row;
    justify-content: space-evenly;
    `

export const LinkSocial = styled(Link)
`
        font-size: ${props => props.theme.fontSize};
        margin: 0.4rem;
    `

export const Brand = styled.h1 `
        font-size: 1.8rem;
        font-weight: 700;
        /* margin: 0; */
    `

export const FooterSection = styled.section `
        margin: 1rem 0rem;
    `