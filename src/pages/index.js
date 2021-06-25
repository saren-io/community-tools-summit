import React from "react"
import Layout from "../components/layout/layout"
import Banner from "../components/banner"
import CountDown from "../components/countdown"
import Topic from "../components/topic"
import SingleSpeaker from "../components/singlespeaker"
import MultipleSpeaker from "../components/multipleSpeaker"

const IndexPage = () => (
  <Layout>
    <Banner/>
    <CountDown/>
    <Topic/>
    <SingleSpeaker/>
    <MultipleSpeaker/>
  </Layout>
)

export default IndexPage