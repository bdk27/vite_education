<template>
    <section class="about py-20 bg-amber-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="title text-center text-3xl font-bold text-gray-700">關於我們</h2>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-start">
            <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-amber-300">#About us</h3>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">探索世界有趣新知</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">創造一個不受限與適才適性的環境，讓大家更輕鬆快樂地累積知識技能，推動社會持續進步，將學習視為一種生活。透過優質的課程內容，不斷累積追求新知就像探索驚喜一樣。讓它成為生活中千萬個美好時刻，改變就此發生！</p>
                    <ul class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none grid sm:grid-cols-2">
                        <li v-for="feature in features" :key="feature.name">
                            <font-awesome-icon :icon="feature.icon" class="inline-block text-2xl text-amber-500"/>
                            <p class="text-gray-700 inline-block p-3">{{ feature.name }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0 -->
            <div class="image">
              <img src="../assets/img/people-collaborating-or-sharing-a-message.png" class="w-full" />
            </div>    
        </div>
      </div>
    </section>
</template>
  
<script lang="ts" setup>
  
  const features = [
    {
      name: '課程無限次觀看',
      icon: 'fa-solid fa-clock',
    },
    {
      name: '人人都能是老師或學生',
      icon: 'fa-solid fa-chalkboard-user',
    },
    {
      name: '會員遍佈全世界',
      icon: 'fa-solid fa-users',
    },
    {
      name: '超過 523,00 購課次數',
      icon: 'fa-solid fa-globe',
    },
  ]
</script>

<style lang="scss" scoped>
  .about {
    background-image: linear-gradient(-20deg, #e9defa 0%, rgba(252, 211, 77, .3) 100%);
  }
  .title {
    @extend %titleUnderline;
  }
  h3 {
      font-family: 'Poppins', sans-serif;
  }
</style>