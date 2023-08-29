<template>
  <q-page class="items-center justify-evenly">
    <h2 class="text-h4">Filtere nach:</h2>
    <div class="row q-gutter-lg">
      <div class="col">
        <q-select v-model="selectedGroup" :options="targetGroups" label="Zielgruppe" clearable/>
      </div>
      <div class="col">
        <q-select v-model="selectedVeranstaltungsformat" :options="veranstaltungsformate" label="Veranstaltungsformat" clearable/>
      </div>
      <div class="col">
        <q-select v-model="selectedSDG" :options="sdgs" label="SDG" clearable/>
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
import { Event, sdgs } from 'components/models';


const iconFromName = (sdg: string) => {
  let number = sdg.split(' ')[0];
  if(number.length < 2) {
    number = "0"+number;
  }
  return `SDG-icon-DE-${number}`;
}

const iconImgFromName = (sdg: string) => {
  return iconFromName(sdg) + '.jpg';
}

export default defineComponent({
  name: 'PageBildungsveranstaltungen',
  components: {EventCard},
  data(): {
    targetGroups: string[],
    veranstaltungsformate: string[],
    sdgs: string[],
    selectedGroup: string,
    selectedVeranstaltungsformat: string,
    selectedSDG: string,
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
      veranstaltungsformate: [
        'interaktive Unterrichtseinheit mit einer digitalen Lernplattform',
        'Planspiel',
        'Powerpoint',
        'Rundgang',
        'Vortrag',
        'Workshop', 
      ],
      sdgs: sdgs,
      selectedGroup: '',
      selectedVeranstaltungsformat: '',
      selectedSDG: '',
      events
    }
  },
  computed: {
    filteredEvents() {
      let filteredEvents: Event[] = this.events;

      if(this.selectedGroup) {
        filteredEvents = filteredEvents.filter((event: Event) => event['Zielgruppe'].includes(this.selectedGroup) || event['Zielgruppe'] == 'alle')
      }

      if(this.selectedVeranstaltungsformat) {
        filteredEvents = filteredEvents.filter(e => e['Art der Veranstaltung'].includes(this.selectedVeranstaltungsformat))
      }

      if(this.selectedSDG) {
        const iconName = iconFromName(this.selectedSDG);
        filteredEvents = filteredEvents.filter(e => e.sdgs.includes(iconName)); 
      }

      return filteredEvents;
    },
    allTargetGroups (): string {
      return this.targetGroups.filter((g) => g !== 'Alle').join(', ');
    }
  }
});
</script>
