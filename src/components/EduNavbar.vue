<template>
    <Disclosure as="nav" class="bg-amber-300 drop-shadow-md" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-around">
                <!-- hamburger -->
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <!-- logo -->
                <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-700 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>

                        <h3 class="text-gray-700 font-bold">Edu.</h3>
                    </div>
                </div>
                <!-- navigation -->
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-700 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                    </div>
                </div>
                <!-- login -->
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a class="text-gray-700 mx-3 cursor-pointer">登入</a>
                    <button class="bg-gray-700 text-white border-gray-700 px-5 py-2 rounded-md hover:bg-gray-600"><a href="#">註冊</a></button>
                </div>
            </div>
        </div>
  
        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
            <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
  
<script lang="ts" setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: '首頁', href: '#home', current: false },
    { name: '關於我們', href: '#about', current: false },
    { name: '熱門課程', href: '#course', current: false },
    { name: '相關評論', href: '#comment', current: false },
    { name: '聯絡我們', href: '#contact', current: false },
  ]
</script>

<style lang="scss" scoped>
    h3 {
        @include font(4);
        font-family: 'Poppins', sans-serif;
    }

</style>