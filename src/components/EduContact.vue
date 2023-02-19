<template>
    <div class="contact">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <img src="../assets/img/people-working-together-online.png" class="rounded-lg" />

            <div>
                <h2 class="title text-center text-3xl font-bold text-gray-700">聯絡我們</h2>
                <ul class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
                    <li v-for="feature in features" :key="feature.name" class="bg-white px-3 py-5 rounded-md drop-shadow-md flex items-center justify-center cursor-pointer hover:bg-amber-300">
                        <font-awesome-icon :icon="feature.icon" class="text-2xl text-gray-700"/>
                        <p class="font-medium text-gray-900 ml-3">{{ feature.content }}</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mx-auto grid grid-cols-1 gap-x-3 gap-y-3 grid-cols-3 lg:grid-cols-6 max-w-2xl lg:max-w-7xl">
            <img src="../assets/img/cta1.png" class="px-5">
            <img src="../assets/img/cta2.png" class="px-5">
            <img src="../assets/img/cta3.png" class="px-5">
            <img src="../assets/img/cta4.png" class="px-5">
            <img src="../assets/img/cta5.png" class="px-5">
            <img src="../assets/img/cta6.png" class="px-5">
        </div>
    </div>
</template>
  
<script lang="ts" setup>
    const features = [
        { name: 'phone', icon: 'fa-solid fa-phone', content: '02-12345678' },
        { name: 'line', icon: 'fa-brands fa-line', content: 'eduschool'  },
        { name: 'facebook', icon: 'fa-brands fa-facebook', content: 'edu教育平台'  },
        { name: 'youtube', icon: 'fa-brands fa-youtube', content: 'edu教育平台' },
        { name: 'email', icon: 'fa-solid fa-envelope', content: 'edu123@gmail.com' },
        { name: 'address', icon: 'fa-solid fa-location-dot', content: '台北市中正區忠孝西路1段' },
    ]
</script>

<style lang="scss" scoped>
    .contact {
        background-image: linear-gradient(-20deg, #e9defa 0%, rgba(252, 211, 77, .3) 100%);
    }
    .title {
        @extend %titleUnderline;
    }
</style>