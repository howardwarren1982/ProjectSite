import * as React from "react"
import { Link } from "gatsby"

import SectionDiv from "../components/section.component/SectionDiv"
import Layout from "../components/layout"
import Projectcard from "../components/card.component/Projectcard"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SectionDiv>
      am a self-taught web developer. I have over a year of experince using
      HTML, CSS (SCSS), JavaScript, and React (Gatsby) to create beautiful
      website templetes. I am always learning and improving. Please see some of
      my projects below.
    </SectionDiv>

    <SectionDiv>
      <Projectcard
        cardimage="../../images/newbrownHero.png"
        cardimagealt="computer code in background"
        linktocode="#"
        linktoproject="#"
        skilllist={[
          "React (Gatsby)",
          "Website design",
          "Figma (Anima plugin)",
          "SCSS",
          "Flexbox",
          "Responsive website",
          "GIT (version control)",
        ]}
      >
        This project is my portfolio that you are currently viewing. I designed
        this website in Figma. The Anima plugin helped me speed up coding the
        site. I finished this project using Gatsby because of the ability to
        easily expand the portfolio in the future.
      </Projectcard>
    </SectionDiv>

    {/* <h1>section componet</h1>
    <h1>card componet</h1>
    <h1>button componet</h1> */}
  </Layout>
)

export default IndexPage
