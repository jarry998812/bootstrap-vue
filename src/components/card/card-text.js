import Vue from '../../utils/vue'
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  textTag: {
    type: String,
    default: 'p'
  }
}

// @vue/component
export default Vue.extend({
  name: 'BCardText',
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(props.textTag, mergeData(data, { staticClass: 'card-text' }), children)
  }
})
