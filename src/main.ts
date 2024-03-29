/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/base.css'
import './assets/main.css'
import 'vue-toastification/dist/index.css'
// import './assets/customTheme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
/* primevue ui kit */
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import MultiSelect from 'primevue/multiselect'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'
import SplitButton from 'primevue/splitbutton'
import TabMenu from 'primevue/tabmenu'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Radiobutton from 'primevue/radiobutton'
import InputNumber from 'primevue/inputnumber'
import InputMask from 'primevue/inputmask'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Badge from 'primevue/badge'
import Paginator from 'primevue/paginator'
import ProgressSpinner from 'primevue/progressspinner'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import PrimeVue from 'primevue/config'

const app = createApp(App)

const options = {
  // You can set your default options here
}

app.component('ProgressSpinner', ProgressSpinner)
app.component('Paginator', Paginator)
app.component('Badge', Badge)
app.component('DataView', DataView)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('RadioButton', Radiobutton)
app.component('Checkbox', Checkbox)
app.component('TextAreaPrime', Textarea)
app.component('TabMenu', TabMenu)
app.component('SplitButton', SplitButton)
app.component('Dialog', Dialog)
app.component('Tag', Tag)
app.component('Dropdown', Dropdown)
app.component('MultiSelect', MultiSelect)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('InputMask', InputMask)

app.use(createPinia())
app.use(
  PrimeVue,
  { inputStyle: 'filled' }
)
app.use(router)
app.use(Toast, options)
app.mount('#app')
