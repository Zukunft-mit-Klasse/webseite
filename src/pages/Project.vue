<template>
  <q-page class="items-center justify-evenly">
    <article>
      <h2 class="text-h3 green">Das Ziel</h2>
      <p>
        Das Bildungsprojekt &#39;Zukunft mit Klasse&#39; will Schüler*innen für die Themen des Globalen Lernens in
        Form einer Challenge begeistern. Dabei sollen Themen wie bspw. Fairer Handel, globale Gesundheit
        und Klimawandel sowohl im Unterricht als auch aktiv von den teilnehmenden Klassen in einem Projekt
        behandelt werden. Außerdem ist es ein Ziel des Projekts die unterfränkischen Bildungsakteure im
        Bereich Globales Lernen besser mit Lehrkräften und Schüler*innen zu vernetzen.
      </p>

      <h2 class="text-h3 blue">Das Konzept</h2>
      <p>
        Für die erfolgreiche Teilnahme an der Challenge des Bildungsprojekts gibt es zwei Kriterien:
      </p>
      <p>
        <i class="li">1)</i> Schulklassen oder Kurse müssen eine Bildungseinheit von mindestens 45 Minuten von einem
        teilnehmenden, unterfränkischen Bildungsakteur zu einem Thema des Globalen Lernens
        wahrnehmen. Dabei spielt es keine Rolle, ob die Bildungseinheit digital, in Präsenz oder bspw.
        als Rundgang stattfindet.
      </p>
      <p>
        <i class="li">2)</i> Schüler*innen müssen ein Projekt zu einem Thema des Globalen Lernens an der eigenen
        Schule umsetzen. Hier ist der Kreativität keine Grenze gesetzt: Eine Zusammenarbeit mit
        einem Bildungsakteur ist hierbei sinnvoll.
        Alle Klassen und Kurse, die nachweisen können, beide Kriterien erfüllt zu haben, werden
        anschließend ausgezeichnet.
      </p>

      <h2 class="text-h3 red">Informationen zur Auszeichnung</h2>
      <p>
        Alle Schulklassen sowie alle Klassen / Kurse / Tutor- und Bezugsgruppen an unterfränkische Schulen
        sind herausgefordert, sich um die Auszeichnung &#39;Klasse / Kurs mit Zukunft&#39; zu bewerben und damit
        eine besondere Würdigung Ihres Engagements im Bereich Globalen Lernens zu erhalten. Die
        Auszeichnung wird nach Eingang und Prüfung durch Vertreter*innen der DAHW Würzburg, des
        Weltladen Aschaffenburgs und des Weltladens Würzburg vergeben.
      </p>

      <h2 class="text-h3 green">Bewerbungszeitraum im Schuljahr 2020/21:</h2>
      <p>
        Die Bewerbung kann bis <strong>18. Juni 2021</strong> (Poststempel) eingereicht werden.
      </p>
      <p>
        Senden Sie das ausgefüllte Formular als Anhang per Mail an dabei@zukunft-mit-klasse.de,
        Betreff &#39;Bewerbung – Klasse mit Zukunft&#39;,
      </p>
      <p>
        oder im Original per Post an:<br />
        <br />
        <b>Weltladen Würzburg</b><br />
        „Zukunft mit Klasse“ / Lea Pfeifer<br />
        Plattnerstraße 14<br />
        97070 Würzburg<br />
      </p>
      <p>
        Nach Eingang des Bewerbungsformulars melden wir uns baldmöglichst mit einer Bestätigung bei
        Ihnen zurück.
      </p>

      <h2 class="text-h3 blue">Projekt-Zeitraum</h2>
      <p>
        Es können alle Klassenaktivitäten des laufenden Schuljahres berücksichtigt werden, also vom 1.
        Schultag nach den Sommerferien bis einschließlich der der letzten Schulwochen des Schuljahres, also
        auch nach der Einreichung des Bewerbungsformulars. Wichtig ist, dass die Aktivitäten bis zum Ende
        des Schuljahres 2020/21 abgeschlossen sind. Für Projekte, die nach dem 18. Juni durchgeführt
        werden, reichen Sie bitte mit Ihrer Bewerbung eine aussagekräftige Projektskizze ein!
      </p>
    </article>







  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageProject',
});
</script>

<style scoped>
  .green{
    color: #00b050;
  }

  .blue {
    color: #0d77c3;
  }

  .red {
    color: #ff4848;
  }


  h2 {
    margin-bottom: 1rem;
  }

  .li {
    font-size:18px;
    font-weight: 500;
  }
</style>
