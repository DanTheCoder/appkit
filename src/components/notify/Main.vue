<template>
<transition 
    enter-active-class="transform ease-out duration-300 transition" 
    enter-from-class="opacity-0 translate-x-0 translate-y-2" 
    enter-to-class="opacity-100 translate-y-0" 
    leave-active-class="transition ease-in duration-100" 
    leave-from-class="opacity-100" 
    leave-to-class="opacity-0">

    <div :class="borderColor" class="border-l-4 grid my-1.5 self-center max-w-sm w-full bg-white shadow-lg rounded pointer-events-auto ring-1 ring-black ring-opacity-5"
        v-show="isActive"
        @mouseover="toggleTimer(true)"
        @mouseleave="toggleTimer(false)">

        <div class="p-4">
            <div class="flex items-start items-center">
                <div class="flex-shrink-0">
                    <svg v-if="type === 'info'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>

                    <svg v-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>

                    <svg v-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>

                    <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="ml-3 w-0 flex-1">
                    <p class="text-sm text-gray-700">{{ message }}</p>
                </div>

                <div class="ml-4 flex-shrink-0 flex">
                    <button @click="closeAlert" class="bg-white inline-flex text-gray-400 hover:text-gray-500 focus:outline-none">
                        <span class="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>

</transition>
</template>

<script>
const borderTypeMap = {
    success: 'border-green-500',
    info: 'border-blue-400',
    warning: 'border-yellow-400',
    error: 'border-red-500'
};

import Timeout from './timeout'

export default {
    props: {
        message: {
            type: String,
            required: true
        },

        type: String,

        // Visibility in milliseconds or false to disable
        duration: {
            type: [Number, Boolean],
            default: 5000
        },
    },

    data() {
        return {
            divWrapper: null,
            isActive: false,
            timer: null,
        }
    },

    beforeMount() {
        this.createWrapperDiv();
    },

    mounted() {
        this.showAlert();
    },

    computed: {
        borderColor() {
            return borderTypeMap[this.type];
        }
    },

    methods: {
        createWrapperDiv() {
            this.divWrapper = document.querySelector('.dtc-alert-wrapper')

            if (this.divWrapper) return;

            // Create the div
            this.divWrapper = document.createElement('div')
            this.divWrapper.className = 'dtc-alert-wrapper fixed flex flex-col overflow-hidden top-0 bottom-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3'

            // Add the div to the DOM
            document.body.appendChild(this.divWrapper)
        },

        showAlert() {
            this.divWrapper.insertAdjacentElement('afterbegin', this.$el)
            this.isActive = true;

            this.timer = this.duration !== false ? new Timeout(this.closeAlert, this.duration) : null;
        },

        toggleTimer(newVal) {
            if (this.timer) {
                newVal ? this.timer.pause() : this.timer.resume()
            }
        },

        closeAlert() {
            // Stop the timer
            this.timer && this.timer.stop()
            this.isActive = false

            setTimeout(() => {

                // Remove the element
                if (typeof this.$el.remove !== 'undefined') {
                    this.$el.remove()
                } else {
                    this.$el.parentNode.removeChild(this.$el)
                }

            }, 150)
        }
    }
}
</script>