'use strict';

/**
 * @param {Array} pool
 * @param {Array} used
 */
exports.randomStudent = (pool, used) => {
  let randomIndex = Math.floor(Math.random() * pool.length);

  while (used.includes(pool[randomIndex])) {
    if (used.length === pool.length) {
      return 'All Students have been randomly selected :)';
    }
    randomIndex = Math.floor(Math.random() * Math.floor(pool.length));
  };

  used.push(pool[randomIndex]);
  return pool[randomIndex];
};

exports.reset = (used) => {
  try {
    used.splice(0, used.length);
    console.log('Pool reset');
  } catch (e) {
    console.error('Reset pool error', e);
  }
}
