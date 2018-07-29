/**
 * @author zx.wang(zx.wang1991@gmail.com)
 * @version 1.0.0
 */
import VueBoxInput from './vue-box-input.vue';
function plugin(Vue, options) {
  if(plugin.installed) {
    return false;
  }
  Vue.component(VueBoxInput.name, VueBoxInput);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;


