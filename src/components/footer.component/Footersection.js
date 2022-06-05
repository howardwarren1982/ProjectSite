import React from "react"
import "./footer.style.component.scss"
import face from "../../images/facepic.png"
import github from "../../images/github.png"
import linkin from "../../images/LinkedIN.png"

export default function Footersection() {
  return (
    <footer>
      <div className="flex-rev-col myrow center footer--templete">
        <div className="pictureside">
          <img className="footer__face" src={face} alt="Howard" />
          <h3>THANK YOU FOR VISITING</h3>
        </div>
        <div className="contactside">
          <h3 className="footer__contact">CONTACT</h3>
          <h5 className="footer__email">EMAIL: howardwarren89@gmail.com</h5>
          <br />
          <a
            target={`_blank`}
            rel="noreferrer"
            className="footer__oldportfolio"
            href="https://howardwarren1982.github.io/reactPortfolio/"
          >
            OLD PORTFOLIO LINK
          </a>
          <div class="links">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/howardwarren1982"
            >
              <img
                class="githubblack githubblack--toWhite"
                src={github}
                alt="GitHub icon"
              />
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/howard-warren-a9388885/"
            >
              <div class="linked-inblack">
                <img class="linked-in" src={linkin} alt="Linked-in icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
