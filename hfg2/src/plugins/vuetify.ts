// Styles
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme:{
    defaultTheme: 'myCalendarTheme'
    ,themes:{
      myCalendarTheme:{
        dark: true
        ,colors:{
          cvItem: '#222222'
          ,overlayContent: '#4E4F50'
        }
      }
    }
  }
})