<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Follow your town">
          <b-card-text v-show="tapped === ''">
            We define towns as representing local government areas or council areas(FCT)
            You can follow a maximum of 5 towns.
          </b-card-text>
          <b-form-input
            v-model="tapped"
            list="towns"
            placeholder="Find your town"
            type="search"
            class="input"
            @change="onChange"
          />
          <datalist id="towns">
            <option v-for="town in towns" :key="town.id">
              {{ town.name }}, {{ town.state }}
            </option>
          </datalist>
          <div v-show="tapped != ''">
            <p>How are you connected to this town?</p>
            <b-form-radio-group>
              <b-row class="mx-0">
                <b-col class="border mr-2 pt-3 pb-1 rounded">
                  <b-form-radio v-model="category" value="RES">
                    <h6>Resident</h6>
                    <small><p class="text-muted">
                      You live, work, school or trade here.
                    </p></small>
                  </b-form-radio>
                </b-col>
                <b-col class="border pt-3 pb-1 rounded">
                  <b-form-radio v-model="category" value="VIS">
                    <h6>Visitor</h6>
                    <small><p class="text-muted">
                      You're currently here for a short stay.
                    </p></small>
                  </b-form-radio>
                </b-col>
              </b-row>
              <b-row class="mx-0 mt-2">
                <b-col class="border mr-2 pt-3 pb-1 rounded">
                  <b-form-radio v-model="category" value="DIA">
                    <h6>Diasporan</h6>
                    <small><p class="text-muted">
                      You are from here or a former resident.
                    </p></small>
                  </b-form-radio>
                </b-col>
                <b-col class="border pt-3 pb-1 rounded">
                  <b-form-radio v-model="category" value="OBS">
                    <h6>Observer</h6>
                    <small><p class="text-muted">
                      You have other interests here.
                    </p></small>
                  </b-form-radio>
                </b-col>
              </b-row>
            </b-form-radio-group>
            <b-button block type="submit" class="button" variant="success" @click="followType">
              Follow {{ selected }}
            </b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const towns = await $axios.$get('/town/all/')
    return { towns }
  },
  data () {
    return {
      tapped: '',
      selected: '',
      category: ''
    }
  },
  methods: {
    onChange () {
      this.selected = this.tapped
    },
    async followType () {
      const userId = this.$cookies.get('userId')
      const token = this.$cookies.get('userToken')
      const town = this.selected.split(',')[0]
      const category = this.category
      try {
        this.$axios.setHeader('Authorization', `Token ${token}`)
        const userTowns = await this.$axios.$get(
            `/town/follow-town/${userId}/${town}/${category}`
        )
        this.$cookies.set('userTowns', userTowns)
        this.$router.push('/findmoretown')
      } catch (e) {
        this.error = 'failed to follow town'
      }
    }
  }
}
</script>

<style>
.page {
  background-color: #E5E5E5;
}
.link {
  color: #489B16;
  text-decoration: none;
}
.button {
  background-color: #489B16;
  border: 0;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.input {
  display: block;
  width: 100%;
  height: 50px;
  padding: 1.1rem;
  margin: 20px 0px 20px 0px;
  color: #464a4c;
  border: 1px solid #e6ecf5;
  border-radius: 3px;
}
</style>
