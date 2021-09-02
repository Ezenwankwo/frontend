<template class="page">
  <b-container>
    <b-row align-v="center" align-h="center" class="vh-100">
      <b-col cols="12" md="8" lg="5">
        <b-card title="Follow another town">
          <b-card-text v-show="tapped === ''">
            You can follow {{ `${5 - numTowns}` }} more towns that are dear to you.
          </b-card-text>
          <b-list-group v-for="town in userTowns" v-show="tapped === ''" :key="town.id">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              {{ town }}
              <b-button variant="success" size="sm">
                Following
              </b-button>
            </b-list-group-item>
          </b-list-group>
          <b-form-input
            v-model="tapped"
            list="towns"
            placeholder="Find another town"
            type="search"
            class="input"
            @change="onChange"
          />
          <datalist id="towns">
            <option v-for="town in towns" :key="town.id">
              {{ town.name }}, {{ town.state }}
            </option>
          </datalist>
          <b-card-text v-show="tapped === ''" class="text-center">
            <NuxtLink to="/followedtowns" class="link">
              Skip for now
            </NuxtLink>
          </b-card-text>
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
  async asyncData ({ $http }) {
    const towns = await $http.$get('https://tmapi-test.herokuapp.com/town/all/')
    return { towns }
  },
  data () {
    const usertowns = this.$cookies.get('userTowns')
    const numtowns = usertowns.length
    return {
      tapped: '',
      selected: '',
      category: '',
      userTowns: usertowns,
      numTowns: numtowns
    }
  },
  methods: {
    onChange () {
      this.selected = this.tapped
    },
    async followType () {
      const userId = this.$cookies.get('userId')
      const town = this.selected.split(',')[0]
      const category = this.category
      try {
        this.$http.setHeader('Authorization', false)
        const usertowns = await this.$http.$get(
            `https://tmapi-test.herokuapp.com/town/follow-town/${userId}/${town}/${category}`
        )
        this.$cookies.set('userTowns', usertowns)
        if (usertowns.length >= 5) {
          this.$router.push('/followedtowns')
        } else {
          this.tapped = ''
          this.userTowns = usertowns
          this.numTowns = usertowns.length
        }
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
