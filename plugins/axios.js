export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    checkRefresh()
    Object.assign(config, {
      withCredentials: true,
      headers: {
        ...config.headers,
        ...{
          Encryption_Enabled: false,
          authorization: store.getters['user/getToken'],
          app_version: '1.0.0'
        }
      }
    })
  })
  /* $axios.onError((error) => {
    if (
      error.response.data.errorMessage !== undefined &&
      error.response.data.errorMessage !== null &&
      error.response.data.errorMessage !== ''
    ) {
      store.commit('snacks/showMessage', {
        content: error.response.data.errorMessage,
        color: 'error'
      })
    } else {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        redirect('/login')
      } else if (code === 403) {
        store.commit('snacks/showMessage', {
          content: 'error.403',
          color: 'error'
        })
      } else if (code >= 400 && code < 500 && ![401, 403].includes(code)) {
        store.commit('snacks/showMessage', {
          content: 'error.400',
          color: 'error'
        })
      } else if (code === 500) {
        store.commit('snacks/showMessage', {
          content: 'error.500',
          color: 'error'
        })
      } else {
        store.commit('snacks/showMessage', {
          content: 'error.500',
          color: 'error'
        })
      }
    }
  }) */

  store.dispatch('user/init')
}

const checkRefresh = function () {
  if (window.appInfo && window.appInfo.refreshing) {
    setTimeout(() => {
      checkRefresh()
    }, 500)
  }
}
