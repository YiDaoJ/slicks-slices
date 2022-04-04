import * as React from "react"
import { Layout } from './src/components';
import type { GatsbyBrowser } from "gatsby"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props
}) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}