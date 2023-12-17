
<template>
  <div
    class="min-h-fit w-[320px] bg-base px-[20px] py-[12px] border border-muted rounded-[12px] shadow-sm flex flex-col gap-[16px]"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-base text-base font-bold">Upcoming Sessions</p>
        <span class="text-base text-xs font-normal"
          >Saturday, June 25, 2022</span
        >
      </div>
      <div class="cursor-pointer">
        <img :src="require('~/assets/images//plus.png')" alt="plus" />
      </div>
    </div>
    <Calendar class="p-2" />
  </div>
</template>
<script>
import Calendar from './Calendar.vue';
export default {
  components: {Calendar}
}
</script>
