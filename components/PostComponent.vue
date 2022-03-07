<script>
import xpath from 'xpath'
import { DOMParser } from 'xmldom'
import axios from 'axios'
export default {
  data () {
    return {
      url: '',
      resObj: null
    }
  },
  methods: {
    fetchOGP () {
      const xpaths = {
        title: 'string(//meta[@property="og:title"]/@content)',
        description: 'string(//meta[@property="og:description"]/@content)',
        image: 'string(//meta[@property="og:image"]/@content)',
        url: 'string(//meta[@property="og:url"]/@content)',
        site_name: 'string(//meta[@property="og:site_name"]/@content)'
      }
      const convertBodyToDocument = body => new DOMParser().parseFromString(body)

      const nodesFromDocument = (document, xpathselector) =>
        xpath.select(xpathselector, document)

      const mapProperties = (paths, document) =>
        Object.keys(paths).reduce(
          (acc, key) => ({ ...acc, [key]: nodesFromDocument(document, paths[key]) }),
          {}
        )
      axios.request(this.url).then((res) => {
        const document = convertBodyToDocument(res.data)
        const mappedProperties = mapProperties(xpaths, document)
        return mappedProperties
      }).then((res) => {
        const jsonResponse = JSON.stringify(res)
        this.resObj = JSON.parse(jsonResponse)
      // eslint-disable-next-line no-console
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>

<template>
  <div>
    <section class="text-center m-12">
      <h1 class="mb-5 text-xl text-blue-800 font-semibold">
        Open Graph Scraper
      </h1>
      <input v-model="url" type="text" class="border-2 border-black w-1/2 h-12">
      <span>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          @click="fetchOGP"
        >Submit</button>
      </span>
    </section>
    <section
      v-if="resObj"
      class="flex flex-col w-3/5 mx-auto md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
    >
      <!-- media -->
      <div class="h-64 w-auto md:w-1/2">
        <img class="inset-0 h-full w-full object-cover object-center" :src="resObj.image">
      </div>
      <!-- content -->
      <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <h3 class="font-semibold text-lg leading-tight truncate">
          {{ resObj.title }}
        </h3>
        <p class="mt-2">
          {{ resObj.description }}
        </p>
        <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
          {{ resObj.site_name }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
