<template>
    <div>
        <!-- Title -->
        <div class="w-full flex flex-row justify-between items-center my-10">
            <h1 class="text-4xl text-gray-900 font-bold uppercase">Angry <br> whopper</h1>
            <div class="flex flex-col text-right">
                <span class="text-2xl text-gray-500 uppercase font-medium">From</span>
                <span class="text-2xl text-gray-900 uppercase font-bold">$12</span>
            </div>
        </div>
        <!-- Product -->
        <div class="w-full flex justify-center items-center">
            <img class="w-10/12 h-auto object-cover" src="@/assets/burger.png" alt="">
        </div>
        <!-- Size -->
        <div class="w-full flex flex-col justify-center my-10">
            <span class="text-base font-bold text-center mb-4">Size</span>
            <div class="flex flex-row justify-center items-center">
                <div class="flex justify-center items-center relative bg-gray-200 rounded-full w-12 h-12 p-4 shadow-lg">
                    <span class="text-gray-900 text-xl font-bold">S</span>
                </div>
                <div class="flex justify-center items-center relative bg-white rounded-full w-12 h-12 p-4 shadow-lg mx-6">
                    <span class="text-gray-900 text-xl font-bold">M</span>
                </div>
                <div class="flex justify-center items-center relative bg-gray-200 rounded-full w-12 h-12 p-4 shadow-lg">
                    <span class="text-gray-900 text-xl font-bold">L</span>
                </div>
            </div>
        </div>
        <!-- Description -->
        <div class="w-full flex justify-center text-center">
            <span class="font-medium text-gray-500">Our Angry WHOPPER features 1/4lb* of flame-grilled beef, piled high with thick-cut bacon, American cheese.</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Burger Menu'
}
</script>

<style scoped>
</style>
