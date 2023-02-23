<template>
<TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-hidden" @close="$emit('update:open', false)">
        <div class="absolute inset-0 overflow-hidden">

            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-y-0 right-0 max-w-full flex">
                <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                    
                    <div class="w-screen" :class="sizeClass">
                        <slot></slot>
                    </div>

                </TransitionChild>
            </div>

        </div>
    </Dialog>
</TransitionRoot>
</template>

<script>
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
    name: 'Panel',

    components: {
        Dialog,
        DialogOverlay,
        TransitionChild,
        TransitionRoot,
    },

    props: {
        open: {
            type: Boolean,
            default: false
        },

        size: String
    },

    computed: {
        sizeClass() {
            return this.size ? this.size : 'max-w-md';
        }
    },
}
</script>