import * as React from "react"
import { Layout } from './src/components';
import type { GatsbySSR } from "gatsby"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
  element,
  props
}) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}