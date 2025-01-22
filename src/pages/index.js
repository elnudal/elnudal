import * as React from "react"
import SEO from "../components/seo"
import "../styles/index.css"
import Logo from "../styles/images/LogoOrangeVolume.svg"

const IndexPage = () => {
  return (
    <>
      <div id="linktree">
        <div className="texture" />
        <main>
          <img src={Logo} alt="El Nudal Macrame y Decoracion Fina" />
          <section class="links">
            <a href="#" target="_blank" rel="noreferrer">
              <button>
                <i class="ph ph-shopping-cart"></i> Tienda Online <span className="badge">Nuevo</span>
              </button>
            </a>
            <a href="https://instagram.com/elnudal" target="_blank" rel="noreferrer">
              <button>
                <i class="ph ph-instagram-logo"></i> Instagram
              </button>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <button>
                <i class="ph ph-facebook-logo"></i> Facebook
              </button>
            </a>
          </section>
          <a href="https://instagram.com/elnudal" target="_blank" rel="noreferrer" className="footer-link">
            <span>Ó contactanos por What's App</span> <i class="ph ph-whatsapp-logo"></i>
          </a>
        </main>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO
    title="Linktree"
  />
)
