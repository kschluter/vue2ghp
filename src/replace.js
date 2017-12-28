import * as fs from 'fs'; // https://nodejs.org/dist/latest-v9.x/docs/api/fs.html
import { config } from './config';
import * as colors from 'colors';

export function replace(args) {
  return new Promise((resolve,reject) => {

    let resolveMessage = `${config.codes.success} Index file parsed and copied to docs folder`;
    const rejectMessage = `An error occurred while attempting to parse and copy index file to docs folder`;

    // read index fle
    fs.readFile("index.html", "utf-8", function(err, data) {
      if(err){
        console.log(rejectMessage);
        reject(args);
      } else {
        // replace paths in index file that contain "/dist/" with ""
        data = data.replace(/\/dist\//g, ".\/");
        // write file to docs folder
        fs.writeFile("docs/index.html", data, "utf-8", function(err) {
          if(err){
            console.log(rejectMessage);
            reject(args)
          }
          else {
            console.log(resolveMessage);
            resolve(args);
          }
        });
      }
    });

  });
}
