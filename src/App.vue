<script setup lang="ts">
  import EduHome from './components/EduHome.vue';
  import EduNavbar from './components/EduNavbar.vue';
  import EduAbout from './components/EduAbout.vue';
  import EduCourse from './components/EduCourse.vue';
  import EduBanner from './components/EduBanner.vue';
  import EduComment from './components/EduComment.vue';
</script>

<template>
  <EduNavbar></EduNavbar>
  <EduHome></EduHome>
  <EduAbout></EduAbout>
  <EduCourse></EduCourse>
  <EduBanner></EduBanner>
  <EduComment></EduComment>
</template>

<style lang="scss">
  @import './assets/scss/all.scss';
</style>
