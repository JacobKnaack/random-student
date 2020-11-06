'use strict';

const fs = require('fs');

/**
 * 
 * @param {String} filename 
 */
module.exports = (filename = 'students.config.json') => {
  return JSON.parse(fs.readFileSync(`${process.cwd()}/${filename}`)).pool;
}
