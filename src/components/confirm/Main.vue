<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto ease-out duration-300" @close="handleBackdropClose()" :class="backdropClickAnimate">
            <div class="flex items-center justify-center min-h-screen p-4 text-center">
            
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        
                        <div>
                            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
                                </svg>
                            </div>
                  
                            <div class="mt-3 text-center sm:mt-5">
                                <h3 class="text-lg font-medium text-gray-800">{{ title }}</h3>
                                <p class="text-sm text-gray-500">{{ message }}</p>
                            </div>
                        </div>

                        <div class="mt-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                            <ButtonSpinner v-if="cancelAction" type="button" class="btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1"
                                @click="onCancel"
                                :loading="cancelButtonLoading">
                                {{ cancelButtonText }}
                            </ButtonSpinner>

                            <button v-else type="button" class="btn btn-light mb-3 sm:mb-0 w-full justify-center py-2.5 sm:col-start-1"
                                @click="open = false">
                                {{ cancelButtonText }}
                            </button> 

                            <ButtonSpinner type="button" class="btn-primary w-full justify-center py-2.5 sm:col-start-2"
                                @click="onConfirm"
                                :loading="confirmButtonLoading">
                                {{ confirmButtonText }}
                            </ButtonSpinner>
                        </div>

                    </div>
                </TransitionChild>

            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script>
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import ButtonSpinner from '../ButtonSpinner.vue';

export default {
    name: 'Confirm',

    components: {
        Dialog,
        DialogOverlay,
        TransitionChild,
        TransitionRoot,
        ButtonSpinner
    },

    props: {
        title: {
            type: String,
            required: true
        },

        message: {
            type: String,
            required: true
        },

        cancelAction: {
            type: Boolean,
            default: false
        },

        cancelButtonText: {
            type: String,
            default: 'Cancel'
        },

        confirmButtonText: {
            type: String,
            default: 'Confirm'
        },

        confirmCallback: {
            type: Function,
            default: () => {}
        },

        cancelCallback: {
            type: Function,
            default: () => {}
        }
    },

    data() {
        return {
            open: false,
            confirmButtonLoading: false,
            cancelButtonLoading: false,
            backdropClickAnimate: ""
        }
    },

    mounted() {
        this.open = true;
    },

    methods: {
        handleBackdropClose() {
            this.backdropClickAnimate = "scale-105";
            setTimeout(() => { this.backdropClickAnimate = "" }, 300)
        },

        onConfirm() {
            // Provide instance access
            this.confirmCallback(this)
        },

        onCancel() {
            // Provide instance access
            this.cancelCallback(this)
        }
    }
}
</script>