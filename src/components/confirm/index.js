import { render, h } from 'vue'
import Confirm from './Main.vue'

export default () => {
    return function(options = {}) {
        let props = {...options }
        let vNode = h(Confirm, { ...props })
        render(vNode, typeof document !== 'undefined' && document.createElement('div'))
    };
};