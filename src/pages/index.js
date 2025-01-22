import * as React from "react"
import SEO from "../components/seo"
import "../styles/index.css"

const IndexPage = () => {
  return (
    <main>
      <h1>This is the home page.</h1>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <SEO
    title="Linktree"
  />
)
