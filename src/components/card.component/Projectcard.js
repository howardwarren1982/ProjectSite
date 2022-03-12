import React from "react"
import "./card.style.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Projectcard({
  cardimage,
  cardimagealt,
  linktocode,
  linktoproject,
  skilllist,
  children,
}) {
  return (
    <div className="projcard center">
      <StaticImage
        className="project-card-image"
        src="../../images/brownHero.png"
        alt={cardimagealt}
        width={1500}
      />
      <h4 className="project-card-subtitle">About This Project</h4>
      <p className="project-card-paragraph">{children}</p>
      <h4 className="project-card-subtitle">Skills Used</h4>
      <ul className="skill-list">
        {skilllist.map(skill => (
          <li className="skill-list-item">{skill}</li>
        ))}
      </ul>
      <div className="button-container">
        {linktocode && <a className="project-button">See Code</a>}
        {linktoproject && <a className="project-button">See Project</a>}
      </div>
    </div>
  )
}
