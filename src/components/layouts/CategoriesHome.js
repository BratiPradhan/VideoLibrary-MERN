import React from 'react'
import { categories } from './object'

import { Card  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CategoryCardItem, CategoryList, WrapperCategoriesHome } from '../../StyledComponents/layouts/CategoriesHome.style'

export default function CategoriesHome() {
    return (
        <WrapperCategoriesHome>
            <h2>Top Categories</h2>

            <CategoryList>
                {
                    categories.map(item => <CategoryCardItem key={item.name}>
                        <Card.Img style={{ height: '70%', width: '100%' }} src={item.img} alt='Category' />

                        <Card.Body>
    <Link className="card-title" to="/">{item.name}</Link>
  </Card.Body>

                        {/* <a href="/">{item.name}</a> */}
                    </CategoryCardItem>)
                }
                {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card> */}
            </CategoryList>

            <h2>Featured topic by categories</h2>

            <ul>
                {
                    categories.map(item => <li key={item.name}>
                        <h3>{item.name}</h3>
                        <ul>
                            {
                                item.topics.map((topic, index) => <li key={index}>{topic}</li>)
                            }
                        </ul>
                    </li>)
                }
            </ul>

        </WrapperCategoriesHome>
    )
}
