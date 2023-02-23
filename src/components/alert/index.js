import { render, h } from 'vue'
import Alert from './Main.vue'

export default () => {

    const showAlert = function(message, options = {}) {
        let props = { message, ...options }
        let vNode = h(Alert, { ...props })
        render(vNode, typeof document !== 'undefined' && document.createElement('div'))
    };

    return {
        success(message, options = {}) {
            options.type = 'success'
            return showAlert(message, options)
        },

        error(message, options = {}) {
            options.type = 'error'
            return showAlert(message, options)
        },

        info(message, options = {}) {
            options.type = 'info'
            return showAlert(message, options)
        },

        warning(message, options = {}) {
            options.type = 'warning'
            return showAlert(message, options)
        }
    }
};