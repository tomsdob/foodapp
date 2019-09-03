<template>
    <div>
        <!-- Title -->
        <div class="text-left w-full my-10">
            <h1 class="text-4xl text-gray-900 font-bold uppercase">Online food <br> services</h1>
        </div>
        <!-- Search bar -->
        <div class="w-full flex items-center relative">
            <svg class="absolute h-4 w-4 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            </svg>
            <input type="text" placeholder="Search" aria-label="Search" class="w-full flex flex-row bg-gray-200 text-gray-800 text-sm p-4 pl-12 rounded-lg outline-none">
        </div>
        <!-- Category slider -->
        <div class="w-full flex my-10 overflow-y-auto scrolling-touch">
            <div class="flex mr-10">
                <span class="text-base font-bold uppercase text-gray-900">Featured</span>
            </div>
            <div class="flex mr-10">
                <span class="text-base font-bold uppercase text-gray-500">Combos</span>
            </div>
            <div class="flex mr-10">
                <span class="text-base font-bold uppercase text-gray-500">Favorites</span>
            </div>
            <div class="flex mr-10">
                <span class="text-base font-bold uppercase text-gray-500">Popular</span>
            </div>
            <div class="flex mr-10">
                <span class="text-base font-bold uppercase text-gray-500">Nearby</span>
            </div>
        </div>
        <!-- Product slider -->
        <div class="w-full flex overflow-y-auto scrolling-touch">
            <router-link to="/burger">
                <div class="flex flex-col rounded-lg bg-red-200 p-8 mr-4">
                    <div class="bg-white rounded-full w-16 h-16">
                        <img class="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="">
                    </div>
                    <div class="flex flex-col text-red-800 font-bold text-center mt-10">
                        <span class="mb-1">Burger</span>
                        <span class="text-sm">$25</span>
                    </div>
                </div>
            </router-link>
            <div class="flex flex-col rounded-lg bg-yellow-300 p-8 mr-4">
                <div class="bg-white rounded-full w-16 h-16">
                    <img class="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="">
                </div>
                <div class="flex flex-col text-yellow-800 font-bold text-center mt-10">
                    <span class="mb-1">Pizza</span>
                    <span class="text-sm">$15</span>
                </div>
            </div>

            <div class="flex flex-col rounded-lg bg-green-300 p-8 mr-4">
                <div class="bg-white rounded-full w-16 h-16">
                    <img class="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="">
                </div>
                <div class="flex flex-col text-green-800 font-bold text-center mt-10">
                    <span class="mb-1">Donuts</span>
                    <span class="text-sm">$12</span>
                </div>
            </div>

            <div class="flex flex-col rounded-lg bg-blue-300 p-8 mr-4">
                <div class="bg-white rounded-full w-16 h-16">
                    <img class="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="">
                </div>
                <div class="flex flex-col text-blue-800 font-bold text-center mt-10">
                    <span class="mb-1">Sushi</span>
                    <span class="text-sm">$20</span>
                </div>
            </div>
        </div>
        <!-- Images -->
        <div class="w-full flex my-10">
            <div class="flex flex-col">
                <img class="rounded-lg h-64 w-full object-cover mb-4" src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt="Food">
                <img class="rounded-lg h-64 w-full object-cover mb-4" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="Food">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
