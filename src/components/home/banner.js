import React from "react"
import "./banner.scss"
import { Row, Col } from "antd"
import PremiumButton from "../misc/premiumButton"

const Banner = () => {
    return (
        <section className="banner" id="banner">
        <div className="container">
            <Row>
            <Col lg={24} xs={24}>
                <div className="text">
                <h3>Saren Presents</h3>
                <h1>Community tools summit.</h1>
                <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                <br />
                <PremiumButton link="https://cerberus.saren.io/" color="inverted">
                    Register Now
                </PremiumButton>
                </div>
            </Col>
            </Row>

        </div>
        </section>
    )
}

export default Banner
