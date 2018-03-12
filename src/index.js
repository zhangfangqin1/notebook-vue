import Vue from 'vue';
import App from './App';
import router from './router';

/**
 * date filter
 */
const moment = require('moment');
moment.locale('zh-cn');
Vue.filter('formatDate', function (date, friendly) {
  date = moment(date);
  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }
});

import MintUI from 'mint-ui';
import ElementUI from 'element-ui';
import XgNoteCard from '@/components/NoteCard';
import XgNavbar from '@/components/Navbar'
import XgHeader from '@/components/Header'
import XgCheckbox from "@/components/Checkbox"
import XgEmpty from "@/components/Empty"
import XgTab from "@/components/Tab"

Vue.use(MintUI)
Vue.use(ElementUI)
Vue.component(XgNavbar.name, XgNavbar)
Vue.component(XgHeader.name, XgHeader)
Vue.component(XgCheckbox.name, XgCheckbox)
Vue.component(XgNoteCard.name, XgNoteCard)
Vue.component(XgEmpty.name, XgEmpty)
Vue.component(XgTab.name, XgTab)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
