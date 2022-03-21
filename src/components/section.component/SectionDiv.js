import React from "react"
import * as styles from "./Sections.module.scss"

const SectionDiv = ({ headerhighlight, headernormal, children }) => {
  return (
    <div className={`${styles.sections} myrow `}>
      <p className={styles.content}>
        <span style={{ visibility: `hidden` }}>-----------------------</span>{" "}
        {headerhighlight}
        <strong className={styles.contentEmphasis1}> {headernormal}</strong>
      </p>
      <div className={styles.textDiv}>
        <div className={styles.toptexttemplete}>
          <div className={styles.textsidelinetemplete}>
            <div className={styles.inner}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDiv
