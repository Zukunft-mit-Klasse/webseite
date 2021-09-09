<template>
  <q-page class="items-center justify-evenly">
    <div class="row q-mt-lg q-mb-lg q-col-gutter-lg">
      <div class="col-lg-4 col-md-6 col-sm-12"
           v-masonry-tile
           v-for="(project, index) in projects"
           v-bind:key="project['title']"
      >
        <project-card
          :project="project"
          :index="index"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import projects from 'assets/projects.json'
import ProjectCard from 'components/ProjectCard.vue';

export default defineComponent({
  name: 'PageProjectIdeas',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects
    }
  }
});
</script>
