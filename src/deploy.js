import * as ghpages from "gh-pages"; // https://www.npmjs.com/package/gh-pages
import { config } from './config';
const packageJson = require("../../../package.json");

export function deploy(args) {
  return new Promise((resolve,reject) => {

    const resolveMessage = `${config.codes.checkmark} Build pushed to github pages`;
    const rejectMessage = `Build push to github failed`;
    const repository = packageJson["homepage"] || null;

    ghpages.publish(
      "docs",
      {
        branch: "master",
        dest: "docs",
        repo: repository + ".git"
      },
      function(err) {
        if (err) {
          args.errors.push(rejectMessage);
          reject(args)
        } else {
          args.messages.push(resolveMessage);
          resolve(args)
        }
      }
    );
  });
}
