import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Hi RAFFLESians,</h1>
    <p>Formed May 26th 2019 by 
      <span id="span-style">
        <a href="https://github.com/teaolivia">
           @teaolivia 
          </a>
      </span> 
       and  
      <span id="span-style">
        <a href="https://github.com/atianadya">
          @atianadya 
        </a>
      </span>
      , we are bringing closer English and Indonesian :)
    </p>
    <Link className="" to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
