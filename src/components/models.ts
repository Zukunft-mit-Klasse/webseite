export type eventField = 'Adresse Institution' | 'Ansprechpartner für Schulen' | 'Art der Veranstaltung'
                  | 'Beschreibung' | 'Dauer der Veranstaltung in Minuten' | 'Geeignet für Unterrichtsfächer'
                  | 'Kosten' | 'Mailadresse' | 'Name Institution' | 'Telefonnummer' | 'Themenfeld 1' | 'Themenfeld 2'
                  | 'Titel der Veranstaltung' | 'Veranstaltungsort' | 'Zielgruppe';

export type Event = { [key in eventField]: string };
