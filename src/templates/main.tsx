import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Education from "../components/education"
import Skills from "../components/skills"
import Interests from "../components/interests"
import Projects from "../components/projects"
import Contact from "../components/contact"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/override.css"

console.log(styles)

const Main = () => (
  <Layout>
    <Parallax pages={8}>
      <Hero offset={0} factor={1} />
      <Experience offset={1} factor={2} />
      <Education offset={3} factor={1} />
      <Skills offset={4} factor={1} />
      <Interests offset={5} factor={1} />

      {/*
        <About offset={1} factor={1} />
      */}

      <Projects offset={6} factor={1} />
      <Contact offset={7} factor={1} />
    </Parallax>
  </Layout>
)

export default Main
