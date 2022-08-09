export const state = () => ({
  locale: process.env.VUE_APP_I18N_LOCALE
})

export const getters = {
  rtl (state) {
    return ['fa', 'ar', 'azIr', 'ckb'].includes(state.locale)
  },
  locale (state) {
    return state.locale
  }
}
