import xpath from 'xpath'
import { DOMParser } from 'xmldom'
// import bodyParser from 'body-parser'
// import cors from "cors";

const xpaths = {
  title: 'string(//meta[@property="og:title"]/@content)',
  description: 'string(//meta[@property="og:description"]/@content)',
  image: 'string(//meta[@property="og:image"]/@content)',
  keywords: 'string(//meta[@property="keywords"]/@content)'
}

const retrievePage = url => this.$axios.request({ url })

const convertBodyToDocument = body => new DOMParser().parseFromString(body)

const nodesFromDocument = (document, xpathselector) =>
  xpath.select(xpathselector, document)

const mapProperties = (paths, document) =>
  Object.keys(paths).reduce(
    (acc, key) => ({ ...acc, [key]: nodesFromDocument(document, paths[key]) }),
    {}
  )

export default function parseURL (url) {
  retrievePage(url).then((res) => {
    const document = convertBodyToDocument(res.data)
    const mappedProperties = mapProperties(xpaths, document)
    return mappedProperties
  })
}

// parseURL(url).then((result) => res.json(result));
