import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Woman on ice, flat until the horizon where you see blue sky and distant mountains."
        src="../images/jess_gris17.JPG"
      />
    </Layout>
  )
}

export default IndexPage