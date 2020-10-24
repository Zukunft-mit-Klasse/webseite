<template>
  <q-layout view="hhh lpR fff">

    <q-header elevated class="main-header bg-none text-white">
      <q-toolbar>
        <q-btn class="desktop-hide bg-primary" dense flat round icon="menu" @click="left = !left" />

        <nav class="mobile-hide main-menu full-width row justify-center">
          <a href="/" class="text-h6 q-px-md">Home</a>
          <a href="/" class="text-h6 q-px-md">Themen</a>
          <a href="/" class="text-h6 q-px-md">Bildungsverantstaltungen</a>
          <a href="/" class="text-h6 q-px-md">Projektideen</a>
          <a href="/" class="text-h6 q-px-md">Für Lehrkräfte</a>
          <a href="/" class="text-h6 q-px-md">Über uns</a>
        </nav>
      </q-toolbar>



    </q-header>

    <q-drawer v-model="left" side="left" overlay elevated>
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section><a href="/" class="text-h6">Start</a></q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section><a href="/impressum" class="text-h6">Impressum & Datenschutz</a></q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div class="footer-menu row justify-end q-py-sm ">
        <a href="/" class="q-px-md">Kontakt</a>
        <a href="/" class="q-px-md">Impressum</a>
        <a href="/" class="q-px-md">Datenschutz</a>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        left: false
      }
    }
  }
</script>
