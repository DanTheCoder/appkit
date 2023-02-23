<template>

	<Component
		:is="links.prev ? 'Link' : 'div'" 
		:href="links.prev" 
		class="relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
		:class="links.prev ? ' hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-700 dark:text-gray-200' : 'cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600'">
		
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>

        <span>Previous</span>
    </Component>

	<Component
		:is="links.next ? 'Link' : 'div'" 
		:href="links.next" 
		class="ml-3 relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        :class="links.next ? 'hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-700 dark:text-gray-200' : 'cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400 dark:text-gray-600'">

		<span>Next</span>

		<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
			<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
		</svg>
	</Component>


</template>

<script>
export default {
    name: 'PaginationSimple',
    
    props: {
        links: Object
    }
}
</script>