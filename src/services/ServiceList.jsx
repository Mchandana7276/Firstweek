import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Check the weather forecast to ensure smooth and enjoyable travel plans!',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Discover the world with the best tour guides for an unforgettable journey!',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Personalize your travel experience for a unique and unforgettable journey.',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList