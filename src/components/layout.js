import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"

const Layout = ({ isHomePage, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      allWpTag {
        nodes {
          id
          link
          name
        }
      }
    wp {
      generalSettings {
        title
        description
      }
    }
    allWpPost(sort: {fields: date, order: DESC}, limit: 5) {
      edges {
        node {
          id
          date
          link
          title
        }
      }
    }
    allWpCategory {
      nodes {
        id
        link
        name
      }
    }
    }
      
    
  `)
  const title = data.wp.generalSettings.title;
  const tagline = data.wp.generalSettings.description;
  const tags = data.allWpTag.nodes;
  const recents = data.allWpPost.edges;
  const Categories = data.allWpCategory.nodes;

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <div>
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
          <p>{tagline}</p></div>
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
        And <a href="https://wordpress.org/">WordPress </a> by Robot#001
      </footer>
      <aside>
        <div className="tagsbloc">
        <h3>Tags</h3>
        {tags.map((tag) => <Link to={tag.link} key={tag.id}>{tag.name}</Link> )}
        <h3>Recent Posts</h3>
        {recents.map((recent) => <Link to={recent.node.link} key={recent.node.id}>{recent.node.title}</Link> )}
        <h3>Categories</h3>
        {Categories.map((Categorie) => <Link to={Categorie.link} key={Categorie.id}>{Categorie.name}</Link> )}
        </div>
        </aside>
    </div>
  )
}

export default Layout
