import * as fs from "fs"; // https://nodejs.org/dist/latest-v9.x/docs/api/fs.html
var rimraf = require("rimraf");
import { config } from './config';

export function wipe(args) {
  return new Promise((resolve,reject) => {
    let resolveMessage = ``;
    const rejectMessage = `An error occurred while attempting to remove existing docs folder`;
    const successMessage = `${config.codes.checkmark} Old docs folder successfully removed`;
    const notFoundMessage = `Old docs folder was not found`;
    try{
      // remove old docs folder
      if (fs.existsSync("docs")) {
        rimraf('docs', () => {
          resolveMessage = successMessage;
        });
      } else { // old docs folder not found
        resolveMessage = notFoundMessage;
      }
      args.messages.push(resolveMessage)
      console.log(resolveMessage);
      resolve(args);

    } catch(err) {
      args.errors.push(err);
      console.log(rejectMessage);
      reject(args);
    }
  });
}
