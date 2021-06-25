import React from "react"
import { Statistic, Row, Col,Card } from 'antd';
import "./topic.scss"

const Topic = () => {
    return (
        <section className="topic" id="topic">
        <div className="container">
            <Row>
                <Col lg={24} xs={24}>
                    <h3>Topics</h3>
                    <h1>Covering Everything cryptocurrency</h1>            
                </Col>    
            </Row>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col lg={8} xs={24}>
                        <Card className ="card1" bordered={false}>
                        <h2>Rising <br/> Platform</h2>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</p>
                        </Card>
                    </Col>
                    <Col lg={8} xs={24}>
                        <Card className ="card2" bordered={false}>
                        <h2>Cyber <br/> Resiliency</h2>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</p>
                        </Card>
                    </Col>
                    <Col lg={8} xs={24}>
                        <Card className ="card3" bordered={false}>
                        <h2>Crypto <br/> Tools</h2>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College</p>
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
        </section>
    )
}

export default Topic