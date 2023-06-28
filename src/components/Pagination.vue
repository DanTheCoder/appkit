<script setup>
import { defineProps } from "vue";

defineProps({
    // Laravel pagination data - meta.links for full and .links for simple
    links: Object,

    // Only next and previous buttons
    simple: {
    type: Boolean,
    default: false,
  },
});
</script>


<template>
<nav v-if="simple" class="flex justify-between items-center">

    <Component
        :is="links.prev ? 'Link' : 'div'" 
        :href="links.prev" 
        class="relative inline-flex items-center px-3.5 py-1.5 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        :class="links.prev ? ' hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600'">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

        <span>Prev</span>
    </Component>

    <Component
        :is="links.next ? 'Link' : 'div'" 
        :href="links.next" 
        class="ml-3 relative inline-flex items-center px-3.5 py-1.5 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        :class="links.next ? 'hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-800 dark:text-gray-200' : 'cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600'">

        <span>Next</span>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

    </Component>

</nav>

<nav v-else class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">

    <Component 
        :is="link.url ? 'Link' : 'span'"
        v-for="(link, index) in links"
        :key="index"
        :href="link.url" 
        v-html="link.label"
        class="first:rounded-l-md last:rounded-r-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 inline-flex relative items-center px-3.5 py-1.5 border text-sm font-medium"
        :class="[link.url ? 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200' : 'cursor-not-allowed text-gray-400 dark:text-gray-600', link.active ? 'z-10 !bg-primary-50 border-primary-500 text-primary-600' : '']"
    />

</nav>
</template>