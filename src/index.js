import { config } from './config';
import { wipe } from './wipe';
import { build } from './build';
import { copy } from './copy';
import { replace } from './replace';
import { deploy } from './deploy';

// Main
function send2GHP() {
  let result = {
    messages: [],
    errors: []
  };

  return (
    wipe(result) // remove existing docs folder
      .then(data => {
        return data;
      })
      .then(build) // run npm build script
      .then(data => {
        return data;
      })
      .then(copy) // copy the dist folder to docs folder
      .then(data => {
        return data;
      })
      /*
      .then(replace) // update index.html paths and copy to dist folder
      .then(data => {
        return data;
      })
      */
      .then(deploy) // deploy to github pages
      .then(data => {
        return data;
      })
      .catch(data => {
        // catch errors
        return data;
      })
  );
}

// Run main
send2GHP().then(data => {
  if (data.errors.length > 0){
    console.log(`${config.codes.error } An error has occurred:`);
    console.log(data.errors);
  } else {
    console.log(`${config.codes.success} Done!`)
  }
});
