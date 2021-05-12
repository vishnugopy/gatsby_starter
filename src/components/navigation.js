import React from "react"
import {Link , useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const  data  = useStaticQuery(graphql`
  query MyQuery {
    wpMenu(name: {eq: "main"}) {
      menuItems {
        nodes {
          id
          label
          url
        }
      }
    }
  }
  
  `)

  const menus = data.wpMenu.menuItems.nodes;
  console.log(menus);
  return (
    <nav className="menu">
     {menus.map((menu) => <Link to={menu.url} key={menu.id}>{menu.label}</Link> )}
    </nav>
  )
}

export default Navigation ;
