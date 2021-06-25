import React from "react"
import { Statistic, Row, Col } from 'antd';
import "./countdown.scss"


const CountDown = () => {
    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

    function onFinish() {
        console.log('finished!');
    }
    
    function onChange(val) {
        if (4.95 * 1000 < val && val < 5 * 1000) {
            console.log('changed!');    
        }
    }
    return (
        <section className="countdown" id="countdown">
            <div className="container">
                <Row>
                    <Col lg={24} xs={24}>
                    <div className="text">
                        <h3>Goes live in </h3>
                        <Countdown value={deadline} onFinish={onFinish} />
                    </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default CountDown

