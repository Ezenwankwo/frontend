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
      <h1 class="mb-5 text-xl text-blue-800 font-semibold">Open Graph Scraper</h1>
      <input v-model="url" type="text" class="border-2 border-black w-1/2 h-12">
      <span>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          @click="fetchOGP"
        >Submit</button>
      </span>
    </section>
    <section v-if="resObj" class="flex w-3/5 mx-auto border-2 rounded-lg shadow-md">
      <div class="w-1/2">
        <img :src="resObj.image" alt="" class="object-cover rounded-lg h-full">
      </div>
      <div class="ml-3 p-4">
        <p class="text-xl font-medium mt-5 mb-1">
          {{ resObj.title }} <span>&#8226;</span> <span class="text-blue-600 text-sm">{{ resObj.site_name }}</span>
        </p>
        <p class="mb-2">
          {{ resObj.description }}
        </p>
        <a :href="resObj.url" class="cursor-pointer text-blue-500 p-2" target="_blank">View Post in Browser</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
