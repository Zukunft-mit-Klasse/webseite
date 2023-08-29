const csvFilePath = 'Angebote_Bildungsakteure.csv';

import csv from 'csvtojson';
import fs from 'fs';

void csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {

    jsonObj = jsonObj.map((row) => {
      row = {
        ...row,
        sdgs: [row['SDG 1'], row['SDG 2'], row['SDG 3']]
          .filter(e => !!e)
      };
      delete row['SDG 1'];
      delete row['SDG 2'];
      delete row['SDG 3'];
      return row;
    })

    fs.writeFile('../src/assets/events/events.json', JSON.stringify(jsonObj), 'utf8', function (err) {
      if (err) {
        console.log('An error occured while writing JSON Object to File.');
        return console.log(err);
      }

      console.log('JSON file has been saved.');
    });
  });
