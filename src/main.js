import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

/* add icons to the library */
library.add(faUserSecret)
library.add(faEllipsisVertical);
library.add(faPen);
library.add(faTrash);

dayjs.extend(relativeTime);
Object.defineProperties(Vue.prototype, {
    $date: {
        get() {
            return dayjs
        }
    }
});
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')