export interface Event {
  'Adresse Institution': string;
  'Ansprechpartner für Schulen': string;
  'Art der Veranstaltung': string;
  'Beschreibung': string;
  'Dauer der Veranstaltung in Minuten': string;
  'Geeignet für Unterrichtsfächer': string;
  'Kosten': string;
  'Mailadresse': string;
  'Name Institution': string;
  'Telefonnummer': string;
  'Titel der Veranstaltung': string;
  'Veranstaltungsort': string;
  'Zielgruppe': string;
  Logo: string;
  sdgs: string[]
}

export interface Project {
  'title': string;
  'content': string;
}

export const sdgs = [
  '1 Keine Armut',
  '2 Kein Hunger',
  '3 Gesundheit und Wohlergehen',
  '4 Hochwertige Bildung',
  '5 Geschlechtergerechtigkeit',
  '6 Sauberes Wasser und Sanitäreinrichtungen',
  '7 Bezahlbare und saubere Energie',
  '8 Menschenwürdige Arbeit und Wirtschaftswachstum',
  '9 Industrie, Innovation und Infrastruktur',
  '10 Weniger Ungleichheiten',
  '11 Nachhaltige Städte und Gemeinden',
  '12 Nachhaltige/r Konsum und Produktion',
  '13 Maßnahmen zum Klimaschutz',
  '14 Leben unter Wasser',
  '15 Leben an Land',
  '16 Frieden, Gerechtigkeit und starke Institutionen',
  '17 Partnerschaften zur Erreichung der Ziele',
];