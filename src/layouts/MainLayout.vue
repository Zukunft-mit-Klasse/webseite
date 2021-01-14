<template>
  <q-layout view="hhh lpR fff">

    <q-header elevated class="main-header bg-none text-white">
      <q-toolbar>
        <q-btn class="desktop-hide bg-primary" dense flat round icon="menu" @click="left = !left" />

        <nav class="mobile-hide main-menu full-width row justify-center">
          <router-link
            v-for="item in menu"
            v-bind:key="item.route"
            :to="item.route"
            class="text-h6 q-px-md"
          >
            {{item.caption}}
          </router-link>
        </nav>
      </q-toolbar>



    </q-header>

    <q-drawer v-model="left" side="left" overlay elevated>
      <q-list bordered separator>
        <q-item v-for="item in menu" v-bind:key="item.route" clickable v-ripple>
          <q-item-section>
            <router-link :to="item.route" class="text-h6">{{item.caption}}</router-link>
          </q-item-section>
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
        <a href="/kontakt" class="q-px-md">Kontakt</a>
        <a href="/impressum" class="q-px-md">Impressum & Datenschutz</a>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        left: false,
        menu: [
          {
            route: '/',
            caption: 'Home'
          },
          {
            route: '/projekt',
            caption: 'Projekt'
          },
          {
            route: '/themen',
            caption: 'Themen'
          },
          {
            route: '/bildungsveranstaltungen',
            caption: 'Bildungsveranstaltungen'
          },
          {
            route: '/projektideen',
            caption: 'Projektideen'
          },
          {
            route: '/ueber-uns',
            caption: 'Über uns'
          },
        ]
      }
    }
  }
</script>
