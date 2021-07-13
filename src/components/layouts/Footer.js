import React from 'react'
import { WrapperFooter, Brand, FooterSection, Link, LinkSocial, LinkWrapper, LinkWrapperSocial } from '../../StyledComponents/layouts/Footer.style'


export default function Footer() {



    return (
        <WrapperFooter>
                <section>
                    <Brand>Shortly</Brand>
                </section>
                <FooterSection>
                    <p>Features</p>
                    <LinkWrapper>
                        <Link to="/">Link Shortening</Link>
                        <Link to="/">Branded Links</Link>
                        <Link to="/">Analytics</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <p>Resources</p>
                    <LinkWrapper>
                        <Link to="/">Blog</Link>
                        <Link to="/">Developers</Link>
                        <Link to="/">Support</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <p>Company</p>
                    <LinkWrapper>
                        <Link to="/">About</Link>
                        <Link to="/">Our Team</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Contact</Link>
                    </LinkWrapper>
                </FooterSection>
                <FooterSection>
                    <LinkWrapperSocial>
                        <LinkSocial to="/"><i className="fab fa-facebook-square"></i></LinkSocial> 
                        <LinkSocial to="/"> <i className="fab fa-twitter"></i></LinkSocial>
                        <LinkSocial to="/"><i className="fab fa-pinterest"></i></LinkSocial>
                        <LinkSocial to="/"><i className="fab fa-instagram"></i></LinkSocial>
                    </LinkWrapperSocial>
                    
                </FooterSection>
        </WrapperFooter>
    )
}
