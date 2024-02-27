import './bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

// // Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// // Material Icons
// import '@mdi/font/css/materialdesignicons.css'

// const vuetify = createVuetify({
//   components,
//   directives,
// })


createInertiaApp({
  // progress: {
  //   // The delay after which the progress bar will appear, in milliseconds...
  //   delay: 250,

  //   // The color of the progress bar...
  //   color: '#29d',

  //   // Whether to include the default NProgress styles...
  //   includeCSS: true,

  //   // Whether the NProgress spinner will be shown...
  //   showSpinner: false,
  // },
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      // .use(vuetify)
      .mount(el)
  }
})