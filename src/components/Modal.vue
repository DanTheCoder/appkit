<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="handleBackdropClose()">
            
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-300" :class="backdropClickAnimate">
                <div class="flex items-center justify-center min-h-full p-4 sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel :class="sizeClass" class="w-full relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all">

                            <div class="p-4 sm:p-6">
                                    
                                <div class="block absolute top-0 right-0 pt-4 pr-4">
                                    <button tabindex="-1" type="button" class="bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="$emit('update:open', false)">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100">{{ title }}</h3>
                            </div>

                            <slot />

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>

        </Dialog>
    </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
    name: 'Modal',

    components: {
        Dialog,
        DialogPanel,
        TransitionChild,
        TransitionRoot,
    },

    props: {
        open: {
            type: Boolean,
            default: false
        },

        backdropClose: {
            type: Boolean,
            default: false
        },

        title: String,

        size: String
    },

    data() {
        return {
            backdropClickAnimate: ""
        };
    },

    computed: {
        sizeClass() {
            return this.size ? this.size : 'sm:max-w-xl';
        }
    },

    methods: {
        handleBackdropClose() {
            if (this.backdropClose) {
                return this.$emit('update:open', false);
            }

            this.backdropClickAnimate = "scale-105";
            setTimeout(() => { this.backdropClickAnimate = "" }, 300)
        },
    }
}
</script>