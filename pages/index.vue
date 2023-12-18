<template>
  <div>
    <div class="flex bg-[#E9EAF2] p-[10px]">
      <Card :sessions="sessions" @getDay="fetchData" />
    </div>
  </div>
</template>

<script>
import Card from '~/components/sessions/Card'
import { fSessions } from '~/components/sessions/fData'
export default {
  components: { Card },
  props: {},
  data() {
    return {
      sessions: this.filterDataByDay(25),
    }
  },
  head: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    filterDataByDay(day) {
      return fSessions.filter((i) => i.day === day)[0].sessions
    },
    fetchData(day) {
      this.sessions = this.filterDataByDay(day)
    },
  },
}
</script>
