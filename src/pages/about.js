import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => (
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
    <h3>Let's talk about RAFFLES more:</h3>
    <div class="icon-container">
      <div class="row">
        <div class="column">
          <a href="mailto:therafflesproject@gmail.com">
            <Img className="icon-style" fluid={props.data.mail_icon.childImageSharp.fluid}/>
          </a>
        </div>
        <div class="column">
          <a href="https://github.com/rafflestranslator">
            <Img className="icon-style" fluid={props.data.github_icon.childImageSharp.fluid}/>
          </a>
        </div>
      </div>
    </div>
    <Link className="" to="/">Go back to the homepage</Link>
  </Layout>
)

export default About

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 50) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  `;

  export const query = graphql`
  query {
    
    mail_icon: file(relativePath: { eq: "envelope_64.png" }) {
      ...fluidImage
    }

    github_icon: file(relativePath: { eq: "github_64.png" }) {
        ...fluidImage
    }
  }
`