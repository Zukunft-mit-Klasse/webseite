<template>
  <q-page class="items-center justify-evenly">
    <h2 class="text-h4">Filtere nach:</h2>
    <div class="row q-gutter-lg">
      <div class="col">
        <q-select v-model="selectedGroup" :options="targetGroups" label="Zielgruppe" clearable/>
      </div>
      <div class="col">
        <q-select v-model="selectedMedium" :options="media" label="Medium" clearable/>
      </div>
      <div class="col">
        <q-select v-model="selectedTheme" :options="themes" label="Thema" clearable/>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageBildungsveranstaltungen',
  data(){
    return {
      targetGroups: [
        'Grundschule',
        'Sekundarstufe 1',
        'Sekundarstufe 2'
      ],
      media: [
        'analog',
        'digital'
      ],
      themes: [
        'Entwicklungszusammenarbeit',
        'Fairer Handel',
        'Gesundheit und Krankheit',
        'Klimawandel',
        'Kulturen und Werte',
        'Nachhaltige Entwicklungsziele (SDGs)',
        'Soziale Gerechtigkeit',
        'Umweltschutz'
      ],
      selectedGroup: '',
      selectedMedium: '',
      selectedTheme: ''
    }
  }
});
</script>
