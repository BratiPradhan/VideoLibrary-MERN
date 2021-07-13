import React from 'react'
import CarouselComponent from '../layouts/CarouselComponent'
import CategoriesHome from '../layouts/CategoriesHome'
import IntroductionCard from '../layouts/IntroductionCard'
// import { Categories } from '../layouts/object'

import { WrapperHome } from '../../StyledComponents/routes/Home.style'

export default function Home() {
    return (
        <WrapperHome>
            <CarouselComponent/>
            {/* <img src={Categories[0].img} alt="" /> */}
            <IntroductionCard/>
            <CategoriesHome/>
        </WrapperHome>
    )
}
