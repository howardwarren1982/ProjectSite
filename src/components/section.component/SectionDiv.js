import React from "react"
import * as styles from "./Sections.module.scss"

const SectionDiv = ({ children }) => {
  return (
    <div className={`${styles.sections} myrow `}>
      <p className={styles.aboutMe}>
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        About
        <strong className={styles.aboutMeEmphasis1}> Me</strong>
      </p>
      <div className={styles.textDiv}>
        <div className={styles.toptexttemplete}>
          <div className={styles.textsidelinetemplete}>
            <p className={styles.amASelfTaughtWebDeveloperIHaveO}>{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDiv

// space characters:
// \u00A0
