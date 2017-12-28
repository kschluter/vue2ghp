var colors = require('colors');

export const config = {
  // https://unicode-table.com/en/
  codes: {
    success: colors.green(`✔`),
    error: colors.red('☹'),
    info: colors.yellow('🛈')
  }
};
