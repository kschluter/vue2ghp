
import { ncp } from "ncp"; // https://www.npmjs.com/package/ncp
import { config } from './config';

export function copy(args) {
  return new Promise((resolve,reject) => {
      const resolveMessage = `${config.codes.checkmark} Copied dist folder to docs folder`;
      const rejectMessage = `An error occurred while attempting to copy dist folder to docs folder`;
      ncp.limit = 16;
      ncp("dist", "docs", function(err) {
        if(err){
          console.log(rejectMessage);
          args.errors.push(err)
          reject(args);
        } else {
          console.log(resolveMessage);
          args.messages.push(resolveMessage)
          resolve(args);
        }
      });
  });
}
