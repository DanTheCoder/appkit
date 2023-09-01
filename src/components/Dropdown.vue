<template>
  <div>
    <div @click="toggle()" ref="triggerRef">
      <slot name="trigger"></slot>
    </div>

    <div class="z-10" ref="contentRef">
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <div v-show="isOpen" class="w-56 bg-white dark:bg-gray-800 rounded-md drop-shadow ring-1 ring-black ring-opacity-5">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "Dropdown",

  data() {
    return {
      isOpen: false,
      popperInstance: null,
    };
  },

  methods: {
    close(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },

    toggle() {
      this.isOpen = !this.isOpen;
      this.popperInstance.update();
    },
  },

  mounted() {
    document.addEventListener("click", this.close);

    this.popperInstance = createPopper(this.$refs["triggerRef"], this.$refs["contentRef"], {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
      ],
    });
  },

  beforeUnmount() {
    document.removeEventListener("click", this.close);

    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  },
};
</script>
