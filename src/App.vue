<script setup lang="ts">
  import EduHome from './components/EduHome.vue';
  import EduNavbar from './components/EduNavbar.vue';
  import EduAbout from './components/EduAbout.vue';
  import EduCourse from './components/EduCourse.vue';
  import EduBanner from './components/EduBanner.vue';
  import EduComment from './components/EduComment.vue';
  import EduContact from './components/EduContact.vue';
  import EduFooter from './components/EduFooter.vue';
</script>

<template>
  <EduNavbar></EduNavbar>
  <EduHome></EduHome>
  <EduAbout></EduAbout>
  <EduCourse></EduCourse>
  <EduBanner></EduBanner>
  <EduComment></EduComment>
  <EduContact></EduContact>
  <EduFooter></EduFooter>
</template>

<style lang="scss">
  @import './assets/scss/all.scss';
</style>
