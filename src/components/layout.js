import * as React from "react"
import "./normalize.scss"
import "./layout.scss"

import Header from "./header"
import Footersection from "../components/footer.component/Footersection"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footersection />
    </>
  )
}

export default Layout
