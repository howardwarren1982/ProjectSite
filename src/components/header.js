import * as React from "react"
import "./header.style.scss"
import github from "../images/github.png"

import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className=" header-div">
      <div className="herotexttemp">
        <StaticImage
          className="hero-image"
          style={{
            position: "absolute",
          }}
          src="../images/newbrownHero.png"
          alt="code in background and picture of Howard Warren in a circle"
        />
        <div class="name-1 center faustina-semi-bold-black-50px">
          Howard Warren
        </div>
        <div class="web-developer-1 opensans-semi-bold-apple-25px center">
          Web Developer
        </div>
        <div class="links">
          <a>
            <img class="githubblack" src={github} />
          </a>
          <a>
            <div class="linked-inblack">
              <div class="linked-in"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
