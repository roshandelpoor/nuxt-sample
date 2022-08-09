import fa from 'vuetify/es5/locale/fa'
import en from 'vuetify/es5/locale/en'
import ar from 'vuetify/es5/locale/ar'
import ckb from 'vuetify/es5/locale/ckb'
import az from 'vuetify/es5/locale/az'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default function ({ store, app }) {
  const theme = {
    black: '#000000',
    vahidSabetiBlack: '#1C1C1E',
    primary: '#0084FF',
    success: '#cdec84',
    darkSuccess: '#0e4f00',
    info: '#b1e4e3',
    warning: '#ff8200',
    danger: '#e74a3b',
    secondary: '#d6d2c4',
    light: '#ffffff',
    dark: '#666666',
    brown: '#4e2e1d',
    yellow: '#ffcd00',
    grey: '#757575',
    lightBrown: '#3E3629',
    orange: '#ffb90a',
    alertGreen: '#CDEC84',
    lightGreen: '#eefad1',
    lightBlue: '#CCE3FF',
    lightRed: '#ff6666'
  }

  return {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    breakpoint: {
      thresholds: {
        xs: 0,
        sm: 425,
        md: 768 + 16, // 16px for the scrollbar
        lg: 1024 + 16 // 16px for the scrollbar
      }
    },
    rtl: store.getters.rtl,
    lang: {
      current: store.getters.locale,
      locales: { en, fa, az, ar, ckb }
    },
    defaultAssets: {
      font: {
        family: 'B Nazanin'
      }
    },
    icons: {
      iconfont: 'mdi' // default - only for display purposes
    },
    theme: {
      dark: false,
      themes: {
        light: theme,
        dark: theme
      }
    }
  }
}
