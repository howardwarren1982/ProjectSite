import * as React from "react"

import SectionDiv from "../components/section.component/SectionDiv"
import Layout from "../components/layout"
import Projectcard from "../components/card.component/Projectcard"

import proj1pic from "./../images/projectPics/proj1/brownHero.png"
import proj1mobilepic from "./../images/projectPics/proj1/brownHeroMobile.png"

import proj2pic from "./../images/projectPics/proj2/Project2.png"
import proj2mobilepic from "./../images/projectPics/proj2/Project2Mobile.png"

import proj3pic from "./../images/projectPics/proj3/Project3.png"
import proj3mobilepic from "./../images/projectPics/proj3/Project3Mobile.png"

import jackets from "./../images/projectPics/udemyProj1/jackets.png"

import monster from "./../images/projectPics/udemyProj2/monsterApp.png"

import omniFood from "./../images/projectPics/udemyProj3/omniFoodApp.jpg"

const IndexPage = () => (
  <Layout>
    <SectionDiv headerhighlight={`About`} headernormal={`Me`}>
      <p className="project-card-paragraph">
        I am a self-taught web developer. I have over a year of experience using
        HTML, CSS (SCSS), JavaScript, and React (Gatsby) to create beautiful
        website templates. I am always learning and improving. Please see some
        of my projects below.
      </p>
    </SectionDiv>

    <SectionDiv headerhighlight={`My`} headernormal={`Projects`}>
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
        Translated a static design to HTML and CSS. Later I turned this design
        into a Gatsby template. This makes it easier for me to use the code in
        other projects. Gatsby also offers many great features to improve the
        site. The PSD can be found:{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.behance.net/gallery/31522763/UNIQUE-TECH-Website-UI-Freebie-"
        >
          Here
        </a>
      </Projectcard>
      <Projectcard
        cardimage={proj1pic}
        cardimageMobile={proj1mobilepic}
        cardimagealt="picture of protfolio hero picture"
        linktocode="https://github.com/howardwarren1982/ProjectSite"
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
        Translated a static design to HTML, CSS and JavaScript. Made sure to pay
        close attention to detail in order to match the design as accurately as
        possible. Wrote the HTML and SCSS with readability and reuse in mind. I
        broke my SCSS up into compartmentalized files. The PSD can be found:{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.behance.net/gallery/123744891/AXIT-UI-Website-Design?tracking_source=search_projects_recommended%7Caxit%20uric"
        >
          Here
        </a>
      </Projectcard>
    </SectionDiv>

    <SectionDiv headerhighlight={`Udemy`} headernormal={`Projects`}>
      <Projectcard
        cardimage={jackets}
        cardimagealt="picture of project hero image"
        linktocode="https://github.com/howardwarren1982/crwn-clothingUdemyProject"
        skilllist={[
          "React",
          "Redux",
          "Firebase",
          "HTML, CSS",
          "Application design",
          "Responsive website",
          "GIT (version control)",
        ]}
      >
        This is an ongoing project (the name of the course "complete react
        developer"). In this assignment we are learning how to build a
        modern-day e-commerce website using React. So far I have learned how to
        implement Firebase into a project and Redux to manage global state.
      </Projectcard>

      <Projectcard
        cardimage={monster}
        cardimagealt="picture of project hero image"
        linktocode="https://github.com/howardwarren1982/UdemyReactProjectOne"
        linktoproject="https://howardwarren1982.github.io/UdemyReactProjectOne/"
        skilllist={[
          "React",
          "Search",
          "HTML, CSS",
          "Map and Filter array functions",
          "GIT (version control)",
        ]}
      >
        This is the starter project for the udemy course, "complete react
        developer". Building a basic react app. It's a monster's Rolodex with a
        search feature.
      </Projectcard>
      <Projectcard
        cardimage={omniFood}
        cardimagealt="picture of project hero image"
        linktocode="https://github.com/howardwarren1982/reactPortfolio/tree/master/public/Projects/project5/omnifoodContents"
        linktoproject="https://howardwarren1982.github.io/MainProjects/omnifoodContents/index_omni.html"
        skilllist={[
          "HTML, CSS and JavaScript",
          "Animations",
          "JQuery",
          "Basic SEO",
          "Responsive website",
          "GIT (version control)",
          "FleXbox",
        ]}
      >
        While doing this project I was able to learn web design basics,
        responsive web design, basic SEO, adding google analytics and webpage
        optimization.
      </Projectcard>
    </SectionDiv>
  </Layout>
)

export default IndexPage
