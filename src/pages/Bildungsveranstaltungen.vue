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
    <div class="row q-mt-lg q-mb-lg q-col-gutter-lg">
      <div class="col-lg-4 col-md-6 col-sm-12"
           v-masonry-tile
           v-for="(event, index) in filteredEvents"
           v-bind:key="event['Titel der Veranstaltung']"
      >

        <event-card
          :event="event"
          :index="index"
          :allGroups="allTargetGroups"
        />
      </div>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import EventCard from 'components/EventCard.vue';
import events from 'assets/events/events.json';
import { Event } from 'components/models';


export default defineComponent({
  name: 'PageBildungsveranstaltungen',
  components: {EventCard},
  data(): {
    targetGroups: string[],
    media: string[],
    themes: string[],
    selectedGroup: string,
    selectedMedium: string,
    selectedTheme: string,
    events: Event[]
  }{
    return {
      targetGroups: [
        'Alle',
        'Berufsschule',
        'Förderschule',
        'Grundschule',
        'Sekundarstufe I',
        'Sekundarstufe II'
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
      selectedTheme: '',
      events
    }
  },
  computed: {
    filteredEvents() {
      let filteredEvents: Event[] = this.events;

      if(this.selectedGroup) {
        filteredEvents = filteredEvents.filter((event: Event) => event['Zielgruppe'].includes(this.selectedGroup) || event['Zielgruppe'] == 'alle')
      }

      if(this.selectedMedium) {
        filteredEvents = this.selectedMedium === 'digital'
          ? filteredEvents.filter((event: Event) => event['Veranstaltungsort'].includes('digital'))
          : filteredEvents.filter((event: Event) => !event['Veranstaltungsort'].includes('digital'))
      }

      if(this.selectedTheme) {
        filteredEvents = filteredEvents.filter((event: Event) => event['Themenfeld 1'].includes(this.selectedTheme) || event['Themenfeld 2'].includes(this.selectedTheme))
      }

      return filteredEvents;
    },
    allTargetGroups (): string {
      return this.targetGroups.filter((g) => g !== 'Alle').join(', ');
    }
  }
});
</script>
