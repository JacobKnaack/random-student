'use strict';

/**
 * 
 * @param {Array} pool 
 */
module.exports = (pool) => {

  const students = [...pool];
  const results = [];
  let student1, student2;

  while (students.length) {

    student1 = students[Math.floor(Math.random() * Math.floor(students.length))];
    student2 = students[Math.floor(Math.random() * Math.floor(students.length))];

    if (student1 !== student2) {

      results.push(`${student1} | ${student2}`);
      students.splice(students.indexOf(student1), 1);
      students.splice(students.indexOf(student2), 1);

    } else if (student1 === student2 && students.length === 1) {

      let pairIndex = Math.floor(Math.random() * Math.floor(results.length));
      let pair = results[pairIndex];
      students.splice(students.indexOf(student1), 1);
      results[pairIndex] = pair += ` | ${student1}`;

    }
  }

  return results;
}
