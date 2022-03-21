import * as React from "react"
import { Link } from "gatsby"

import SectionDiv from "../components/section.component/SectionDiv"
import Layout from "../components/layout"
import Projectcard from "../components/card.component/Projectcard"

import proj1pic from "./../images/projectPics/proj1/brownHero.png"
import proj1mobilepic from "./../images/projectPics/proj1/brownHeroMobile.png"

import proj2pic from "./../images/projectPics/proj2/Project2.png"
import proj2mobilepic from "./../images/projectPics/proj2/Project2Mobile.png"

import proj3pic from "./../images/projectPics/proj3/Project3.png"
import proj3mobilepic from "./../images/projectPics/proj3/Project3Mobile.png"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SectionDiv headerhighlight={`About`} headernormal={`Me`}>
      <p className="project-card-paragraph">
        I am a self-taught web developer. I have over a year of experience using
        HTML, CSS (SCSS), JavaScript, and React (Gatsby) to create beautiful
        website templates. I am always learning and improving. Please see some
        of my projects below.
      </p>
      <ul className="project-card-paragraph" style={{ listStyle: "none" }}>
        <lh>
          {" "}
          <b>Udemy courses</b>{" "}
        </lh>
        <li>1) Build Responsive Real-World Websites with HTML and CSS</li>
        <li>2) The Complete JavaScript Course 2021: From Zero to Expert!</li>
        <li>3) Build Responsive Real-World Websites with HTML and CSS</li>
      </ul>
    </SectionDiv>

    <SectionDiv headerhighlight={`My`} headernormal={`Projects`}>
      <Projectcard
        cardimage={proj1pic}
        cardimageMobile={proj1mobilepic}
        cardimagealt="picture of protfolio hero picture"
        linktocode="#"
        skilllist={[
          "React (Gatsby)",
          "Website design",
          "Figma",
          "SCSS",
          "Flexbox",
          "Responsive website",
          "GIT (version control)",
        ]}
      >
        This project is my portfolio that you are currently viewing. I designed
        this website in Figma. I am not a designer but I am familiar with the
        very basics. For this reason, I kept the website simple. I finished this
        project using Gatsby because of the ability to easily expand the
        portfolio in the future.
      </Projectcard>
      <Projectcard
        cardimage={proj2pic}
        cardimageMobile={proj2mobilepic}
        cardimagealt="picture of project hero image"
        linktocode="https://github.com/howardwarren1982/axitwebsite"
        linktoproject="https://howardwarren1982.github.io/axitwebsite/"
        skilllist={[
          "PSD to HTML, CSS, JavaScript",
          "Pixel perfect design",
          "Adobe XD",
          "SCSS",
          "Flexbox",
          "Responsive website",
          "GIT (version control)",
        ]}
      >
        Translated a static design to HTML, CSS and JavaScript. Paid great
        attention to detail in order to match the design as closely as possible.
        Wrote the code with readability and reuse in mind. I broke my SCSS up
        into compartmentalized files. The PSD can be found:{" "}
        <a
          target="_blank"
          href="https://www.behance.net/gallery/123744891/AXIT-UI-Website-Design?tracking_source=search_projects_recommended%7Caxit%20uric"
        >
          Here
        </a>
      </Projectcard>
      <Projectcard
        cardimage={proj3pic}
        cardimageMobile={proj3mobilepic}
        cardimagealt="picture of project hero image"
        linktocode="https://github.com/howardwarren1982/gatsbyUniqueTechTheme"
        linktoproject="https://howardwarren1982.github.io/gatsbyUniqueTechTheme/"
        skilllist={[
          "React (Gatsby)",
          "React Bootstrap",
          "Adobe XD",
          "SCSS",
          "Flexbox",
          "Responsive website",
          "GIT (version control)",
        ]}
      >
        Translated a static design to HTML, CSS and JS. This is an old project
        that I updated using Gatsby. In the footer you can find a link to my old
        portfolio. The PSD can be found:{" "}
        <a
          target="_blank"
          href="https://www.behance.net/gallery/31522763/UNIQUE-TECH-Website-UI-Freebie-"
        >
          Here
        </a>
      </Projectcard>
    </SectionDiv>
  </Layout>
)

export default IndexPage
