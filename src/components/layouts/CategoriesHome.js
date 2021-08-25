import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { categories } from './object'

import { Card  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CategoryCardItem, CategoryCardWrapper, CategoryLink, CategoryList, HeaderCategories, HeaderCategory, TopicLink, TopicList, WrapperCategoriesHome } from '../../StyledComponents/layouts/CategoriesHome.style'
import { useVideosRoute } from '../../context/RouteVideoListingContext';

export default function CategoriesHome() {

    const { setRoute } = useVideosRoute()

    return (
        <WrapperCategoriesHome>
            <HeaderCategories>Top Categories</HeaderCategories>

            <CategoryList>
                {
                    categories.map(item => 
                    <CategoryCardWrapper key={item.name}>
                        <CategoryCardItem >
                            <Card.Img style={{ height: '100%', width: '100%' }} src={item.img} alt='Category' />
                        </CategoryCardItem>
                        <CategoryLink onClick={() => setRoute(item.name)} className="card-title" to={`/videos/${item.name}`}>{item.name}</CategoryLink>
                    </CategoryCardWrapper>)
                }
                
            </CategoryList>

            
            <HeaderCategories>Featured topic by categories</HeaderCategories>

            <CategoryList>
                {
                    categories.map(item => <li key={item.name}>
                        <HeaderCategory>{item.name}</HeaderCategory>
                        <TopicList>
                            {
                                item.topics.map((topic, index) => <TopicLink onClick={() => setRoute(topic)} to={`/videos/${item.name}/${topic}`} key={uuidv4()}>{topic}</TopicLink>)
                            }
                        </TopicList>
                    </li>)
                }
            </CategoryList>

        </WrapperCategoriesHome>
    )
}
