// A database utility file.

const fs = require('fs');

const studentObj = (data) => data.slice(1).reduce(
  (a, b) => {
    const [first, , , field] = b.split(',');
    if (field === 'CS') {
      a.cs.push(first);
    } else if (field === 'SWE') a.swe.push(first);
    return a;
  },
  { cs: [], swe: [] },
);

const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
   fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(studentObj(data.split('\n')));
      }
    }); 
  });
});

module.exports = readDatabase;
