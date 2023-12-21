<template>
  <div class="flex items-center justify-around gap-[10px]">
    <div class="cursor-pointer" @click="decrease">
      <ChevronRight v-if="$i18n.locale == 'ar'" />
      <ChevronLeft v-else />
    </div>
    <div
      v-for="day in days"
      :key="day.number"
      :class="{ active: selectedDayId == day.id }"
      class="flex h-[59px] w-[57px] cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[12px] border border-muted p-[8px] shadow-sm"
      @click="selectedDayId = day.id"
    >
      <p class="text-base text-sm font-medium">{{ day.name }}</p>
      <span
        class="h-[24px] rounded-[8px] bg-muted py-0 px-2 text-sm font-medium text-muted"
        >{{ day.number }}</span
      >
    </div>
    <div class="cursor-pointer" @click="increase">
      <ChevronLeft v-if="$i18n.locale == 'ar'" />
      <ChevronRight v-else />
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import ChevronLeft from './icons/ChevronLeft.vue'
import ChevronRight from './icons/ChevronRight.vue'
export default {
  components: { ChevronLeft, ChevronRight },
  data() {
    return {
      days: [],
      selectedDayId: null
    }
  },
  watch:{
    selectedDayId(val) {
      const day = this.days.filter(i=> i.id === val)[0].number
      this.$store.dispatch('fetchSessions', day)
    }
  },
  created() {
    this.selectedDayId = 0
    this.days = this.getThreeDays(this.selectedDayId)
  },
  methods: {
    increase() {
      if (this.selectedDayId === this.days[2].id) {
        this.days = this.getThreeDays(this.days[2].id + 1)
      }
      this.selectedDayId++
    },
    decrease() {
      if (this.selectedDayId === 0) {
        this.selectedDayId = 0
      } else {
        if (this.selectedDayId === this.days[0].id) {
          this.days = this.getThreeDays(this.days[0].id - 1)
        }
        this.selectedDayId--
      }
    },
    getThreeDays(firstDayId) {
      const days = []
      for (let i = firstDayId; i < firstDayId + 3; i++) {
        const currentDate = moment().add(i, 'days')
        const day = {
          id: i,
          name: i === 0 ? 'today' : currentDate.format('ddd'),
          number: currentDate.date(),
        }
        days.push(day)
      }
      return days
    },
  },
}
</script>
<style lang="scss">
.active {
  border-color: var(--border-primary);
  background-color: var(--bg-active);
  border-width: 2px;
  p {
    color: var(--primary);
  }
  span {
    color: #fff;
    background-color: var(--primary);
  }
}
</style>
