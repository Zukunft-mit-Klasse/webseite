<template>
  <q-card flat bordered @click="modalOpen = true" class="border-blue cursor-pointer">
    <div class="img_logo_container">
      <img class="logo img_logo" v-if="src" :src="src" />
    </div>
    <q-card-section>
      <div class="text-h6">{{event['Titel der Veranstaltung']}}</div>
    </q-card-section>

    <q-card-section class="q-pt-none" v-html="abstract">

    </q-card-section>

    <q-separator inset />

    <q-card-section class="flex">
      <div>
        <span class="text-overline">{{event['Name Institution']}}</span>
        <span class="text-caption block q-mt-md">Versanstaltungsdauer: {{event['Dauer der Veranstaltung in Minuten']}} Minuten;</span>
        <span class="text-caption block q-mt-sm">{{myTargetGroup}}</span>
      </div>
      <div class="img_sdg_container">
        <img 
          class="sdg img_sdg" 
          v-for="src in event['sdgs']" 
          v-bind:key="src" 
          :src="getSdgPath(src)" />
      </div>
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

        <q-card-section v-if="src">
          <img class="logo-popup" :src="src" />
        </q-card-section>

        <q-card-section class="q-pt-none q-mt-lg">
          <q-markup-table>
            <tbody>
              <tr>
                <td class="text-left">SDG:</td>
                <td class="text-left">
                  <span class="block" v-for="sdg in sdgs" v-bind:key="sdg">
                    {{sdg}}
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-left">Zielgruppe:</td>
                <td class="text-left">{{myTargetGroup}}</td>
              </tr>
              <tr>
                <td class="text-left">Veranstaltungsdauer (Min):</td>
                <td class="text-left">{{event['Dauer der Veranstaltung in Minuten']}}</td>
              </tr>
              <tr>
                <td class="text-left">Kosten:</td>
                <td class="text-left">{{event['Kosten']}}€</td>
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
  import { Event, sdgs } from './models';

    export default Vue.extend({
      name: 'EventCard',
      props: {
          event: Event,
          index: Number,
          allGroups: String
      },
      data() {
        return {
          modalOpen: false
        }
      },
      computed: {
        abstract(): string {
          return this.description.substr(0,120)+'&hellip; <span class="text-italic font-xs"> [weiter lesen]</span>';
        },
        description(): string {
          // @ts-ignore
          return this.nl2br(this.event['Beschreibung']);
        },
        sdgs(): string[] {
          // @ts-ignore
          return this.event['sdgs'].map((e) => this.sdgNameFromImg(e));
        },
        color(): string {
          return [
            'green',
            'blue',
            'red'
          ][Math.round(Math.random() * 3)];
        },
        myTargetGroup(): string {
          const groupStr: string = (this.event['Zielgruppe'] as string).toLowerCase() === 'alle'
            ? this.allGroups
            : this.event['Zielgruppe'] as string;

          return groupStr;
        },
        src(): string {
          return this.event['Logo']
            ? '/Logos/' + (this.event['Logo'] as string)
            : '';
        }
      },
      methods: {
        getSdgPath(img: string) {
          return '/SDG/' + img + '.jpg';
        },
        sdgNameFromImg(img: string) {
          const index = Number(img.split('-')[3]);
          return sdgs[index];
        },
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

<style>
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

  .img_logo_container {
    float: right;
    width: 33%;
  }
  img.logo.img_logo{
    max-width:100%;
    max-height: 75px;
    padding-right:15px;
    padding-top: 15px;
    float:right;
  }

  .img_sdg_container {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 5px;
    place-self: end;
    flex-grow: 1;
  }
  .img_sdg_container img {
    width: 50px;
    place-self: end;
  }

  img.logo-popup {
    max-width: 100%;
    max-height: 15vh;
    height: 150px;
  }

  .font-xs {
    font-size: 0.8rem;
  }
  .green{
    background-color: #b5e6bc;
  }

  .border-blue {
    border: 2px solid #c8eaff;
  }

  .red {
    background-color: #ffc8c8;
  }

  @media screen and (min-width: 600px) {
    .q-dialog__inner--minimized > div {
      max-width: 750px;
    }
  }

</style>
