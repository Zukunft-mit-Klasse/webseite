<template>
  <q-page class="items-center justify-evenly">

    <h1 class="text-h3">Kontakt</h1>
    <p>
      Das Bildungsprojekt Zukunft mit Klasse ist eine gemeinsame Initiative von unterfränkischen Bildungsakteur*innen.
    </p>
    <div class="row icons">
      <div class="col">
        <img src="/Logos/WL_AB.jpg" alt="Weltladen Aschaffenburg"/>
      </div>
      <div class="col">
        <img src="/Logos/WL_WÜ.jpg" alt="Weltladen Würzburg"/>
      </div>
      <div class="col">
        <img src="/Logos/DAHW.jpg" alt="Deutsche Lepra- und Tuberkulosehilfe e.V."/>
      </div>
    </div>
    <p class="text-body1">
      Für allgemeine Fragen zum Projekt und zur Einreichung des Zertifizierungsformulars erreichen Sie uns unter folgender Mailadresse: <br />
      <a href="mailto:dabei@zukunft-mit-klasse.de">dabei@zukunft-mit-klasse.de</a>
    </p>
  </q-page>
</template>

<script lang="ts">

  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    name: 'PageContact'
  });
</script>

<style scoped>
  .icons {
    height:150px;
    margin: 15px 0;
  }
  .icons div,
  .icons img {
    max-height:100%;
  }
</style>
