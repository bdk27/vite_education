<template>
    <!-- isolate overflow-hidden -->
    <div class="home relative py-24 sm:py-32 text-center">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center flex-col">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl"><span>Edu.</span>全台最大學習平台</h2>
                <p class="mt-6 text-lg leading-8 text-gray-700 font-medium">Edu 教育平台，擁有各式各樣的有趣又豐富學習內容，並且不受時間地點限制，可重複觀看影片，讓你輕鬆快樂地累積知識技能！</p>
            </div>

            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <ul class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 ">
                    <li v-for="stat in stats" :key="stat.name" class="flex flex-col bg-white p-16 rounded-lg drop-shadow-xl">
                        <div class="relative rounded-full w-20 h-20 mx-auto mb-3" :class="stat.color">
                            <font-awesome-icon :icon="stat.icon" class="absolute icons text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </div>

                        <!-- <p class="text-base leading-7 text-gray-700 pr-1">{{ stat.name }}:</p> -->
                        <p class="text-2xl font-bold leading-10 tracking-tight text-gray-700">{{ stat.value }}</p>

                        <p class="text-gray-500">{{ stat.content }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </template>
  
<script lang="ts" setup>
    const stats = [
        { name: '所有課程', value: '500+', icon: 'fa-solid fa-book-open', color: 'bg-red-500', content: '多種課程隨你挑選，找到適合你的課程，探索你的熱情所在！' },
        { name: '會員人數', value: '1500+', icon: 'fa-solid fa-users', color: 'bg-green-500', content: '最多人評選為最棒的教育平台，不受時間、地點限制能夠輕鬆快樂學習'  },
        { name: '免費課程', value: '120+', icon: 'fa-solid fa-bolt-lightning', color: 'bg-blue-500', content: '線上互動機制，參與許多免費課程，完課後還可領取完課證書' },
    ]
</script>

<style lang="scss">
    .home {
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(rgba(252, 211, 77, .5), rgba(252, 211, 77, .7)), url('../assets/img/pexels-photo-256417.jpeg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 0;
        overflow: hidden;
        &::before {
            content: '';
            position: absolute;
            bottom: -25%;
            left: 50%;
            transform: translateX(-50%);
            border-top: 70vh solid #fff;
            width: 120%;
            border-radius: 50%;
            z-index: -1;
        }
        span {
            font-family: 'Poppins', sans-serif;
        }
        .icons {
            @include font(4);
        }
    }
</style>