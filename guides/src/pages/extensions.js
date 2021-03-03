// --- Dependencies
import * as React from 'react'
import { graphql } from 'gatsby'

// --- Components
import Layout from 'components/Layout'
import Section from 'components/Section'
import H1 from 'components/base/H1'


import JSONData from "../data/extensions.json"


/**
 * Component
 */

const renderExtension = (extension) => {
  return(
    <div key={extension.name} className="w-50">
      <h3><a href={extension.url}>{extension.name}</a></h3>
      <p>{extension.description}</p>
    </div>
  )
}

const ExtensionsPage = () => {
  return (
    <Layout
      title="Spree Extensions"
      description="Spree Commerce API, documentation, guides & tutorials"
      nav={[]}
      activeRootSection="extensions"
    >
      <article className="nested-links">
        <H1>Extensions Directory</H1>
        {JSONData.categories.map((category, index) => {
            return (
              <div key={`category_${index}`}>
                <h2>{category.name} ({category.extensions.length})</h2>
                <div className="flex flex-column flex-wrap flex-row-ns w-100">
                  {category.extensions.map(extension => renderExtension(extension))}
                </div>
              </div>
            )
          })}
      </article>
    </Layout>
  )
}

export default ExtensionsPage
