import React from "react"
import "./singlespeaker.scss"
import { Row, Col } from "antd"
import logo from "../images/logo-letters.png"
import PremiumButton from "./misc/premiumButton"

const SingleSpeaker = () => {
    return (
        <section className="singlespeaker" id="singlespeaker">
            <div className="container">
                <Row>
                    <Col lg={12} xs={24}>
                    <div className="text">
                        <h3>First Speaker</h3>
                        <div className="logoText"><img src={logo} alt="Icon" className="logo" /><h1> x  Penguin</h1></div>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</p>
                        <h2>Monday, 12th July, 10pm EST</h2>
                        <PremiumButton link="https://cerberus.saren.io/" color="inverted">
                            Register Now
                        </PremiumButton>
                        <br />
                    </div>
                    </Col>
                    <Col lg={12} xs={24}>
                        <div className="card">
                            <div className="imgbx">
                                
                            </div>
                            <div className="content">
                                
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </section>
    )
}

export default SingleSpeaker
