<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="title text-center text-3xl font-bold text-gray-700">學員評論</h2>

            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <li v-for="person in people" :key="person.name">
                    <div class="flex items-center justify-center flex-col">
                        <img class="h-20 w-20 rounded-full p-1 border-2 border-amber-300" :src="person.pic" />
                        <div>
                            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-700 text-center p-1">{{ person.name }}</h3>
                            <p class="text-gray-500 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repudiandae sed quidem quibus odit expedita fuga explicabo nemo fugiat inventore.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';

    interface Person {
        name: string;
        pic: string;
    }
    const people = ref<Person[]>([]);

    async function getUserData() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=6');
            const data = await response.json();
            const users = data.results;
            users.forEach((user: any) => {
                let name = `${user.name.first} ${user.name.last}`;
                let pic = `${user.picture.medium}`;
                const userInfo = {name, pic};
                people.value.push(userInfo);
            });
        }catch(msg) {
            alert(`Error: ${msg}`);
            console.log('Error:', msg);
        }
    }

    onMounted(() => {
        getUserData();
    })
</script>

<style lang="scss">
    .title {
        @extend %titleUnderline;
    }
</style>