'use strict';

/**
 * Node script for loading a repl preloaded with randomStudent Pool and randomization functions
 */

const repl = require('repl');

const { randomStudent, reset } = require('./lib/random-student.js');
const randomPairs = require('./lib/random-pairs.js');
const configurePool = require('./lib/configure-pool.js');

const pool = configurePool('students.config.json');
const used = [];

console.log(
  '***** RANDOM STUDENT functions loaded *****\n',
  'Find random students with: `rs()`\n',
  'Make random Pairs with; `rp() \n',
  'Reset students with: rst(0)'
);
const r = repl.start('> ');
r.context.rs = () => randomStudent(pool, used);
r.context.rp = () => randomPairs(pool);
r.context.rst = () => reset(used);
