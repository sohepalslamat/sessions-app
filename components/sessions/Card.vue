<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="flex min-h-fit w-[320px] flex-col gap-[16px] rounded-[12px] border border-muted bg-base px-[20px] py-[12px] shadow-sm"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-base font-bold">{{ $t('upcoming-sessions') }}</p>
        <span class="text-base text-xs font-normal"
          >{{ $t('dateTime') }}</span
        >
      </div>
      <div class="cursor-pointer">
        <Plus />
      </div>
    </div>
    <Calendar v-model="day" class="p-2" />
    <div
      v-for="(session, index) in sessions"
      :key="index"
      @click="setSession(index)"
    >
      <Session :session="session" :is-active="selectedSession == index" />
    </div>
    <div
      v-if="sessions.length <= 0"
      class="flex flex-col items-center justify-center gap-[10px] rounded-[12px] border border-muted p-[10px] shadow-sm"
    >
      <div>
        <IllustrationMusic />
      </div>
      <div class="w-[206px] text-center text-sm text-base" v-html="$t('no-data-message')" />
    </div>
  </div>
</template>
<script>
import Calendar from './Calendar.vue'
import Session from './Session.vue'
import IllustrationMusic from './icons/IllustrationMusic.vue'
import Plus from './icons/Plus.vue'
export default {
  components: { Calendar, Session, IllustrationMusic, Plus },
  props: {
    sessions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedSession: null,
      day: 25,
    }
  },
  watch:{
    day(val){
      this.$emit('getDay',val)
    }
  },
  methods: {
    setSession(value) {
      this.selectedSession = value
    },
  },
}
</script>
