import * as ghpages from 'gh-pages'; // https://www.npmjs.com/package/gh-pages
import { config } from './config';
const packageJson = require('../../../package.json');

export function deploy(args) {
  return new Promise((resolve,reject) => {

    const repository = packageJson["homepage"] || null;

    const resolveMessage = `${config.codes.success} Deployment to GitHub complete`;
    const rejectMessage = `Deployment to github failed`;
    const beginDeployMessage =`${config.codes.info} Starting deployment to GitHub...`;

    console.log(beginDeployMessage);
    ghpages.publish(
      "docs",
      {
        branch: "master",
        dest: "docs",
        repo: repository + ".git"
      },
      function(err) {
        if (err) {
          args.errors.push(err);
          reject(args)
        } else {
          console.log(resolveMessage);
          args.messages.push(resolveMessage);
          resolve(args)
        }
      }
    );
  });
}
