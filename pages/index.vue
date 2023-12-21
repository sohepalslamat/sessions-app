<template>
  <div>
    <div class="flex p-[10px]">
      <Card :sessions="sessions" />
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
}
</script>
