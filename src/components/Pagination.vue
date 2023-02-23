<template>
<nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">

    <Component 
        :is="link.url ? 'Link' : 'span'"
        v-for="(link, index) in links"
        :key="index"
        :href="link.url" 
        v-html="link.label"
        class="first:rounded-l-md last:rounded-r-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 inline-flex relative items-center px-3.5 py-1.5 border text-sm font-medium"
        :class="[link.url ? 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-200' : 'cursor-not-allowed text-gray-400 dark:text-gray-600', link.active ? 'z-10 bg-primary-50 border-primary-500 text-primary-600' : '']"
    />

</nav>
</template>

<script>
export default {
    name: 'Pagination',
    
    props: {
        links: Object
    }
}
</script>