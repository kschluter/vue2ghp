import * as fs from 'fs'; // https://nodejs.org/dist/latest-v9.x/docs/api/fs.html
var rimraf = require('rimraf');
import { config } from './config';
import * as colors from 'colors';

export function wipe(args) {
  return new Promise((resolve,reject) => {
    let resolveMessage = ``;
    const rejectMessage = `An error occurred while attempting to remove existing docs folder`;
    const successMessage = `${config.codes.success} Old docs folder was removed`;
    const notFoundMessage = `${config.codes.info} Old docs folder was not found`;
    try{
      // remove old docs folder
      if (fs.existsSync("docs")) {
        rimraf('docs', () => {
          resolveMessage = successMessage;
          console.log(resolveMessage);
          args.messages.push(resolveMessage)
          resolve(args);
        });
      } else { // old docs folder not found
        resolveMessage = notFoundMessage;
        console.log(resolveMessage);
        args.messages.push(resolveMessage)
        resolve(args);
      }
    } catch(err) {
      args.errors.push(err);
      console.log(rejectMessage);
      reject(args);
    }
  });
}
