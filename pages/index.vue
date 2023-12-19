<template>
  <div>
    <div class="flex p-[10px]">
      <Card :sessions="sessions" @getDay="fetchData" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '~/components/sessions/Card'
export default {
  components: { Card },
  props: {},
  data() {
    return {

    }
  },
  head: {},
  computed: {...mapGetters(['sessions'])},
  watch: {},
  created() {
    this.$store.dispatch('fetchSessions', 25)
  },
  methods: {
    fetchData(day) {
      return this.$store.dispatch('fetchSessions', day)
    },
  },
}
</script>
