import React from "react"
import Layout from "../components/layout/layout"
import Banner from "../components/banner"
import CountDown from "../components/countdown"
import Topic from "../components/topic"
import SingleSpeaker from "../components/singlespeaker"

const IndexPage = () => (
  <Layout>
    <Banner/>
    <CountDown/>
    <Topic/>
    <SingleSpeaker/>
  </Layout>
)

export default IndexPage