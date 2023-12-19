<template>
  <div :class="{ dark: mode === 'dark' }">
    <client-only>
      <div
        class="justify container mx-auto flex flex-col items-center gap-[40px] bg-[#E9EAF2] pt-[20px]"
      >
        <div class="flex gap-2 text-center">
          <div
            class="w-[80px] cursor-pointer rounded-[8px] bg-base py-[6px] px-[11px] text-base hover:brightness-110"
            @click="changeLanguage"
          >
            {{ $t('language') }}
          </div>
          <div
            class="w-[80px] cursor-pointer rounded-[8px] bg-base py-[6px] px-[11px] text-base hover:brightness-110"
            @click="changeMode"
          >
            {{ mode === 'light' ? $t('dark') : $t('light') }}
          </div>
        </div>
        <div :dir="lang === 'en' ? 'ltr' : 'rtl'">
          <Nuxt />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      lang: 'en',
      mode: 'light',
    }
  },
  head: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    changeLanguage() {
      if (this.lang === 'ar') {
        this.lang = 'en'
        this.$i18n.locale = 'en'
      } else {
        this.lang = 'ar'
        this.$i18n.locale = 'ar'
      }
    },
    changeMode() {
      this.mode === 'dark' ? (this.mode = 'light') : (this.mode = 'dark')
    },
  },
}
</script>
