import React from "react"
import "./multipleSpeaker.scss"
import { Row, Col } from "antd"
import logo from "../images/logo-letters.png"
import speakerimage from "../images/nature-1.jpg"

const MultipleSpeaker = () => {
    return (
        <section className="multiplespeaker" id="multiplespeaker">
            <div className="container">
                <Row>
                    <Col lg={24} xs={24}>
                    <div className="text">
                        <h3>First Speaker</h3>
                        <div className="logoText"><img src={logo} alt="Icon" className="logo" /><h1> x  Penguin</h1></div>
                        <h2>Monday, 12th July, 10pm EST</h2>
                        <br />
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} xs={24} className="cardCol">
                        <div className="card">
                            <img src={speakerimage}/>
                            <div className="content">
                                
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} xs={24} className="cardCol">
                        <div className="card">
                            <img src={speakerimage}/>
                            <div className="content">
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
export default MultipleSpeaker