<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="title text-center text-3xl font-bold text-gray-700">熱門課程</h2>

            <div class="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                <div v-for="product in products" :key="product.id" class="group relative">
                    <div class="">
                        <img :src="product.imageSrc" class="w-full" />
                    </div>
                    <div class="mt-4">
                        <h3 class="mt-1 text-xl font-bold text-gray-700">{{ product.name }}</h3>
                        <p class="py-1 text-gray-500 leading-relaxed">{{ product.describe }}</p>
                        <div class="flex items-center justify-between mt-4">
                            <div class="stars text-amber-300">
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                            </div>
                            <p class="text-gray-700">課程時數: {{ product.hour }}小時</p>
                            <p class="text-gray-700">{{ product.evaluate }}則評價</p>
                        </div>
                        
                        <h2 class="mt-5 p-1 text-2xl text-center font-bold text-amber-500 border-2 border-amber-300 hover:text-white hover:bg-amber-300 cursor-pointer rounded-md">NT$ {{ product.price }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import course1 from '../assets/img/course1.jpg';
    import course2 from '../assets/img/course2.jpg';
    import course3 from '../assets/img/course3.jpg';
    const products = [
        {
            id: 1,
            name: '網頁設計入門',
            href: '#',
            imageSrc: course1,
            evaluate: '302',
            hour: '20',
            describe: '這堂線上課程企劃是給完全無基礎的朋友，一起領略設計的美好，讓製作網站這件事情，成為大家下班後或在週末時候的小興趣',
            price: '1990',
        },
        {
            id: 2,
            name: '前端工程入門',
            href: '#',
            imageSrc: course2,
            evaluate: '437',
            hour: '19',
            describe: '我們推出了 Vue.js 課程，從基礎的 html、css、js 網頁開發，進階到前端架構，搭配 css 的樣式庫能夠讓你在開發過程中輕鬆方便許多',
            price: '2400',
        },
        {
            id: 3,
            name: '後端工程入門',
            href: '#',
            imageSrc: course3,
            evaluate: '516',
            hour: '22',
            describe: '學會 Node.js、Express 網站後端開發、以及 MongoDB 資料庫的基礎技能。最終具備從無到有，開發關鍵網站系統的能力。',
            price: '2500',
        },
    ]
</script>

<style lang="scss" scoped>
    .title {
        @extend %titleUnderline;
    }
</style>