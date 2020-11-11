<template>
  <q-card flat bordered @click="modalOpen = true" :class="color">
    <q-card-section>
      <div class="text-h6">{{event['Titel der Veranstaltung']}}</div>
    </q-card-section>

    <q-card-section class="q-pt-none" v-html="abstract">

    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <span class="text-overline">{{event['Name Institution']}} - {{event['Veranstaltungsort']}}</span>
      <br />
      <span class="text-caption">Versanstaltungsdauer: {{event['Dauer der Veranstaltung in Minuten']}} Minuten</span>
    </q-card-section>


    <q-dialog v-model="modalOpen" transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h4">{{event['Titel der Veranstaltung']}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none description-text" v-html="description">
        </q-card-section>

        <q-card-section class="q-pt-none q-mt-lg">
          <q-markup-table>
            <tbody>
              <tr>
                <td class="text-left">Themenfelder:</td>
                <td class="text-left">{{themes}}</td>
              </tr>
              <tr>
                <td class="text-left">Zielgruppe:</td>
                <td class="text-left">{{event['Zielgruppe']}}</td>
              </tr>
              <tr>
                <td class="text-left">Geeignet für Unterrichtsfächer:</td>
                <td class="text-left">{{event['Geeignet für Unterrichtsfächer']}}</td>
              </tr>
              <tr>
                <td class="text-left">Veranstaltungsdauer (Min):</td>
                <td class="text-left">{{event['Dauer der Veranstaltung in Minuten']}}</td>
              </tr>
              <tr>
                <td class="text-left">Veranstaltungsort:</td>
                <td class="text-left">{{event['Veranstaltungsort']}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <h3 class="text-h6">Kontaktdaten</h3>
          <q-markup-table>
            <tbody>
            <tr>
              <td class="text-left">Ansprechpartner für Schulen:</td>
              <td class="text-left">{{event['Ansprechpartner für Schulen']}}</td>
            </tr>
              <tr>
                <td class="text-left">Veranstalter:</td>
                <td class="text-left">{{event['Name Institution']}}</td>
              </tr>
              <tr>
                <td class="text-left">Adresse:</td>
                <td class="text-left">{{event['Adresse Institution']}}</td>
              </tr>
              <tr>
                <td class="text-left">Telefonnummer:</td>
                <td class="text-left">{{event['Telefonnummer']}}</td>
              </tr>
              <tr>
                <td class="text-left">Mailadresse:</td>
                <td class="text-left">{{event['Mailadresse']}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Event } from './models';

    export default Vue.extend({
      name: "EventCard",
      props: {
          event: Event,
          index: Number
      },
      data() {
        return {
          modalOpen: false
        }
      },
      computed: {
        abstract(): string {
          return this.description.substr(0,120)+'&hellip;';
        },
        description(): string {
          // @ts-ignore
          return this.nl2br(this.event['Beschreibung']);
        },
        themes(): string {
          // @ts-ignore
          return [this.event['Themenfeld 1'], this.event['Themenfeld 2']].filter((e) => !!e).join(', ');
        },
        color(): string {
          return [
            'green',
            'blue',
            'red'
          ][Math.round(Math.random() * 3)];
        }
      },
      methods: {
        nl2br (str?: string, is_xhtml?: boolean) {
          if (typeof str === 'undefined' || str === null) {
            return '';
          }
          const breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
          return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }
      }
    })
</script>

<style scoped>
  .text-overline {
    line-height: 0;
  }

  .description-text {
    line-height: 1.3;
    font-size: 1.2rem;
  }

  .my-card:hover {
    cursor: pointer;
  }

  .green{
    background-color: #b5e6bc;
  }

  .blue {
    background-color: #c8eaff;
  }

  .red {
    background-color: #ffc8c8;
  }
</style>
