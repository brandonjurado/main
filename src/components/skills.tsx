/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import IconAngularjs from 'react-devicon/angularjs/original-wordmark'
import styles from "../styles/override.css";
// @ts-ignore
import SkillsMDX from "../sections/Skills"


const Skills = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor} className={`content`}>
      <Inner>
        <SkillsMDX />
        <IconAngularjs width={100} height={100}/>
        <div className="subheading">
          <p>Programming Languages & Tools</p>

          <div>   
            
          </div>

          <ul className="fa-ul mb-0" style={{fontSize: 1 + "rem"}}>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Java
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Kotlin
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Python
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Ruby on Rails
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                JavaScript
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                React
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                TypeScript
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Redis
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Couchbase
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Groovy
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Gradle
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                NoSQL
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                SQL
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Agile Methodologies
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Jenkins
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Kafka
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Selenium
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Cloud Technologies
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                CI/CD
            </li>
            <li>
                <span className="fa-li"><FontAwesomeIcon icon={faAngleRight} /></span>
                Spring
            </li>
          </ul>

          <p>Workflow</p>

          <ul className="fa-ul mb-0" style={{fontSize: 1 + "rem"}}>
              <li>
                  <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
                  Mobile-First, Responsive Design
              </li>
              <li>
                  <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
                  Cross Functional Teams
              </li>
              <li>
                  <span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>
                  Agile Development, Scrum &amp; Kanban
              </li>
          </ul>
        </div>
      </Inner>
    </Content>
  </div>
)

export default Skills
