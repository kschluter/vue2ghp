var exec = require("child_process").exec;
import * as path from 'path'; // https://nodejs.org/dist/latest-v9.x/docs/api/path.html
import * as fs from 'fs'; // https://nodejs.org/dist/latest-v9.x/docs/api/fs.html
import { config } from './config';

export function build(args) {
  return new Promise((resolve,reject) => {

    const resolveMessage = `${config.codes.success} Build complete`;
    const rejectMessage = ``;
    const beginBuildMessage = `${config.codes.info} Starting build...`;

    const isYarn = fs.existsSync(path.resolve("./" || process.cwd(), "yarn.lock"));
    const packageManagerName = isYarn ? "yarn" : "npm";

    console.log(beginBuildMessage);
    exec(`${packageManagerName} run build`, function() {
      console.log(resolveMessage);
      args.messages.push(resolveMessage)
      resolve(args);
    }).stderr.pipe(process.stderr);

  })
}
