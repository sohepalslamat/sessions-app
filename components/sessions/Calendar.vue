<template>
  <div class="flex items-center justify-around gap-[10px]">
    <div class="cursor-pointer" @click="decrease">
      <img :src="require('~/assets/images//chevron-left.png')" alt="plus" />
    </div>
    <div
      v-for="day in days"
      :key="day.number"
      :class="{'active': selectedDay==day.number}"
      class="flex h-[59px] w-[57px] flex-col items-center justify-center gap-[5px] rounded-[12px] border border-muted p-[8px] shadow-sm cursor-pointer"
      @click="selectedDay=day.number"
    >
      <p class="text-base text-sm font-medium">{{ day.name }}</p>
      <span
        class="h-[24px] rounded-[8px] bg-muted py-0 px-2 text-sm font-medium text-primary"
        >{{ day.number }}</span
      >
    </div>
    <div class="cursor-pointer" @click="increase">
      <img :src="require('~/assets/images//chevron-right.png')" alt="plus" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [
        { name: 'Today', number: 25 },
        { name: 'Mon', number: 26 },
        { name: 'Tue', number: 27 },
      ],
      selectedDay: 25
    }
  },
  methods: {
    increase(){
      this.selectedDay>= 27 ? this.selectedDay = 27 : this.selectedDay++
    },
    decrease(){
      this.selectedDay<= 25 ? this.selectedDay = 25 : this.selectedDay--

    }
  },
}
</script>
<style lang="scss">
.active {
  --border-muted: var(--primary);
  border-width: 2px;
  p {
    @apply text-primary;
  }
  span {
    @apply text-inverted;
    --bg-muted: var(--primary);
  }
}
</style>
