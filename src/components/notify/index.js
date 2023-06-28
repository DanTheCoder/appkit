import { render, h } from 'vue'
import Notify from './Main.vue'

export default () => {

    const showNotify = function(message, options = {}) {
        let props = { message, ...options }
        let vNode = h(Notify, { ...props })
        render(vNode, typeof document !== 'undefined' && document.createElement('div'))
    };

    return {
        success(message, options = {}) {
            options.type = 'success'
            return showNotify(message, options)
        },

        error(message, options = {}) {
            options.type = 'error'
            return showNotify(message, options)
        },

        info(message, options = {}) {
            options.type = 'info'
            return showNotify(message, options)
        },

        warning(message, options = {}) {
            options.type = 'warning'
            return showNotify(message, options)
        }
    }
};