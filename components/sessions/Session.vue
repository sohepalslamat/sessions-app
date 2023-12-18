<template>
  <div
    :class="{ 'active-card': isActive }"
    class="flex cursor-pointer flex-col items-start gap-[10px] rounded-[12px] border border-muted p-[10px] shadow-sm"
  >
    <div class="flex gap-[10px]">
      <div
        class="h-[45px] min-w-[45px] rounded-[12px] border border-[#D9D9D9] bg-cover bg-center bg-no-repeat"
        :style="`background-image: url(${session.company_logo})`"
      />
      <div class="flex flex-col">
        <p class="text-base font-bold">{{ session.company_name }}</p>
        <span class="text-base text-xs font-normal line-clamp-1">{{
          session.company_description
        }}</span>
      </div>
    </div>
    <div class="text-sm font-medium text-muted">
      → {{ dateFormat(session.start_date) }} to
      {{ dateFormat(session.end_date) }}
    </div>
    <div v-if="isActive" class="h-[1px] w-[151px] bg-[#5B628A14]"></div>
    <div v-if="isActive" class="flex gap-2">
      <a
        :href="session.zoom_link"
        target="_blank"
        class="rounded-[10px] bg-primary py-[12px] px-[16px] text-xs font-normal text-inverted hover:bg-hover"
        >Join</a
      >
      <div
        class="bg-transparent cursor-pointer rounded-[10px] py-[12px] px-[16px] text-base text-xs font-normal hover:bg-[#f0f0f0]"
      >
        Dismiss
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: {
    session: {
      type: Object,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    dateFormat(date) {
      return moment(date).format('h:mm A')
    },
  },
}
</script>
<style lang="scss">
.active-card {
  background-color: #e9eaf2;
  border: none;
  cursor: default;
}
</style>
