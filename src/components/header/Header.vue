<template>
  <header class="main-header">
    <nav class="flex px-0.5 items-center">
        <a href="/" class="logo pr-1">
          <img src="https://news.ycombinator.com/y18.svg" alt="Hacker news logo" width="20" height="20">
        </a>
        <ul>
          <li>
            <a href="/" class="text-lg font-bold text-black">Hacker News</a>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style src="./Header.css" scoped />