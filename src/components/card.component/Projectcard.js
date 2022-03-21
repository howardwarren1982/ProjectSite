import React from "react"
import "./card.style.scss"

export default function Projectcard({
  cardimage,
  cardimageMobile,
  cardimagealt,
  linktocode,
  linktoproject,
  skilllist,
  children,
}) {
  return (
    <div className="projcard center">
      <picture className="project-card-image">
        <source media="(max-width:600px)" srcset={cardimageMobile} />
        <img src={cardimage} alt={cardimagealt} />
      </picture>

      <h4 className="project-card-subtitle">About This Project</h4>
      <p className="project-card-paragraph">{children}</p>
      <h4 className="project-card-subtitle">Skills Used</h4>
      <ul className="skill-list">
        {skilllist.map(skill => (
          <li className="skill-list-item">{skill}</li>
        ))}
      </ul>
      <div className="button-container">
        {linktocode && (
          <a target="_blank" href={linktocode} className="project-button">
            See Code
          </a>
        )}
        {linktoproject && (
          <a target="_blank" href={linktoproject} className="project-button">
            See Project
          </a>
        )}
      </div>
    </div>
  )
}
