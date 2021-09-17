import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (

        <Container>

            <Section
                title="Model S"
                description="Order Oline for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Customer order"
                rightBtnText="Exiting inventory"
            />
            <Section
                title="Model Y"
                description="Order Oline for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Customer order"
                rightBtnText="Exiting inventory"
            />
            <Section
                title="Model 3"
                description="Order Oline for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Customer order"
                rightBtnText="Exiting inventory"
            />
            <Section
                title="Model X"
                description="Order Oline for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Customer order"
                rightBtnText="Exiting inventory"
            />

            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />

            <Section
                title="Solar for New Roofs"
                description="Solar Roofs Costs Less Than a New Roof Plus Solor Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"

            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height:100vh;

`