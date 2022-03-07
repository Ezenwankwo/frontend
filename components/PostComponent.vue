<script>
import xpath from 'xpath'
import { DOMParser } from 'xmldom'
import axios from 'axios'
export default {
  data () {
    return {
      url: '',
      resObj: {}
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
        // eslint-disable-next-line no-console
      }).then((res) => { this.resObj = JSON.stringify(res) }).catch((err) => { console.log(err) })
    }
  }
}
</script>

<template>
  <div>
    <section class="text-center m-12">
      <input v-model="url" type="text" class="border-2 border-black w-1/2 h-12">
      <span>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          @click="fetchOGP"
        >Submit</button>
      </span>
    </section>
    <pre v-if="resObj !== ''" class="og">
      {{ resObj }}
    </pre>
    <section class="flex w-3/5 mx-auto border-2 rounded-lg shadow-md">
      <div>
        <img src="https://picsum.photos/400" alt="" class="object-contain rounded-lg">
      </div>
      <div class="ml-3">
        <p class="text-xl font-medium mt-5 mb-1">Lorem Ipsum Dolor Sit Amet <span>&#8226;</span> <span class="text-blue-600 text-sm">freeCodeCamp.org</span></p>
        <p class="mb-2">Irure elit est laborum velit duis veniam adipisicing. Ullamco ut nisi tempor culpa sit veniam labore irure anim dolor. Nisi labore nisi consectetur consectetur sunt ullamco ea quis aliqua laborum esse duis tempor. Ipsum cillum dolor esse Lorem minim occaecat et.</p>
        <a href="https://picsum.photos/20" class="cursor-pointer text-blue-500">https://picsum.photos/200</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
