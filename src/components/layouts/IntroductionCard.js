import React from 'react'

import { HeaderIntro, Quote, WrapperIntroduction } from '../../StyledComponents/layouts/Introduction.style'

export default function IntroductionCard() {
    return (
        <WrapperIntroduction>
            <HeaderIntro>A broad selection of videos to learn from</HeaderIntro>
            <p>Choose any topic you want to be creative for. We are constantly adding more videos to make you more creative.</p>
            <Quote>"Utilizing waste <strong>creatively</strong>  is an art and you are an artist."</Quote>
        </WrapperIntroduction>
    )
}
