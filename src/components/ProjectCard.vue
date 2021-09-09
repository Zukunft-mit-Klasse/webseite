<template>
  <q-card flat bordered class="border-blue">
    <q-card-section>
      <div class="text-h6">{{project['title']}}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <p>{{project.content}}</p>
    </q-card-section>

  </q-card>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Project } from './models';

    export default Vue.extend({
      name: 'ProjectCard',
      props: {
          project: Object as () => Project,
          index: Number
      }
    })
</script>

<style>

  .border-blue {
    border: 2px solid #c8eaff;
  }

  @media screen and (min-width: 600px) {
    .q-dialog__inner--minimized > div {
      max-width: 750px;
    }
  }

</style>
