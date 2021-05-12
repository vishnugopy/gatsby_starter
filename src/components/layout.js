import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"

const Layout = ({ isHomePage, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  const title = data.wp.generalSettings.title;
  const tag = data.wp.generalSettings.description;
  
console.log(title);
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <div>
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
          <p>{tag}</p></div>
        ) : (
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
        )}
      </header>
      <Navigation />
      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
