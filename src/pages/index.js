import React from "react"
import Layout from "../components/layout/layout"
import Banner from "../components/home/banner"
import CountDown from "../components/home/countdown"
import Topic from "../components/home/topic"
import SingleSpeaker from "../components/home/singleSpeaker"
import MultipleSpeaker from "../components/home/multipleSpeaker"

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