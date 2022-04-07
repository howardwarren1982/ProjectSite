import * as React from "react"
import "./header.style.scss"
import github from "../images/github.png"
import linkin from "../images/LinkedIN.png"

import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="myherorow">
    <div className=" header-div desktop-setup">
      <div className="herotexttemp">
        <StaticImage
          className="hero-image"
          style={{
            position: "absolute",
          }}
          src="../images/newbrownHero.png"
          alt="computers with brown walls in the background"
          transformOptions={{ fit: "cover" }}
        />
        <div class="name-1 center faustina-semi-bold-black-50px">
          Howard Warren
        </div>
        <div class="web-developer-1 opensans-semi-bold-apple-25px center">
          Web Developer
        </div>
        <div class="links">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/howardwarren1982"
          >
            <img class="githubblack" src={github} />
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/in/howard-warren-a9388885/"
          >
            <div class="linked-inblack">
              <img class="linked-in" src={linkin} />
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="mobile-header">
      <div className=" header-div">
        <StaticImage
          src="../images/brownHero.png"
          alt="code in background and picture of Howard Warren in a circle"
          transformOptions={{ fit: "cover" }}
        />
        <div className="herotexttemp">
          <div class="name-1 center faustina-semi-bold-black-50px">
            Howard Warren
          </div>
          <div class="web-developer-1 opensans-semi-bold-apple-25px center">
            Web Developer
          </div>
          <div class="links">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/howard-warren-a9388885/"
            >
              <img class="githubblack" src={github} />
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/howard-warren-a9388885/"
            >
              <div class="linked-inblack">
                <img class="linked-in" src={linkin} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
